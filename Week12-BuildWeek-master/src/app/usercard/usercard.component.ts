import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent implements OnInit {

  @Input() post!: Post

  @Input() index!: number

  @Output() customEvent= new EventEmitter()

  constructor(private post$: PostService) { }

  ngOnInit(): void {
  }

  dammiId(){
    this.post$.getPostId(this.post.id)
    console.log(this.post.id);
  }
  deletePost(){
    this.post$.deletePost(this.post.id)
    this.customEvent.emit(this.index)
    // aggiungere modale
  }

}
