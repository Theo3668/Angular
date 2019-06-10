import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LogInComponent } from './log-in/log-in.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [{path:"",component:MenuComponent, children:[{path:"logIn",component:LogInComponent},
                                                                    {path:"about",component:AboutComponent},
                                                                    {path:"contact",component:ContactComponent},
                                                                    {path:"form",component:FormComponent}]},
                        {path:"logIn",component:LogInComponent},
                        {path:"about",component:AboutComponent},
                        {path:"contact",component:ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
