import React from 'react';
import styled from 'styled-components';
import { Card } from '../../common';
import Meta from './Meta';

function Challenge(props) {
	const { challenge, history } = props;
	const onClick = () => {
		history.push(`/challenge/${challenge.id}`);
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
		</Card>
	);
}

const Content = styled.div`
	padding: 10px 0;
	font-size: 1.1em;
`;

export default Challenge;
