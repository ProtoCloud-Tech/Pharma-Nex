import { Component ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css',
  
})
export class LeftSidebarComponent {
  @Output() toggleClassEvent = new EventEmitter<void>();

  toggleClass() {
    this.toggleClassEvent.emit();
  }
}
