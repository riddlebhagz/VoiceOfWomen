import {Component, Injectable} from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NavController,NavParams} from 'ionic-angular';



@Component({
  selector: 'page-about',
  template: `
<ion-content>
  <ion-list>
    <button class="list" ion-item *ngFor="let item of items" (click)="openPostPage(item.description)">
   <img src="{{item.img}}" height="55px" width="50px" margin-right="5px">{{item.title}}

    </button>
  </ion-list>
</ion-content>
`
})
export class PostPage {
  items = [];
  //desc: any;
  constructor(public nav: NavController, public browse: InAppBrowser) {
    this.items = [
      {
        'title': 'The latest Stats on Women in Tech',
        'img': '../../assets/icon/img1.png',
        'description': "https://www.themuse.com/advice/the-latest-stats-on-women-in-tech",
        'color': '#E63135'
      },
      {
        'title': '5 Ways Companies Can Attract More Women',
          'img': '../../assets/icon/img2.png',
        'description': 'https://www.themuse.com/advice/5-ways-companies-can-attract-more-women-aside-from-offering-to-freeze-their-eggs',
        'color': '#0CA9EA'
      },
      {
        'title': 'You Can’t Be What You Can’t See: How to Get More Women in Tech',
        'img': '../../assets/icon/img3.png',
        'description': 'https://www.themuse.com/advice/you-cant-be-what-you-cant-see-how-to-get-more-women-in-tech',
        'color': '#F46529'
      },
      {
        'title': '20 Myths You Probably Still Believe About Working in Tech',
        'img': '../../assets/icon/img4.png',
        'description': 'https://www.themuse.com/advice/20-myths-you-probably-still-believe-about-working-in-tech',
        'color': '#FFD439'
      },
      {
        'title': 'The Cold, Hard Proof That More Women Means Better Business',
        'img': '../../assets/icon/img5.png',
        'description': 'https://www.themuse.com/advice/the-cold-hard-proof-that-more-women-means-better-business',
        'color': '#CE6296'
      },
      {
        'title': 'Marissa Mayer Can’t Do It Alone',
        'img': '../../assets/icon/img6.png',
        'description': 'https://www.themuse.com/advice/marissa-mayer-cant-do-it-alone',
        'color': '#78BD43'
      },
      {
        'title': 'Learn to Code in 3 Months—or Less',
        'img': '../../assets/icon/img7.png',
        'description': 'https://www.themuse.com/advice/learn-to-code-in-3-monthsor-less',
        'color': '#78BD43'
      },
      {
        'title': 'Solving the Pipeline Problem: How to Get More Women in Tech',
        'img': '../../assets/icon/img9.png',
        'description': 'https://www.themuse.com/advice/solving-the-pipeline-problem-how-to-get-more-women-in-tech',
        'color': '#78BD43'
      }
    ]
  }



  openPostPage(url) {
      //let url = item.description;
      let desc = this.browse.create(url,'_blank','location="no"');
      desc.close();

  }

}
