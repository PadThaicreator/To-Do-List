import { Component, inject } from '@angular/core';
import { ItemComponent } from '../../components/item-component/item-component';
import { LucideAngularModule } from "lucide-angular";
import { ModalTemplate } from '../../components/modal-template/modal-template';
import { FormsModule } from '@angular/forms'; // <--- 1. Import มาจาก @angular/forms
import { ApiService, Task } from '../../services/api.service';
@Component({
  selector: 'task-component',
  imports: [ItemComponent, LucideAngularModule , ModalTemplate , FormsModule],
  templateUrl: './task-component.html',
  styleUrl: './task-component.css',
})
export class TaskComponent {
    tasksFromDB : Task[] = [];

  private apiService = inject(ApiService);

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.apiService.getTaskByUserId(2).subscribe({
      next: (data) => {
        this.tasksFromDB = data; 
        console.log('โหลดข้อมูลสำเร็จ:', data);
      },
      error: (err) => console.error('เกิดข้อผิดพลาด:', err),
      complete: () => console.log('ทำงานเสร็จสิ้น')
    });
  }

  deleteTask(id: number) {
    this.apiService.deleteTask(id).subscribe(() => {
      console.log('ลบสำเร็จ');
      this.loadTasks();
    });
  }

  
  
  isModalOpen = false;

  openModal = () =>{
    this.isModalOpen = true;
  }

  title = ""
  content = ""
  deadline = ""


  addTask() {
    const newTask: createTask = { title: this.title, content: this.content, deadline: this.deadline, userId: 2 };
    
    this.apiService.createTask(newTask).subscribe((res) => {
      console.log('สร้างสำเร็จ:', res);
      this.loadTasks(); // โหลดข้อมูลใหม่หลังสร้างเสร็จ
    });
  }
  
  handleCreate = () =>{

    if(this.title == "" || this.content == "" || this.deadline == "") return;

    this.addTask();
    this.loadTasks();
    this.title = "";
    this.content = "";
    this.deadline = "";
    this.isModalOpen = false;
  }

  editTask(task: Task) {
    if(!task.taskId) return;

    
    this.apiService.updateTask(task.taskId, task).subscribe(() => {
      console.log('แก้ไขสำเร็จ');
      this.loadTasks();
     
    });
  }

  updateStatus(id: number) {
    this.apiService.updateStatus(id).subscribe(() => {
      console.log('แก้ไขสถานะสำเร็จ');
      this.loadTasks();
    });
  }
}

interface createTask {
  title: string;
  content: string;
  deadline: string;
  userId: number;
}
