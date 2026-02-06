import { getUsers } from "@/actions/user"
import { getRoles } from "@/actions/role"
import { getGroups } from "@/actions/group"
import { UserForm } from "./user-form"
import { Separator } from "@/components/ui/separator"
import { UsersClient } from "./client"

export default async function UsersPage() {
  const [usersResult, rolesResult, groupsResult] = await Promise.all([
    getUsers(),
    getRoles(),
    getGroups()
  ])

  const users = usersResult.success ? usersResult.data : []
  const roles = rolesResult.success ? rolesResult.data : []
  const groups = groupsResult.success ? groupsResult.data : []

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="grid gap-1">
          <h2 className="text-3xl font-bold tracking-tight">Users</h2>
          <p className="text-muted-foreground">
            Manage users data ({users?.length || 0})
          </p>
        </div>
        <UserForm roles={roles || []} groups={groups || []} />
      </div>
      <Separator />
      <UsersClient data={users || []} roles={roles || []} groups={groups || []} />
    </div>
  )
}
