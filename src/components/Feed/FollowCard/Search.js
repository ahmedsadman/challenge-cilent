import React from 'react';
import styled from 'styled-components';
import { Input } from '../../common/FormControls';

function Search(props) {
	const { text, onChange } = props;
	return (
		<SearchContainer>
			<Input value={text} onChange={onChange} placeholder='Search' />
		</SearchContainer>
	);
}

const SearchContainer = styled.div`
	padding: 0 10px;
	margin-bottom: 10px;
	display: flex;
`;

export default Search;
