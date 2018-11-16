import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import { LoginComponent } from './login.component';
@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [ LoginComponent ],
  exports: [ LoginComponent ]
})
export class LoginModule { }
``