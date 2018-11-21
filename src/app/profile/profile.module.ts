import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.route';
import { ViewProfileComponent } from './view-profile/view-profile/view-profilee.component';
import { ComponentLoaderDirective } from '../core/component-loader.directive';
import { EditProfileComponent } from './view-profile/edit-profile/edit-profile.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [ 
    ProfileComponent, 
    ViewProfileComponent, 
    ComponentLoaderDirective,
    EditProfileComponent ],
  exports: [ 
    ProfileComponent, 
    ViewProfileComponent, 
    ComponentLoaderDirective,
    EditProfileComponent ],
    entryComponents: [ViewProfileComponent, EditProfileComponent, ProfileComponent ]
})
export class ProfileModule { }
