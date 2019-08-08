import { Component, NgZone } from '@angular/core';
//import { NavController } from 'ionic-angular';
//import { ToastController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valoretrovato:any=null;
  
  devices: any[] = [];
  constructor(private ble: BLE,private ngZone: NgZone) {

  }

  scan() {
   
    this.devices = [];  // clear list

    this.ble.scan([], 5).subscribe(
      device => this.onDeviceDiscovered(device), 
      error => this.scanError(error)
    );
   
  }
 

  onDeviceDiscovered(device) {
    var adData = new Uint8Array(device.advertising)
    if(device.name=="AntoBLE"){
      console.log('Discovered ' + JSON.stringify(device, null, 2));
      console.log('Adv ' + JSON.stringify(adData, null, 2));
     
          this.devices.push(device);
          this.ble.connect(device.id).subscribe( 
          connectCallBack=>this.connectCallBack(connectCallBack,device),
          disconnectCallback=>this.disconnectCallback(disconnectCallback)
          
          )
            
     
    }
  }
  connectCallBack(complex,device){
    console.log('complex'+JSON.stringify(complex, null, 2))
    for(var i=0; i<complex.characteristics.length; i++){
      if(complex.characteristics[i].characteristic=='beb5483e-36e1-4688-b7f5-ea07361b26a8') //SETTATO SU ESP32 CODICE: ANTO_BLE_SERVER
          this.ble.read(complex.id,complex.characteristics[i].service,complex.characteristics[i].characteristic).then(
        
          data=>this.readCharacteristicValue(data,device)
        
          );
      
    }
  }
  disconnectCallback(complex){

  }
  readCharacteristicValue(data,device){
  
    this.ngZone.run(() => {
      this.valoretrovato=String.fromCharCode.apply(null, new Uint8Array(data));
      this.ble.disconnect(device.id);
    });
    //this.ble.stopScan();
    

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
}
