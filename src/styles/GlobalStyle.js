import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: ${(props) => props.theme.colors.text};
    word-break: keep-all;
}
body {
    max-width: 1680px;
    min-width: 720px;
    min-height: 100vh;
}
a {
    text-decoration: none;
}
ul {
    list-style: none;
}
button {
    cursor: pointer;
}
`;

export default GlobalStyle;
