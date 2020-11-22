import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Tweet from './Challenge/Challenge';
import { api } from '../../config/api';
import { AuthContext } from '../../contexts/AuthContext';

function Tweets(props) {
	// const data = [
	// 	{ author: 'Jami', id: 1, content: 'Nice weather!' },
	// 	{ author: 'Jami', id: 2, content: 'Just landed safely in Dhaka' },
	// 	{ author: 'Samyo', id: 3, content: 'Hello guys! How are you all?' },
	// 	{ author: 'Tahmid', id: 4, content: 'Nice weather!' },
	// ];
	const { authData } = useContext(AuthContext);
	const [feed, setFeed] = useState([]);

	const getFeed = async (page = 1) => {
		const response = await axios.get(api.getFeed(authData.id, page));
		console.log(response.data.items);
		setFeed([...feed, ...response.data.items]);
	};

	useEffect(() => {
		getFeed();
	}, []);

	return (
		<TweetsContainer>
			{feed.map((challenge) => (
				<Tweet challenge={challenge} key={challenge.id} />
			))}
		</TweetsContainer>
	);
}

const TweetsContainer = styled.div`
	margin: 30px 0;
`;
export default Tweets;
