import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent implements OnInit {
  buttonType = 'default'; // default || success || error
  rounded = true
  @Input()
  get type() {
    return this.buttonType
  }
  set type(newType) {
    this.buttonType = newType
  }

  @Output() userselect = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
