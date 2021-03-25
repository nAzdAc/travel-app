import styled from 'styled-components';

const H1Styled = styled.h1`
	font-weight: bold;
	font-size: 48px;
	line-height: 60px;
	margin: 24px 0;
`;

export const H1 = ({ text }) => <H1Styled>{text}</H1Styled>;
