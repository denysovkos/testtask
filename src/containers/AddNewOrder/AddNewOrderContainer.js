import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { addOrder } from '../../actions'
import { AddNewOrder } from '../../components'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addOrder}, dispatch);
}

function mapStateToProps(state, props) {
  return state;
}

const AddNewOrderContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewOrder);

export default AddNewOrderContainer
