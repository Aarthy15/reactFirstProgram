import React, { useState } from 'react';

const CountNumber = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>You clicked { count } times</p>;
			<button onClick={ () => setCount(count + 1) }>
				click me
			</button>
		</div>
	);
};

export default CountNumber;
