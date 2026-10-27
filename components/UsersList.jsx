'use client';

import { ChevronRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import UpdateDialog  from "@/components/UpdateDialog"

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import Link from "next/link";
import { useRouter } from "next/navigation";


const UsersList = ({user}) => {

    const router = useRouter();

    const handleDelete = async (id) => {
        const result = await fetch(`http://localhost:3000/user/${id}`, {
            method: "Delete"
        });

        if(result.ok){
            router.refresh();
        }
    }

    return (
        <Card key={user._id} size="sm" className="mx-auto w-full max-w-xs">
            <CardContent>
                
                <ul className="grid gap-2 py-2 text-sm">
                    <li className="flex gap-2">
                        <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                        <span>{user.email}</span>
                    </li>
                    <li className="flex gap-2">
                        <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                        <span>{user.name}</span>
                    </li>
                </ul>
            </CardContent>
            <CardFooter className="flex-row gap-2">
                <Link href={`/users/${user._id}`} className="w-full">
                    <Button variant="outline" className="w-full">
                        View
                    </Button>
                </Link>

                <UpdateDialog user={user}/>

                <Button variant="destructive" onClick={() => handleDelete(user._id)}>
                    Delete
                </Button>
            </CardFooter>
        </Card>
    )
}

export default UsersList;