import React from 'react';
import styled from 'styled-components';
import { Header1, Header2, Card } from '../../common';

function Meta(props) {
	const { author, question, expires_on } = props.data;
	const expiry = new Date(expires_on);
	const has_expired = Date.now() >= expiry.getTime() ? 'Yes' : 'No';
	return (
		<Card>
			<MetaContainer>
				<Header1>Challenge</Header1>
				<Header2>By {author.name}</Header2>
				<P style={{ fontSize: '1.1em', margin: '20px 0' }}>
					{question}
				</P>
				<P style={{ marginTop: '25px', fontSize: '0.9em' }}>
					Expires On: {expires_on}
				</P>
				<P style={{ fontSize: '0.9em' }}>Expired: {has_expired}</P>
			</MetaContainer>
		</Card>
	);
}

const MetaContainer = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
`;

const P = styled.p`
	margin: 5px 0;
	font-size: 1em;
`;

export default Meta;
