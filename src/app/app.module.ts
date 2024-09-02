import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterContentComponent } from './public/footer-content/footer-content.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SideNavigationBarComponent } from './public/side-navigation-bar/side-navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterContentComponent,
    SideNavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
