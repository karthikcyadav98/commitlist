import React from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import CommitList from './pages/CommitList';

const Header = () => {
	return (
		<ErrorBoundary>
			<CommitList />
		</ErrorBoundary>
	);
};

export default Header;
