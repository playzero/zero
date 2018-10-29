import React from "react";

const Link = props => (
	<a className="link" href={props.href} target="_self">
		__
		{props.children}
		__
	</a>
);

export default Link;
