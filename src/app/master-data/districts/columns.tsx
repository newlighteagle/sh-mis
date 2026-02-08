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
                    This action cannot be undone. This will permanently delete the district <strong>{district.name}</strong>.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => deleteDistrict(district.uid)} className="bg-red-600 hover:bg-red-700">
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        
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
