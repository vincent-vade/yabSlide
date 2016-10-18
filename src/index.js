import helpers from './helpers/helpers'
export default class {
  constructor(slider, options) {
    this.init(slider)
    this.opts = {}
    if (options) {
      helpers.extend(options, this.opts)
    }
  }
  init(slider) {
    this.ul = slider.children[0]
    this.li = this.ul.children
    this.ul.style.width = `${this.li[0].clientWidth * this.li.length}px`
    this.
    this.currentIndex = 0
  }
  goToSlide(index) {
    if (index < 0 || index > this.li.length - 1)
      return
    this.ul.style.left = `-${100 * index}%`
    this.currentIndex = index
  }
  prevSlide() {
    this.goTo(this.currentIndex - 1)
  }
  nextSlide() {
    this.goTo(this.currentIndex + 1)
  }
}
