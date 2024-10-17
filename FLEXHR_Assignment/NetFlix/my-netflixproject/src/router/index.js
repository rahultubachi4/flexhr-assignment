import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NetFlixMainView from '../views/NetFlixMain.vue'



// importing router page
import HomePageView from '../components/HomePage.vue'
import TvShowsPageView from '../components/TvShowsPage.vue'
import MoviesPageView from '../components/MoviesPage.vue'
import BrowsePageView from '../components/BrowsePage.vue'
import KannadaMoviesPageView from '../components/KannadaMoviesPage.vue'
import EnglishMoviesPageView from '../components/EnglishMoviesPage.vue'
import HindiMoviesPageView from '../components/HindiMoviesPage.vue'
import TemilMoviesPageView from '../components/TemilMoviesPage.vue'
import TelguMoviesPageView from '../components/TelguMoviesPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/netflix',
    name: 'netflix',
    component: NetFlixMainView
  },
  {
    path: '/abouthome',
    name: 'abouthome',
    component: HomePageView
  },
  {
    path: '/tvshows',
    name: 'tvshows',
    component: TvShowsPageView
  },
  {
    path: '/movies',
    name: 'movies',
    component: MoviesPageView
  },
  {
    path: '/browse&languages',
    name: 'browse&languages',
    component: BrowsePageView
  },
  {
    path: '/kannadamovies',
    name: 'kannadamovies',
    component: KannadaMoviesPageView
  },
  {
    path: '/Englishmovies',
    name: 'Englishmovies',
    component: EnglishMoviesPageView
  },
  {
    path: '/Hindimovies',
    name: 'Hindimovies',
    component: HindiMoviesPageView
  },
  {
    path: '/Temilmovies',
    name: 'Temilmovies',
    component: TemilMoviesPageView
  },
  {
    path: '/Telgumovies',
    name: 'Telgumovies',
    component: TelguMoviesPageView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
