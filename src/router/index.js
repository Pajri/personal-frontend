import Vue from 'vue'
import Router from 'vue-router'
import {getAccessToken} from '@/module/auth_util'

/*pages*/
import InnerPageContainer from './../pages/InnerPages/InnerPageContainer.vue'
import IdeasListingPage from './../pages/InnerPages/IdeasListingPage.vue'
import PostEditorPage from './../pages/InnerPages/PostEditorPage.vue'
import ProfilePage from './../pages/InnerPages/ProfilePage.vue'

import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import EmailConfirmationPage from '../pages/EmailConfirmationPage.vue'
import ContactUsPage from '../pages/ContactUsPage.vue'

import ResetPasswordPage from '../pages/ResetPasswordPage.vue'
import ChangePasswordPage from '../pages/ChangePasswordPage.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: InnerPageContainer,
      children: [
        {
          path: '',
          component: IdeasListingPage
        },
        {
          path: 'post/add',
          component: PostEditorPage
        },
        {
          path: 'profile',
          component: ProfilePage
        }
      ],
      meta: {
        requiresAuth: true,
      }
    },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/email_confirmation', component: EmailConfirmationPage },
    { path: '/reset_password', component: ResetPasswordPage },
    { path: '/change_password', component: ChangePasswordPage },
    { path: '/contact_us', component: ContactUsPage }
  ],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (getAccessToken() == null) {
      next('/login');
    }else{
      next();
    }
  } else {
    next();
  }
});

export default router;