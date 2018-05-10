import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from './cashapp.png';
import '../App.css'
class Navbar extends Component {

   

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

  <a className="navbar-brand" href="https://team-project281.herokuapp.com"><img src={Image} height ='60' width='130'></img></a>

  
  <ul className=" nav navbar-nav navbar-right">
    <li className="nav-item ">
    <a className="nav-link " href="https://team-project281.herokuapp.com/login">Login</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="https://team-project281.herokuapp.com/signup">Signup</a>
    </li>
   
    

   
   
  </ul>
</nav>

  


        );
    }
}

export default Navbar;
