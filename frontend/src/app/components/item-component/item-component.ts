import { DatePipe, NgStyle } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ModalTemplate } from '../modal-template/modal-template';
import { FormsModule } from '@angular/forms';
import { Task } from '../../services/api.service';

@Component({
  selector: 'item-component',
  imports: [DatePipe, LucideAngularModule, NgStyle, ModalTemplate, FormsModule],
  templateUrl: './item-component.html',
  styleUrl: './item-component.css',
})
export class ItemComponent {
  task = input.required<Task>();
  


  isModalOpen = false;

  openModal = () => {
    this.isModalOpen = true;
  };

  borderColor = (status: string) => {
    let color = 'red';

    if (status == 'Submitted') {
      color = 'green';
    }

    return {
      'border-left': `5px solid ${color}`,
      'background-color': 'white',
      'box-shadow': ' 0 4px 5px rgba(0, 0, 0, 0.08)',
    };
  };

  

  statusColor = (status: string) => {
    let color = '#f89c12ff';
    let bgColor = '#f9de8fff';

    if (status == 'Submitted') {
      color = '#02dc31ff';
      bgColor = '#9befa0ff';
    }
    else if(this.isOverdue(this.task().deadline)){
      color = '#f81212ff';
      bgColor = '#f98f8fff';
    }

    return {
      "color": color,
      'background-color': bgColor,
    };
  };

  title = '';
  content = '';
  deadline = '';
  apiService: any;

  ngOnInit() {
   
    this.title = this.task().title;
    this.content = this.task().content;
    this.deadline = this.task().deadline;
  }

  onDelete = output<number>();
  onEdit = output<Task>();
  onSubmit = output<number>();
  handleEdit = () => {
    
     let editTask = {
        title: this.title,
        content: this.content,
        deadline: this.deadline,
        userId: 2,
        taskId: this.task().taskId,
        status: this.task().status,
        createdAt: this.task().createdAt,
        submitAt: this.task().submitAt
      }

      this.isModalOpen = false;
     this.onEdit.emit(editTask);
  };

  handleDelete = (task: Task) => {

    if(!task.taskId) return;
   
    this.onDelete.emit(task.taskId);
    
  };



  handleSubmit = (task: Task) => {
    if(!task.taskId) return;

    this.onSubmit.emit(task.taskId);
    this.isModalOpen = false;
  }

  isOverdue(deadline: string): boolean {
    const deadlineDate = new Date(deadline); 
    const now = new Date(); 
    
   
   
    return deadlineDate < now;
  }
}


