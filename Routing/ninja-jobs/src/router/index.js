import { createRouter, createWebHistory } from 'vue-router'
// Import the views
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobDetails from '../views/jobs/JobDetailsView.vue'
import NotFound from '../views/NotFound.vue'

// Define the list of routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },

  // Redirecting old endpoint to new endpoint
  // Here we are redirecting request made to '/all-jobs' to '/jobs'
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },

  // Catch non-existing routes/endpoints i.e. 404
  {
    path: '/:vatchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
