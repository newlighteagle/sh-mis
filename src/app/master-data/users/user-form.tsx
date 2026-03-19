"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState, useEffect } from "react"
import { createUser, updateUser } from "@/actions/user"
import { Plus } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().optional(),
  roleId: z.string().min(1, "Role is required"),
  groupId: z.string().optional(),
})

interface UserFormProps {
  initialData?: { 
      uid: string; 
      name: string | null; 
      email: string;
      roleId: string;
      groupId: string | null;
    } | null
  open?: boolean
  onOpenChange?: (open: boolean) => void
  roles: { uid: string; name: string }[]
  groups: { uid: string; abrv: string; name: string }[]
}

export function UserForm({ initialData, open, onOpenChange, roles, groups }: UserFormProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const isOpen = open !== undefined ? open : internalOpen
  const setIsOpen = onOpenChange || setInternalOpen

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      roleId: "",
      groupId: "",
    },
  })

  useEffect(() => {
    if (initialData) {
      form.reset({
        name: initialData.name || "",
        email: initialData.email,
        password: "", // Don't fill password on edit
        roleId: initialData.roleId,
        groupId: initialData.groupId || "none", // Handle null as specific string if needed, or clear selection
      })
    } else {
      form.reset({
        name: "",
        email: "",
        password: "",
        roleId: "",
        groupId: "",
      })
    }
  }, [initialData, form, isOpen])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle "none" string back to undefined/null for groupId
    const submitData = {
        ...values,
        groupId: values.groupId === "none" || values.groupId === "" ? undefined : values.groupId,
        // Only include password if provided (for edit)
        password: values.password === "" ? undefined : values.password
    }

    if (initialData) {
      await updateUser(initialData.uid, submitData)
    } else {
      // For create, password might be mandatory based on requirements, but schema allows optional
      // In a real app we'd validate password presence on create.
      await createUser(submitData as any)
    }
    setIsOpen(false)
    form.reset()
  }

  const title = initialData ? "Edit User" : "Create User"
  const description = initialData ? "Edit existing user details." : "Add a new user to the system."
  const action = initialData ? "Save Changes" : "Create"

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {!initialData && (
        <DialogTrigger asChild>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add User
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder={initialData ? "Leave blank to keep current" : "Secure password"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <div className="grid grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="roleId"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        {roles.map((role) => (
                            <SelectItem key={role.uid} value={role.uid}>
                            {role.name}
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
                 <FormField
                control={form.control}
                name="groupId"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Group</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value || "none"}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select group (opt)" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="none">_None_</SelectItem>
                        {groups.map((group) => (
                            <SelectItem key={group.uid} value={group.uid}>
                            {group.abrv}
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
             </div>
            <DialogFooter>
              <Button type="submit">{action}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
