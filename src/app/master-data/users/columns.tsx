"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, Pencil, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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

      const handleDelete = async () => {
         if (confirm(`Are you sure you want to delete ${user.name}?`)) {
            await deleteUser(user.id)
         }
      }

      return (
        <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => setShowEditDialog(true)}>
              <Pencil className="mr-2 h-4 w-4" /> Edit
            </DropdownMenuItem>
             <DropdownMenuItem onClick={handleDelete} className="text-red-600">
              <Trash className="mr-2 h-4 w-4" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
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
