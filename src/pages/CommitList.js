import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {get_commit_list} from '../apis/apis';
import CommitItem from './CommitItem';
import Header from '../common/Header';

const CommitItems = () => {
	const [commitList, setCommitList] = useState([]);

	useEffect(() => {
		axios({
			method: 'GET',
			url: get_commit_list
		})
			.then(response => {
				setCommitList(response.data);
			})
			.catch(e => console.error(e));
	}, []);

	return (
		<div>
			<Header />
			{commitList.map((item, index) => <CommitItem item={item} key={index} />)}
		</div>
	);
};

export default CommitItems;
