import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  verificationId: any;
  code: string = "";
  phone: string = "";

  constructor() {}

  send(){
    (<any>window).FirebasePlugin.verifyPhoneNumber(9975482603,60, (credential) =>{
      alert("SMS sent successfully");
      console.log(credential);

      this.verificationId = credential.verificationId;
    }, function(error){
      console.error(error);
    });
  }

  verify(){
    let signinCredential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, this.code);
    firebase.auth().signInWithCredential(signinCredential).then((info)=>{
      console.log(info);
    }, (error)=>{
      console.log(error)
    });
  }

}
