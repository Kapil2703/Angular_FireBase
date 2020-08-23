import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [TodoComponent, TodoItemComponent],
  imports: [CommonModule],
  exports: [TodoComponent],
})
export class TodosModule {}
