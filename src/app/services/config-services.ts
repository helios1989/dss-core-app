import { Injectable } from '@angular/core';

@Injectable()
export class ConfigServices {
  private config;
  constructor() { 
  }
  setConfig(config: any) {
      this.config = config;
  }
  getConfig() {
    return this.config;
  }
  
}