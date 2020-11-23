import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { AuthContext } from '../../contexts/AuthContext';
import Menu from '../common/Menu';
import { Card, Header2 } from '../common';
import { api } from '../../config/api';

function Profile(props) {
	const { authData } = useContext(AuthContext);
	const [myChallenges, setMyChallenges] = useState([]);
	const fetchMyChallenges = async () => {
		const headers = { Authorization: `Bearer ${authData.token}` };
		const response = await axios.get(api.getMyChallenges, { headers });
		console.log(response.data);
		setMyChallenges(response.data.challenges);
	};

	const onChallengeClick = (id) => {
		props.history.push(`/challenge/${id}`);
	};

	useEffect(() => {
		fetchMyChallenges();
	}, []);

	return (
		<Container fluid>
			<Row>
				<Hidden xs>
					<Col xs={1}></Col>
				</Hidden>
				<Col md={6}>
					<Menu />
				</Col>
			</Row>
			<Row>
				<Hidden xs>
					<Col xs={1}></Col>
				</Hidden>
				<Col md={6}>
					<Card style={{ padding: '15px' }}>
						<Header2>My Challenges</Header2>
						{myChallenges.map((item) => (
							<Card
								key={item.id}
								style={{
									padding: '10px',
									margin: '10px 0',
									cursor: 'pointer',
								}}
								onClick={() => onChallengeClick(item.id)}
							>
								<div>{item.question}</div>
								<div style={{ fontSize: '0.9em' }}>
									Created On: {item.created_on}
								</div>
							</Card>
						))}
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Profile;
