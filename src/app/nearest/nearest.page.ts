import { Component, OnInit } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import {BLEService} from '../../app/bleservice.service';

@Component({
  selector: 'app-nearest',
  templateUrl: './nearest.page.html',
  styleUrls: ['./nearest.page.scss'],
})
export class NearestPage implements OnInit {
  devices:any[];
  nearestDeviceName:string=null;
  constructor(private ble:BLE, private bles: BLEService) { }

  ngOnInit() {
    //setInterval(this.goScan,5000);
  }

  goScan(){
    this.devices = [];
    
    console.log('inizio scansione');
     this.bles.scan().then(result=>this.nearestDeviceName=result);
    
    /*this.ble.scan([],5).subscribe(
      device => this.onDeviceDiscovered(device), 
      error => this.scanError(error)
    )
    this.ble.scan([],5).subscribe(
      device => {
        this.devices.push(device);
        console.log('device',JSON.stringify(device));
      
      }, 
      error =>{console.log('error in start scan')}
    );*/
    /*await this.ble.stopScan().then(()=>{
      console.log('scan stopped');
        return 
      }
    );  */

   // setTimeout(this.checkNearest.bind(this),5000);  
   
  //  console.log('finita scansione');
   
    
    
    
  }
  /*checkNearest(){
     
    var dvs=this.devices.map(function(o){return o.rssi})
    var highestRSSI=Math.max.apply(Math,dvs);
    var nearestDevice=this.devices.find(function (oo){return oo.rssi==highestRSSI});
    if(nearestDevice){
      console.log(nearestDevice);
      
      if(nearestDevice.name){
        this.nearestDeviceName=nearestDevice.name;
      }else{
        this.nearestDeviceName=null;
      }
    }
    
  }*/
  setDeviceNameresult(result){
    this.nearestDeviceName=result;
  }
}
