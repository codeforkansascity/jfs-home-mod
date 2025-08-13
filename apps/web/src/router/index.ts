import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import ApplicantForm from '../views/application/ApplicantForm.vue';
import ApplicationResult from "../views/application/ApplicationResult.vue";
import OrganizationList from "../views/admin/OrganizationList.vue";
import EditOrganization from "../views/admin/EditOrganization.vue";

export const RouteNames = {
  Application: {
    ApplicationForm: 'ApplicantForm',
    ApplicationResult: 'ApplicationResult',
  },
  Admin: {
    OrganizationList: 'OrganizationList',
    EditOrganization: 'EditOrganization',
  }
} as const;

const routes: Array<RouteRecordRaw> = [
  { path: '/organizations/1/edit', name: RouteNames.Admin.EditOrganization, component: EditOrganization },
  { path: '/organizations', name: RouteNames.Admin.OrganizationList, component: OrganizationList },
  { path: '/result', name: RouteNames.Application.ApplicationResult, component: ApplicationResult },
  { path: '/', name: RouteNames.Application.ApplicationForm, component: ApplicantForm },
  
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;