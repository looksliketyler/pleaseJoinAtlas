import { Component, OnInit } from '@angular/core';

import { EmployeeDataModel } from './services/employees/employees.model';
import { EmployeesService } from './services/employees/employees.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <ng-container *ngIf="employee">
  <button (click)="randomizeEmployee()">Random Employee</button>
  <p>{{employee.firstName}} {{employee.lastName}}</p>
</ng-container>
<div>
  <h2>Welcome to training fool</h2>
  <hr>
  <br>
  <p>Start up</p>
  <ol>
    <li>Install and set up bootstrap to make this feel more like the udemy course.</li>
    <li>Find and fix any errors I planted.</li>
    <li>Familiarize yourself with the code. Don't just dive into this. Take your time and see what is here.</li>
    <li>You will need to set up routing. Angular routing should've been covered already.</li>
    <li>Eliminate (but don't lose this info - you'll need to reference) the use of this template and utilize the templateUrl that is commented out.
      The html file is already using <'router-outlet'>. </li>
  </ol>
  <hr>
  <p>Information</p>
  <ul>
    <li>The file employees.json is a JSON obviously. Don't worry so much on how this file is being imported as we don't do that in Atlas.
      It's there to mimic info received from an api call.</li>
    <li>Check out the file employees.model.ts. Try to figure out how it's used and where.</li>
    <li>The service file employees.service.ts actually mimics part of service files used in Atlas. </li>
  </ul>
  <hr>
  <p>What's going on now and what should I do?</p>
  <ul>
    <li>Random Employee button will display a random employee.</li>
    <li>There is a console.log() for this as well.</li>
    <ul>
      <li>This functionality will need moved.</li>
      <li>You need to use one of the buttons under the component folder. The button html should only be a button, nothing else. I can send you a good Traversy
        video on this.
      </li>
      <li>This part will help you use property binding, event emitters, input/output.</li>
    </ul>
    <li>In the views folder there is HOME and EMPLOYEES - make them look how you want.</li>
    <li>ALERT - The home view should have the button compnent that randomizes the employee.</li>
    <li>The employee view should be accessed from the home view and display all the other employee info.</li>
  </ul>
  <br>
  <br>
  <hr>
  <hr>
  <br>
  <h3>Things to keep in mind.</h3>
  <ul>
    <li>Any method/function you write should have jsdocs - see methods below for reference - in app.component.ts.</li>
    <li>A tip for jsdocs - get your method written and then above the method name type /** - vscode should auto populate a jsdoc for you to fill in.</li>
    <li>Comments in code are helpful - inline comments can help other devs understand whats happening.</li>
    <li>All global variables should have access modifiers.</li>
    <li>All variables should have a type - ALWAYS.</li>
    <li>File app.component shouldnt hold anything other than router outlet (angular routing).</li>
    <li>The ngOnInit() method should never do any heavy lifting - it should only run functions. No functionality written inside it</li>
  </ul>
</div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public employee: EmployeeDataModel | undefined; // Added undefined type to elimitate ts error
  public employeeNumber: number = 0;
  private exampleParam: string = 'Param example.';

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.getEmployeeInfo(this.exampleParam);
  }

  /**
   * @description - randomizes employee number with Math.random() and runs getEmployeeInfo()
   * @returns {void}
   */
  public randomizeEmployee(): void {
    this.employeeNumber = Math.floor(Math.random() * 10) + 1;
    this.getEmployeeInfo(this.exampleParam);
  }


  /**
   * @description - method that runs the call method in employeesService. sets this.employee to the results from the service file
   * @param {string} param - an example param
   * @returns {void}
   */
  private getEmployeeInfo(param: number): boolean {
    this.employeesService.call(this.employeeNumber);
    this.employee = this.employeesService.getResults();
    console.log(this.employee);
    console.log(param)
  }
}
