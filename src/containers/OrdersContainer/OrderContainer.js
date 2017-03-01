import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { loadOrders, deleteOrder } from '../../actions'
import { OrderList } from '../../components'

function mapDispatchToProps(dispatch) {
  let actions = {loadOrders: loadOrders, deleteOrder: deleteOrder};
  return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state, props) {
  return state;
}

const OrdersContainer = connect(mapStateToProps, mapDispatchToProps)(OrderList);

export default OrdersContainer
