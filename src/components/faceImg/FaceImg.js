import React from 'react';

const FaceImg = ({imgUrl}) => {

	return(
		<div className='w-100 center'>
			<div className='absolute'>
				
				<img alt='' className=' ma2 h-auto' src={imgUrl} width='500px'/>
			
			</div>
			<h1>&nbsp;</h1>
		</div>
		);

}

export default FaceImg;