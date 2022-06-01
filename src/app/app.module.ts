import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BlueButtonComponent } from './components/blue-button/blue-button.component';
import { RedButtonComponent } from './components/red-button/red-button.component';
import { YellowButtonComponent } from './components/yellow-button/yellow-button.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BlueButtonComponent,
    RedButtonComponent,
    YellowButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
