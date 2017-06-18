import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home 
        },
        {
            path: '/projects',
            name: 'Projects',
            component: Projects 
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact 
        },
    ]
})
