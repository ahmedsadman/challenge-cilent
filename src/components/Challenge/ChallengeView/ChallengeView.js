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
		if (data && data.expires_on && !hasExpired(data.expires_on)) {
			return;
		}

		const response = await axios.get(
			api.getChallengeSubmissions(props.match.params.id)
		);
		console.log('submissions', response.data);
		setSubmissions(response.data.submissions);
	};

	const createSubmission = async (answer) => {
		try {
			if (hasExpired(data.expires_on)) {
				alert('Challenge Expired');
				return;
			}
			const response = await axios.post(
				api.createChallengeSubmission(props.match.params.id),
				{
					user_id: authData.id,
					answer,
				}
			);
			console.log('Created submission', response.data);
			await getAllData();
		} catch (e) {
			console.log('Error on submission', e);
		}
	};

	const hasExpired = (expires_on) => {
		const expiry = new Date(expires_on);
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
						<Meta
							data={data}
							hasExpired={hasExpired(data.expires_on)}
							submitAnswer={createSubmission}
						/>
						{hasExpired(data.expires_on) ? (
							<Submissions data={submissions} />
						) : null}
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
}

export default ChallengeView;
