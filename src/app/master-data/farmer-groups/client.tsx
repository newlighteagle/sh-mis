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
  return <DataTable searchKey="fullName" columns={tableColumns} data={data} />
}
