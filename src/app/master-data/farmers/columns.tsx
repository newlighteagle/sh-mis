"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export type Farmer = {
  uid: string
  fgId: string
  farmerGroup: {
    shortName: string
    fullName: string
  }
  name: string
  displayFarmerID: string
  status: string
  certificate?: string | null
  landParcels: {
    sizeHa: number
  }[]
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Registered":
      return "bg-green-800 text-green-100 hover:bg-green-800/80 border-transparent"
    case "Reserved":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80 border-transparent"
    case "inActive":
      return "bg-red-800 text-red-100 hover:bg-red-800/80 border-transparent"
    default:
      return "bg-gray-100 text-gray-800 border-transparent"
  }
}

export const columns: ColumnDef<Farmer>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      // Placeholder for view action, maybe link to detail page later if needed
      return (
         <div className="flex items-center justify-start gap-0">
          <Button variant="ghost" className="h-8 w-8 p-0" title="View">
             <Eye className="h-4 w-4" />
          </Button>
        </div>
      )
    },
  },
  {
    accessorKey: "displayFarmerID",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Farmer ID
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
    accessorKey: "farmerGroup.shortName",
    header: "Farmer Group",
  },
  {
    id: "landParcelCount",
    header: "Land Parcel",
    cell: ({ row }) => {
      return row.original.landParcels.length
    },
  },
  {
    id: "totalSize",
    header: "Total Size",
    cell: ({ row }) => {
        const totalSize = row.original.landParcels
        .reduce((acc, curr) => acc + curr.sizeHa, 0)
        .toFixed(2)
      return `${totalSize} Ha`
    },
    filterFn: (row, id, value) => {
        // Custom filter if needed, but for global search simpler columns usually work
        return true; 
    }
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          className={`${getStatusColor(status)} w-28 justify-center`}
          variant="outline"
        >
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "certificate",
    header: "Certificate",
    cell: ({ row }) => {
      const certificate = row.getValue("certificate") as string
      if (!certificate) return "-"
      return (
        <Badge
          variant="secondary"
          className="bg-blue-100 text-blue-800 hover:bg-blue-100/80 border-transparent"
        >
          {certificate}
        </Badge>
      )
    },
  },
]
