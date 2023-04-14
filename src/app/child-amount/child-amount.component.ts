import {
  Component,
  Input,
  Output,
  OnChanges,
  OnInit,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-child-amount',
  templateUrl: './child-amount.component.html',
  styleUrls: ['./child-amount.component.css'],
})
export class ChildAmountComponent implements OnInit, OnChanges {
  @Input()
  public amount: number = 0;

  @Input()
  public isIncreased: boolean = false;

  @Output()
  public notification: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    console.log(`Monto disponible: ${this.amount}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['amount'] && changes['amount'].currentValue) {
      console.log(`Monto disponible: ${this.amount}`);
    }
  }

  public withdraw(): void {
    this.amount -= 100;
    this.notification.emit(this.amount);
  }
}
