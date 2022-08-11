import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  fakeCall() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient:HttpClient) { }

  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/employees')
  }

  insertData(data: Employee) {
    return this.httpClient.post('http://127.0.0.1:8000/api/addEmployee', data)
  }

  deleteData(id : Employee) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteEmployee/'+id);
  }

  getEmployeeById(id : Employee) {
    return this.httpClient.get('http://127.0.0.1:8000/api/employee/'+id);
  }

  updateData(id : Employee,data: Employee) {
    return this.httpClient.put('http://127.0.0.1:8000/api/updateEmployee/'+id, data)
  }
}
