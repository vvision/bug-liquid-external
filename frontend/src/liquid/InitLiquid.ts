import "@emdgroup-liquid/liquid/dist/css/liquid.global.css";
import { setAssetPath } from "@emdgroup-liquid/liquid/dist/components";

setAssetPath(`${window.location.origin}/liquid/assets`);

// @ts-ignore
window.__LD_ASSET_PATH__ = `${window.location.origin}/liquid`