import { 
  Directive, 
  ViewContainerRef,  
  ComponentFactoryResolver, 
  ComponentFactory, 
  ComponentDecorator,
  Compiler,
  Input,
  OnInit } from '@angular/core';
import { ConfigServices } from '../services/config-services';

@Directive({
  selector: '[appComponentLoader]'
})
export class ComponentLoaderDirective {
  config = this.configServices.getConfig();
  @Input() componentToUsed: any;
  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private configServices: ConfigServices,
    private compiler: Compiler) {}
  
    ngOnInit() {
      let entryComponentModule = this.configServices.getConfig()["ProfileModuleImpl"];
      this.compiler.compileModuleAndAllComponentsAsync(entryComponentModule).then((c) => {
          let isCustom = false;
          c.componentFactories.forEach((v) => {
          if (v['componentType']['name'] === this.componentToUsed.name) {
            this.viewContainerRef.clear();
            const f1 = c.componentFactories[0];
            const cmpRef1 = this.viewContainerRef.createComponent(f1);
            cmpRef1.instance.name = v['name'];
            isCustom = true;
            return true;
          }
        });
        if (!isCustom) {
          this._loadCoreComponents();
        }
      });
    }
    private _loadCoreComponents() {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentToUsed);
      this.viewContainerRef.clear();
      this.viewContainerRef.createComponent(componentFactory)
    }
    // private _hasContructorComponent(constructComponent: any): Boolean {
    //   for (let i in this.config) {
    //     if (i === constructComponent) return true;
    //   }
    //   return false;
    // }
}
