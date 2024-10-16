import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginMainView from '../views/LoginMain.vue'
import JObDetailsDataView from '../views/JobDetailsData.vue'
// import AddJobDataView from '../components/AddJobData.vue'
import FreeJobDataView from '../components/FreeJobData.vue'




import RegistrationForm from '../components/RegistrationForm.vue'
import ForgotPasswordData from '../components/ForgotPasswordData.vue'
import JobAsideData from '../components/JobAsideData.vue'
import DataDetails from '../components/DataDetails.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginMainView
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: RegistrationForm
  },
  {
    path: '/Forgot',
    name: 'Forgot',
    component: ForgotPasswordData
  },
  {
    path: '/job',
    name: 'job',
    component: JObDetailsDataView
  },
  // {
  //   path: '/newjob',
  //   name: 'newjob',
  //   component:AddJobDataView

  // },
  {
    path: '/JobAsideData',
    name: 'JobAsideData',
    component:JobAsideData

  },
  {
    path: '/FreeJobData',
    name: 'FreeJobData',
    component:FreeJobDataView

  },
  {
    path: '/job/:jobTitle',
    name: 'DataDetails',
    component: DataDetails,
    props: true
  }
  
]

const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
    })

export default router
