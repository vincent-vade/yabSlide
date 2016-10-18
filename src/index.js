import helpers from './helpers/helpers'

export default class {
  constructor(slider) {
    console.log(slider[0].children[0])
    this.ul = slider[0].children[0]
    this.li = this.ul.children
    this.ul.style.width = `${this.li[0].clientWidth * this.li.length}px`
    this.
    this.currentIndex = 0
    this.init()
  }

  init() {
    
  }

  goTo(index) {
    if (index < 0 || index > this.li.length - 1)
      return
    this.ul.style.left = `-${100 * index}%`
    this.currentIndex = index
  }

  goToPrev() {
    this.goTo(this.currentIndex - 1)
  }

  goToNext() {
    this.goTo(this.currentIndex + 1)
  }
}
