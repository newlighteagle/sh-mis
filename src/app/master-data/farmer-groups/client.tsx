"use client"

import { DataTable } from "@/components/data-table/data-table"
import { columns, FarmerGroup } from "./columns"

type District = {
  uid: string
  name: string
  kode: string
}

interface FarmerGroupsClientProps {
  data: FarmerGroup[]
  districts: District[]
}

export function FarmerGroupsClient({ data, districts }: FarmerGroupsClientProps) {
  const tableColumns = columns(districts)
  return (
    <DataTable
      columns={tableColumns}
      data={data}
      enableGlobalFilter={true}
      searchPlaceholder="Search Short Name, Full Name, or District..."
      entityName="Farmer Groups"
    />
  )
}
