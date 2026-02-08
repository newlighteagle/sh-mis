"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Mock data for farmers moved here for client-side filtering
const initialFarmers = [
  { farmerId: "F-001", name: "Budi Santoso", landParcel: 2, totalSize: "2.5 Ha", status: "Registered" },
  { farmerId: "F-002", name: "Siti Aminah", landParcel: 1, totalSize: "1.8 Ha", status: "Registered" },
  { farmerId: "F-003", name: "Agus Setiawan", landParcel: 3, totalSize: "3.2 Ha", status: "Reserved" },
  { farmerId: "F-004", name: "Rina Wati", landParcel: 1, totalSize: "1.5 Ha", status: "inActive" },
  { farmerId: "F-005", name: "Joko Widodo", landParcel: 4, totalSize: "4.0 Ha", status: "Registered" },
]

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

export function FarmersTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredFarmers = initialFarmers.filter((farmer) =>
    farmer.farmerId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    farmer.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-end">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search FarmerID or Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]"></TableHead>
              <TableHead>FarmerID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Land Parcel</TableHead>
              <TableHead>Total Size</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredFarmers.length > 0 ? (
              filteredFarmers.map((farmer) => (
                <TableRow key={farmer.farmerId}>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                  <TableCell>{farmer.farmerId}</TableCell>
                  <TableCell>{farmer.name}</TableCell>
                  <TableCell>{farmer.landParcel}</TableCell>
                  <TableCell>{farmer.totalSize}</TableCell>
                  <TableCell>
                    <Badge className={`${getStatusColor(farmer.status)} w-28 justify-center`} variant="outline">
                      {farmer.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            ) : (
                <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                        No results.
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
