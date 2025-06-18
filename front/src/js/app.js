/**
 * @fileoverview Main application entry point
 * @module app
 */

import { PeopleManager } from './modules/peopleManager.js';
import { UIManager } from './modules/uiManager.js';

class App {
  constructor() {
    this.initialize();
  }

  initialize() {
    // Initialize people managers
    this.studentManager = new PeopleManager('student');
    this.teacherManager = new PeopleManager('teacher');

    // Initialize UI manager
    this.uiManager = new UIManager();
  }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new App();
}); 