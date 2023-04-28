import { createRouter, createWebHistory } from 'vue-router'

import MapView from '../views/MapView.vue'
import AnalyticsView from '../views/AnalyticsView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: MapView
		},
		{
			path: '/analytics',
			component: AnalyticsView
		},
		{
			path: '/:pathMatch(.*)*',
			redirect: '/'
		}
	]
})

export default router
