import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { HomePageComponent,headerComponents} from './components/home-page/home-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'grid-list', component: GridListComponent},
  {path: 'page-3', component: ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GridListComponent,ProfilePageComponent,HomePageComponent,headerComponents]