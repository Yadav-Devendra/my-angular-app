import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTooltipComponent } from './link-tooltip.component';

describe('LinkTooltipComponent', () => {
  let component: LinkTooltipComponent;
  let fixture: ComponentFixture<LinkTooltipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkTooltipComponent]
    });
    fixture = TestBed.createComponent(LinkTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
