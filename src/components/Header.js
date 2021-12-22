// import { Link } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

	




	return (
		
			<div id='header-div'>
				
				<Link id="header-button"to='/'> <i class="fas fa-home fa-3x"></i>  </Link>
				
				

                <Link id="header-button" exact to='/game'><i class="fas fa-gamepad fa-3x"></i></Link>
				<Link id="header-button" exact to='/journal'><i class="fas fa-scroll fa-3x"></i></Link>
		

				<div className="header-dropdown">
				</div>

			</div>
		
	);
}

export default Header;