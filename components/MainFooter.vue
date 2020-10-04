<template>
  <div class="mt-6">
    <footer class="footer main mt-6">
      <div class="columns">
        <div class="column is-half has-text-left ">
          <a> About </a>
          <a> Contact Us </a>
          <a> Privacy & Terms </a>
          <a> Report Bugs </a>
        </div>
        <div class="column is-half has-text-right">
          <p>
            Copyright &copy; 2020 CloudHired, LLC. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">

.footer.main {
  border-top: $main-border-style;
}

.footer.main a {
  color: rgba($color: #000000, $alpha: .6);
  border-bottom: $main-border-style;
  margin: 0 0.8rem 0 0.2rem;
}

</style>