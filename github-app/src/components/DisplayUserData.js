import React from 'react';

const DisplayUserData = (props) => {
	return (
		<div className="user-card">
			<h2>Name: {props.userData}</h2>
			<h3>Location: {props.userLocation}</h3>
			<img width="300" src={props.userPicture} />
		</div>
	);
};

export default DisplayUserData;
