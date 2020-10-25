# @vue/cli

## Log

### Creation

```sh
$ node_modules/.bin/vue --version
@vue/cli 4.5.8


$ node_modules/.bin/vue create .
Vue CLI v4.5.8
? Generate project in current directory? Yes

Vue CLI v4.5.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, TS, PWA, Router, Vuex, Linter
, Unit, E2E
? Choose a version of Vue.js that you want to start the project with 3.x (Preview)
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save, Lint and fix on commit
? Pick a unit testing solution: Jest
? Pick an E2E testing solution: Cypress
? Where do you prefer placing config for Babel, ESLint, etc.? In package.json
? Save this as a preset for future projects? No
```

### Upgradation

```sh
$ npx npm-check-updates --upgrade
 @types/jest                       24.0.19  →  26.0.15
 @typescript-eslint/eslint-plugin   2.33.0  →    4.5.0
 @typescript-eslint/parser          2.33.0  →    4.5.0
 @vue/cli-plugin-babel               4.5.0  →    4.5.8
 @vue/cli-plugin-e2e-cypress         4.5.0  →    4.5.8
 @vue/cli-plugin-eslint              4.5.0  →    4.5.8
 @vue/cli-plugin-pwa                 4.5.0  →    4.5.8
 @vue/cli-plugin-router              4.5.0  →    4.5.8
 @vue/cli-plugin-typescript          4.5.0  →    4.5.8
 @vue/cli-plugin-unit-jest           4.5.0  →    4.5.8
 @vue/cli-plugin-vuex                4.5.0  →    4.5.8
 @vue/cli-service                    4.5.0  →    4.5.8
 @vue/compiler-sfc                   3.0.0  →    3.0.2
 @vue/eslint-config-typescript       5.0.2  →    7.0.0
 eslint                              6.7.2  →   7.12.0
 eslint-plugin-prettier              3.1.3  →    3.1.4
 eslint-plugin-vue                 7.0.0-0  →    7.1.0
 lint-staged                         9.5.0  →   10.4.2
 prettier                           1.19.1  →    2.1.2
 typescript                          3.9.3  →    4.0.3

Run npm install to install new versions.


$ npx npm-check-updates --interactive --target newest --upgrade
✔ Do you want to upgrade: vue 3.0.0 → 3.0.2? … yes
✔ Do you want to upgrade: vue-router 4.0.0-0 → 4.0.0-rc.1? … yes
✔ Do you want to upgrade: vuex 4.0.0-0 → 4.0.0-beta.4? … yes
✔ Do you want to upgrade: @typescript-eslint/eslint-plugin 4.5.0 → 4.5.1-alpha.1? … no
✔ Do you want to upgrade: @typescript-eslint/parser 4.5.0 → 4.5.1-alpha.1? … no
✔ Do you want to upgrade: @vue/test-utils 2.0.0-0 → 2.0.0-beta.7? … yes
✔ Do you want to upgrade: typescript 4.0.3 → 4.1.0-dev.20201025? … no
✔ Do you want to upgrade: vue-jest 5.0.0-0 → 5.0.0-alpha.5? … yes

 vue                3.0.0  →         3.0.2
 vue-router       4.0.0-0  →    4.0.0-rc.1
 vuex             4.0.0-0  →  4.0.0-beta.4
 @vue/test-utils  2.0.0-0  →  2.0.0-beta.7
 vue-jest  5.0.0-0  →  5.0.0-alpha.5

Run npm install to install new versions.
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
