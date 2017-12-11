import React, { Component } from "react"






//Export the map component.
export default class MyFancyComponent extends Component {

  constructor(props){
    super(props);


    this.state = {
      counter : 0
    }


//    this.buttonClicked = this.buttonClicked.bind(this)


  }


  //Function when the button is clicked.
  buttonClicked(){

    this.setState({
      counter : this.state.counter + 1
    })

  }

  render() {
    return(
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.buttonClicked.bind(this)}>Redux</button>
      </div>
    )

  }
}
