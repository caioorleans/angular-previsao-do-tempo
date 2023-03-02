import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnespectedErrorComponent } from './unespected-error.component';

describe('UnespectedErrorComponent', () => {
  let component: UnespectedErrorComponent;
  let fixture: ComponentFixture<UnespectedErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnespectedErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnespectedErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
