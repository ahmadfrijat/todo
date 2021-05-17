import axios from 'axios';
import { useState } from 'react';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const useAjax = () => {

	const [list, setList] = useState([]);

	const _addItem = async (item) => {
		item.due = new Date();
		// fetch(todoAPI, {
		// 	method: 'post',
		// 	mode: 'cors',
		// 	cache: 'no-cache',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify(item)
		//   })
		// 	.then(response => response.json())
		// 	.then(savedItem => {
		// 	  setList([...list, savedItem])
		// 	})
		// 	.catch(console.error);
		const results = await axios.post(todoAPI, item);
		setList([...list, results.data]);
	};

	const _toggleComplete = async (id) => {
		let item = list.filter((i) => i._id === id)[0] || {};

		if (item._id) {
			item.complete = !item.complete;
			let url = `${todoAPI}/${id}`;
			// fetch(url, {
			//     method: 'put',
			//     mode: 'cors',
			//     cache: 'no-cache',
			//     headers: { 'Content-Type': 'application/json' },
			//     body: JSON.stringify(item)
			//   })
			//     .then(response => response.json())
			//     .then(savedItem => {
			//       setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
			//     })
			//     .catch(console.error);
			// }
			const results = await axios.put(url, item);
			setList(
				list.map((listItem) =>
					listItem._id === item._id ? results.data : listItem,
				),
			);
		}
	};

	const _getTodoItems = async () => {
		const results = await axios.get(todoAPI);
		setList([...results.data.results]);
	};

	const _deleteItems = async (id) => {
		let item = list.find((i) => i._id === id) || {};

		if (item._id) {
			item.complete = !item.complete;
			let url = `${todoAPI}/${id}`;

			const results = await axios.delete(url);
			setList(list.filter((listItem) => listItem._id !== results.data._id));
		}
	};

	return [list, _addItem, _toggleComplete, _getTodoItems, _deleteItems];
};

export default useAjax;









// import { useState } from 'react';
// import axios from 'axios';


// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

// const useAjax = () => {
//     const [list, setList] = useState([]);

//     const _addItem = (item) => {
//       item.due = new Date();
//       axios({
//         url:todoAPI,
//         method: 'post',
//         mode: 'cors',
//         cache: 'no-cache',
//         headers: { 'Content-Type': 'application/json' },
//         data: JSON.stringify(item)
//       })
//         .then(response => {
//             setList([...list, response.data])
//             })
//         .catch(console.error);
//     };
  
//     const _toggleComplete = id => {
  
//       let item = list.filter(i => i._id === id)[0] || {};
  
//       if (item._id) {
  
//         item.complete = item.complete === 'complete' ? 'pending' : 'complete';
  
//         let url = `${todoAPI}/${id}`;
  
//         axios({
//           method: 'put',
//           url : url,
//           mode: 'cors',
//           cache: 'no-cache',
//           headers: { 'Content-Type': 'application/json' },
//           data: JSON.stringify(item)
//         })
//           .then(savedItem => {
//             setList(list.map(listItem => listItem._id === item._id ? savedItem.data : listItem));
//           })
//           .catch(console.error);
//       }
//     };
//     const deleteItem = id => {
//         let item = list.filter(i => i._id === id)[0] || {};
//         if (item._id) {
//           let url = `${todoAPI}/${id}`;
    
//           axios( {
//               url : url,
//             method: 'delete',
//             mode: 'cors',
//             cache: 'no-cache',
//             headers: { 'Content-Type': 'application/json' },
//           })
//             .then(() => {
//               setList(list.filter(listItem => listItem._id !== item._id ));
//             })
//             .catch(console.error);
//         }
//       };
  
//     const _getTodoItems = () => {
//     axios.get(todoAPI)
//       .then(response => setList(response.data.results))
//     };

//     return [list , _addItem , _toggleComplete , _getTodoItems ,deleteItem]

// }


// export default useAjax;