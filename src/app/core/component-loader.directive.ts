import { Directive, ViewContainerRef, Input, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ConfigServices } from '../services/config-services';

@Directive({
  selector: '[appComponentLoader]'
})
export class ComponentLoaderDirective {

  constructor(public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private configServices: ConfigServices) {}
  
    ngOnInit() {
      console.log('directive loader');
       console.log('directive loader', this.configServices.getConfig());
      //  let configServ = this.configServices.getConfig();
      //  console.log(configServ);
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.configServices.getConfig().ProfileComponent);
      this.viewContainerRef.clear();
      this.viewContainerRef.createComponent(componentFactory)
    }
}
