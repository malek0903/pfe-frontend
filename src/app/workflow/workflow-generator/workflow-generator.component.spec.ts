import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowGeneratorComponent } from './workflow-generator.component';

describe('WorkflowGeneratorComponent', () => {
  let component: WorkflowGeneratorComponent;
  let fixture: ComponentFixture<WorkflowGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
