import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export default function UpdateDialog({user}) {

    const router = useRouter();

    const handleUserUpdate = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        
        const response = await fetch(`http://localhost:3000/user/${user._id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if(response.ok){
            router.refresh();
        }else{
            alert("Update faild");
        }
        
    }

  return (
    <Dialog>
        <DialogTrigger render={<Button variant="outline">Edit</Button>} />
        <DialogContent className="sm:max-w-sm">
            <form onSubmit={handleUserUpdate}>
                <DialogHeader>
                    <DialogTitle>Edit User</DialogTitle>
                    <DialogDescription>
                    Make changes to your profile here. Click save when you&apos;re
                    done.
                    </DialogDescription>
                </DialogHeader>
                <FieldGroup>
                    <Field>
                    <Label htmlFor="name-1">Name</Label>
                    <Input id="name-1" name="name" defaultValue={user.name} />
                    </Field>
                    <Field>
                    <Label htmlFor="Email-1">Email</Label>
                    <Input type="email" id="Email-1" name="email" defaultValue={user.email} />
                    </Field>
                </FieldGroup>
                <DialogFooter>
                    <DialogClose render={<Button variant="outline">Cancel</Button>} />
                    <DialogClose render={<Button type="submit">Save changes</Button>} />
                    
                </DialogFooter>
          </form>
        </DialogContent>
    </Dialog>
  )
}
