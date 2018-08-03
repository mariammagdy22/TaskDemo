import { Component, OnInit, Output } from '@angular/core';
import { GoogleNewsService } from '../../data/services/google-news-service';
import { IGoogleNews } from '../../data/interfaces/IgoogleNews';

@Component({
  selector: 'app-google-news-list',
  templateUrl: './google-news-list.component.html',
  styleUrls: ['./google-news-list.component.css']
})
export class GoogleNewsListComponent implements OnInit {

  GoogleNews:IGoogleNews[];
  constructor(public GoogleNewsService :GoogleNewsService) { 

  }
 public  data:any;
 @Output() Data;
  ngOnInit() {
    this.GoogleNewsService.getAll().subscribe(data => {
      // console.log(data["author"]);
      this.data=data["articles"];
      //  console.log(data["articles"][0]);
       
      //  this.data=data["author"];
     })
  }

}
