import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular';

  //data to be shared with child components
  userName = 'joaquim'
  userData = {
    email: 'joaoquim@gmail.com',
    role: "admin"
  }
}
