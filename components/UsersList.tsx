import { use } from "react";

interface UsersListProps {
    id: string;
    name: string;
    email: string;
}

const UsersList = async ({ users }: { users: Promise<UsersListProps[]> }) => {

    const usersData = await users;

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {usersData.map((user) => (
                    <li key={user._id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    )
}

export default UsersList;