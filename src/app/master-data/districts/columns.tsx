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
import { DistrictForm } from "./district-form"
import { useState } from "react"
import { deleteDistrict } from "@/actions/district"

// Need to define Province type or import it
type Province = {
  uid: string
  name: string
}

export type District = {
  uid: string
  kode: string
  name: string
  provinceId: string
  province?: Province
}

// We need a way to pass province list to the edit form.
// One way is to pass the full list of provinces to the columns definition or fetch it inside the form.
// Fetching inside the form is easier for the "Edit" case if we pass options.
// Or we can just render the form only when editing.

export const columns = (provinces: Province[]): ColumnDef<District>[] => [
  {
    accessorKey: "kode",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Kode
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
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
    accessorKey: "province.name",
    header: "Province",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const district = row.original
      const [showEditDialog, setShowEditDialog] = useState(false)

      const handleDelete = async () => {
         if (confirm(`Are you sure you want to delete ${district.name}?`)) {
            await deleteDistrict(district.uid)
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
        
        <DistrictForm 
            open={showEditDialog} 
            onOpenChange={setShowEditDialog}
            initialData={district}
            provinces={provinces}
        />
        </>
      )
    },
  },
]
