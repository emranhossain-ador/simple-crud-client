import { Button } from "@/components/ui/button";
import UsersList from "@/components/UsersList";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const getUsers = async () => {
  const res = await fetch('http://localhost:3000/users');
  return res.json();
}

const UsersPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-5">
        <Link href="/users/add" className="mb-4">
        <Button variant="outline">
            <PlusIcon className="w-4 h-4" />
            Add User</Button>
        </Link>
        <Suspense fallback={<div>Loading...</div>}>
            <UsersList users={getUsers()} />
        </Suspense>
    </div>

  )
}

export default UsersPage;