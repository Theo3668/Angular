import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  name;
  email;
  @Output() public formEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }
  OnClick(){
    this.formEvent.emit(this.name)
  }
}
