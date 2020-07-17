import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
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

		component: () => import('../views/Dashboard.vue')
	}
];

const router = new VueRouter({
	routes
});

export default router;