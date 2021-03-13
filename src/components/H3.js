import styled from 'styled-components';

const H3Styled = styled.h3`
    font-style: italic;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    margin: 0 16px;
`;

export const H3 = ({ text }) => (
	<H3Styled>{ text }</H3Styled>
);
