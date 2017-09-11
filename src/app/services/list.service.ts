import { Injectable } from '@angular/core';
 import { Http, Response} from '@angular/http';
 import 'rxjs/add/operator/map';
 import {ListComponent} from "../list/list.component"
  import {ChannelComponent} from "../channel/channel.component"
@Injectable()
export class ListService {
   
 
constructor(private http: Http) { }

   getData(){
   	var apiUrl = 'https://newsapi.org/v1/sources?language=en'
   	return this.http.get(apiUrl)
   	.map((res: Response) => res.json())
   }
   

   search(name){
   	var api='https://newsapi.org/v1/articles?source='+name+'&sortBy=top&apiKey=b56533c32a95488e98bfaeb008b49439'
   	return this.http.get(api)
   		.map((res:Response)=>res.json())
   }

  addfavourites(dataa)
  {
      return this.http
         .post('http://localhost:3001/insert',dataa)
            .map((res:Response)=>res.json());
  }


  
// getImages()
// {this.getData().subscribe(data=>{
// 	console.log(data);
// 	this.data=data;
// })

}



