"use client"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { masterFarmers, masterGroups, masterParcels } from "@/lib/restrict-data/dummy-master"
import { Plus, Pencil, Trash2 } from "lucide-react"

export function MasterDataView({ slug }: { slug: string }) {
  // Determine which data to show based on slug
  let data: any[] = [];
  let columns: string[] = [];
  let title = "";

  if (slug === 'farmers') {
    data = masterFarmers;
    columns = ['ID', 'Name', 'Location', 'Status', 'Joined Date'];
    title = "Farmers Data";
  } else if (slug === 'groups') {
    data = masterGroups;
    columns = ['ID', 'Group Name', 'District', 'Members'];
    title = "Farmer Groups";
  } else if (slug === 'land-parcels') {
    data = masterParcels;
    columns = ['ID', 'Owner', 'Area', 'Status'];
    title = "Land Parcels";
  } else {
    // Default dummy for other master data
    data = [
      { id: 1, name: 'Item 1', desc: 'Description 1', active: 'Yes' },
      { id: 2, name: 'Item 2', desc: 'Description 2', active: 'No' },
    ];
    columns = ['ID', 'Name', 'Description', 'Active'];
    title = "Master Data";
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">{title} Management</h3>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add New {slug}
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col, idx) => (
                <TableHead key={idx}>{col}</TableHead>
              ))}
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row: any, idx) => (
              <TableRow key={idx}>
                {Object.values(row).map((val: any, vIdx) => (
                  <TableCell key={vIdx}>{val}</TableCell>
                ))}
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                       <Pencil className="h-4 w-4 text-blue-500" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                       <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
