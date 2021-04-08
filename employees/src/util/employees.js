
//  function getUsers() {

//     fetch('https://randomuser.me/api/?results=200&nat=us')
//       .then((response) => response.json())
//       .then((data) => {
//         // console.log(data.results);
//         const users = data.results;
//         // console.log(users)
//         // this.props(users.data);
//         return users;
//       });

// }

// export { getUsers }
import { useState, useEffect } from 'react';
import EmployeeList from '../components/EmployeeList'

const Employees = () => {
    const [ users, setUsers ] = useState(null);
    
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=200&nat=us')
         .then(res=>{
            return res.json()
         })
         .then(data=>{
           console.log(data.results);
           setUsers(data)
         });
    }, [])
    return (
        <div>
           {users && <EmployeeList users={users} />}
        </div>
    )
}

export default Employees;
