import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // ปกติ Navbar มักไม่ import RouterOutlet ยกเว้นเป็น Layout Component

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  // 1. ประกาศตัวแปร (Property) โดยไม่ต้องมี let
  user: any = null; 

  // constructor() {
  //   // 2. เรียกใช้ฟังก์ชันเพื่อดึงค่าตอน Component ถูกสร้าง
  //   this.user = this.getUserFromStorage();
    
  // }

  

  getUserFromStorage() {
    const data = localStorage.getItem('user');

    if (!data) return null;
    
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error('Error parsing user data', error);
      return null;
    }
  }


  ngOnInit() {
     this.user = this.getUserFromStorage();
     
  }

}

