import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childMessage:string;
  //Child to Parent using @viewchild
  message = 'Hola Mundo!';
  //Child to Parent using @viewchild
  constructor() { }

  ngOnInit() {
    this.message = "Updating from oninit";
  }
  //Child to Parent using @output
  outputMessage = "Message using output";
    @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    this.messageEvent.emit(this.outputMessage)
  }
  //Child to Parent using @output
}
