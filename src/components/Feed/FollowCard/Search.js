import React from 'react';
import styled from 'styled-components';
import { Input } from '../../common/FormControls';

function Search() {
	return (
		<SearchContainer>
			<Input placeholder='Search' />
		</SearchContainer>
	);
}

const SearchContainer = styled.div`
	padding: 0 10px;
	margin-bottom: 10px;
	display: flex;
	flex: 1;
`;

export default Search;
