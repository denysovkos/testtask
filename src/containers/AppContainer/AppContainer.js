import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { loadOrders } from '../../actions'
import { App } from '../../components'

function mapDispatchToProps(dispatch) {
  let actions = Object.assign({}, {loadOrders});
  return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state, props) {
  let {orders} = state;
  return {orders}
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
