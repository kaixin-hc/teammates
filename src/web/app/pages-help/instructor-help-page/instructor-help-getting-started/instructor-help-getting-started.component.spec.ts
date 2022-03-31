import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TeammatesRouterModule } from '../../../components/teammates-router/teammates-router.module';
import { InstructorHelpGettingStartedComponent } from './instructor-help-getting-started.component';

@Component({ selector: 'tm-example-box', template: '' })
class ExampleBoxStubComponent {}
@Component({ selector: 'tm-add-course-form', template: '' })
class AddCourseFormStubComponent { @Input() isEnabled?: boolean; }

describe('InstructorHelpGettingStartedComponent', () => {
  let component: InstructorHelpGettingStartedComponent;
  let fixture: ComponentFixture<InstructorHelpGettingStartedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        InstructorHelpGettingStartedComponent,
        ExampleBoxStubComponent,
        AddCourseFormStubComponent,
      ],
      imports: [
        RouterTestingModule,
        TeammatesRouterModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorHelpGettingStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
