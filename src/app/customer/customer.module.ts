import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer.route';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [ CustomerComponent, EditComponent, CreateComponent ],
  exports: [ CustomerComponent, EditComponent, CreateComponent  ] 
})
export class CustomerModule { }
