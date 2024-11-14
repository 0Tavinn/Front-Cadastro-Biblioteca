import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { Router, Routes } from '@angular/router';
import { AdmComponent } from './adm/adm.component';
import { RegistroComponent } from './registro/registro.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmComponent,
    RegistroComponent,
    OrcamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
