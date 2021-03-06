import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostComponent } from './components/post/post.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';

// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent // Default Route
  },
  {
    path: 'dashboard',
    component: DashboardComponent, // Dashboard Route
    canActivate : [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent, // Register Route
    canActivate : [NotAuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent // Login Route
  },
  {
    path: 'profile',
    component: ProfileComponent, // Profile Route
    canActivate : [AuthGuard]
  },
  {
    path: 'post',
    component: PostComponent, // Post Route
    canActivate : [AuthGuard]
  },
  { path: '**', component: HomeComponent } // "Catch-All" Route
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
