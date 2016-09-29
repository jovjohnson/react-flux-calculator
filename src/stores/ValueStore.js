import AppDispatcher from '../AppDispatcher'
import { EventEmitter } from 'events'

class ValueStore extends EventEmitter {

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
