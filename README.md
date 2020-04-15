# vue-basic

> このドキュメントはVueとVuex、firebaseのパッケージしたものです。
> This document is a package of Vue, Vuex and firebase.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## firebase Setup

```js:src/main.js
// ........

// Firebaseで新しいプロジェクトを作成する場合は、以下を差し替えます。
// If you create a new project with Firebase, replace the following.
Vue.config.productionTip = false
let firebaseConfig = {
  apiKey: "Your_Code",
  authDomain: "Your_Code",
  databaseURL: "Your_Code",
  projectId: "Your_Code",
  storageBucket: "Your_Code",
  messagingSenderId: "Your_Code",
  appId: "Your_Code",
  measurementId: "Your_Code"
};
firebase.initializeApp(firebaseConfig);
// ここまで差し替え
// Replace to here.

// ........
```
