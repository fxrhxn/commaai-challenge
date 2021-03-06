import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'



import './nav-bar.less'

var monthAndYears = ['July 2016', 'January 2017', 'February 2017', 'March 2017', 'April 2017', 'May 2017', 'June 2017', 'July 2017', 'August 2017', 'September 2017', 'October 2017']

/* Import Actions for Redux */
import { selectMonthYear, selectDay_sameMonth, selectDay_newMonth, selectTrip } from '../../actions/map-actions'

class NavBar extends Component {

    constructor(props){
      super(props)


    //  this.renderMonths = this.render.bind(this)
    }

    //Bind all of the functions.
  //  this.renderMonths = this.renderMonths.bind(this);


    //Mounting function.
    componentWillMount(){

    }



    //Render all of the months.
    renderMonths(){

    return this.props.mapData_default.map((dta, i) => {
        return(

          <a key={i} className="dropdown-item" href="#" onClick={() => {

            var tripnum = dta.trip_number + 1

            //Select the new month, so change the reducer for map data.
            this.props.selectMonthYear("Trip " + String(tripnum))
            this.props.selectTrip(dta)

          }}>
            Trip {dta.trip_number + 1}
            <br/>
          </a>


        )
      })

    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                    </div>

                    <Link className="navbar-brand">
                        Comma.ai Speed Map
                    </Link>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">

                            <li style={{ padding : 8}}>

                            <div className="dropdown">
                              <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.props.selectedMonth}
                              </button>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ textAlign : 'center'}}>
                                {this.renderMonths()}
                              </div>
                            </div>

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}



function mapStateToProps(state) {
  return {
    mapData_default : state.mapData_default,
    selectedMonth : state.selectMonthYear,
    tripData : state.tripData,
    selectedDay : state.selectDay
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectMonthYear : selectMonthYear,
    selectDayNewMonth : selectDay_newMonth,
    selectDaySameMonth : selectDay_sameMonth,
    selectTrip : selectTrip,
  }, dispatch)
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
