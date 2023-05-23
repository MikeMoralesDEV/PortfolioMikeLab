import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoproyectoComponent } from './dialogoproyecto.component';

describe('DialogoproyectoComponent', () => {
  let component: DialogoproyectoComponent;
  let fixture: ComponentFixture<DialogoproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
