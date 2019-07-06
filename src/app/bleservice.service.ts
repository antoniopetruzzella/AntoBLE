import { Injectable } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';

import { NavController } from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class BLEService {
  nearestDeviceID:any=null;
  
  devices:any[];
  constructor(private ble:BLE,public navCtrl: NavController) { }

  async scan() {
   
    this.devices = [];  // clear list
    console.log('inizio scansione');
    /*this.ble.scan([],5).subscribe(
      device => this.onDeviceDiscovered(device), 
      error => this.scanError(error)
    )*/
    this.ble.startScan([]).subscribe(
      device => {
        this.devices.push(device);
        console.log('device',JSON.stringify(device));
      
      }, 
      error => this.scanError(error)
    );
    /*await this.ble.stopScan().then(()=>{
      console.log('scan stopped');
        return 
      }
    );  */


    await setTimeout(this.ble.stopScan,5000,function(){
      console.log('finita scansione');
      return this.checkNearest();
    },function(){
      console.log('errore in stop scan')
      return null;
    });
   
   
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
        this.nearestDeviceID=nearestDevice.id;
        if(nearestDevice.name){
          return nearestDevice.name;
        }else{
          return null;
        }
      }
      
    }

    pageNavigator(fromPage,nearestDeviceName){

      if(nearestDeviceName!=fromPage)
         this.navCtrl.navigateRoot('/'+nearestDeviceName);
    }

    
}

