import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  addToCount,
  subtractFromCount
} from '../../actions/counter'

const Home = props => (
  <div>
    <h1>Create-react-app with redux boilerplate</h1>
    <p>{props.count}</p>

    <p>
      <button onClick={props.addToCount}>Add</button>
    </p>

    <p>
      <button onClick={props.subtractFromCount}>Subtract</button>
    </p>

    <p><button onClick={() => props.changePage()}>redux-router magic</button></p>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addToCount,
  subtractFromCount,
  //declare the change page function in mapDispatchToProps
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)