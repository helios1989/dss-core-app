import { Directive, ViewContainerRef, Compiler, Input, ComponentFactoryResolver, ComponentFactory, ComponentDecorator, OnInit } from '@angular/core';
import { ConfigServices } from '../services/config-services';

@Directive({
  selector: '[appComponentLoader]'
})
export class ComponentLoaderDirective {
  config = this.configServices.getConfig();
  constructor(public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private configServices: ConfigServices,
    private _compiler: Compiler) {}
    @Input("componentLoader") componentToUsed: any;
    ngOnInit() {
      let childView = this.viewContainerRef['_view']['nodes'];
      let constructorComponent = this.componentToUsed;
      let componentFactory;
      if (!this.config[constructorComponent.name]) {
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentToUsed);
      } else {
        console.log('CUSTOM!!!!!');
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.config[constructorComponent.name]);
      }
      this.viewContainerRef.clear();
      this.viewContainerRef.createComponent(componentFactory)
    }
    private _hasContructorComponent(constructComponent: any): Boolean {

      for (let i in this.config) {
        if (i === constructComponent) return true;
      }
      return false;
    }
}
