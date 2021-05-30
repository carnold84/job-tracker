import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() isPrimary: boolean = false;
  onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
