import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  serviceURL: string;
  constructor() {
    this.serviceURL = 'http://localhost:3000/tasks';
  }
}
