import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  
  @Input() imageInput: any;
  commentObject: any = {};
  comments: Array<any> = [];
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  addComment(){
    if(this.commentObject.username && this.commentObject.comment){
      this.commentObject['date'] = new Date();
      this.comments.push(Object.assign({}, this.commentObject));
    }
  }
}