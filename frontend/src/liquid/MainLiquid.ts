/**
 * Liquid Import: to have better control over lazy loading part of the app.
 * As adviced by borisdiakur from @emdgroup-liquid/liquid:
 * > usually you can have control over how custom elements are defined in your app. You could do something like this:
 * > ```typescript
 * > import { LdButton as LdButtonCE } from '@emdgroup-liquid/liquid/dist/components/ld-button'
 * > import { LdButton } from '@emdgroup-liquid/liquid/dist/react'
 * > // @ts-ignore
 * > customElements.get('ld-button') || customElements.define('ld-button', LdButtonCE)
 * ```
 * Read: https://github.com/emdgroup-liquid/liquid/issues/495#issuecomment-1425542285
 */
import { LdButton as LdButtonCE } from '@emdgroup-liquid/liquid/dist/components/ld-button';
import { LdTypo as LdTypoCE } from "@emdgroup-liquid/liquid/dist/components/ld-typo";
 
 import { defineCustomElements } from '@emdgroup-liquid/liquid/dist/loader';
 defineCustomElements();
 
customElements.get('ld-button') || customElements.define('ld-button', LdButtonCE);
customElements.get('ld-typo') || customElements.define('ld-typo', LdTypoCE);
 