import React from 'react';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Col,
} from 'reactstrap';

const DisplayUserData = (props) => {
	return (
		<div>
			<Card>
				<Col sm="6" md={{ size: 3, offset: 6 }} lg={{ size: 4, offset: 4 }}>
					<CardImg width="100%" src={props.userPicture} alt="Card image cap" />
				</Col>
				<CardBody>
					<CardTitle>
						<h2>Name: {props.userData}</h2>
					</CardTitle>
					<CardSubtitle>
						<h3>Location: {props.userLocation}</h3>
					</CardSubtitle>
					<CardText>
						<h3>Followers:</h3>
						{props.userFollowers.map((el) => (
							<p>{el.login}</p>
						))}
					</CardText>
				</CardBody>
			</Card>
		</div>
		// <div className="user-card">
		// 	<h2>Name: {props.userData}</h2>
		// 	<h3>Location: {props.userLocation}</h3>
		// 	<img width="300" src={props.userPicture} />

		// 	<h3>
		// 		Followers:
		// 		{props.userFollowers.map((el) => (
		// 			<p>{el.login}</p>
		// 		))}
		// 	</h3>
		// </div>
	);
};

export default DisplayUserData;
