/**
 * @module helpers
 * All the helper functions needed in this project
 */
export default {
  /**
   * Returns a new string in which all leading and trailing occurrences of a set of specified characters from the current String object are removed.
   * @param  { String } string - source string
   * @returns { String } - cleaned string
   */
  trim: function(string) {
    return string.replace(/^\s+|\s+$/gm, '')
  },
  extend: function(target, ...sources) {
    if (!Object.assign) {
      return Object.assign(target, ...sources)
    } else {
      for (let source of sources) {
        for (let key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }
  }
}
