import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { SimpletextComponent } from './simpletext/simpletext.component';
import { CalculateComponent } from './calculate/calculate.component';
import { SuperCalculateComponent } from './super-calculate/super-calculate.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpletextComponent,
    CalculateComponent,
    SuperCalculateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
