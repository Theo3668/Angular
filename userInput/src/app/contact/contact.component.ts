import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  message = ''
  constructor() { }

  ngOnInit() {
  }

}
