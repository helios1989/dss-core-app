
// import {ModuleWithProviders} from '@angular/core';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CustomerComponent } from './customer.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
	{
		path: '',
		component: CustomerComponent,
		children: [
			{
				path: 'edit', component: EditComponent
			},
			{
				path: 'create', component: CreateComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }