import AppDispatcher from '../AppDispatcher'
import { EventEmitter } from 'events'

class ValueStore extends EventEmitter {

  let operands = []

  constructor() {
    super()

    AppDispatcher.register(action => {
      switch(action.type) {
        case: 'RECEIVE_NUMS':
        operands = action.nums
        this.emit('CHANGE');
        break;
      }
    })

  }

  startListening(cb) {
    this.on('CHANGE', cb)
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }

  getNumbers() {
    return _operand;
  }
}

export default new ValueStore();
