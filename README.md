bug-liquid-external
=====================

This demo is used to demonstrate a way to exclude Liquid from web component bundles, which was working until Liquid 4.5.1 included.

It provides a second component using Liquid 4.6.0, which fails to exclude Liquid dependency from the bundle.

One must take into account that our main goal is to exclude Liquid from the resulting bundles of our web component, to let the frontend provide Liquid components.

# Context

There are two component declaring Liquid as an external dependency in this demo:
* `webcomponent-4.5.1` is a webcomponent using Liquid 4.5.1.
* `webcomponent-4.6.0` is a webcomponent using Liquid 4.6.0.

They are both built with vite and uses preact and preact-custom-element.

Backend is responsible for serving both component JS bundles.

Frontend is a basic react app built with vite.
It loads the two webcomponents and tries to display them.

The `webcomponent-4.5.1` is registered as `demo-webcomponent-4.5.1` and displayed correctly. It does not contain any liquid related definition.

The `webcomponent-4.6.0` is registered as `demo-webcomponent-4.6.0` and cannot be displayed with error: `Uncaught TypeError: Failed to resolve module specifier "@emdgroup-liquid/liquid/dist/react". Relative references must start with either "/", "./", or "../".`. It does contain a single line of liquid related definition at the start of the bundle file.

# Declaring Liquid as an external dependency

Declaring Liquid as an external dependency was working fine with last Liquid version 4.5.1. It stops working with Liquid version 4.6.0.

## In webcomponent-4.5.1

Excluding Liquid from the component bundle is as simple as adding the following configuration in the `vite.config.ts` file under `build`:
```typescript
rollupOptions: {
    external: ['liquid'],
}
```

## In webcomponent-4.6.0

After updating Liquid to v4.6.0, excluding Liquid from the component bundle does not work anymore with the above configuration and results in lots of liquid related files generated in the dist directory.

It gets better with the following configurations. Either:
```typescript
rollupOptions: {
    external: ['@emdgroup-liquid/liquid', '@emdgroup-liquid/liquid/dist/react'],
}
```

Or:
```typescript
rollupOptions: {
    No success either with this configuration:
    external: (id) => {
      return id.includes('@emdgroup-liquid/liquid');
    },
}
```

But there is still a liquid declaration at the start of the file:
```javascript
import { LdTypo as ae, LdButton as fe } from "@emdgroup-liquid/liquid/dist/react";
```

It seems that more configuration is needed in order to successfully exclude Liquid from the resulting bundle.

# Run the demo

Building the two components is not mandatory as their bundle are already provided.

## Build component with liquid 4.5.1 (Optional)

* `cd webcomponent-4.5.1`
* `npm install`
* `npm run build`
* Component bundle is available in `dist/4.5.1`.

## Build component with liquid 4.6.0 (Optional)

* `cd webcomponent-4.6.0`
* `npm install`
* `npm run build`
* Component bundle is available in `dist/4.6.0`.

## Backend

Backend will serve the `dist` directory under path `/components`.

* `cd backend`
* `npm install`
* `npm start`
* Backend will run on port `3002`.

## Frontend

* `cd frontend`
* `npm install`
* `npm run dev -- --force`
* Frontend will run on port `3000`.