import React from 'react';
import styled from 'styled-components';

export const Header1 = (props) => (
	<StyledHeader1>{props.children}</StyledHeader1>
);
export const Header2 = (props) => (
	<StyledHeader2>{props.children}</StyledHeader2>
);

const StyledHeader1 = styled.h1`
	font-size: 1.8em;
	font-weight: 500;
	margin: 5px 0;
`;

const StyledHeader2 = styled.h2`
	font-size: 1.4em;
	font-weight: 500;
	margin: 5px 0;
`;
