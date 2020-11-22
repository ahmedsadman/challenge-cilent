import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import Menu from '../../common/Menu';
import Meta from './Meta';
import Submissions from './Submissions';
import { api } from '../../../config/api';
import { AuthContext } from '../../../contexts/AuthContext';

function ChallengeView(props) {
	const { authData } = useContext(AuthContext);
	const [data, setData] = useState({ author: {}, question: '' });
	const [submissions, setSubmissions] = useState([]);

	const getChallenge = async () => {
		const response = await axios.get(
			api.getChallenge(props.match.params.id, authData.id)
		);
		console.log('REsponse got', response.data);
		setData(response.data);
	};

	const getSubmissions = async () => {
		if (!hasExpired()) {
			return;
		}
		const response = await axios.get(
			api.getChallengeSubmissions(props.match.params.id)
		);
		console.log('submissions', response.data);
		setSubmissions(response.data.submissions);
	};

	const hasExpired = () => {
		const expiry = new Date(data.expires_on);
		return Date.now() >= expiry.getTime();
	};

	const getAllData = async () => {
		await getChallenge();
		await getSubmissions();
	};

	useEffect(() => {
		getAllData();
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
						<Meta data={data} hasExpired={hasExpired} />
						{hasExpired() ? (
							<Submissions data={submissions} />
						) : null}
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
}

export default ChallengeView;
