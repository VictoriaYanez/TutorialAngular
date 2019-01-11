import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule, Routes} from '@angular/router';

import {MaterialModuleModule} from './material-module/material-module.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component'; 
import {PrimerComponente} from './primer-componente/primer-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import {ApiService} from './servicio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

const appRoutes: Routes = [
{path:'', component:HomeComponentComponent},
{path:'primerComponente', component:PrimerComponente},
{path:'segundoComponente', component:SegundoComponenteComponent}]

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponente,
    SegundoComponenteComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MaterialModuleModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
