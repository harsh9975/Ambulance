import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';
import { Geolocation } from '@ionic-native/geolocation/ngx';


firebase.initializeApp({
  apiKey: "AIzaSyCqfDgRq8UAjRcFNN4OU7_X6YjcZHq4OXQ",
    authDomain: "ambulance-cb0df.firebaseapp.com",
    databaseURL: "https://ambulance-cb0df.firebaseio.com",
    projectId: "ambulance-cb0df",
    storageBucket: "",
    messagingSenderId: "140472689264",
    appId: "1:140472689264:web:5e85c9770e86f8981f0ab5"
});
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
