import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import jsqrcode from 'jsqrcode';

/**
 * Generated class for the QrReaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-qr-reader',
  templateUrl: 'qr-reader.html',
})
export class QrReaderPage {

  scannedCode = null;
  text = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReaderPage');
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
     }).catch(err => {
         console.log('Error', err);
    });
  }

  scanFile(event) {
    const file = event.target.files[0];
    if(file != undefined){
      const reader = new FileReader();
      //On set la fonction du fileReader
      reader.onloadend = (evt) => {
        var target: any = evt.currentTarget;
        var image = new Image();

        //On set la callback de l'image pour avoir le resultat
        image.onload = () => {
          var QrDecoder = new jsqrcode();
          this.text = QrDecoder.decode(image);
        };
        //Va appeller image.onload
        image.src = target.result;
      }
      reader.readAsDataURL(file);
    }
  }
}
