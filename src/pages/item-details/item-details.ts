import {Component} from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  template: `
  <pdf-viewer *ngFor="let item of items" [src]="item.pdfSrc"
    [original-size]='true'
  style="display: block;"
  ></pdf-viewer> `,
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public browse: InAppBrowser) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.items = [
      {
        'title': 'Archival Policy',
        'pdfSrc': "assets/policies/archival_policy.pdf",
      },
      {
        'title': 'Cobec Revised',
        'pdfSrc': 'assets/policies/cobec-revised-18jan2017.pdf',
      },
      {
        'title': 'Committees of Board',
        'pdfSrc': 'assets/policies/composition_of_various_committees_of_board_of_directors_new.pdf',
      },
      {
        'title': 'Corporate Social Responsibility',
        'pdfSrc': 'src/assets/policies/corporate_social_responsibility_policy.pdf',
      },
      {
        'title': 'Non-Executive Directors Payments',
        'pdfSrc': 'assets/policies/corporate_social_responsibility_policy.pdf',
      },
      {
        'title': 'Fair Disclosure Code',
        'pdfSrc': 'assets/policies/fair_disclosure_code_new.pdf',
      },
      {
        'title': 'Sexual Harrassment Code',
        'pdfSrc': 'assets/policies/hcl_anti-bribery_policy_external.pdf',
      }
    ]
  }

  openPolicy(url){
    return this.browse.create(url,'_blank','location="no"');

  }
}
