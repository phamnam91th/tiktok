import "./App.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store';
import UserProfile from './UserProfile';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>My App</h1>
        <UserProfile />
      </div>
    </Provider>
  );
}


// function App() {
//   const [counter, setCounter] = useState(2)

//   const handleIncrease = () => {
//     setCounter(counter + 1);
//   }

//   console.log(counter)

//   return (
//     <div className="App">
//         <h1>{counter}</h1>
//         <button onClick={handleIncrease} >Click </button>
//     </div>
//   );
// }

// const gifts = [
//   { id: 1, name: "Iphone 12" },
//   { id: 2, name: "Iphone 13" },
//   { id: 3, name: "Iphone 15" },
// ];

// function App() {
//   const [gift, setGift] = useState("Khong co phan thuong")

//   const randomGift = () => {
//     setGift(gifts[Math.floor(Math.random()*3)]);
//   }

//   console.log(gifts[Math.floor(Math.random()*3)])

//   return (
//     <div className="App">
//         <h1>{gift}</h1>
//         <button onClick={randomGift} >Click </button>
//     </div>
//   );
// }

// function App() {
//   const [checked, setChecked] = useState([]);

// const action = (id) => {
//   setChecked(prev => {
//     if(checked.includes(id)) {
//       return checked.filter(item => item != id)
//     }else {
//       return [...prev, id]
//     }
//   })
// }

//   const handResult = () => {
//     console.log(checked);
//   };

//   return (
//     <div className="App">
//       {gifts.map((gift) => (
//         <div key={gift.id}>
//           <input
//             type="checkbox"
//             checked={checked.includes(gift.id)}
//             onChange={() => action(gift.id)}
//           />
//           {gift.name}
//         </div>
//       ))}
//       <button onClick={handResult}>Save</button>
//     </div>
//   );
// }

// function App() {
//   const [task, setTask] = useState('')
//   const [tasks, setTasks] = useState([])

//   const addTask = () => {
//     if(task === "") {
//       return;
//     } else {
//       setTasks(prev => [...prev, task])
//     setTask('')
//     }
//   }

//   const deleteTask = (index) => {
//     console.log(index)
//     setTasks(prev => prev.splice(index,1))
//   }

//   return (
//     <div style={{padding: 32}}>
//       <input
//         value={task}
//         onChange={e => setTask(e.target.value)}
//       />

//       <button onClick={addTask}>Add</button>
//       <ul>
//         {tasks.map((job, index) => (
//           <li key={index}>
//             {job}
//             <button style={{marginLeft: 20}} onClick={() => deleteTask(index)}>Done</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// function App() {
//   const [student, setStudent] = useState({
//     name: '',
//     age: '',
//     // Thêm các trường thông tin khác của sinh viên ở đây
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setStudent({ ...student, [name]: value });
//   };

//   const handleSubmit = () => {
//     axios.post('https://api.example.com/students', student)
//       .then((response) => {
//         console.log('Sinh viên đã được thêm vào cơ sở dữ liệu:', response.data);
//         // Cập nhật giao diện hoặc thực hiện các hành động khác sau khi thêm thành công
//       })
//       .catch((error) => {
//         console.error('Lỗi khi thêm sinh viên:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Thêm Sinh viên</h2>
//       <form>
//         <div>
//           <label htmlFor="name">Tên Sinh viên:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={student.name}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="age">Tuổi:</label>
//           <input
//             type="number"
//             id="age"
//             name="age"
//             value={student.age}
//             onChange={handleInputChange}
//           />
//         </div>
//         {/* Thêm các trường thông tin khác của sinh viên ở đây */}
//         <button type="button" onClick={handleSubmit}>Thêm Sinh viên</button>
//       </form>
//     </div>
//   );
// }

// function App() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Gọi API bằng fetch
//     axios.get('https://localhost:7087/api/Student')
//     .then((response) => {
//       setData(response.data);
//       setLoading(false);
//     })
//     .catch((error) => {
//       console.error('Lỗi khi gọi API:', error);
//       setLoading(false);
//     });
// }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {data.map((item) => (
//         <div key={item.id}>{item.name}--{item.age}--{item.className}-</div>
//       ))}
//     </div>
//   );
// }

// function App() {
//   const [student, setStudent] = useState({
//     name: '',
//     age: '',
//     className: ''
//   });

//   const handleInputChange = (e) => {
//     setStudent({
//       ...student,
//       [e.target.name]: e.target.value,
//     });
//   };

//   console.log(student)

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const form = new FormData();
    
    

//     let config = {
//       headers: {
//         "Content-Type": "application/json",
//         'Access-Control-Allow-Origin': '*',
//       }
//     }
    


//     // Gọi API POST để chèn sinh viên mới
//     axios
//       .post('https://localhost:7087/api/Student', student, config)
//       .then((response) => {
//         console.log('Sinh viên đã được thêm:', response.data);
//       })
//       .catch((error) => {
//         console.error('Lỗi khi thêm sinh viên:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Thêm Sinh Viên</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             Tên Sinh Viên:
//             <input type="text" name="name" onChange={handleInputChange} />
//           </label>
//         </div>
//         <div>
//           <label>
//             Tuổi Sinh Viên:
//             <input type="number" name="age" onChange={handleInputChange} />
//           </label>
//         </div>
//         <div>
//           <label>
//             Class Name:
//             <input type="text" name="className" onChange={handleInputChange} />
//           </label>
//         </div>
        
//         <button type="submit">Thêm</button>
//       </form>
//     </div>
//   );
// }

export default App;
