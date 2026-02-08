"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Eye, MoreHorizontal, Pencil, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { UserForm } from "./user-form"
import { useState } from "react"
import { deleteUser } from "@/actions/user"
import { Badge } from "@/components/ui/badge"

type Role = {
  id: string
  name: string
}

type Group = {
  uid: string
  name: string
  abrv: string
}

export type User = {
  id: string
  email: string
  name: string | null
  roleId: string
  role?: Role
  groupId: string | null
  group?: Group | null
}

export const columns = (roles: Role[], groups: Group[]): ColumnDef<User>[] => [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "role.name",
    header: "Role",
    cell: ({ row }) => {
        return <Badge variant="outline">{row.original.role?.name}</Badge>
    }
  },
  {
    accessorKey: "group.name",
    header: "Group",
    cell: ({ row }) => {
        return row.original.group ? (
            <div className="flex flex-col">
                <span className="font-medium">{row.original.group.abrv}</span>
                <span className="text-xs text-muted-foreground">{row.original.group.name}</span>
            </div>
        ) : <span className="text-muted-foreground">-</span>
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original
      const [showEditDialog, setShowEditDialog] = useState(false)




      return (
        <>
          <div className="flex items-center justify-end gap-0">
            <Button variant="ghost" className="h-8 w-8 p-0" onClick={() => setShowEditDialog(true)} title="View">
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="h-8 w-8 p-0" onClick={() => setShowEditDialog(true)} title="Edit">
              <Pencil className="h-4 w-4" />
            </Button>
            
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0 text-red-500 hover:text-red-600" title="Delete">
                   <Trash className="h-4 w-4" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete the user <strong>{user.name}</strong>.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => deleteUser(user.id)} className="bg-red-600 hover:bg-red-700">
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        
          <UserForm 
              open={showEditDialog} 
              onOpenChange={setShowEditDialog}
              initialData={user}
              roles={roles}
              groups={groups}
          />
        </>
      )

    },
  },
]
