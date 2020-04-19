import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.gif'

export default function Navbar() {

   return (
      <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <img className='logo-nav' src={logo} />
            <a className="navbar-brand" style={{ fontFamily: "'Chewy', cursive" }}>Cities Quiz</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                     <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                     <a
                        className="nav-link"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        style={{ cursor: 'pointer' }}
                     >
                        How to play
                     </a>
                  </li>
               </ul>
            </div>
         </nav>


         {/* Modal  */}
         <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLabel">How to play</h5>
                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div className="modal-body">
                     <p>1. In order to win you must select the city you assigned to find</p>
                     <p>2. You are considered correct and can move to other city if you select the place between 50 km radius from assigned city</p>
                     <p>3. After placing pin on the map you're remaining kilometers will be reduced according the distance between assigned city and you're actual pin</p>
                     <p>4. You're considered lose if you're remaining kilometers is below 0 kilometer</p>
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="btn btn-primary" data-dismiss="modal">Ok, i got it!</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}