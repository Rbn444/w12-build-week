import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { comments, user } from '../post';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent implements OnInit {

  @Input() commento!: comments

  user: user[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.http.get<[]>("http://localhost:3000/api/users/" + this.commento.idUser).subscribe((user) => {
      this.user = user;
      console.log(this.user);
      console.log(user)
      // this.subU.next(this.user)
    })
  }
}
