import React from 'react';

const IngrediantsTable = ({ingArray}) => {


	//console.log(ingArray);

	return(
		<div className='w-100 w-20-ns outline ma2 center'>
			<table className='white ma2'>
				<thead>
					<tr><th>Ingrediants</th></tr>
				</thead>
				<tbody>{ingArray}</tbody>
			</table>
		</div>
		);

}

export default IngrediantsTable;