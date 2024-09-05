<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html {
  overflow-y: auto !important;
}
body {
  background-color: var(--main-color);
}
:root {
  --main-color: black;
  --secound-color: #e6ad58;
  --third-color: #222324;
  --fourth-color: white;
  --grey-color: #282829;
  --light-grey: #ccc;
  --transition-1: 0.25s ease;
  --transition-2: 0.5s ease-in-out;
}
</style>
