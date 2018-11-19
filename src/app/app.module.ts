import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional } from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileModule } from './profile/profile.module';
import { AppRoutingRoutingModule } from './app-routing-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';

// services
import { ConfigServices }  from './services/config-services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ProfileModule,
    LoginModule,
    AppRoutingRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ ConfigServices ],
  bootstrap: [AppComponent]
})
export class CoreAppModule { 
  static forRoot(config: any) {
    return {
      ngModule: CoreAppModule,
      providers: [
          {provide: AppConfigModel, useValue: config }
      ]
    };
  }
  constructor(
      @Optional() config: AppConfigModel,
      private configService: ConfigServices) {
    if (config) { 
        /* Save config data */ 
        console.log(config, 'test');
        this.configService.setConfig(config);
    }
    console.log('read external config');
  }
}
export class AppConfigModel {
  AppConfig : Object;
}
