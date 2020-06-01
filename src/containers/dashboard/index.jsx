import Dashboard from '../../pages/dashboard'
import { connect } from 'react-redux'
import { handleFilterRequest } from '../../store/actions'


/**
 * here we handle passing redux to our component and export
 */
const mapStateToProps = state => ({
  data: state.Carowners.data
})

const mapDispatchToProps = dispatch => ({
  handleFilterRequests: data => dispatch(handleFilterRequest(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)