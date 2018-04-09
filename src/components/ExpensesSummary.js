import React from 'react'
import {connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary= ({expenseCount, exppenseTotal})=>{
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
  const formattedExpenseTotal = numeral(exppenseTotal / 100).format('$0,0.00')
  return (
    <div>
    <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}</h1>
    </div>
  )
}
const mapStateToPros = (state) =>{
  const visibleExpeses = selectExpenses(state.expenses, state.filters)
  return{
    expenseCount: visibleExpeses.length,
    exppenseTotal: selectExpensesTotal(visibleExpeses)
  }
}
export default connect(mapStateToPros)(ExpensesSummary)
