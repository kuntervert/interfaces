import Vue from 'vue';
import VueRouter from 'vue-router';
import Showcase from "@/views/Showcase.vue"
import store from "../store/index.js";

Vue.use(VueRouter);
const router = new VueRouter({
	mode: "history",
	routes: [{
			path: '/',
			name: 'showcase',
			component: Showcase
		},
		{
			path: '*',
			redirect: '/'
		},
		{
			path: '/register',
			name: 'Registration',

			component: () => import('../components/Registration.vue')
		},
		{
			path: '/terms',
			name: 'Terms',

			component: () => import('../components/Terms.vue')
		},
		{
			path: '/dashboard',
			name: 'Dashboard',
			meta: {
				requiresAuth: true
			},

			component: () => import('../views/Dashboard.vue')
		},
	]
})




export default router;
router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (store.state.user) {
			next()
			return
		}
		next('/login')
	} else {
		next()
	}
})