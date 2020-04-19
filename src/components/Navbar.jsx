import React from 'react';

export default function Navbar() {

   return (
      <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <img className='logo-nav' src='https://thumbs.gfycat.com/InexperiencedGlossyAsiaticgreaterfreshwaterclam-small.gif' />
            <a className="navbar-brand" style={{fontFamily: "'Chewy', cursive"}}>Cities Quiz</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                     <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">How to play</a>
                  </li>
               </ul>
               <button className="btn btn-danger my-2 my-sm-0" ><i class="fas fa-question"></i></button>
            </div>
         </nav>
      </>
   )
}