import AppDispatcher from '../AppDispatcher'
import { EventEmitter } from 'events'


let _nums = '';

class ValueStore extends EventEmitter {

  constructor() {
    super()

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_NUMS':
        _nums = _nums + action.nums
        this.emit('CHANGE');
        break;
      }
      console.log(action);
    })

  }

  startListening(cb) {
    this.on('CHANGE', cb)
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }

  getNumbers() {
    return _nums;
  }
}

export default new ValueStore();
