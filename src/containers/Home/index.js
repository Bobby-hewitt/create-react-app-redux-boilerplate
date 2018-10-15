import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


const Home = props => (
  <div>
  </div>
)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
  //declare the change page function in mapDispatchToProps
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)