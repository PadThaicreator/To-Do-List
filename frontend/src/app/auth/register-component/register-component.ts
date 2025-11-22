import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register-component',
  imports: [FormsModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent {


  email = ""
  password =""
  confirmPassword = ""
  username = ""
  constructor(private router: Router) {}
  private apiService = inject(ApiService);


  GoBack = () =>{
    this.router.navigate(['/login']);
  }

  register() {
    this.apiService.register(this.username ,this.email , this.password).subscribe({
      next: (data) => {
       
         this.username = "";
          this.email = "";
          this.password = "";
          this.confirmPassword = "";

        this.router.navigate(["/login"])
      },
      error: (err) => {
        console.error('เกิดข้อผิดพลาด:', err) 
        alert("Email already exists")
      },
      complete: () => console.log('ทำงานเสร็จสิ้น')
    });
  }

  handleRegister = () =>{

    if(!this.password || !this.username || !this.email || !this.confirmPassword){
      alert("fill the blank") 
      return;
    }
    
    if(this.password != this.confirmPassword){
      alert("Password Not Match")
      return;
    }

    this.register();
   
    
  }
}
