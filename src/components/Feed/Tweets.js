import React from 'react';
import styled from 'styled-components';
import Tweet from './Tweet/Tweet';

function Tweets(props) {
	const data = [
		{ author: 'Jami', id: 1, content: 'Nice weather!' },
		{ author: 'Jami', id: 2, content: 'Just landed safely in Dhaka' },
		{ author: 'Samyo', id: 3, content: 'Hello guys! How are you all?' },
		{ author: 'Tahmid', id: 4, content: 'Nice weather!' },
	];

	return (
		<TweetsContainer>
			{data.map((tweet) => (
				<Tweet tweet={tweet} key={tweet.id} />
			))}
		</TweetsContainer>
	);
}

const TweetsContainer = styled.div`
	margin: 30px 0;
`;
export default Tweets;
