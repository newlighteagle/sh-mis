import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Eye } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

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
    id: "actions",
    cell: ({ row }) => {
      const fg = row.original

      return (
        <div className="flex items-center justify-start gap-0">
          <Button variant="ghost" className="h-8 w-8 p-0" title="View" asChild>
            <Link href={`/master-data/farmer-groups/${fg.uid}`}>
                <Eye className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      )
    },
  },
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
]
