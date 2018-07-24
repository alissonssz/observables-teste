import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CompUmComponent } from './features/comp-um/comp-um.component';
import { CompDoisComponent } from './features/comp-dois/comp-dois.component';
import { CompTresComponent } from './features/comp-tres/comp-tres.component';


@NgModule({
  declarations: [
    AppComponent,
    CompUmComponent,
    CompDoisComponent,
    CompTresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
