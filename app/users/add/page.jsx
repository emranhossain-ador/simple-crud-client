'use client';

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation";

export default function AddUserPage() {

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        console.log(result);

        if (response.ok) {
            redirect('/users');
        } else {
            alert('Failed to add user');
        }
    }

  return (
    <div className="p-6 max-w-sm mx-auto">
        <form onSubmit={handleSubmit}>
        <FieldGroup>
            <Field>
                <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
                <Input id="fieldgroup-name" type="text" name="name" placeholder="Jordan Lee" />
            </Field>
            <Field>
                <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
                <Input id="fieldgroup-email" type="email" name="email" placeholder="name@example.com" />
            </Field>
            <Field orientation="horizontal">
                <Button type="reset" variant="outline">
                Reset
                </Button>
                <Button type="submit">Submit</Button>
            </Field>
        </FieldGroup>
        </form>
    </div>
  )
}
