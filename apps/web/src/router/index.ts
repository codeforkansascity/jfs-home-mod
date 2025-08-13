import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import ApplicantForm from '../views/application/ApplicantForm.vue';
import ApplicationResult from "../views/application/ApplicationResult.vue";

export const RouteNames = {
  Application: {
    ApplicationForm: 'ApplicantForm',
    ApplicationResult: 'ApplicationResult',
  }
} as const;

const routes: Array<RouteRecordRaw> = [
  { path: '/result', name: RouteNames.Application.ApplicationResult, component: ApplicationResult },
  { path: '/', name: RouteNames.Application.ApplicationForm, component: ApplicantForm },
  
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;