import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorSignupPage } from './doctor-signup.page';

describe('DoctorSignupPage', () => {
  let component: DoctorSignupPage;
  let fixture: ComponentFixture<DoctorSignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorSignupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
