import { Injectable } from '@angular/core';

import { EmployeeDataModel } from './employees.model';
import response from '../../employees.json';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private apiResults: EmployeeDataModel = null;

  constructor() { }

  public call(employeeNumber?: number): void {
    if (employeeNumber) {
      this.apiResults = new EmployeeDataModel(response, employeeNumber);
    } else {
      this.apiResults = new EmployeeDataModel(response, 1)
    }
  }

  public getResults(): EmployeeDataModel {
    return this.apiResults;
  }
}
