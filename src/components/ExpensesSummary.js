import React from 'react'
import {connect } from 'react-redux'
import {Link} from 'react-router-dom'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary= ({expenseCount, exppenseTotal,totalExpenses})=>{
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
  const formattedExpenseTotal = numeral(exppenseTotal / 100).format('$0,0.00')
  return (
    <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span> {formattedExpenseTotal}</span></h1>
      <h1 className="page-header__subtitle">Do you heve <span>{totalExpenses}</span>, if you dont can see, click the <span>X</span> on date piker and see all expenses</h1>
      <div className="page-header__actions">
          <Link className="button" to="/create">Add expense</Link>
      </div>
    </div>
    </div>
  )
}
const mapStateToPros = (state) =>{
  const visibleExpeses = selectExpenses(state.expenses, state.filters)
  const expensesTotal = state.expenses.length
  console.log(state.expenses.length);
  return{
    expenseCount: visibleExpeses.length,
    exppenseTotal: selectExpensesTotal(visibleExpeses),
    totalExpenses: expensesTotal
  }
}
export default connect(mapStateToPros)(ExpensesSummary)
