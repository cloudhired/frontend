<template>
    <section class="container" id="navbar-container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="../static/cloudhired_logo.png" width="112" height="28">
            </a>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item">Home</a>
              <a class="navbar-item">Read</a>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                  <a class="button is-white small-padding">Sign up</a>
                  <a href="https://cloudhired.com/login" class="button is-white small-padding">Log in</a>
              </div>
            </div>
        </div>
      </nav>
    </section>
</template>