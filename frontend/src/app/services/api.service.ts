import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';


export interface Task {
  taskId?: number;
  title: string;
  status: string;
  content: string;
  deadline: string;
  userId: number;
  createdAt: string;
  submitAt: string;
}

interface createTask {
  title: string;
  content: string;
  deadline: string;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // เรียกใช้ HttpClient แบบใหม่ (ใช้ inject)
  private http = inject(HttpClient);
  
  // URL ของ Backend คุณ
  private apiUrl = 'http://localhost:8080'; 





  getTaskByUserId(id: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/tasksByUserID/${id}`);
  }


  createTask(task: createTask){
    return this.http.post(`${this.apiUrl}/createTask`, task, { responseType: 'text' });
  }


  updateTask(id: number, task: Task) {
    return this.http.put(`${this.apiUrl}/updateTask/${id}`, task , { responseType: 'text' });
  }


  updateStatus(id: number) {
    return this.http.patch(`${this.apiUrl}/updateStatus/${id}` , {}, { responseType: 'text' });
  }


  deleteTask(id: number){
    return this.http.delete(`${this.apiUrl}/deleteTask/${id}`, { responseType: 'text' });
  }

  login(email : string , password : string){
    return this.http.post(`${this.apiUrl}/login` , {email , password} )
  }

  register(username : string , email : string , password : string){
    return this.http.post(`${this.apiUrl}/register` , {username , email , password} , { responseType: 'text' } )
  }
}