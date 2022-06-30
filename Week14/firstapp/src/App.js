import React from 'react';
import User  from './components/User';
import './App.css';
// import users from './components/users.json'
import 'tachyons'
import './App'
import SearchBox from './components/SearchBox'

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>{
        this.setState({users:data})
      })
      .catch(e=>{
        console.log(e)
      })
    }

    

  render() {
    const filtered = this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchFiled.toLowerCase())
  })
    return (
     <div className="App">
       <SearchBox />
      {
        this.state.users.map((item ,i)=>{
           return <User userdata={item} key={i}/>
         })
      }
      

     </div>
    )
  }
}

// const users= [
//   {id: 1, name: 'Jhon', username:'NinjaMinja', email:'ninja@gmail.com'},
//   {id: 2, name: 'Daniel', username:'Daniel', email:'Daniel@gmail.com'},
//   {id: 3, name: 'Mimi', username:'Mimi', email:'mimi@gmail.com'}
// ]

// function App() {
//   return (
//     <div className="App">
//       {
//         users.map(i=>{
//           return <User userdata={i}/>
//         })
//       }
//     </div>
//   );
// }

export default App;
