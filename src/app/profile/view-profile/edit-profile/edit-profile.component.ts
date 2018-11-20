import { Component, OnInit } from '@angular/core';
import { ConfigServices} from '../../../services/config-services';

@Component({
  selector: 'app-core-edit-profile',
  template: `<h1> this is the edit profile</h1>`
})
export class EditProfileComponent implements OnInit {

  constructor(private configServices:ConfigServices) { }

  ngOnInit() {

  }

}
