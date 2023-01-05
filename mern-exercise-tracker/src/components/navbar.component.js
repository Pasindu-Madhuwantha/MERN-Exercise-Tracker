import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";



 
    export default class NavBar extends Component {
        render() {
          return (
        /*     <nav className="navbar navbar-dark bg-dark justify-content-between">
              <Link to="/" className="navbar-brand">ExcerTracker</Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Exercises</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/create" className="nav-link">Create Exercise Log</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/user" className="nav-link">Create User</Link>
                  </li>
                </ul>
                </div>
            </nav>
 */
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<Link to="/" className="navbar-brand">ExcerTracker</Link>  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link to="/" className="nav-link">Exercises</Link>
      </li>
      <li class="nav-item">
      <Link to="/create" className="nav-link">Create Exercise Log</Link>
      </li>
      <li class="nav-item">
      <Link to="/user" className="nav-link">Create User</Link>
      </li>
    </ul>
  
  </div>
</nav>
            
      
          );
        }
      }
      
      
