import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlexComponent } from './components/alex/alex.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    AlexComponent,
    VehicleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
