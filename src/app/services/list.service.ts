import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  animals: Animal[] = [
    {name: "turca", type: "Dog", age: 4},
    {name: "Tom", type: "Cat", age: 10},
    {name: "Frida", type: "Dog", age: 5},
    {name: "Bob", type: "Horse", age: 1}
  ]

  remove(animals: Animal[], animal: Animal): Animal[] {
    console.log("removed")
    return animals.filter( a => animal.name !== a.name)
  }

  reset() {
    return this.animals
  }
}
