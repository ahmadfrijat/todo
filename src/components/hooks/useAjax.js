import axios from 'axios';
import { useContext } from 'react';
import { useState } from 'react';

// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
import { LoginContext } from './../auth/context';


const useAjax = (url) => {

	const [list, setList] = useState([]);
   
	const loginContext = useContext(LoginContext);

	let config = {
		headers: {
			mode: 'cors',
			cache: 'no-cache',
			'Content-Type': 'application/json',
		},
	};

	const fetchingData = async (id, method = 'get', item) => {
		if (method === 'get') {
			const results = await axios[method](url, config);
			setList([...results.data.results]);
		}
	// const _addItem = async (item) => {
	// 	item.due = new Date();
	// 	// fetch(todoAPI, {
	// 	// 	method: 'post',
	// 	// 	mode: 'cors',
	// 	// 	cache: 'no-cache',
	// 	// 	headers: { 'Content-Type': 'application/json' },
	// 	// 	body: JSON.stringify(item)
	// 	//   })
	// 	// 	.then(response => response.json())
	// 	// 	.then(savedItem => {
	// 	// 	  setList([...list, savedItem])
	// 	// 	})
	// 	// 	.catch(console.error);
	// 	const results = await axios.post(todoAPI, item);
	// 	setList([...list, results.data]);
	// };

	// const _toggleComplete = async (id) => {
	// 	let item = list.filter((i) => i._id === id)[0] || {};

	// 	if (item._id) {
	// 		item.complete = !item.complete;
	// 		let url = `${todoAPI}/${id}`;
	// 		// fetch(url, {
	// 		//     method: 'put',
	// 		//     mode: 'cors',
	// 		//     cache: 'no-cache',
	// 		//     headers: { 'Content-Type': 'application/json' },
	// 		//     body: JSON.stringify(item)
	// 		//   })
	// 		//     .then(response => response.json())
	// 		//     .then(savedItem => {
	// 		//       setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
	// 		//     })
	// 		//     .catch(console.error);
	// 		// }
	// 		const results = await axios.put(url, item);
	// 		setList(
	// 			list.map((listItem) =>
	// 				listItem._id === item._id ? results.data : listItem,
	// 			),
	// 		);
	// 	}
	// };

	// const _getTodoItems = async () => {
	// 	const results = await axios.get(todoAPI);
	// 	setList([...results.data.results]);
	// };
	if (method === 'post' && (loginContext.user.user.capabilities.includes('create'))) {

		item.due = new Date();
		const results = await axios[method](url, item, config);
		setList([...list, results.data]);
	}

	// const _deleteItems = async (id) => {
	// 	let item = list.find((i) => i._id === id) || {};
	if (method === 'put' && (loginContext.user.user.capabilities.includes('update'))) {
		let item = list.filter((i) => i._id === id)[0] || {};

		if (item._id) {
			item.complete = !item.complete;
			const results = await axios[method](`${url}/${id}`, item, config);
			setList(
				list.map((listItem) =>
					listItem._id === item._id ? results.data : listItem,
				),
			);
		}
	}




		if (method === 'delete' && loginContext.user.user.capabilities.includes('delete')) {
			let item = list.find((i) => i._id === id) || {};

			// const results = await axios.delete(url);
			// setList(list.filter((listItem) => listItem._id !== results.data._id));
			if (item._id) {
				const results = await axios[method](`${url}/${id}`, config);
				setList(list.filter((listItem) => listItem._id !== results.data._id));
			}
		}
		
	};

	// return [list, _addItem, _toggleComplete, _getTodoItems, _deleteItems];
	return [list, fetchingData];
};

export default useAjax;
