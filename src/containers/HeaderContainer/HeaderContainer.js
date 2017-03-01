import { connect } from 'react-redux'
import { loginRequest, logoutSuccess } from '../../actions'
import { Header } from '../../components'

const mapStateToProps = (state) => {

  return state
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
