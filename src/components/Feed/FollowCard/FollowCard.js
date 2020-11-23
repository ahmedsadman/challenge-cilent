import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { debounce } from 'lodash';
import RowItem from './RowItem';
import Search from './Search';
import { Card } from '../../common';
import { api } from '../../../config/api';

// Renders the section to search and follow other users
function FollowCard() {
	// const data = [
	// 	{ name: 'Jami', id: 1 },
	// 	{ name: 'Abir', id: 2 },
	// 	{ name: 'Samyo', id: 3 },
	// 	{ name: 'Tahmid', id: 4 },
	// 	{ name: 'Lami', id: 5 },
	// 	{ name: 'Leepu', id: 6 },
	// 	{ name: 'Shoumik', id: 7 },
	// ];
	const [data, setData] = useState([]);
	const [searchText, setSearchText] = useState('');

	const onChange = async (e) => {
		setSearchText(e.target.value);
		getResults(e.target.value, setData);
	};

	return (
		<FollowContainer>
			<Search text={searchText} onChange={onChange} />
			{data.map((user) => (
				<RowItem name={user.name} key={user.id} />
			))}
		</FollowContainer>
	);
}

const _getResults = async (text, setData) => {
	if (text.length <= 1) return;
	console.log(text);
	const response = await axios.get(api.findUser(text));
	console.log(response.data.result);
	setData(response.data.result);
};

const getResults = debounce(_getResults, 500, {
	leading: false,
	trailing: true,
});

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
