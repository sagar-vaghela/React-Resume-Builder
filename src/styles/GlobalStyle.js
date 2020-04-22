import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

	html {
		font-size: 16px;
		box-sizing: border-box;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	*, *:before, *:after {
		padding: 0;
		margin: 0;
		box-sizing: inherit;
	}

	*::-webkit-scrollbar {
		display: none;
	}

	body {
		line-height: 1.7;
		font-family: ${props => props.theme.font}, sans-serif;
		color: #2D3748;
		background: #EEE;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: normal
	}

	a {
		text-decoration: none;
		color: inherit
	}

	textarea,
	input {
		outline: none;
	}
`;
