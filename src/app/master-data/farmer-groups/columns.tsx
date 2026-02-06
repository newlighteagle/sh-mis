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
import { FarmerGroupForm } from "./farmer-group-form"
import { useState } from "react"
import { deleteFarmerGroup } from "@/actions/farmer-group"

type District = {
  uid: string
  name: string
  kode: string
}

export type FarmerGroup = {
  uid: string
  districtKode: string
  district?: District
  fgCode: string
  abrv: string
  shortName: string
  fullName: string
}

export const columns = (districts: District[]): ColumnDef<FarmerGroup>[] => [
  {
    accessorKey: "fgCode",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          FG Code
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "shortName",
    header: "Short Name",
  },
  {
    accessorKey: "fullName",
    header: "Full Name",
  },
  {
    accessorKey: "district.name",
    header: "District",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const fg = row.original
      const [showEditDialog, setShowEditDialog] = useState(false)

      const handleDelete = async () => {
         if (confirm(`Are you sure you want to delete ${fg.shortName}?`)) {
            await deleteFarmerGroup(fg.uid)
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
        
        <FarmerGroupForm 
            open={showEditDialog} 
            onOpenChange={setShowEditDialog}
            initialData={fg}
            districts={districts}
        />
        </>
      )
    },
  },
]
