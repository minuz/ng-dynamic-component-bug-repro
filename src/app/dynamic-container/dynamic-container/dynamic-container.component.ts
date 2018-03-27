import { Component, Inject, OnInit } from '@angular/core';

import { TEST_COMPONENT } from '../../component.injector';

@Component({
  selector: 'app-dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.css']
})
export class DynamicContainerComponent implements OnInit {

  get component() {
    return this.testComponent;
  }

  get inputs() {
    return this.component ?
      { test: 'test' } : undefined;
  }

  get outputs() {
    return undefined;
  }

  constructor(
    @Inject(TEST_COMPONENT)
    private testComponent: any) {
  }

  ngOnInit() {
    console.log(this.testComponent);
  }
}
