import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { PanelChevronModule } from '../../components/panel-chevron/panel-chevron.module';
import { TeammatesRouterModule } from '../../components/teammates-router/teammates-router.module';
import { InstructorSessionNoResponsePanelComponent } from './instructor-session-no-response-panel.component';

describe('InstructorSessionNoResponsePanelComponent', () => {
  let component: InstructorSessionNoResponsePanelComponent;
  let fixture: ComponentFixture<InstructorSessionNoResponsePanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorSessionNoResponsePanelComponent],
      imports: [
        RouterModule,
        HttpClientTestingModule,
        NgbModule,
        PanelChevronModule,
        LoadingSpinnerModule,
        TeammatesRouterModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorSessionNoResponsePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
