import { getGroups } from "@/actions/group"
import { DataTable } from "@/components/data-table/data-table"
import { columns } from "./columns"
import { GroupForm } from "./group-form"
import { Separator } from "@/components/ui/separator"

export default async function GroupsPage() {
  const result = await getGroups()
  const groups = result.success ? result.data : []

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="grid gap-1">
          <h2 className="text-3xl font-bold tracking-tight">Groups</h2>
          <p className="text-muted-foreground">
            Manage groups data ({groups?.length || 0})
          </p>
        </div>
        <GroupForm />
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={groups || []} />
    </div>
  )
}
