import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { KeyProviderService } from '../key-provider.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  listArray
  
  //inject the provider and subscribe to the url data
  constructor(private keyProvider:KeyProviderService) {
    this.keyProvider.getInfor().subscribe((data)=>{
      console.log(data)
      this.listArray = data //asigns what is in data inside the list Arrai 
    })
   }

  ngOnInit() {
  }

}
