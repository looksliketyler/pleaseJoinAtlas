export class EmployeeDataModel {
  readonly firstName: string;
  readonly lastName: string;
  readonly age: number;
  readonly personalNumber: string;
  readonly companyName: string;
  readonly title: string;
  readonly yearsInTitle: number;
  readonly email: string;
  readonly deskPhone: string;
  readonly workFromHome: boolean;

  constructor(response: any, employeeNumber: any) {
    this.firstName = response[employeeNumber].personalData.firstName;
    this.lastName = response[employeeNumber].personalData.lastName;
    this.age = response[employeeNumber].personalData.age;
    this.personalNumber = response[employeeNumber].personalData.personalNumber;
    this.companyName = response[employeeNumber].workData.companyName;
    this.title = response[employeeNumber].workData.title;
    this.yearsInTitle = response[employeeNumber].workData.yearsInTitle;
    this.email = response[employeeNumber].workData.email;
    this.deskPhone = response[employeeNumber].workData.deskPhone;
    this.workFromHome = response[employeeNumber].workData.workFromHome;
  }
}

