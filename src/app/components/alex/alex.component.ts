import { Component } from '@angular/core';

@Component({
  selector: 'app-alex',
  templateUrl: './alex.component.html',
  styleUrls: ['./alex.component.css']
})
export class AlexComponent {

    name: string = 'Alex Rosa'
    age: number = 38
    job = "developer"

}
