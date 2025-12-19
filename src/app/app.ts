import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { StickyNote } from './sticky-note/sticky-note';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, StickyNote, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected title = 'sticky-board';
  notes: any[] = [];
  newNoteTest: string = '';
  presetColor = [
    '#FFEB3B', // yellow
    '#FF69B4', // pink
    '#87CEEB', // sky blue
    '#90EE90', // light green
    '#DDA0DD', // plum
    '#FFB347', // orange
    '#77DD77', // pastel green
    '#AEC6CF', // pastel blue
    '#F5DEB3', // wheat
    '#E6E6FA', // lavender
  ];
  selectedColor = '#FFEB3B';
  ngOnInit(): void {
    const saved = localStorage.getItem('sticky-notes');
    if (saved) {
      this.notes = JSON.parse(saved);
    }
  }
  add() {
    const newNote = {
      id: Date.now(),
      text: this.newNoteTest,
      color: this.selectedColor,
    };
    this.notes = [...this.notes, newNote];
    this.newNoteTest = '';
    this.saveNotes();
  }
  onDelete(event: any) {
    this.notes = this.notes.filter((n) => n.id !== event);
    this.saveNotes();
  }
  selectColor(color: any) {
    this.selectedColor = color;
  }

  saveNotes() {
    localStorage.setItem('sticky-notes', JSON.stringify(this.notes));
  }
}
