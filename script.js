'use strict';

class Modal {
  _btnEls = document.querySelectorAll('.show-modal');
  _modalEl = document.querySelector('.modal');
  _closeBtnEl = document.querySelector('.close-modal');
  _overlayEl = document.querySelector('.overlay');
  _body = document.body;

  constructor() {
    this._btnEls.forEach(btn => btn.addEventListener('click', this._showModal.bind(this)));

    [this._closeBtnEl, this._overlayEl].forEach(el => el.addEventListener('click', this._hideModal.bind(this)));

    this._body.addEventListener('keyup', (e) => {
      if (e.code === 'Escape') this._hideModal();
    });
  }

  _showModal() {
    this._modalEl.classList.remove('hidden');
    this._blurBackground();
  }

  _hideModal() {
    this._modalEl.classList.add('hidden');
    this._clearBackground();
  }

  _blurBackground() {
    this._overlayEl.classList.remove('hidden');
  }

  _clearBackground() {
    this._overlayEl.classList.add('hidden');
  }
}

const modal = new Modal();