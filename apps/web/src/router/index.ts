import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import ApplicantForm from '../views/application/ApplicantForm.vue';

export const RouteNames = {
  Application: {
    ApplicationForm: 'ApplicantForm'
  }
} as const;

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: ApplicantForm }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;