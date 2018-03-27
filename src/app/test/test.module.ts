import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TestComponent } from './test/test.component';

export const ModuleComponent = TestComponent;

@NgModule({
  imports: [CommonModule],
  declarations: [ModuleComponent],
  exports: [ModuleComponent],
  entryComponents: [ModuleComponent]
})
export class TestModule { }
