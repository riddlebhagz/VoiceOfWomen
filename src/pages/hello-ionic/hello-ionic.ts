import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { PostPage } from '../post/post';
import { ReportPage } from '../report/report';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class MyAccount {
  tab1Root: any = HomePage;
  tab2Root: any = PostPage;
  tab3Root: any = ReportPage;

  constructor() {

  }
}
