import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlotsListPage } from './slots-list.page';

describe('SlotsListPage', () => {
  let component: SlotsListPage;
  let fixture: ComponentFixture<SlotsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlotsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
