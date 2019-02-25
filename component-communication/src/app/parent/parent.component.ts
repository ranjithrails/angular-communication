import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import {ChildComponent} from '../child/child.component'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit  {
  //Parent to child//
  parentMessage = "Message from Parents";
  //Parent to child//
  //Child to Parent using @viewchild
  @ViewChild(ChildComponent) child;
  message:string;
  //Child to Parent using @viewchild
  //Child to Parent using @output
  outputMessage:string;
  receiveMessage($event) {
    this.outputMessage = $event
  }
  //Child to Parent using @output


  constructor() { }

  ngOnInit() {
  }
//Child to Parent using @viewchild
  ngAfterViewInit() {
    this.message = this.child.message
  }
  //Child to Parent using @viewchild

}
