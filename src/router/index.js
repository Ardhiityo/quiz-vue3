import {
    createRouter,
    createWebHistory
} from 'vue-router'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'quizes',
            component: () => import('../views/Quizes.vue')
        },
        {
            path: '/quizes/:id',
            name: 'quiz',
            component: () => import('../views/Quiz.vue')
        },
    ]
})

export default router;