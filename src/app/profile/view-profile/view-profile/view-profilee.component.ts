import { Component, OnInit } from '@angular/core';
import template from './view-profile.component.html';
import { ConfigServices} from '../../../services/config-services';

@Component({
  selector: 'app-core-view-profile',
  template: template + ''
})
export class ViewProfileComponent implements OnInit {

  constructor(private configServices:ConfigServices) { }

  ngOnInit() {
    console.log(this.configServices.getConfig()), ">>>>>>view profile>>>>";
  }

}
