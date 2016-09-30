import AppDispatcher from '../AppDispatcher'

const CalcActions = {
  receiveNums(nums) {
    AppDispatcher.dispatch({
      type: 'RECEIVE NUMS'
      nums
    })
  }
}

export default CalcActions;
