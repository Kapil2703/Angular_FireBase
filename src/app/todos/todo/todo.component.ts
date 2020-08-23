import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todo[];
  constructor() { }

  ngOnInit(): void {
    this.todos = [ {
      id:1,
      title:'todo one',
      completed:true
      },
      {
        id:2,
        title:'todo true',
        completed:false
      }
    ]
  }

}
