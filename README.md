# Expo Portal Polyfills

Workarounds and polyfills to make `Buffer` and `crypto` work propertly with
[@kravc/identity](https://github.com/alexkravets/identity) in Expo.

## Install

Install npm package:

```sh
npm install @kravc/expo-portal-polyfills
```

Apply workarounds to `node_modules`:

```sh
npx polyfills
```

Import globals in `App.js`:

```js
import '@kravc/expo-portal-polyfills'
```
