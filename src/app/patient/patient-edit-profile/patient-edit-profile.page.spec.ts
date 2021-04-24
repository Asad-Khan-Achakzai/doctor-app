import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientEditProfilePage } from './patient-edit-profile.page';

describe('PatientEditProfilePage', () => {
  let component: PatientEditProfilePage;
  let fixture: ComponentFixture<PatientEditProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientEditProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientEditProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
