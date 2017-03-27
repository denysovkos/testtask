import React from 'react'
import { HeaderContainer } from '../../containers'


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadOrders()
  }

  render() {
    let orders = this.props.orders.orders


    return(
      <div>
        <HeaderContainer />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default App
