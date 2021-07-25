import React, { useState } from 'react';
import MainLayout from '@components/_layouts/MainLayout';
import axios from 'axios';
 
const Index = (): JSX.Element => {
	const [inputan, setInputan] = useState('');
	
	const handleSubmit = e => {
		e.preventDefault();
		
		axios.post('/api/coba-submit', {
			nama: inputan
		})
			.then(res => console.log(res.data));
		
			.catch(err => console.log(err.response.data.message));
	};

	return (
		<MainLayout title="Home" className="flex-sc col">
			<form onSubmit={handleSubmit}>
				<input 
					value={inputan}
					onChange={e => setInputan(e.target.value)}
					type="text"
					name="nama" 
					id="" 
					className="bg-gray-200"
				/>
				<button type="submit" className="btn-main">SUBMITT</button>
			</form>
		</MainLayout>
	);
};


export default Index;
