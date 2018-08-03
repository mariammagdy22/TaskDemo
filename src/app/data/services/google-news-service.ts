import { IGoogleNews } from "../interfaces/IgoogleNews";
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class GoogleNewsService {
    public GoogleNews: IGoogleNews[] = [
        
                {
                    Id:1,
                    title:'Survivors say Aeromexico plane went up in flames just minutes after crashing in Mexico',
                    description:'An Aeromexico airliner with more than 100 aboard crashed in the Mexican state of Durango.',
                    publishedAt:'',
                    urlToImage:''
        
                },
                {
                    Id:1,
                    title:'Survivors say Aeromexico plane went up in flames just minutes after crashing in Mexico',
                    description:'An Aeromexico airliner with more than 100 aboard crashed in the Mexican state of Durango.',
                    publishedAt:'',
                    urlToImage:''
        
                },    {
                    Id:1,
                    title:'Survivors say Aeromexico plane went up in flames just minutes after crashing in Mexico',
                    description:'An Aeromexico airliner with more than 100 aboard crashed in the Mexican state of Durango.',
                    publishedAt:'',
                    urlToImage:''
        
                },    {
                    Id:1,
                    title:'Survivors say Aeromexico plane went up in flames just minutes after crashing in Mexico',
                    description:'An Aeromexico airliner with more than 100 aboard crashed in the Mexican state of Durango.',
                    publishedAt:'',
                    urlToImage:''
        
                },
                ,    {
                    Id:1,
                    title:'Survivors say Aeromexico plane went up in flames just minutes after crashing in Mexico',
                    description:'An Aeromexico airliner with more than 100 aboard crashed in the Mexican state of Durango.',
                    publishedAt:'',
                    urlToImage:''
        
                },,    {
                    Id:1,
                    title:'Survivors say Aeromexico plane went up in flames just minutes after crashing in Mexico',
                    description:'An Aeromexico airliner with more than 100 aboard crashed in the Mexican state of Durango.',
                    publishedAt:'',
                    urlToImage:''
        
                },,    {
                    Id:1,
                    title:'Survivors say Aeromexico plane went up in flames just minutes after crashing in Mexico',
                    description:'An Aeromexico airliner with more than 100 aboard crashed in the Mexican state of Durango.',
                    publishedAt:'',
                    urlToImage:''
        
                },,    {
                    Id:1,
                    title:'Survivors say Aeromexico plane went up in flames just minutes after crashing in Mexico',
                    description:'An Aeromexico airliner with more than 100 aboard crashed in the Mexican state of Durango.',
                    publishedAt:'',
                    urlToImage:''
        
                },
              
            ];

    public currentGoogleNews:IGoogleNews=
    {
        
            Id:1,
            title:'Survivors say Aeromexico plane went up in flames just minutes after crashing in Mexico',
            description:'An Aeromexico airliner with more than 100 aboard crashed in the Mexican state of Durango.',
            publishedAt:'',
            urlToImage:''

      

    };
   public data :any;

 
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {
     
   }
  
    // Initialization of AppointmentcardService Data
    public IsEditAppointment:boolean=false;
  
    
 

    // CRUD Operations

    public getAll()  : Observable<any> {

    
        return   this.http.get('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4', {responseType: 'json'});
    }

    public add(GoogleNews: IGoogleNews) {
        this.GoogleNews.push(GoogleNews);
    }

    public update(GoogleNews: IGoogleNews){
        if (this.findIndex(GoogleNews) > -1) {
        this.GoogleNews[this.findIndex(GoogleNews)] = GoogleNews;
        }
    }

    public findIndex(GoogleNews:IGoogleNews):number { 
        let index = this.GoogleNews.indexOf(GoogleNews);
        return index;
  }

  public delete(GoogleNews: IGoogleNews){
    if (this.findIndex(GoogleNews) > -1) {
        this.GoogleNews.splice(this.findIndex(GoogleNews), 1);
     }
  }


}
