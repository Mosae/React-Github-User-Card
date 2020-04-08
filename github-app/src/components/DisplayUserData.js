import React from 'react';

const DisplayUserData = (props) => {
	return (
		<div className="user-card">
			<h2>Name: {props.userData}</h2>
		</div>
	);
};

export default DisplayUserData;
