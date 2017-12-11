import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import './nav-bar.less'

var monthAndYears = ['July 2016', 'January 2017', 'February 2017', 'March 2017', 'April 2017', 'May 2017', 'June 2017', 'July 2017', 'August 2017', 'September 2017', 'October 2017']

export default class NavBar extends Component {

    //Bind all of the functions.
  //  this.renderMonths = this.renderMonths.bind(this);

    //Mounting function.
    componentWillMount(){

    }

    renderMonths(){

      monthAndYears.map((monthAndYear, i) => {
        return(

          <a className="dropdown-item" href="#">
            {monthAndYear}
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
                                Change Month and Year
                              </button>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ textAlign : 'center'}}>
                                {this.renderMonths()}
                              </div>
                            </div>

                            </li>

                            <li style={{ padding : 8}}>

                            <div className="dropdown">
                              <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Change Day
                              </button>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ textAlign : 'center'}}>
                                <a className="dropdown-item" href="#">
                                August 2016
                                </a>
                                  <br/>
                                <a className="dropdown-item" href="#">
                                June 2017
                                </a>
                                  <br/>
                                <a className="dropdown-item" href="#">
                                February 2011
                                </a>
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
