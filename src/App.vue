<template>

  <div id="app">

      <nav class="nav">
          <div class="nav-left">
              <router-link  v-on:click.native="hideMenu" :key="$route.path" to="/"><a :class="{ 'active': home } "class="nav-item home is-tab">&lt;Jeremy/&gt;</a></router-link>
          </div>

          <span @click="toggleMenu" class="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
          </span>

          <div class="nav-right nav-menu" :class="menuActive">
              <router-link v-on:click.native="hideMenu" :key="$route.path" to="/projects"><a  :class="{ 'active': projects } "class="nav-item projects is-tab">&lt;Projects/&gt;</a></router-link>
              <router-link v-on:click.native="hideMenu" :key="$route.path" to="/contact"><a :class="{ 'active': contact } "class="nav-item contact is-tab">&lt;Contact/&gt;</a></router-link>

          </div>
      </nav>

    <main>
    <router-view></router-view>
    </main>

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
    name: 'app',

    data: () => ({
        menuActive: '',
    }),

    computed: {
        home() {
            return this.$route.path === '/'
        },

        projects() {
            return this.$route.path === '/projects'
        },

        contact() {
            return this.$route.path === '/contact'
        }
    },

    methods: {

        toggleMenu() {
            if (this.menuActive === '') {
                this.menuActive = 'is-active'
            } else {
                this.menuActive = ''
            }
        },

        hideMenu() {
            this.menuActive = ''
        }
    }

}

</script>

<style>

html {
    position: relative;
    min-height: 100%;
}

body {
    margin: 0 0 95px; /* bottom = footer height */
}

main {
    margin-top: 10%;
}

footer {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 95px;
    width: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #929191;
  letter-spacing: 2px;
  height: 100%;
}

.fa {
    color: #929191;
    font-size: 18px !important;
}

.nav {
    padding: 10px;
    position: fixed !important;
    width: 100%;
    top: 0;
    z-index: -1;
    height: 100px !important;
}

a.nav-item.is-tab {
    margin-top: 10px;
}
a.nav-item.is-tab.home {
    margin-left: 20px !important;
}

.nav-item a.is-tab.home:hover, a.nav-item.is-tab.home:hover {
    border-bottom-color: white !important;
    color: tomato;
}
    
a.nav-item.is-tab.active.home {
    color: tomato;
}

.nav-item a.is-tab.projects:hover, a.nav-item.is-tab.projects:hover {
    border-bottom-color: white !important;
    color: cornflowerblue !important;
}
    
a.nav-item.is-tab.active.projects {
    border-bottom-color: white !important;
    color: cornflowerblue !important;
}

.nav-item a.is-tab.contact:hover, a.nav-item.is-tab.contact:hover {
    color: limegreen !important;
    border-bottom-color: white !important;
}
    
a.nav-item.is-tab.active.contact {
    color: limegreen !important;
    border-bottom-color: white !important;
}

.nav-right {
    margin-right: 100px;
}

.nav-toggle {
    margin-top: 15px;
}

.nav-toggle:hover {
    background-color: white !important;
}

@media screen and (max-width: 768px){
    .nav-menu {
        background-color: slategrey;
        width: 100%;
    }
    
}

@media screen and (max-width: 768px) {
    .nav-item {
        justify-content: center !important;
    }
}

i:hover {
    color: #ffff01 !important;
}

.footer {
    padding: 20px 0px !important;
    background-color: white !important;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s;
}

.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for <2.1.8 */ {
  opacity: 0;
  min-height: 100%;
}
</style>
<style src="bulma/css/bulma.css"></style>
<style src="animate.css/animate.min.css"></style>
