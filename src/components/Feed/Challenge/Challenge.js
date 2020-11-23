import React from 'react';
import styled from 'styled-components';
import { Card } from '../../common';
import Meta from './Meta';

function Challenge(props) {
	const { challenge, history } = props;
	const onClick = () => {
		history.push(`/challenge/${challenge.id}`);
	};
	const hasExpired = () => {
		const expiry = new Date(challenge.expires_on);
		return Date.now() >= expiry.getTime();
	};

	return (
		<Card
			key={challenge.id}
			style={{ marginBottom: 20, cursor: 'pointer' }}
			padding='25px'
			onClick={onClick}
		>
			<Meta
				authorName={challenge.author.name}
				tagged={challenge.tagged}
				expires={challenge.expires_on}
			/>
			<Content>{challenge.question}</Content>
			{hasExpired ? (
				<div style={{ fontSize: '0.9em' }}>(Expired)</div>
			) : null}
			{challenge.submission && challenge.submission.answer ? (
				<div style={{ fontSize: '0.9em' }}>(Answered)</div>
			) : null}
		</Card>
	);
}

const Content = styled.div`
	padding: 10px 0;
	font-size: 1.1em;
`;

export default Challenge;
