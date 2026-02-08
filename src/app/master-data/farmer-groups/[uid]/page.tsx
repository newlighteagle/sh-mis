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

// @ts-ignore
export default async function FarmerGroupDetailPage({ params }: { params: Promise<{ uid: string }> }) {
  const { uid } = await params
  const { data: farmerGroup, success } = await getFarmerGroupById(uid)

  if (!success || !farmerGroup) {
    notFound()
  }

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
                                <h3 className="text-2xl font-bold">254</h3>
                                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                         <CardContent className="flex items-center p-6">
                            <Map className="h-10 w-10 text-green-500 mr-4" />
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Total Land Size</p>
                                <h3 className="text-2xl font-bold">1,234 Ha</h3>
                                <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                         <CardContent className="flex items-center p-6">
                            <UserCheck className="h-10 w-10 text-emerald-600 mr-4" />
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Active Farmers</p>
                                <h3 className="text-2xl font-bold">200</h3>
                                <p className="text-xs text-muted-foreground">+19% from last month</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                         <CardContent className="flex items-center p-6">
                            <Clock className="h-10 w-10 text-orange-500 mr-4" />
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                                <h3 className="text-2xl font-bold">54</h3>
                                <p className="text-xs text-muted-foreground">+201 since last hour</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="map">
            <AccordionTrigger>Map</AccordionTrigger>
            <AccordionContent>
                <div className="p-4 text-muted-foreground">Map will be displayed here</div>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="farmers-list">
            <AccordionTrigger>Farmers List</AccordionTrigger>
            <AccordionContent>
                <FarmersTable />
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
