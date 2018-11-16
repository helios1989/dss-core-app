import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  template: "<h1> <button (click)='back()'>Back</button> this is the subview of customer edit</h1>"
})
export class EditComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
    
  }
  back() { 
    this.location.back();
  }
}
