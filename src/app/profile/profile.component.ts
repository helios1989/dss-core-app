import { Component, OnInit } from '@angular/core';
import template from './profile.component.html';
import { ConfigServices } from '../services/config-services';
@Component({
  selector: 'app-profile',
  template:  template + ''
})
export class ProfileComponent implements OnInit {

  constructor(private configService: ConfigServices) { }

  ngOnInit() {
    console.log('>>>>>>>', this.configService.getConfig());
  }

}
