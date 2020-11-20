import React, {useState, useEffect} from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import CommitList from './pages/CommitList';
import axios from 'axios';
import {get_commit_list} from './apis/apis';

const Header = () => {
	useEffect(() => {
		axios({
			method: 'GET',
			url: get_commit_list
		})
			.then(response => {
				console.log('ajhdad', response.data);
			})
			.catch(e => console.error(e));
	}, []);

	return (
		<ErrorBoundary>
			<CommitList />
		</ErrorBoundary>
	);
};

export default Header;
