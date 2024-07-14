import React, { useState, useEffect } from "react";
import { getUsers } from "../../Ulti/ApiService";
import { useUsers } from "../../Hooks/useUsers";

function UserList() {
  const { users, setUsers } = useUsers();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  if (loading) {
    return <div>....Loading</div>;
  }
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
