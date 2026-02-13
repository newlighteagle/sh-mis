
import { getFarmerByUid } from "@/actions/farmer"
import { notFound } from "next/navigation"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { ArrowLeft, MapPin, User, FileCheck, Tractor } from "lucide-react"

interface FarmerDetailPageProps {
  params: {
    uid: string
  }
}

// @ts-ignore
export default async function FarmerDetailPage({ params }: { params: Promise<{ uid: string }> }) {
  const { uid } = await params
  
  const { data: farmer, success } = await getFarmerByUid(uid)

  if (!success || !farmer) {
    notFound()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Registered":
        return "bg-green-800 text-green-100 hover:bg-green-800/80 border-transparent"
      case "Reserved":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80 border-transparent"
      case "inActive":
        return "bg-red-800 text-red-100 hover:bg-red-800/80 border-transparent"
      default:
        return "bg-gray-100 text-gray-800 border-transparent"
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center space-x-2">
        <Link href="/master-data/farmers" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h2 className="text-3xl font-bold tracking-tight">{farmer.name}</h2>
        <Badge className={`${getStatusColor(farmer.status)} ml-2`}>
            {farmer.status}
        </Badge>
      </div>
      
      <p className="text-muted-foreground ml-7">
        ID: {farmer.displayFarmerID} | Group: <Link href={`/master-data/farmer-groups/${farmer.fgId}`} className="text-blue-500 hover:underline">{farmer.farmerGroup.fullName}</Link>
      </p>

      <Separator />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                Farmer Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Display ID</p>
                    <p className="text-sm">{farmer.displayFarmerID}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                    <p className="text-sm">{farmer.name}</p>
                </div>
                <div>
                     <p className="text-sm font-medium text-muted-foreground">Farmer Group</p>
                     <p className="text-sm">{farmer.farmerGroup.fullName} ({farmer.farmerGroup.shortName})</p>
                </div>
                 <div>
                    <p className="text-sm font-medium text-muted-foreground">Certificates</p>
                     <div className="flex flex-wrap gap-1 mt-1">
                        {farmer.certificate ? (
                           farmer.certificate.split(',').map((cert, idx) => (
                                <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-800">
                                    {cert.trim()}
                                </Badge>
                           ))
                        ) : (
                            <span className="text-sm">-</span>
                        )}
                    </div>
                </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Land Parcels ({farmer.landParcels.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Parcel ID</TableHead>
                        <TableHead>Size (Ha)</TableHead>
                        <TableHead>Revision</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {farmer.landParcels.map((parcel) => (
                        <TableRow key={parcel.uid}>
                            <TableCell className="font-medium">{parcel.displayLandParcelID}</TableCell>
                            <TableCell>{parcel.sizeHa.toFixed(2)} Ha</TableCell>
                            <TableCell>{parcel.revision}</TableCell>
                        </TableRow>
                    ))}
                    {farmer.landParcels.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center py-4 text-muted-foreground">
                                No land parcels found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
