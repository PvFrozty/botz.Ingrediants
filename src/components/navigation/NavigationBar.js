import React from 'react';
import botlogo from './NanobotzGold.png';
import Tilt from 'react-tilt';

const NavigationBar = ({setRoute}) => {

	return(
		<nav className='flex '>
			<div className='fl w-100 w-20-ns'>
				<Tilt className="Tilt br2 br-black bg-white shadow-4 ma2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
 					<div className="Tilt-inner pa3"> 
 						<img alt='Nanobotz Logo' src={botlogo} />
 					</div>
				</Tilt>
			</div>
			<div className='w-100 w-70-ns'>&nbsp;</div>
			<div className='fr w-100 w-10-ns'>
				<button onClick={() => setRoute('SignIn')} className=' f5 no-underline white bg-black bg-animate hover-bg-white hover-black inline-flex items-center pa3 ma2 ba border-box mr4'>
					<span  className='pl1'>Sign Out</span>
				</button>
			</div>
		</nav>
		);

}

export default NavigationBar;