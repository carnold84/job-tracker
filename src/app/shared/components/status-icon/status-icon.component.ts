import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { STATUSES } from '../status-picker/status-picker.component';

@Component({
  selector: 'status-icon',
  templateUrl: './status-icon.component.html',
  styleUrls: ['./status-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusIconComponent implements OnInit {
  @Input() selected: boolean = false;
  @Input() status: String = STATUSES.ACTIVE;

  STATUSES = STATUSES;

  constructor() { }

  ngOnInit() { }

}
