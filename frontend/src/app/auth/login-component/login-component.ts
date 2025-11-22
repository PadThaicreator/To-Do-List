import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from "lucide-angular";
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [LucideAngularModule , FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {

  isShowPassword = false;
   private apiService = inject(ApiService);

  ngOnInit() {
    this.isShowPassword = false;
  }
  showPassword = () =>{
    this.isShowPassword = !this.isShowPassword;
  }

  email = "";
  password = "";
  constructor(private router: Router) {}
  login() {
    this.apiService.login(this.email , this.password).subscribe({
      next: (data) => {
        localStorage.setItem("user" , JSON.stringify(data));
        this.email = "";
        this.password = "";
        this.router.navigate(["/pages"])
      },
      error: (err) => console.error('เกิดข้อผิดพลาด:', err),
      complete: () => console.log('ทำงานเสร็จสิ้น')
    });
  }

  handleLogin(){
      this.login()

  }
}
