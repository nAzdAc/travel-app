import styled from 'styled-components';

const TextColorStyled = styled.p`
    margin: 10px 0;
    font-style: italic;
    font-weight: bold;
    font-size: 48px;
    line-height: 48px;
    color: #FF6B35;
`;

export const TextColor = ({ text }) => (
	<TextColorStyled>{ text }</TextColorStyled>
);
