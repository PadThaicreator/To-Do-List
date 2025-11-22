import { Routes } from '@angular/router';

import { AuthLayout } from './auth/auth-layout/auth-layout';
import { LoginComponent } from './auth/login-component/login-component';
import { RegisterComponent } from './auth/register-component/register-component';
import { Navbar } from './navbar/navbar';
import { HomeComponent } from './pages/home-component/home-component';
import { TaskComponent } from './pages/task-component/task-component';
import { NotFoundComponent } from './pages/not-found-component/not-found-component';
import { UserComponent } from './pages/user-component/user-component';

export const routes: Routes = [
    {
        path: '', 
        component: AuthLayout, 
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'register', 
                component: RegisterComponent,
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            }
        ]
    },
    {
        path : "pages",
        component : Navbar,
        children : [
            {
                path : "homepage",
                component : HomeComponent
            },
            {
                path : "tasks",
                component : TaskComponent
            },
            {
                path : "",
                redirectTo : "homepage",
                pathMatch : "full"
            },
            {
                path : "profile",
                component : UserComponent
            }
        ]
    },
    {
        path : "**",
        component : NotFoundComponent
    }
];
