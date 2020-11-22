import React from 'react';
import styled from 'styled-components';
import { Header1, Header2, Card } from '../../common';

function Submissions(props) {
	const { data } = props;
	return (
		<Card style={{ padding: '10px', marginTop: '20px' }}>
			<Header2 style={{ marginBottom: '20px' }}>Submissions</Header2>
			{data.map((item) => (
				<SubmissionContainer key={item.id}>
					<div>{item.submitted_by.name}</div>
					<div>{item.answer}</div>
				</SubmissionContainer>
			))}
		</Card>
	);
}

const SubmissionContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px 0;
`;

export default Submissions;
