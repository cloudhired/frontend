<template>
  <div class="main-layout">
    <Navbar/>
    <Nuxt keep-alive />
    <MainFooter/>
  </div>
</template>


<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: $background-color;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button.is-white {
  font-size: smaller;
}

.button.small-padding {
  padding-right: 0.4em;
  padding-left: 0.4em;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.main-layout {
  max-width: $main-max-width;
  margin: 0 auto;
}

.navbar {
  border-bottom: $main-border-style;
}

.navbar-item a {
  border-bottom: solid rgba($color: $primary, $alpha: .5) 1px;
  color:rgba($color: #000000, $alpha: 1.0)
}

.navbar-item a:hover {
  color: $primary;
}

.navbar-item.end {
  padding-right: 0;
}

.navbar-item.start {
  padding-left: 0;
}

.section-main {
  padding: 0;
  margin: 0 auto;
}
</style>
