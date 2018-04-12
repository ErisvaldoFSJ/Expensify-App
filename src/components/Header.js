import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect} from 'react-redux'
import { startLogOut} from '../actions/auth'

export const Header = ({startLogOut}) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <button onClick={startLogOut}>Logout</button>
  </header>
);
const mapDispashToProps = (dispach)=>({
  startLogOut: () => dispach(startLogOut())
})

export default connect(undefined, mapDispashToProps)(Header);
