import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner'

@Component({
  selector: 'app-pviajes',
  templateUrl: './pviajes.page.html',
  styleUrls: ['./pviajes.page.scss'],
})
export class PviajesPage implements OnInit {

  qrString = 'sabias que el 32% de la salchicha es sal? el resto es chicha uwu';
  scannedResult: any;
  content_visibility = '';

  constructor( ) {}

  async checkPermission() {
    try {
      //check or request permission
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        //the user granted permission
        return true;
      }
      return false;
    } catch(e) {
      console.log(e);
    }
  }

  async startScan() {
    try {
      const permission = await this.checkPermission(); 
      if(!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      this.content_visibility = 'hidden';
      const result = await BarcodeScanner.startScan();
      console.log(result);
      BarcodeScanner.showBackground();
      document.querySelector('body').classList.remove('scanner-active');
      this.content_visibility = '';
      if(result?.hasContent) {
        this.scannedResult = result.content;
        console.log(this.scannedResult)
      }
    } catch(e) {
      console.log(e);
      this.stopScan();
    }
  }

  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
    this.content_visibility = '';
  }

  ngOnInit() {
  }

}
