import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate('/');
	};
	return (
		<div className="not_fund">
      <div className="404" onClick={goHome}>404 home</div>
    </div>
	);
};

export default NotFound;