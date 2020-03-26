import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAndroidComponent } from './screens/android/home-android/home-android.component';
import { HomeIosComponent } from './screens/ios/home-ios/home-ios.component';
import { HomeWebComponent } from './screens/web/home-web/home-web.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeAndroidComponent,
    HomeIosComponent,
    HomeWebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
