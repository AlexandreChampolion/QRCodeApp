import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import QRCode from 'qrcode';

/*
  Generated class for the QrCodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrCodeProvider {

  public generated : string;
  
  constructor(public http: HttpClient) {
    console.log('Hello QrCodeProvider Provider');
  }

  code = 'Cliquez pour générer un qrcode';

  displayQrCode() {
    return this.generated !== '';
  }

  generate(){
    const self = this;
    QRCode.toDataURL(self.code, { errorCorrectionLevel: 'H' }, function (err, url) {
      self.generated = url;
    })
  }
}
