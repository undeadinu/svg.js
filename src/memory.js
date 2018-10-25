import Element from './Element.js'

extend(Element, {
  // Remember arbitrary data
  remember (k, v) {
    // remember every item in an object individually
    if (typeof arguments[0] === 'object') {
      for (var key in k) {
        this.remember(key, k[key])
      }
    } else if (arguments.length === 1) {
      // retrieve memory
      return this.memory()[k]
    } else {
      // store memory
      this.memory()[k] = v
    }

    return this
  },

  // Erase a given memory
  forget () {
    if (arguments.length === 0) {
      this._memory = {}
    } else {
      for (var i = arguments.length - 1; i >= 0; i--) {
        delete this.memory()[arguments[i]]
      }
    }
    return this
  }

  // Initialize or return local memory object
  memory () {
    return this._memory || (this._memory = {})
  }
})
