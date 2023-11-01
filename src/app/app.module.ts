import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlexComponent } from './components/alex/alex.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';

@NgModule({
  declarations: [
    AppComponent,
    AlexComponent,
    VehicleComponent,
    ParentDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
