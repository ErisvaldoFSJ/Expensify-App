import React from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux'
import { startLogOut} from '../actions/auth'

export const Header = ({startLogOut}) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button className="button button--link" onClick={startLogOut}>Logout</button>
      </div>
    </div>

  </header>
);
const mapDispashToProps = (dispach)=>({
  startLogOut: () => dispach(startLogOut())
})

export default connect(undefined, mapDispashToProps)(Header);
