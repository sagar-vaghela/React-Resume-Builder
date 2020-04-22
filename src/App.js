import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Editor from "./components/Editor";
import GlobalStyle from "./styles/GlobalStyle";
import { ResumeProvider } from "./context/ResumeContext";
import { PageProvider } from "./context/PageContext";
import LivePreview from "./components/LivePreview";
import Settings from "./components/Settings";
import theme from "./styles/Theme";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 280px auto 280px;
	grid-gap: 2rem;
`;

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Wrapper>
				<ResumeProvider>
					<PageProvider>
						<Editor />
						<LivePreview />
						<Settings />
					</PageProvider>
				</ResumeProvider>
			</Wrapper>
		</ThemeProvider>
	);
};

export default App;
