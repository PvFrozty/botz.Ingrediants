import React from 'react';


const ImageLinkForm = ({onInputChange, onSubmit}) => {

	return(
			
				<div className='center'>
					<div className='center w-80 w-60-ns'>
						<p className='f3 white'>{`Past a Image URL Here, and Check Out. It Detects Faces`}</p>
					</div>
					<div className='center w-80 w-40-ns'>
						<div className=' ba bg-white o-60 b--white shadow-5 w-100 pa4 h-auto cf'>
							<input onChange={onInputChange} type='text' className=' f6 f5-l input-reset bn fl white-80 bg-black pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns'/>
							<button onClick={onSubmit} className=' f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns grow'>Detect</button>
						</div>
					</div>
				</div>
			

		);

}

export default ImageLinkForm;