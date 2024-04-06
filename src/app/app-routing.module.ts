import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourceComponent } from './cource/cource.component';
import { ContactComponent } from './contact/contact.component';
import { StudymaterialComponent } from './studymaterial/studymaterial.component';
import { PyqComponent } from './pyq/pyq.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'course',component:CourceComponent},
  {path:'contact',component:ContactComponent},
  {path:'studymaterial',component:StudymaterialComponent},
  {path:'PYQ',component:PyqComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
