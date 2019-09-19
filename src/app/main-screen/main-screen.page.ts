
import {AfterContentInit,Component,OnInit,ViewChildren} from '@angular/core';

import{Platform} from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;
@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.page.html',
  styleUrls: ['./main-screen.page.scss'],
})
export class MainScreenPage {
  map:any;
  marker:any;
  latitude: any;
  longitude: any;
  timestamp: any;

  constructor(public platform:Platform,public geolocation:Geolocation)
    {
  this.platform.ready().then(()=>{
    var mapOtions ={
      center:{lat:23.2366,lng: 79.3822},
        zoom:7
      }
      this.map = new google.maps.Map(document.getElementById("map"),mapOtions);
      this.Getlocation();
    })
  }
  
    Getlocation(){
      var ref = this;
      let watch = this.geolocation.watchPosition();
      watch.subscribe((position)=>{
        var gps = new google.map.LatLng(position.coords.latitude,position.coords.longitude);
        if(ref.marker == null)
          {
          ref.marker = new google.maps.Marker({
          position: gps,
          map:ref.map,
          title:'my position'
        })
      }
      else{
        ref.marker.setPosition(gps);
      }
      ref.map.panTo(gps);
      ref.latitude = position.coords.latitude.toString();
      ref.longitude = position.coords.longitude.toString();
      ref.timestamp = (new Date(position.timestamp)).toString();
      })
    }
  }



