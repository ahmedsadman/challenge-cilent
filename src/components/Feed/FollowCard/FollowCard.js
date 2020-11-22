import React from 'react';
import styled from 'styled-components';
import RowItem from './RowItem';
import Search from './Search';
import { Card } from '../../common';

// Renders the section to search and follow other users

function FollowCard() {
	const data = [
		{ name: 'Jami', id: 1 },
		{ name: 'Abir', id: 2 },
		{ name: 'Samyo', id: 3 },
		{ name: 'Tahmid', id: 4 },
		{ name: 'Lami', id: 5 },
		{ name: 'Leepu', id: 6 },
		{ name: 'Shoumik', id: 7 },
	];
	return (
		<FollowContainer>
			<Search />
			{data.map((user) => (
				<RowItem name={user.name} />
			))}
		</FollowContainer>
	);
}

const FollowContainer = styled(Card)`
	display: flex;
	flex-direction: column;
	padding: 0 10px;
	flex: 1;
	margin-top: 30px;
	height: 300px;
	overflow-y: auto;
`;

export default FollowCard;
