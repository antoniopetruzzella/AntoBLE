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
    
  }

  goScan(){
    this.devices = [];
    
    console.log('inizio scansione');
     this.bles.scan().then(result=>{
       this.nearestDeviceName=result.id
        setTimeout(this.goScan.bind(this),1000);
      });
    
  }
}
