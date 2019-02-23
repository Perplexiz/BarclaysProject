import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
//import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  //HttpClientModule
  imports: [BrowserModule, AgGridModule.withComponents([])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}