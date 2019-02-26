import React from 'react';

const styles = {
	footer: {
		borderTop: "1px solid rgba(118, 118, 118, 0.3)",
		margin: "50px 30px"
	},
	innerText: {
		color: "#767676",
		fontSize: "13px",
		lineHeight: "24px",
		marginTop: "20px",
		textAlign: "left"
	}
}
const Footer = () => {
	return (
		<footer style={styles.footer}>
			<div style={styles.innerText}>
				<span>Privacy Policy</span> &nbsp;|&nbsp; <span>Terms &amp; Conditions</span> &nbsp;|&nbsp; <span>©2019&nbsp;Roofstock, Inc.</span>
				<br />
				<span>#1 ranking based on website traffic from Alexa.com as of 7/31/18. Over $1 billion in transactions since 1/26/16 as of 1/1/18.</span>
			</div>
		</footer>
	)
}

export default Footer;
