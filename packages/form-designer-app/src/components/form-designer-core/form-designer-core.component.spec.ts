import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDesignerCoreComponent } from './form-designer-core.component';

describe('FormDesignerCoreComponent', () => {
  let component: FormDesignerCoreComponent;
  let fixture: ComponentFixture<FormDesignerCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDesignerCoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDesignerCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
