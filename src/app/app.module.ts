import { NgModule, ErrorHandler } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyAccount } from '../pages/hello-ionic/hello-ionic';
import { HomePage } from '../pages/home/home';
import { PostPage} from '../pages/post/post';
import { ReportPage } from '../pages/report/report';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {InAppBrowser} from "@ionic-native/in-app-browser";

@NgModule({
  declarations: [
    MyApp,
    MyAccount,
    ItemDetailsPage,
   // DetailsPage,
    ListPage,
    HomePage,
    PostPage,
    ReportPage,
    PdfViewerComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyAccount,
    ItemDetailsPage,
    ReportPage,
    ListPage,
   // DetailsPage,
    HomePage,
    PostPage,

  ],
  providers: [
    StatusBar,
    InAppBrowser,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
