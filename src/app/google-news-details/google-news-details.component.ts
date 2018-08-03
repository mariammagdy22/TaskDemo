import { Component, OnInit } from '@angular/core';
import { GoogleNewsService } from '../data/services/google-news-service';

@Component({
  selector: 'app-google-news-details',
  templateUrl: './google-news-details.component.html',
  styleUrls: ['./google-news-details.component.css']
})
export class GoogleNewsDetailsComponent implements OnInit {

  constructor(public GoogleNewsService :GoogleNewsService) { }

  ngOnInit() {
  }

}
