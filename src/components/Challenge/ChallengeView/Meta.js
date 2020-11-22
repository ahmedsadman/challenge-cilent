import React, { useState } from 'react';
import styled from 'styled-components';
import { Header1, Header2, Card, Input, Label, Button } from '../../common';

function Meta(props) {
	const { author, question, expires_on, submission, tagged } = props.data;
	const [answer, setAnswer] = useState('');

	const onAnswerSubmit = (e) => {
		e.preventDefault();
		props.submitAnswer(answer);
	};

	const renderAnswerSection = () => {
		if (!tagged) return null;

		if (submission && submission.answer) {
			return (
				<P style={{ margin: '20px 0' }}>
					My Answer: {submission.answer}
				</P>
			);
		} else if (!props.hasExpired) {
			return (
				<form style={{ margin: '20px 0' }} onSubmit={onAnswerSubmit}>
					<Label htmlFor='answer'>Answer Question</Label>
					<Input
						name='answer'
						value={answer}
						onChange={(e) => setAnswer(e.target.value)}
						placeholder='Your answer here...'
					/>
					<Button
						type='submit'
						style={{ margin: '10px 0', fontSize: '0.9em' }}
					>
						Submit
					</Button>
				</form>
			);
		}

		return null;
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
					Expired: {props.hasExpired ? 'Yes' : 'No'}
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
