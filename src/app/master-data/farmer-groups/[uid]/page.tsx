import { getFarmerGroupById } from "@/actions/farmer-group"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Users, Map, UserCheck, Clock } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FarmersTable } from "./farmers-table"
import MapSection from "./map-section"

// @ts-ignore
export default async function FarmerGroupDetailPage({ params }: { params: Promise<{ uid: string }> }) {
  const { uid } = await params
  const { data: farmerGroup, success } = await getFarmerGroupById(uid)

  if (!success || !farmerGroup) {
    notFound()
  }

  const farmers = farmerGroup.farmers || []
  const totalFarmers = farmers.length
  const totalLandSize = farmers.reduce((acc, farmer) => {
    return acc + farmer.landParcels.reduce((lpAcc, lp) => lpAcc + lp.sizeHa, 0)
  }, 0).toFixed(2)
  const activeFarmers = farmers.filter(f => f.status === 'Registered').length
  const pendingFarmers = farmers.filter(f => f.status === 'Reserved').length // Assuming Reserved = Pending

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/master-data/farmer-groups">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
            <h1 className="text-2xl font-bold tracking-tight">{farmerGroup.shortName}</h1>
            <p className="text-muted-foreground">{farmerGroup.district?.name || '-'}</p>
        </div>
      </div>

      <Accordion type="multiple" defaultValue={["overview"]} className="w-full">
        <AccordionItem value="overview">
            <AccordionTrigger>Overview</AccordionTrigger>
            <AccordionContent>
                 <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
                    <Card>
                        <CardContent className="flex items-center p-6">
                            <Users className="h-10 w-10 text-blue-500 mr-4" />
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Total Farmers</p>
                                <h3 className="text-2xl font-bold">{totalFarmers}</h3>
                                {/* <p className="text-xs text-muted-foreground">+20.1% from last month</p> */}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                         <CardContent className="flex items-center p-6">
                            <Map className="h-10 w-10 text-green-500 mr-4" />
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Total Land Size</p>
                                <h3 className="text-2xl font-bold">{totalLandSize} Ha</h3>
                                {/* <p className="text-xs text-muted-foreground">+180.1% from last month</p> */}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                         <CardContent className="flex items-center p-6">
                            <UserCheck className="h-10 w-10 text-emerald-600 mr-4" />
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Registered Farmers</p>
                                <h3 className="text-2xl font-bold">{activeFarmers}</h3>
                                {/* <p className="text-xs text-muted-foreground">+19% from last month</p> */}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                         <CardContent className="flex items-center p-6">
                            <Clock className="h-10 w-10 text-orange-500 mr-4" />
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                                <h3 className="text-2xl font-bold">{pendingFarmers}</h3>
                                {/* <p className="text-xs text-muted-foreground">+201 since last hour</p> */}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="map">
            <AccordionTrigger>Map</AccordionTrigger>
            <AccordionContent>
                <MapSection landParcels={farmerGroup.farmers?.flatMap(f => f.landParcels.map(lp => ({
                    ...lp,
                    farmerName: f.name,
                    farmerStatus: f.status,
                    displayFarmerID: f.displayFarmerID
                }))) || []} />
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="farmers-list">
            <AccordionTrigger>Farmers List</AccordionTrigger>
            <AccordionContent>
                <FarmersTable data={farmerGroup.farmers || []} />
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="training">
            <AccordionTrigger>Training</AccordionTrigger>
            <AccordionContent>
                <div className="p-4 text-muted-foreground">Content for Training</div>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="bmp-reg-ag">
            <AccordionTrigger>BMP & Reg Ag.</AccordionTrigger>
            <AccordionContent>
                <div className="p-4 text-muted-foreground">Content for BMP & Reg Ag.</div>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="hse-k3">
            <AccordionTrigger>HSE / K3</AccordionTrigger>
            <AccordionContent>
                <div className="p-4 text-muted-foreground">Content for HSE / K3</div>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="hcv">
            <AccordionTrigger>HCV</AccordionTrigger>
            <AccordionContent>
                <div className="p-4 text-muted-foreground">Content for HCV</div>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="busdev">
            <AccordionTrigger>Busdev</AccordionTrigger>
            <AccordionContent>
                <div className="p-4 text-muted-foreground">Content for Busdev</div>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="gedsi">
            <AccordionTrigger>Gedsi</AccordionTrigger>
            <AccordionContent>
                <div className="p-4 text-muted-foreground">Content for Gedsi</div>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="risk-management">
            <AccordionTrigger>Risk Management</AccordionTrigger>
            <AccordionContent>
                <div className="p-4 text-muted-foreground">Content for Risk Management</div>
            </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
