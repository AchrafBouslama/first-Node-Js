import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MenuComponent } from './menu/menu.component';
import { MenuFrontComponent } from './menu-front/menu-front.component';
import { ListCategoriesComponent } from './Categories/list-categories/list-categories.component';





const routes: Routes = [
  { path :'front',component: MenuFrontComponent} , 


{path : '', component:MenuComponent, children : [
  { path :'list',component: ListCategoriesComponent}

]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
