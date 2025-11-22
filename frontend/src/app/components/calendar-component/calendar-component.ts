import { Component, inject, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'; // สำหรับมุมมองรายเดือน
import timeGridPlugin from '@fullcalendar/timegrid'; // สำหรับมุมมองรายสัปดาห์/รายวัน
import { FullCalendarModule } from '@fullcalendar/angular'; // <--- 1. Import ตรงนี้
import listPlugin from '@fullcalendar/list'; // <--- Import
import { CommonModule } from '@angular/common';
import { ApiService, Task } from '../../services/api.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar-component.html',
  styleUrls: ['./calendar-component.css'],
  imports: [FullCalendarModule, CommonModule],
})
export class CalendarComponent implements OnInit {
  private apiService = inject(ApiService);
  tasksFromDB: Task[] = [];

  
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listWeek',
    },
  };

  loadTasks() {
    this.apiService.getTaskByUserId(2).subscribe({
      next: (data) => {
        this.tasksFromDB = data;
        console.log('โหลดข้อมูลสำเร็จ:', data);

        
        const calendarEvents = data.map((task) => {
          return {
            title: task.title,
            start: task.deadline, 
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            extendedProps: {
              status: task.status,
              content: task.content,
            },
        
            textColor: 'black',
          };
        });

       
        this.calendarOptions = {
          ...this.calendarOptions,
          events: calendarEvents,
        };
      },
      error: (err) => console.error('เกิดข้อผิดพลาด:', err),
      complete: () => console.log('ทำงานเสร็จสิ้น'),
    });
  }

  ngOnInit() {
    this.loadTasks();
  }
}
