import { Injectable } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';

import { NavController } from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class BLEService {
  //nearestDeviceID:any=null;
  //nearestDeviceName:string=null
  nearestDevice:any=null;
  devices:any[];
  constructor(private ble:BLE,public navCtrl: NavController) { }

  async scan() {
   
    this.devices = [];  // clear list
    console.log('inizio scansione');
    this.ble.scan([],5).subscribe(
      device => {
        this.devices.push(device);
        console.log('device',JSON.stringify(device));
      
      }, 
      error =>{console.log('error in start scan')}
    )
   await new Promise(resolve=>{
    setTimeout(resolve,5000);
   })
   //await setTimeout(this.checkNearest,5000);
   await this.checkNearest();
   //return this.nearestDeviceName
   return this.nearestDevice;
  }


    // If location permission is denied, you'll end up here
    scanError(error) {
    
      /*let toast = this.toastCtrl.create({
        message: 'Error scanning for Bluetooth low energy devices',
        position: 'middle',
        duration: 5000
      });
      toast.present();*/
      console.log(error);
    }

    checkNearest(){
     
      var dvs=this.devices.map(function(o){return o.rssi})
      var highestRSSI=Math.max.apply(Math,dvs);
      var nearestDevice=this.devices.find(function (oo){return oo.rssi==highestRSSI});
      if(nearestDevice){
        console.log(nearestDevice);
        this.nearestDevice=nearestDevice;
        /*this.nearestDeviceID=nearestDevice.id;
        if(nearestDevice.name){
          this.nearestDeviceName=nearestDevice.name;
        }else{
          this.nearestDeviceName=null;
        }*/
      }else{
        this.nearestDevice=null;
      }
      
    }

    pageNavigator(fromPage,nearestDeviceName){

      if(nearestDeviceName!=fromPage)
         this.navCtrl.navigateRoot('/'+nearestDeviceName);
    }

    
}

