import { Component } from '@angular/core';
import VnNativeEnv from 'vn-native-env';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'src';
  public env = new VnNativeEnv;
  constructor() { 
    this.env.sandbox({livereload:true});
    this.env.deviceReady();
  }
}
