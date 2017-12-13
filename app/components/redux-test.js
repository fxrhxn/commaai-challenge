import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Import the actions from the
import { addIncrement, decrementNumber } from '../actions/counter-actions'



//Export the map component.
class MyFancyComponent extends Component {

  constructor(props){
    super(props);

//    this.buttonClicked = this.buttonClicked.bind(this)

  }

  componentWillMount(){

  }


  //Function when the button is clicked.
  buttonClicked(){

    this.props.addIncrement()

  }

  render() {
    return(
      <div>
        <h1>Counter: {this.props.myCounter} </h1>
        <button onClick={this.buttonClicked.bind(this)}>Redux</button>
      </div>
    )

  }
}




function mapStateToProps(state) {
  return {
    myCounter : state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    decrementNumber : decrementNumber,
    addIncrement : addIncrement,
  }, dispatch)
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyFancyComponent)
