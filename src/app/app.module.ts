import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { UiButtonComponent } from './ui-button/ui-button.component';

@NgModule({
  declarations: [
    AppComponent,
    UiButtonComponent
  ],
  entryComponents: [UiButtonComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(UiButtonComponent, { injector });
    customElements.define('ui-button', el);
  }

  ngDoBootstrap() { }
}
