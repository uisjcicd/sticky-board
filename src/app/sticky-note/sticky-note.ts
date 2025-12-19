import { DragDropModule } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sticky-note',
  imports: [DragDropModule],
  templateUrl: './sticky-note.html',
  styleUrl: './sticky-note.css',
})
export class StickyNote {
  @Input() note: any;
  @Output() delete = new EventEmitter();
  deleteNote() { 
    this.delete.emit(this.note.id)
  }
}
