import { Component, OnInit } from '@angular/core';
import template from './profile.component.html';
import { ConfigServices } from '../services/config-services';
import { ViewProfileComponent } from './view-profile/view-profile/view-profilee.component';

@Component({
  selector: 'app-profile',
  template:  template + ''
})
export class ProfileComponent implements OnInit {
  viewProfileComponent: any;
  constructor(private configService: ConfigServices) { }

  ngOnInit() {
    // console.log('>>>>>>>', this.configService.getConfig());
    this.viewProfileComponent = ViewProfileComponent;
  }

}
