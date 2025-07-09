import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: StarRatingComponent
    },
  ]
})
export class StarRatingComponent implements ControlValueAccessor {

  @Output() updates = new EventEmitter<{ value: number }>();
  @Input() viewOnly = false;
  @Input() showValues = false;
  @Input() set max(value) {
    this._max = value;
    this.starArr = new Array(value).map((e, i) => i + 1);
  }
  @Input() set size(value) { this._size = value; }

  _max = 5;
  _size: 'sm' | 'md' | 'lg' = 'lg';
  valueHolder = 0;
  tempValue = 0;

  starArr: number[] = [1, 2, 3, 4, 5];

  writeValue(obj: any): void {
    this.valueHolder = obj;
    this.tempValue = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange: any = () => { };

  onTouched: any = () => { };



  public get value() { return this.valueHolder; }

  public set value(v) {
    this.valueHolder = v;
    this.tempValue = v;
    this.onChange(this.valueHolder);
    this.updates.emit({ value: this.valueHolder });
    this.onTouched();
  }

  resetValue() {
    if (!this.viewOnly) {
      this.tempValue = this.valueHolder;
    }
  }

  checkValue(value: number) {
    if (!this.viewOnly) {
      this.tempValue = value;
    }
  }

  updateValue() {
    if (!this.viewOnly) {
      this.value = this.tempValue;
    }
  }

}
