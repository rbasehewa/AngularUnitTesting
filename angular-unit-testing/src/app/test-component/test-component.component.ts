import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponentComponent implements OnInit {

  public number1: number = 0;
  public number2: number = 0;
  public ops: string = ''; // second test para
  public total: number = 0;

  constructor(public cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.calculateNumbers(this.number1, this.number2, 'add');
  }

  public calculateNumbers(num1: number, num2: number, ops: string): void {
    if (num1 > 0 && num2 > 0 && ops === 'add') {
      this.total = num1 + num2; // if parrmaters has on values I need to check this line
    } else if (num1 > 0 && num2 > 0 && ops === 'sub') {
      this.total = num1 - num2; // if parrmaters has on values I need to check this line
    } else { 
      this.total = 0; // if parrmaters has no values
    }

    this.cdr.detectChanges();
  }

}
