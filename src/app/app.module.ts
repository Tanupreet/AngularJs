import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import { RouterModule,Routes }   from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { ListComponent } from './list/list.component';

import { AppComponent } from './app.component';
import { ChannelComponent } from './channel/channel.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';

const route:Routes=([
  {path:'',component:NewsComponent}
  	,{path:'search',component:ListComponent},
    {path: 'favourites',
    component: FavouritesComponent
  },
  {path: 'login',
    component: LoginComponent}
])

@NgModule({
 declarations: [
   AppComponent,
   ListComponent,
   ChannelComponent,
   FavouritesComponent,
   NewsComponent,
   LoginComponent
 ],
 imports: [
   BrowserModule,
   FormsModule,
   HttpModule,
   RouterModule.forRoot(route)
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }