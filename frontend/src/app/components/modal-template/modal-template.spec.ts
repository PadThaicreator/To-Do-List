import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTemplate } from './modal-template';

describe('ModalTemplate', () => {
  let component: ModalTemplate;
  let fixture: ComponentFixture<ModalTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
