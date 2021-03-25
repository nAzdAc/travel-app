import styled from 'styled-components';

const TextMediumStyled = styled.p`
	font-size: 24px;
	line-height: 30px;
`;

export const TextMedium = ({ text }) => <TextMediumStyled>{text}</TextMediumStyled>;
