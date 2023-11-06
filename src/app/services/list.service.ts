import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/animals'

  constructor(private http: HttpClient) { }

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

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
  }
}
