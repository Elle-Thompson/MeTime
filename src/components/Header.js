// import { Link } from 'react-router-dom';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {

	




	return (
		
			<div className='header-div'>
				
				<Link to='/'> <i class="fas fa-home fa-3x"></i>  </Link>
				
				

				<div className="header-dropdown">
                <Link to='game'>Game</Link>
				<Link to='journal'>Journal</Link>
				<Link to='visuals'>Visuals</Link>

				</div>

			</div>
		
	);
}

export default Header;