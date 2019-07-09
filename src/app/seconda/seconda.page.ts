import { Component, OnInit } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import {BLEService} from '../../app/bleservice.service';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-seconda',
  templateUrl: './seconda.page.html',
  styleUrls: ['./seconda.page.scss'],
})
export class SecondaPage implements OnInit {
  devices:any[];
  nearestDeviceName:string=null;
  constructor(private ble:BLE, private bles: BLEService,public navCtrl: NavController) { }

  ngOnInit() {
    this.goScan();
  }

  goScan(){
    this.devices = [];
    
    console.log('inizio scansione');
     this.bles.scan().then(result=>{
     if(result){  
      if(!result.name){
       
        this.navCtrl.navigateRoot('nearest')
       
      }
    }
        setTimeout(this.goScan.bind(this),1000);
      });
    
  }
}
