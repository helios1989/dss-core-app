import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  template: "<h1> <button (click)='back()'>Back</button> this is the subview of customer create</h1>"
})
export class CreateComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
    
  }
  back() { 
    this.location.back();
  }

}
