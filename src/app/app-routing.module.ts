import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {ContactComponent} from "./pages/contact/contact.component";

const routes: Routes = [
  {path:'',redirectTo:'/blog',pathMatch:"full"},
  {path:'home', component: HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'blog',component:BlogComponent},
  {path:'contactUs',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
