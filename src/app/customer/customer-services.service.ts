import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/of';

@Injectable()
export class CustomerService {
  endPointUrl = 'https://jsonplaceholder.typicode.com/todos/1';
  constructor(private http: HttpClient) { 

  }
  getTodoOne(): Observable<any> {
    return this.http.get(this.endPointUrl);
  }
}