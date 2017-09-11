import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FavouritesService {

  constructor(private http: Http) { }

getData(news:any) {
      return this.http.post('http://localhost:3001/show',news)
      .map(res=>res.json())
  }

showData() {
      return this.http.get('http://localhost:3001/find')
      .map(res=>res.json())
  }

editData(data:any, up:any) {
      return this.http.put('http://localhost:3001/update/'+data.date,up)
      .map(res=>res.json())
  }

deletedata(data:any) {
      return this.http.delete('http://localhost:3001/delete/'+data._id)
      .map(res=>res.json())
  }


}

