import React, { useState } from 'react';
import { Products } from './components/Products-list/Products';
import { Head } from './components/Select/Head';

import { withLDProvider } from 'launchdarkly-react-client-sdk';

const Main = () => {
	/* This will manage the selection from the selector 
       in the Sort component, and send it to the Items compoenent 
       to display the Items list in the selected order */
	const [select, setSelect] = useState(null);

	return (
		<>
			<Head setSelect={setSelect} select={select} />
			<Products select={select} />
		</>
	);
};

export default Main;

/* withLDProvider({
	clientSideID: '61603fe271cef7212f7318cb',
	user: {
		key: 'user_key',
		name: 'User Name',
		email: 'user@email.com',
	},
})(Main);
 */
