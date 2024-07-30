import { Routes } from '@angular/router';
import { EmptyRouteComponent } from "./core/empty-route.component";

export const routes: Routes = [
  { path: '**', component: EmptyRouteComponent }
];
