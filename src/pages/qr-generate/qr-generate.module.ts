import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrGeneratePage } from './qr-generate';

@NgModule({
  declarations: [
    QrGeneratePage,
  ],
  imports: [
    IonicPageModule.forChild(QrGeneratePage),
  ],
})
export class QrGeneratePageModule {}
