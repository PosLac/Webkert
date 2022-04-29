import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //title = 'Forum';
  page = '';
  
  routes: Array<string> = [];
  
  
  ngOnInit(){
    this.routes = this.router.config.map(conf => conf.path) as string[];
    
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) =>{
      const currentPage = (evts.urlAfterRedirects as string).split('/')[1] as string;
      if(this.routes.includes(currentPage)){
        this.page = currentPage;
      }
    });
  }
  
  constructor(private router: Router){}
  
  changePage(selectedPage: string){
    this.router.navigateByUrl(selectedPage);
  }
}
