import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";
import { GoogleNewsService } from '../../data/services/google-news-service';
import { IGoogleNews } from '../../data/interfaces/IgoogleNews';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-google-news-item',
  templateUrl: './google-news-item.component.html',
  styleUrls: ['./google-news-item.component.css']
})
export class GoogleNewsItemComponent implements OnInit {
  //GoogleNews: Observable<IGoogleNews[]>;
  data:any;
  @Input() Data;
  public news:any;
  constructor(private router: Router,public GoogleNewsService :GoogleNewsService) { 
  ;
  console.log('sss');
  }
  ngOnInit(): void {
    // Making the HTTP Request
    this.news = this.Data;
    console.log(this.news);
  }
  showNewsDetails(data){
    this.GoogleNewsService.currentGoogleNews.urlToImage=this.news['urlToImage'];
    
    console.log(  this.data);
    this.router.navigate(['/googleNewsDetails']);
  }
}
