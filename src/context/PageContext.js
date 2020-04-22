import React, { createContext, useState } from "react";

export const PageContext = createContext(null);

export const PageProvider = ({ children }) => {
	const [pageRef, setPageRef] = useState(null);
	const [panZoomRef, setPanZoomRef] = useState(null);

	return (
		<PageContext.Provider
			value={{ pageRef, panZoomRef, setPageRef, setPanZoomRef }}
		>
			{children}
		</PageContext.Provider>
	);
};
