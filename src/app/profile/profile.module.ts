import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.route';
import { ViewProfileComponent } from './view-profile/view-profile/view-profilee.component';
import { ComponentLoaderDirective } from '../core/component-loader.directive';
@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [ ProfileComponent, ViewProfileComponent, ComponentLoaderDirective ],
  exports: [ ProfileComponent, ViewProfileComponent, ComponentLoaderDirective ]
})
export class ProfileModule { }
