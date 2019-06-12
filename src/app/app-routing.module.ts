import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridListComponent } from './grid-list/grid-list.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  {path: 'page-2', component: GridListComponent},
  {path: 'page-3', component: ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GridListComponent,ProfilePageComponent]