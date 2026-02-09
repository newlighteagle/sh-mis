import { getFarmers } from "@/actions/farmer"
import { FarmersClient } from "./client"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Map, UserCheck, Clock } from "lucide-react"

export const dynamic = 'force-dynamic'

export default async function FarmersPage() {
  const { data: farmers, success } = await getFarmers()
  const farmersList = farmers || []

  const totalFarmers = farmersList.length
  const totalLandSize = farmersList.reduce((acc, farmer) => {
    return acc + farmer.landParcels.reduce((lpAcc, lp) => lpAcc + lp.sizeHa, 0)
  }, 0).toFixed(2)
  const activeFarmers = farmersList.filter(f => f.status === 'Registered').length
  const pendingFarmers = farmersList.filter(f => f.status === 'Reserved').length

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Farmers</h2>
           <p className="text-muted-foreground">
            Manage farmers data ({farmersList.length})
          </p>
        </div>
      </div>



      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
            <CardContent className="flex items-center px-4 py-1">
                <Users className="h-5 w-5 text-blue-500 mr-2" />
                <div>
                    <p className="text-xs font-medium text-muted-foreground">Total Farmers</p>
                    <h3 className="text-xl font-bold">{totalFarmers}</h3>
                </div>
            </CardContent>
        </Card>
        <Card>
                <CardContent className="flex items-center px-4 py-1">
                <Map className="h-5 w-5 text-green-500 mr-2" />
                <div>
                    <p className="text-xs font-medium text-muted-foreground">Total Land Size</p>
                    <h3 className="text-xl font-bold">{totalLandSize} Ha</h3>
                </div>
            </CardContent>
        </Card>
        <Card>
                <CardContent className="flex items-center px-4 py-1">
                <UserCheck className="h-5 w-5 text-emerald-600 mr-2" />
                <div>
                    <p className="text-xs font-medium text-muted-foreground">Registered Farmers</p>
                    <h3 className="text-xl font-bold">{activeFarmers}</h3>
                </div>
            </CardContent>
        </Card>
        <Card>
                <CardContent className="flex items-center px-4 py-1">
                <Clock className="h-5 w-5 text-orange-500 mr-2" />
                <div>
                    <p className="text-xs font-medium text-muted-foreground">Pending</p>
                    <h3 className="text-xl font-bold">{pendingFarmers}</h3>
                </div>
            </CardContent>
        </Card>
      </div>

      <Separator />
      <FarmersClient data={farmersList} />
    </div>
  )
}
