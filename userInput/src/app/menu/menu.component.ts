import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  menuArray = [{path:"logIn",name:"LogIn"},
               {path:"about",name:"About"},
               {path:"contact",name:"Contact"}]

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onNavigate(item) {
    this.router.navigateByUrl(item.path)
  }

}
