"use client"

import { DataTable } from "@/components/data-table/data-table"
import { columns, User } from "./columns"

type Role = {
  uid: string
  name: string
}

type Group = {
  uid: string
  name: string
  abrv: string
}

interface UsersClientProps {
  data: User[]
  roles: Role[]
  groups: Group[]
}

export function UsersClient({ data, roles, groups }: UsersClientProps) {
  const tableColumns = columns(roles, groups)
  return <DataTable searchKey="name" columns={tableColumns} data={data} />
}
