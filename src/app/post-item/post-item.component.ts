
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent {
  @Input() post: any;
  @Input() showComments: boolean;
  @Output() toggleComments = new EventEmitter<number>();
}
