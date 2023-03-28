import {
  Component,
  OnChanges,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css'],
})
export class StarsComponent implements OnChanges {
  // we want to receive the star rating from the parent component
  // use property binding in the product html template to pass value to stars component
  @Input() rating: number = 0;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  cropWidth: number = 75;

  ngOnChanges(): void {
    this.cropWidth = (this.rating * 75) / 5;
  }

  // use notify event to pass along the message "clicked" to the parent component
  onClick(): void {
    this.notify.emit(`The star rating is ${this.rating}`);
  }
}
