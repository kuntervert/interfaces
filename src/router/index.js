import Vue from 'vue';
import VueRouter from 'vue-router';
import Showcase from "@/views/Showcase.vue"
import store from "../store/index.js";
import Projectview from "@/components/Projectview.vue"
import Home from "@/components/Home.vue"
import MyPosts from "@/components/MyPosts.vue"
import Postview from "@/components/Postview.vue"

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
			path: '/dashboard/:id',
			name: 'Dashboard',
			children: [{
					path: 'Home',
					component: Home
				}, {
					path: 'Inbox',
					component: Home
				}, {
					path: 'Settings',
					component: Home
				},
				{
					path: 'My Posts',
					component: MyPosts

				},
				{
					path: 'project/:id',
					component: Projectview
				},
				{
					path: 'post/:id',
					component: Postview
				},
			],
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