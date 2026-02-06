import { getDistricts } from "@/actions/district"
import { getProvinces } from "@/actions/province"
import { DistrictForm } from "./district-form"
import { Separator } from "@/components/ui/separator"
import { DistrictsClient } from "./client"

export default async function DistrictsPage() {
  const [districtsResult, provincesResult] = await Promise.all([
    getDistricts(),
    getProvinces()
  ])

  const districts = districtsResult.success ? districtsResult.data : []
  const provinces = provincesResult.success ? provincesResult.data : []

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="grid gap-1">
          <h2 className="text-3xl font-bold tracking-tight">Districts</h2>
          <p className="text-muted-foreground">
            Manage districts data ({districts?.length || 0})
          </p>
        </div>
        <DistrictForm provinces={provinces || []} />
      </div>
      <Separator />
      <DistrictsClient data={districts || []} provinces={provinces || []} />
    </div>
  )
}
