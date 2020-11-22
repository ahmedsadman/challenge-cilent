import React from 'react';
import styled from 'styled-components';
import { Card } from '../../common';
import Meta from './Meta';

function Challenge(props) {
	const { challenge } = props;
	return (
		<Card key={challenge.id} style={{ marginBottom: 20 }} padding='25px'>
			<Meta authorName={challenge.author.name} />
			<Content>{challenge.question}</Content>
		</Card>
	);
}

const Content = styled.div`
	padding: 10px 0;
	font-size: 1.1em;
`;

export default Challenge;
