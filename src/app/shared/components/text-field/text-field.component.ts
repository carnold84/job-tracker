import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextFieldComponent implements OnInit {
  @Input()
  control!: FormControl;
  @Input()
  id!: String;
  @Input()
  label?: String;
  @Input()
  name!: String;
  @Input() type: String = 'text';

  constructor() { }

  ngOnInit() {
  }

}
