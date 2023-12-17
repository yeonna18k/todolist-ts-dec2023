import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	/* display: block; */
}
body {
	line-height: 1;
    font-family: 'UhBeemysen';
	font-size: 36px;
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
    background-color: 
    #FFD4DF	;
}
button {
	font-family: 'UhBeemysen';
	font-size: 24px;
}
@font-face {
font-family: 'UhBeemysen';
src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeemysen.woff') format('woff');
font-weight: normal;
font-style: normal;
}

.Toastify__toast-theme--light {
    background: none;
    color: var(--toastify-text-color-dark);
	--toastify-icon-color-success: #ffb6c1;
	--toastify-font-family: "UhBeemysen";
	--toastify-color-progress-success: #ffb6c1;
}
`;

export default GlobalStyle;
