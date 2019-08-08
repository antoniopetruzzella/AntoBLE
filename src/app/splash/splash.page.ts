import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})

//PAGINA SPLASH PER DECIDERE QUALE DELLE DUE DEMO IMPLEMENTATE DALLA APP USARE
// 1) HOME
// 2) NEAREST: INDIVIDUA IL BLE PIU' VICINO E NAVIGA DI CONSEGUENZA
export class SplashPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  goPage(page){

    console.log("qui");
    this.navCtrl.navigateRoot('/'+page);
  }
}
