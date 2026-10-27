import { Button } from "@/components/ui/button";
import UsersList from "@/components/UsersList";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";


const UsersPage = async () => {

  const res = await fetch('http://localhost:3000/users');
  const users = await res.json();

  return (
    <div className="flex flex-col items-center justify-center py-5">
        <Link href="/users/add" className="mb-4">
        <Button variant="outline">
            <PlusIcon className="w-4 h-4" />
            Add User</Button>
        </Link>
        <div className="mt-4 grid grid-cols-4 gap-3">
          {
            users.map((user: any) => (
              <UsersList key={user._id} user={user} />
            ))
          }
        </div>
    </div>

  )
}

export default UsersPage;