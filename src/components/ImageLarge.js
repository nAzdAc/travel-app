import styled from 'styled-components';

const ImageLargeStyled = styled.div`
	background: url(${(props) => props.url}) 80% 100% no-repeat;
	background-size: cover;
`;

const ImsHiddenStyled = styled.img`
	width: 100%;
	height: auto;
	visibility: hidden;
`;

export const ImageLarge = ({ url }) => (
	<ImageLargeStyled url={url}>
		<ImsHiddenStyled alt="img" src={url} />
	</ImageLargeStyled>
);
