import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TestComponent } from './test/test.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TestComponent],
  exports: [TestComponent]
})
export class TestModule { }
