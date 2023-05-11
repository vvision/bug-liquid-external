import { useState, useEffect } from "react";

enum StatusType {
    "idle" = "idle",
    "loading" = "loading",
    "ready" = "ready",
    "error" = "error"
}

enum Status {
    idle = 0,
    loading = 1,
    error = 2,
    ready = 4
}

/**
 * Check if a value has a flag value set, based on bit masked values.
 * @param actual Mask value to check
 * @param status Flag value to check if assigned to the value
 * @returns A true boolean when the value has the flag set.
 */
const hasStatusFlag = (actual: number, status: Status): boolean => (actual & status) === status;

// inspiration: https://usehooks.com/useScript/
const useScripts = (scriptToLoad: string[]) => {
    const [sources, setSources] = useState<string[]>(scriptToLoad);
    const [statuses, setStatuses] = useState<number[]>(new Array(sources.length).fill(0));
    const [completed, setCompleted] = useState<boolean>(false)
    const [hasError, setHasError] = useState<boolean>(false)
    const [errors, setErrors] = useState<string[]>([])

    useEffect(
        () => {
            if (!sources || sources.length < 1) {
                setStatuses([Status.idle]);
                return;
            }

            const newStatuses = new Array(sources.length).fill(Status.loading);
            const scriptReferences: { script: HTMLScriptElement, handler: (e: Event) => void }[] = [];

            for (let index = 0; index < sources.length; index++) {
                const src = sources[index];
                let script = <HTMLScriptElement>document.querySelector(`script[src="${src}"]`);
                if (!script) {
                    script = document.createElement("script");
                    script.src = src;
                    script.type = "module";
                    script.async = true;
                    script.setAttribute("data-status", "loading");
                    document.body.appendChild(script);
                    const setAttributeFromEvent = (event: Event) => {
                        script.setAttribute(
                            "data-status",
                            event.type === "load" ? "ready" : "error"
                        );
                        setStatuses(prev => {
                            const next = [...prev];
                            next[index] |= event.type === "load" ? Status.ready : Status.error;
                            return next;
                        });
                    };
                    script.addEventListener("load", setAttributeFromEvent);
                    script.addEventListener("error", setAttributeFromEvent);
                } else {
                    let status = script.getAttribute("data-status") as StatusType;
                    if (!status) {
                        status = StatusType.ready;
                        script.setAttribute("data-status", status);
                    }
                    newStatuses[index] |= Status[status];
                }
                const setStateFromEvent = (event: Event) => {
                    newStatuses[index] |= event.type === "load" ? Status.ready : Status.error;
                    setStatuses(prev => {
                        const next = [...prev];
                        next[index] |= event.type === "load" ? Status.ready : Status.error;
                        return next;
                    });
                };
                script.addEventListener("load", setStateFromEvent);
                script.addEventListener("error", setStateFromEvent);

                scriptReferences.push({ script, handler: setStateFromEvent });
            }
            setStatuses(newStatuses);

            return () => {
                if (scriptReferences && scriptReferences.length) {
                    scriptReferences.forEach(ref => {
                        ref.script.removeEventListener("load", ref.handler);
                        ref.script.removeEventListener("error", ref.handler);
                    })
                }
            };
        }, [sources]);

    useEffect(() => {
        const completed = statuses
            .every(s => hasStatusFlag(s, Status.error) || hasStatusFlag(s, Status.ready));
        const hasError = statuses
            .some(s => hasStatusFlag(s, Status.error));
        const errors = statuses
            .map((s, i) => hasStatusFlag(s, Status.error) ? i : undefined)
            .filter(i => i !== undefined)
            .map((i) => sources[i as number]);

        setCompleted(completed);
        setHasError(hasError);
        setErrors(errors);
    }, [statuses])

    return {
        completed,
        hasError,
        errors,
        setSources
    }
}

export default useScripts;
