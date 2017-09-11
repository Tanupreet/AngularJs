import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
title = 'app';
  data:any;


  constructor() { }
  
  onrecieve(event)
  {
  	this.data=event;
  }
  

  ngOnInit() {
  }

}
