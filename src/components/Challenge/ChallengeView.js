import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import Menu from '../common/Menu';
import { api } from '../../config/api';
import { AuthContext } from '../../contexts/AuthContext';

function ChallengeView(props) {
	const { authData } = useContext(AuthContext);
	const [data, setData] = useState({});

	const getChallenge = async () => {
		const response = await axios.get(
			api.getChallenge(props.match.params.id, authData.id)
		);
		console.log(response.data);
		setData(response.data);
	};

	useEffect(() => {
		getChallenge();
	}, []);

	return (
		<React.Fragment>
			<Container fluid>
				<Row>
					<Hidden xs>
						<Col xs={1}></Col>
					</Hidden>
					<Col md={6}>
						<Menu />
						<div>Question</div>
						<div>{data.question}</div>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
}

export default ChallengeView;
