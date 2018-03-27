import { Component, Inject, Type } from '@angular/core';

import { TEST_COMPONENT } from '../component.injector';

@Component({
  selector: 'dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.css']
})
export class DynamicContainerComponent {

  inputs = { test: 'test' };
  outputs: any;

  get component() {
    return this.testComponent;
  }

  constructor(@Inject(TEST_COMPONENT) private testComponent: Type<any>) { }
}
