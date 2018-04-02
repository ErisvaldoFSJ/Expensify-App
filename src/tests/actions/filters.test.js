import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate} from '../../actions/filters'
import moment from 'moment'


test('should generete set start date action object',()=>{
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should generate ser end date acition object',()=>{
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate:moment(0)
  })
})

test('should generate set sort by amount object',()=>{
  const action = sortByAmount()
  expect(action).toEqual({
    type:'SORT_BY_AMOUNT'
  })
})

test('should generate set sort by date object',()=>{
  const action = sortByDate()
  expect(action).toEqual({
    type:'SORT_BY_DATE'
  })
})

test('should generate set sort by text object',()=>{
  const text = '123'
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})
test('should generate set sort by text default object',()=>{
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})










//
