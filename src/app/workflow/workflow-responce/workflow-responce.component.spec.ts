import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowResponceComponent } from './workflow-responce.component';

describe('WorkflowResponceComponent', () => {
  let component: WorkflowResponceComponent;
  let fixture: ComponentFixture<WorkflowResponceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowResponceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowResponceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
