

const UserDetailsPage = async ({ params }) => {
    const { userid } = await params;

    const response = await fetch(`http://localhost:3000/user/${userid}`);
    const user = await response.json();

    if (!response.ok) {
        return <div>Failed to fetch user details</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center py-5">
            <h1>User Details</h1>
            <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        );
    };

    export default UserDetailsPage;