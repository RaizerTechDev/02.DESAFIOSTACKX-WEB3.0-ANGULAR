import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "../components/template/header/header.component";
import { ClickComponent } from "../components/template/click/click.component";
import { IconsComponent } from "../components/icons/icons.component";
import { TabelaComponent } from "../components/template/tabela/tabela.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClickComponent,
    IconsComponent,
    TabelaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
