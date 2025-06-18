/**
 * @fileoverview Utility functions for DOM manipulation
 * @module utils/dom
 */

/**
 * Updates the content of multiple elements with data from an object
 * @param {Object} elements - Object containing element references
 * @param {Object} data - Data to update the elements with
 * @returns {void}
 */
export const updateElements = (elements, data) => {
  try {
    if (!elements || !data) {
      throw new Error('Elements and data are required');
    }

    Object.entries(elements).forEach(([key, element]) => {
      if (element && data[key] !== undefined) {
        if (element.tagName === 'IMG') {
          element.src = data[key];
        } else {
          element.textContent = data[key];
        }
      }
    });
  } catch (error) {
    console.error('Error updating elements:', error);
  }
};

/**
 * Toggles active class on elements
 * @param {string} selector - CSS selector for the elements
 * @param {HTMLElement} activeElement - Element to set as active
 * @returns {void}
 */
export const toggleActiveClass = (selector, activeElement) => {
  try {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => element.classList.remove('active'));
    activeElement.classList.add('active');
  } catch (error) {
    console.error('Error toggling active class:', error);
  }
}; 