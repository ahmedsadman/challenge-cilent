import React from 'react';
import styled from 'styled-components';
import { Card } from '../../common';
import Meta from './Meta';

function Tweet(props) {
	const { tweet } = props;
	return (
		<Card key={tweet.id} style={{ marginBottom: 20 }} padding='25px'>
			<Meta authorName={tweet.author} />
			<Content>{tweet.content}</Content>
		</Card>
	);
}

const Content = styled.div`
	padding: 10px 0;
	font-size: 1.1em;
`;

export default Tweet;
