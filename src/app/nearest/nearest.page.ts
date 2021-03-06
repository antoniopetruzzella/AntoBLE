import { Component, OnInit } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import {BLEService} from '../../app/bleservice.service';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-nearest',
  templateUrl: './nearest.page.html',
  styleUrls: ['./nearest.page.scss'],
})

//QUESTA PAGINA USA IL SERVICE BLEService DA ME IMPLEMENTATO, SI FA RESTITUIRE IL BLE PIU' VICINO E NE USA LA PROPRIETA'
//NAME PER DECIDERE IN CHE PAGINA NAVIGARE

export class NearestPage implements OnInit {
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
      if(result.name!=this.nearestDeviceName){
       this.nearestDeviceName=result.name
       if(this.nearestDeviceName=='AntoBLE'){//SETTATO SU ESP32 CODICE: ANTO_BLE_SERVER
        this.navCtrl.navigateRoot('seconda')
       }
      }
    }
        setTimeout(this.goScan.bind(this),1000);
      });
    
  }
}
