"use client"

import { DataTable } from "@/components/data-table/data-table"
import { columns, District } from "./columns"

interface DistrictsClientProps {
  data: District[]
  provinces: { uid: string; name: string }[]
}

export function DistrictsClient({ data, provinces }: DistrictsClientProps) {
  const tableColumns = columns(provinces)
  return <DataTable searchKey="name" columns={tableColumns} data={data} />
}
