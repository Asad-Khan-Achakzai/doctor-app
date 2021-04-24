import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientSignupPage } from './patient-signup.page';

describe('PatientSignupPage', () => {
  let component: PatientSignupPage;
  let fixture: ComponentFixture<PatientSignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSignupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
