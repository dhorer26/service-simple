import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private listEmployees = [
    { id: 101, name: 'Ravi', age: 25 },
    { id: 102, name: 'Parag', age: 35 }
  ];
  getEmployees() {
    return this.listEmployees;
  }
}
