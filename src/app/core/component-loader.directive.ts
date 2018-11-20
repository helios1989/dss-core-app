import { Directive, ViewContainerRef, Input, ComponentFactoryResolver, ComponentFactory, ComponentDecorator, OnInit } from '@angular/core';
import { ConfigServices } from '../services/config-services';

@Directive({
  selector: '[appComponentLoader]'
})
export class ComponentLoaderDirective {
  config = this.configServices.getConfig();
  constructor(public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private configServices: ConfigServices) {}
  
    ngOnInit() {
      console.log(this.viewContainerRef, '>>view container<<');
      // _data.componentView.context.constructor.name
      let childView = this.viewContainerRef['_view']['nodes'];
      console.log(childView, '>>childView<<');
      let constructorComponent = this.viewContainerRef['_view']['component']['constructor']['name'];
      if (this._hasContructorComponent(constructorComponent)) {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.config[constructorComponent]);
        this.viewContainerRef.clear();
        this.viewContainerRef.createComponent(componentFactory)
      }
    }
    private _hasContructorComponent(constructComponent: any): Boolean {
      for (let i in this.config) {
        if (i === constructComponent) return true;
      }
      return false;
    }
}
