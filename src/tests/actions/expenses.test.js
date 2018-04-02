import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('should setup remove expense object',()=>{
  const action = removeExpense({id:'123abc'})
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id:'123abc'
  })
})
test('should setup editExpense object',()=>{
  const action = editExpense('123abc', {note:'some note'})
  expect(action).toEqual({
    type:'EDIT_EXPENSE',
    id:'123abc',
    updates:{
      note:'some note'
    }
  })
})
test('should setup add expense action object with provided value',()=>{
    const expenseDate = {
      description:'rent',
      amount: 12345,
      createdAt: 1000,
      note:'this was lest months rent'
    }
    const action = addExpense(expenseDate)
    expect(action).toEqual({
      type:'ADD_EXPENSE',
      expense:{
        ...expenseDate,
        id: expect.any(String)
      }
    })
})
test('should setup add expense action object with default value',()=>{
    const action = addExpense()
    expect(action).toEqual({
      type:'ADD_EXPENSE',
      expense:{
        id: expect.any(String),
        description:'',
        note:'',
        amount:0,
        createdAt:0
      }
    })
})




//
