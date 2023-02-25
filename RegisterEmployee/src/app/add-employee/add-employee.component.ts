import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee } from '../employee/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    this.http.post('http://localhost:56599/api/Employee', this.employee)
      .subscribe(res => {
        console.log(res);
        alert('Funcionário adicionado com sucesso!');
      }, err => {
        console.log(err);
        alert('Ocorreu um erro ao adicionar o funcionário.');
      });

    this.employee = new Employee(); // Limpar o modelo do formulário
  }
}








