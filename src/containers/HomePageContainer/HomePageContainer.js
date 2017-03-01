import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { loadProducts } from '../../actions'
import { HomePage } from '../../components'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadProducts}, dispatch);
}

function mapStateToProps(state, props) {
  return state;
}

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export default HomePageContainer
