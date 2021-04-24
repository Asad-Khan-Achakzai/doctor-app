import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'patient-signup',
    loadChildren: () => import('./patient/patient-signup/patient-signup.module').then( m => m.PatientSignupPageModule)
  },
  {
    path: 'patient-dashboard',
    loadChildren: () => import('./patient/patient-dashboard/patient-dashboard.module').then( m => m.PatientDashboardPageModule)
  },
  {
    path: 'book-appointment',
    loadChildren: () => import('./patient/book-appointment/book-appointment.module').then( m => m.BookAppointmentPageModule)
  },
  {
    path: 'doctor-signup',
    loadChildren: () => import('./doctor/doctor-signup/doctor-signup.module').then( m => m.DoctorSignupPageModule)
  },
  {
    path: 'doctor-profile',
    loadChildren: () => import('./doctor/doctor-profile/doctor-profile.module').then( m => m.DoctorProfilePageModule)
  },
  {
    path: 'doctor-edit-profile',
    loadChildren: () => import('./doctor/doctor-edit-profile/doctor-edit-profile.module').then( m => m.DoctorEditProfilePageModule)
  },
  {
    path: 'patient-profile',
    loadChildren: () => import('./patient/patient-profile/patient-profile.module').then( m => m.PatientProfilePageModule)
  },
  {
    path: 'patient-edit-profile',
    loadChildren: () => import('./patient/patient-edit-profile/patient-edit-profile.module').then( m => m.PatientEditProfilePageModule)
  },
  {
    path: 'slots-list',
    loadChildren: () => import('./doctor/slots-list/slots-list.module').then( m => m.SlotsListPageModule)
  },
  {
    path: 'my-bookings',
    loadChildren: () => import('./patient/my-bookings/my-bookings.module').then( m => m.MyBookingsPageModule)
  },
  {
    path: 'doctor-appointment',
    loadChildren: () => import('./doctor/doctor-appointment/doctor-appointment.module').then( m => m.DoctorAppointmentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
