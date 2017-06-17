<template>
  <div id="app">
      <nav class="nav">
          <div class="nav-left">
              <a class="nav-item home-link">&lt;Jeremy/&gt;</a>
          </div>

          <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
          <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
          <span class="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
          </span>

          <!-- This "nav-menu" is hidden on mobile -->
          <!-- Add the modifier "is-active" to display it on mobile -->
          <div class="nav-right nav-menu">
              <a class="nav-item">
                  &lt;Projects/&gt;
              </a>
              <a class="nav-item">
                  &lt;Contact/&gt;
              </a>

          </div>
      </nav>


    <router-view></router-view>

    <footer class="footer">
        <div class="container">
            <div class="content has-text-centered">
                <a class="icon" href="https://github.com/jharmon141">
                    <i class="fa fa-github"></i>
                </a>
                <a class="icon" href="https://www.linkedin.com/in/jeremy-harmon-b5553212a/">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a class="icon" href="https://twitter.com/jspacemanjr">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
import store from './store/index.js'

export default {
  name: 'app'
}
</script>

<style>
html {
    position: relative;
    min-height: 100%;
}
body {
    margin: 0 0 75px; /* bottom = footer height */
}
footer {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 75px;
    width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #929191;
  letter-spacing: 2px;
  height: 100%;
}

.fa {
    color: #929191;
    font-size: 15px !important;
}

.nav {
    padding: 10px;
    position: relative;
    z-index: -1;
    height: 100px !important;
}

.nav-right {
    margin-right: 50px;
}

.nav-left {
    margin-left: 50px;
}

.home-link {
    font-size: 20px !important;
}

.footer {
    padding: 20px 0px !important;
    background-color: white !important;
}

</style>
<style src="bulma/css/bulma.css"></style>
<style src="animate.css/animate.min.css"></style>
