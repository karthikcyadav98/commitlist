import React from 'react';
import {repo_name, username} from '../apis/apis';
import {Grid} from 'semantic-ui-react';

const Header = () => {
	return (
		<Grid container style={{textAlign: 'left', marginTop: 10}}>
			<Grid.Column width={16}>
				<p style={{color: '#0366D6', fontSize: 30}}>
					{username} / <b>{repo_name}</b>
				</p>
			</Grid.Column>
		</Grid>
	);
};

export default Header;
