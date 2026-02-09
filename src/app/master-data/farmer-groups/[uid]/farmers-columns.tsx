"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

export type Farmer = {
  uid: string
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
      // Placeholder for view action
      return (
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Eye className="h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "displayFarmerID",
    header: "FarmerID",
  },
  {
    accessorKey: "name",
    header: "Name",
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
