import React from "react";

const UserList = ({ userList,setUserList }) => {

  const deleteUser=(id)=>{
  const filteredItem= userList.filter((user)=> user.id !== id);
   setUserList(filteredItem)
    
  }
    return (
        <div className="userlist">
      
            <ol className="list">
            <h2>USER LIST</h2>
                {userList.map((user) => (
                    <li className="list-item" key={user.id}>
                        {user.name}
                        <button onClick={()=>deleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default UserList;
