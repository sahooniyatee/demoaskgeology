import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { AuthComponent } from '../blog/auth/auth.component';

const routes: Routes = [
  {path:'blog',component:BlogComponent,children:[
    {
      path:'auth',component:AuthComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
