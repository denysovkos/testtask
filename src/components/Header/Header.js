import React, {Component} from 'react'
import { Link } from 'react-router'
import './Header.css'
import { Button } from 'semantic-ui-react'


const Header = () =>
  <div>
    <h1>Test task</h1>
    <ul className="list-inline">
      <li><Link to='/'><Button primary>Home</Button></Link></li>
      <li><Link to='/orders'><Button primary>Orders</Button></Link></li>
      <li><Link to='/addOrder'><Button primary>Add new order</Button></Link></li>
    </ul>

  </div>



export default Header
