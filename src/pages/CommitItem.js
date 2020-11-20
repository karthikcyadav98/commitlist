// import React from 'react';

// const CommitItems = ({item}) => {
// 	console.log('kada', item);

// 	return (
// 		<div>
// 			<p>CommitItems</p>
// 		</div>
// 	);
// };

// export default CommitItems;

import React from 'react';
import {Grid, Image, Button, Icon} from 'semantic-ui-react';
import moment from 'moment';

const CommitItems = ({item}) => {
	console.log(item);
	return (
		<div>
			<Grid container stackable style={{textAlign: 'left', borderBottom: '1px solid #E6E6E6', padding: 10}}>
				<Grid.Column width={12}>
					<p style={{fontSize: 20, fontWeight: 'bold'}}>{item.commit.message}</p>
					<p style={{fontSize: 15}}>
						<b>{item.commit.committer.name}</b> commited on {' '}
						{moment(item.commit.committer.date).format('ll')}
					</p>
				</Grid.Column>

				<Grid.Column width={4} style={{textAlign: 'right'}}>
					<Button
						style={{marginTop: 20}}
						basic
						color="blue"
						content="Read More"
						onClick={() => {
							window.open(item.html_url, '_blank');
						}}
					/>
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default CommitItems;
