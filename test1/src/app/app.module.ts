import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { HttpClientModule } from '@angular/common/http';
import { MenuFrontComponent } from './menu-front/menu-front.component';
import { ListCategoriesComponent } from './Categories/list-categories/list-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  
   
    MenuFrontComponent,
    ListCategoriesComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
