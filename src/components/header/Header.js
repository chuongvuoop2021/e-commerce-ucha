import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'

import { ReactComponent as Logo } from '../../assets/clothes.svg'

import './Header.scss'

const Header = ({ currentUser, hidden }) => (
  <div className='header' unselectable="on">
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {
        currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
        )
      }
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
)

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header)