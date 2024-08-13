import { Routes } from '@angular/router';
import { EmptyRouteComponent } from "./core/empty-route.component";

export const routes: Routes = [
  { path: '', redirectTo: '/form-designer-vue-ant', pathMatch: 'full' },
  { path: '**', component: EmptyRouteComponent }
];
