import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { DoctorService } from './sdk/custom/doctor.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  currentPageTitle = 'Dashboard';

  appPages = [];
  user: any;
  Logout: any;
  MyAppointments: any;
  Profile: any;
  Settings: any;
  Dashboard: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private doctorService: DoctorService,
    private _translate: TranslateService,

  ) {
    this.user = this.storage.get('user');
    this.initializeApp();
this.setLanguae();
  }
  async setLanguae(){
    console.log('storage language',await this.storage.get('language'));

    this._translate.setDefaultLang(await this.storage.get('language'));
      this._translate.get("Menu").subscribe((res: any) => {
        this.Profile = res.Profile;
        this.Settings = res.Settings;
        this.MyAppointments = res.MyAppointments;
        this.Logout = res.Logout;
        this.Dashboard = res.Dashboard;
      });
      console.log('this.appPages',this.appPages);
  }
  logOut(p) {
    if (p.title == 'Logout') {
      this.storage.clear();
    }
  }
  async initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.doctorService.getObservable().subscribe(async (data) => {
      console.log("Data received:", data);
      // this.customerImg = data.customerImg;
      this.storage.set('user', data.user);
      this.user = data.user;
      console.log('storage language',await this.storage.get('language'));
      this._translate.setDefaultLang(await this.storage.get('language'));
      this._translate.get("Menu").subscribe((res: any) => {
        this.Profile = res.Profile;
        this.Settings = res.Settings;
        this.MyAppointments = res.MyAppointments;
        this.Logout = res.Logout;
        this.Dashboard = res.Dashboard;
      });
      if (this.user == 'doctor') {
        this.appPages = [
          {
            title: this.Profile,
            url: '/doctor-profile',
            icon: 'film'
          },
          {
            title: this.Settings,
            url: '/doctor-edit-profile',
            icon: 'settings'
          },
          {
            title: this.MyAppointments,
            url: '/doctor-appointment',
            icon: 'film'
          },
          {
            title: this.Logout,
            url: '/home',
            icon: 'log-out'
          }
        ];
      } else {
        this.appPages = [
          {
            title: this.Dashboard,
            url: '/patient-dashboard',
            icon: 'easel'
          },
          {
            title: this.Profile,
            url: '/patient-profile',
            icon: 'film'
          },
          {
            title: this.Settings,
            url: '/patient-edit-profile',
            icon: 'settings'
          },
          {
            title: this.MyAppointments,
            url: '/my-bookings',
            icon: 'film'
          },
          {
            title: this.Logout,
            url: '/home',
            icon: 'log-out'
          }
        ];
      }
    });
    this.user = await this.storage.get('user');
    console.log("this.user:", this.user);

    if (this.user == 'doctor') {
      this.appPages = [
        {
          title: 'Profile',
          url: '/doctor-profile',
          icon: 'film'
        },
        {
          title: 'Settings',
          url: '/doctor-edit-profile',
          icon: 'settings'
        },
        {
          title: 'My Appointments',
          url: '/my-bookings',
          icon: 'film'
        },
        {
          title: 'Logout',
          url: '/home',
          icon: 'log-out'
        }
      ];
    } else {
      this.appPages = [
        {
          title: 'Dashboard',
          url: '/patient-dashboard',
          icon: 'easel'
        },
        {
          title: 'Profile',
          url: '/patient-profile',
          icon: 'film'
        },
        {
          title: 'Settings',
          url: '/patient-edit-profile',
          icon: 'settings'
        },
        {
          title: 'My Appointments',
          url: '/my-bookings',
          icon: 'film'
        },
        {
          title: 'Logout',
          url: '/home',
          icon: 'log-out'
        }
      ];
    }
  }
}
