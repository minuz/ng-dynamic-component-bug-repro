import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicContainerModule } from './dynamic-container/dynamic-container.module';
import * as Test from './test/test.module';


// This is exactly the same thing I've been doing on my app.
// It works with version 2.0.3 but it breaks with 2.1.0
// On this sample project, it onlu works if I remove the input from the DynamicContainerComponent.
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Test.TestModule,
    DynamicContainerModule.withComponent(Test.ModuleComponent)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
