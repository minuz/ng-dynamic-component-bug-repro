import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicContainerModule } from './dynamic-container/dynamic-container.module';
import { TestModule } from './test/test.module';
import { TestComponent } from './test/test/test.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // TestModule,
    // DynamicContainerModule.withComponent(TestComponent)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
