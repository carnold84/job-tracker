import { Component, OnInit, Input, EventEmitter, Output, HostListener } from '@angular/core';

export const STATUSES = {
  ACTIVE: 'active',
  CLOSED: 'closed',
  FAILED: 'failed',
  SUCCESS: 'success',
  WAITING: 'waiting'
};

@Component({
  selector: 'status-picker',
  templateUrl: './status-picker.component.html',
  styleUrls: ['./status-picker.component.scss']
})
export class StatusPickerComponent implements OnInit {
  STATUSES = STATUSES;

  @Input() value: string = this.STATUSES.ACTIVE;
  @Output() change = new EventEmitter();

  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public onClick = () => {
    this.isOpen = !this.isOpen;
  }

  public onClose = () => {
    this.isOpen = false;
  }

  public onSelect = (status: any) => {
    this.isOpen = false;
    this.change.emit(status)
  }

}
