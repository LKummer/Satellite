export class PopupAnimator {
  constructor(
    popup,
    popper,
    { showClass, showAnimationClass, hideAnimationClass }
  ) {
    this.popup = popup;
    this.popper = popper;
    this.showClass = showClass;
    this.showAnimationClass = showAnimationClass;
    this.hideAnimationClass = hideAnimationClass;
    this.shown = false;
    popup.addEventListener('animationend', (event) => {
      event.target.classList.remove(this.showAnimationClass);
      if (event.target.classList.contains(this.hideAnimationClass)) {
        event.target.classList.remove(this.showClass, this.hideAnimationClass);
      }
    });
  }
  show() {
    if (!this.shown) {
      this.popup.classList.add(this.showClass, this.showAnimationClass);
      this.popup.setAttribute('aria-hidden', false);
      this.popper.update();
      this.shown = true;
    }
  }
  hide() {
    this.popup.classList.add(this.hideAnimationClass);
    this.popup.setAttribute('aria-hidden', true);
    this.shown = false;
  }
}
