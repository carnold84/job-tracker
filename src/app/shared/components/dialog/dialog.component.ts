import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() confirm: EventEmitter<any> = new EventEmitter();
  @Input() message: string = '';
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public onCancel = (evt: any) => {
    this.cancel.emit(evt);
  };

  public onConfirm = (evt: any) => {
    this.confirm.emit(evt);
  };

}
