// import { Link } from 'react-router-dom';
import React from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';

const Header = () => {

	




	return (
		
			<div id='header-div'>
				
				<Link to='/'> <i class="fas fa-home fa-3x"></i>  </Link>
				
				

                <Link exact to='/game'><i class="fas fa-gamepad fa-3x"></i></Link>
				<Link exact to='/journal'><i class="fas fa-scroll fa-3x"></i></Link>
				<Link exact to='/visuals'><i class="fas fa-music fa-3x"></i></Link>

				<div className="header-dropdown">
				</div>

			</div>
		
	);
}

export default Header;