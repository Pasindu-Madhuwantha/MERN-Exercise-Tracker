import React, { Component } from "react";
import { Link } from "react-router-dom";




 
    export default class NavBar extends Component {
        render() {
          return (
            <nav className="navbar navbar-expand-xl bg-primary navbar-dark pr-lg-1 pl-sm-5 justify-content-between">
              <Link to="/" className="navbar-brand">ExcerTracker</Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Exercises</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Exercise Log</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/user" className="nav-link">Create User</Link>
                  </li>
                </ul>
                </div>
            </nav>
      
          );
        }
      }
      
      
