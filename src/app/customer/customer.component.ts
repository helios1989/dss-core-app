import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer-services.service';
import { Observable} from 'rxjs/Rx';
import { HttpClientModule } from '@angular/common/http';
import template from './customer.component.html';

@Component({
  selector: 'app-customer',
  providers: [ CustomerService],
  template: template + ''
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  customer$: Observable<any>;
  ngOnInit() {
    this.customer$ = this.customerService.getTodoOne();
  }

}
