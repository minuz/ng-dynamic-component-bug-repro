import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicContainerModule } from './dynamic-container/dynamic-container.module';
import * as Test from './test/test.module';

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
