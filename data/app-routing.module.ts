import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeAndroidComponent} from './screens/android/home-android/home-android.component';
import {HomeIosComponent} from './screens/ios/home-ios/home-ios.component';
import {HomeWebComponent} from './screens/web/home-web/home-web.component';

const routes: Routes = [
  {
    path:'',
    component:HomeIosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
