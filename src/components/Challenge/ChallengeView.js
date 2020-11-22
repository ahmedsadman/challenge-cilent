import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
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
			<div>Question</div>
			<div>{data.question}</div>
		</React.Fragment>
	);
}

export default ChallengeView;
