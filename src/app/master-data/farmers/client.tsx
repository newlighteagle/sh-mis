"use client"

import { DataTable } from "@/components/data-table/data-table"
import { columns, Farmer } from "./columns"

interface FarmersClientProps {
  data: Farmer[]
}

export function FarmersClient({ data }: FarmersClientProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      enableGlobalFilter={true}
      searchPlaceholder="Search Farmer ID, Name..."
      entityName="Farmers"
    />
  )
}
