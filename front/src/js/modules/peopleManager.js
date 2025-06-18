/**
 * @fileoverview Module for managing people (students and teachers) data and UI
 * @module modules/peopleManager
 */

import { people } from '../data/people.js';
import { updateElements } from '../utils/dom.js';

export class PeopleManager {
  constructor(type) {
    this.type = type;
    this.data = type === 'student' ? people.students : people.teachers;
    this.elements = {
      select: document.getElementById(`${type}Select`),
      name: document.getElementById(`${type}Name`),
      email: document.getElementById(`${type}Email`),
      contact: document.getElementById(`${type}Contact`),
      image: document.getElementById(`${type}Image`)
    };
    this.initialize();
  }

  initialize() {
    if (!this.elements.select) {
      console.error(`Select element for ${this.type} not found`);
      return;
    }

    this.populateSelect();
    this.setupEventListeners();
  }

  populateSelect() {
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Selecione...';
    this.elements.select.appendChild(defaultOption);

    Object.entries(this.data).forEach(([id, person]) => {
      const option = document.createElement('option');
      option.value = id;
      option.textContent = person.name;
      this.elements.select.appendChild(option);
    });
  }

  setupEventListeners() {
    this.elements.select.addEventListener('change', () => this.handleSelection());
  }

  handleSelection() {
    const selected = this.elements.select.value;
    if (!selected) {
      this.clearDisplay();
      return;
    }

    const data = this.data[selected];
    if (data) {
      updateElements(this.elements, {
        name: data.name,
        email: data.email,
        contact: data.contact,
        image: data.image
      });
    }
  }

  clearDisplay() {
    updateElements(this.elements, {
      name: '',
      email: '',
      contact: '',
      image: '/assets/images/default.png'
    });
  }
} 