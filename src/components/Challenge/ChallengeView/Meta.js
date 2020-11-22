import React from 'react';
import styled from 'styled-components';
import { Header1, Header2, Card } from '../../common';

function Meta(props) {
	const { author, question, expires_on, submission } = props.data;

	const renderAnswerSection = () => {
		if (!submission) return null;

		return (
			<P style={{ margin: '20px 0' }}>My Answer: {submission.answer}</P>
		);
	};

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
				<P style={{ fontSize: '0.9em' }}>
					Expired: {props.hasExpired() ? 'Yes' : 'No'}
				</P>
				{renderAnswerSection()}
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
