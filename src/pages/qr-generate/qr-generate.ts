import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Storage } from '@ionic/storage';
import QRCode from 'qrcode';
/**
 * Generated class for the QrGeneratePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-qr-generate',
  templateUrl: 'qr-generate.html',
})
export class QrGeneratePage {

  code = 'Cliquez pour générer un qrcode';
  public generated: string;

  displayQrCode() {
    return this.generated !== '';
  }

  constructor(public navCtrl: NavController, private storage:Storage, private socialSharing: SocialSharing) {

  }

  process(){
    const self = this;
    QRCode.toDataURL(self.code, { errorCorrectionLevel: 'H' }, function (err, url) {
      self.generated = url;
      self.storage.length().then(index => {
        console.log(index);
        self.storage.set(index.toString(), {date: new Date().toISOString(), text: self.generated, name: self.code})
        console.log(self.storage);
      });
    })
  }

  share(){
    var objectShared = {
      message: "Voici mon QRCode",
      subject: "My QRCode",
      files: this.generated
    }
    this.socialSharing.shareWithOptions(objectShared)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrGeneratePage');
  }

}
