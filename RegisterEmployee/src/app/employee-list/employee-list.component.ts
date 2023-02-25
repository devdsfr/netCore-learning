import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../employee/employee';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();

  }

  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(data => {
        this.employees = data;
      }, err => {
        console.log(err);
        alert('Ocorreu um erro ao buscar os funcionários.');
      });
  }

  deleteEmployee(id: number) {
    if (confirm('Tem certeza que deseja excluir este funcionário?')) {
      this.employeeService.deleteEmployee(id)
        .subscribe(res => {
          console.log(res);
          this.getEmployees();
        }, err => {
          console.log(err);
          alert('Ocorreu um erro ao excluir o funcionário.');
        });
    }
  }

  editEmployee(id: number) {
    this.router.navigate(['/add-employee/', id]);
  }
}
