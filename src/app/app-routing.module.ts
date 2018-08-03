import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GoogleNewsComponent } from './google-news/google-news.component';
import { GoogleNewsDetailsComponent } from './google-news-details/google-news-details.component';



/*should be Home Module*/
const routes: Routes = [
  {path: '', component: GoogleNewsComponent},
  {path: 'googleNewsDetails', component: GoogleNewsDetailsComponent},
  


    
    
  
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
