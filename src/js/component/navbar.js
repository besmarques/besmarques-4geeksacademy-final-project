import React from "react";
import { Link } from "react-router-dom";

import logo from "../../img/logo.png"

export const Navbar = () => {
	return (
		<>
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
        		<div className="container-fluid pe-lg-5 ps-lg-5 pb-2 border-nz-primary">
            		<Link to="" className="navbar-brand ">
						<img src={logo} width="200" height="" alt=""></img>
					</Link>
            		<button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                		<span className="navbar-toggler-icon"></span>
            		</button>
            		<div className="collapse navbar-collapse" id="navbarCollapse">
                		<div className="navbar-nav ms-auto">
                    		<Link to="" className="nav-item nav-link hvr-underline-from-left d-flex justify-content-center">Home</Link>
                    		<Link to="" className="nav-item nav-link hvr-underline-from-left d-flex justify-content-center">My trips</Link>
                    		<Link to="" className="nav-item nav-link hvr-underline-from-left d-flex justify-content-center" >Profile</Link>
							<Link to="" className="nav-item nav-link hvr-underline-from-left d-flex justify-content-center" >Login</Link>
                		</div>
            		</div>
                </div>
    		</nav>
		</>
	</>
	);
};
