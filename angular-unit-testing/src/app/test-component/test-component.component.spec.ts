import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentComponent } from './test-component.component';

describe('TestComponentComponent', () => {
  let component: TestComponentComponent;
  let fixture: ComponentFixture<TestComponentComponent>; // public instant from test component

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponentComponent ]
    })
    .compileComponents();

    TestBed.overrideTemplate(TestComponentComponent, ''); // test html side (we don't it our main target is testing the function)
    fixture = TestBed.createComponent(TestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  /** 
   * start the describe and it
   * 
   * describe act like top level
   * 
   **/

  describe('calculateNumbers', () => {
    it('when parameters are passed - add', () => {

      component.number1 = 10;
      component.number2 = 20;

      // component.ngOnInit();

      component.calculateNumbers(10, 10, 'add'); // rather than calling ngoninit I call directly function name

      expect(component.total).toEqual(20);
    });

    it('when parameters are passed - sub', () => {
      component.calculateNumbers(10, 10, 'sub');

      expect(component.total).toEqual(0);
    });

    it('when parameters are not passed', () => {
      component.number1 = 0;
      component.number2 = 0;

      component.calculateNumbers(0,0,'');

      expect(component.total).toEqual(0);
    });
  });
});
