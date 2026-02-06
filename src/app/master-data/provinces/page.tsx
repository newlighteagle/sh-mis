import { getProvinces } from "@/actions/province"
import { DataTable } from "@/components/data-table/data-table"
import { columns } from "./columns"
import { ProvinceForm } from "./province-form"
import { Separator } from "@/components/ui/separator"

export default async function ProvincesPage() {
  const result = await getProvinces()
  const provinces = result.success ? result.data : []

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="grid gap-1">
          <h2 className="text-3xl font-bold tracking-tight">Provinces</h2>
          <p className="text-muted-foreground">
            Manage provinces data ({provinces?.length || 0})
          </p>
        </div>
        <ProvinceForm />
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={provinces || []} />
    </div>
  )
}
