import styled from 'styled-components';

const TextSmallStyled = styled.p`
	font-size: 16px;
	line-height: 20px;
`;

export const TextSmall = ({ text }) => <TextSmallStyled>{text}</TextSmallStyled>;
