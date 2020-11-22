import React from 'react';
import styled from 'styled-components';

function Meta(props) {
	const { author, question } = props;
	return (
		<MetaContainer>
			<h1>Challenge</h1>
			<h2>Posted By: {author.name}</h2>
			<p>{question}</p>
		</MetaContainer>
	);
}

const MetaContainer = styled.div`
	margin-bottom: 15px;
	display: flex;
	flex-direction: column;
`;

export default Meta;
