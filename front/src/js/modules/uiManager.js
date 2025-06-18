/**
 * @fileoverview Module for managing UI interactions (grades and schedules)
 * @module modules/uiManager
 */

import { toggleActiveClass } from '../utils/dom.js';

export class UIManager {
  constructor() {
    this.initialize();
  }

  initialize() {
    this.setupGradeButtons();
    this.setupScheduleButtons();
  }

  setupGradeButtons() {
    const gradeButtons = document.querySelectorAll('.tri');
    if (gradeButtons.length) {
      gradeButtons.forEach(button => {
        button.addEventListener('click', () => {
          toggleActiveClass('.tri', button);
        });
      });
    }
  }

  setupScheduleButtons() {
    const scheduleButtons = document.querySelectorAll('.dia');
    if (scheduleButtons.length) {
      scheduleButtons.forEach(button => {
        button.addEventListener('click', () => {
          toggleActiveClass('.dia', button);
        });
      });
    }
  }
} 