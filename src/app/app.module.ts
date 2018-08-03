import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GoogleNewsComponent } from './google-news/google-news.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleNewsItemComponent } from './google-news/google-news-item/google-news-item.component';
import { AppRoutingModule } from './app-routing.module';
import { GoogleNewsListComponent } from './google-news/google-news-list/google-news-list.component';
import { GoogleNewsDetailsComponent } from './google-news-details/google-news-details.component';
import { GoogleNewsService } from './data/services/google-news-service';
import { CommonModule } from '@angular/common/src/common_module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
    GoogleNewsComponent,
    FooterComponent,
    
    GoogleNewsItemComponent,
    GoogleNewsListComponent,
    GoogleNewsDetailsComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
    // import HttpClientModule after BrowserModule.
    HttpClientModule
  ],
  providers: [GoogleNewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
