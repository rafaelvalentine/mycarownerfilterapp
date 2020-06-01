import Home from '../../pages/home'
import { connect } from 'react-redux'
import { handleFetchFilters, handleFilterRequest, handlePageLoader } from '../../store/actions'


/**
 * here we handle passing redux to our component and export
 */
// const mapStateToProps = state => ({

// })

const mapDispatchToProps = dispatch => ({
  handleFetchFilters: () => dispatch(handleFetchFilters()),
  handleFilterRequest: data => dispatch(handleFilterRequest(data)),
  handlePageLoader: value => dispatch(handlePageLoader(value))
})

export default connect(null, mapDispatchToProps)(Home)