import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.page.html',
  styleUrls: ['./patient-dashboard.page.scss'],
})
export class PatientDashboardPage implements OnInit {
  title: any;
  appointmentsLabel: any;
  AccountSettingLabel: any;
  ForumLabel: any;
  RecordsLabel: any;
  constructor(private storage: Storage,private menu: MenuController,private router: Router, private _translate: TranslateService,) { _translate.setDefaultLang('en'); }

  async ngOnInit(  ) {
    this.menu.enable(true);
    this._translate.setDefaultLang(await this.storage.get('language'));
    this._translate.get("PatientDashboard").subscribe((res: any) => {
      console.log('translation = ',res)

      this.title = res.title;
      this.appointmentsLabel = res.Appointments;
      this.AccountSettingLabel = res.AccountSetting;
      this.ForumLabel = res.Forum;
      this.RecordsLabel = res.Records;
    });
  }
  back() {

  }
  navigate(value) {
    if (value == 'appointment') {
      this.router.navigateByUrl('/book-appointment');
    }else if(value=='setting'){
      this.router.navigateByUrl('/patient-edit-profile');
    }
  }

}
