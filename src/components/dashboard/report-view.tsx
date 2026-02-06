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
import { reportData } from "@/lib/restrict-data/dummy-report"
import { FileSpreadsheet, FileText, Download } from "lucide-react"

export function ReportView({ slug }: { slug: string }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-muted/50 p-4 rounded-lg">
        <div>
          <h3 className="text-lg font-medium">Export Options</h3>
          <p className="text-sm text-muted-foreground">Download report data for {slug}</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" size="sm">
             <FileSpreadsheet className="mr-2 h-4 w-4" />
             Export to XLS
           </Button>
           <Button variant="outline" size="sm">
             <FileText className="mr-2 h-4 w-4" />
             Export to PDF
           </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Report Name</TableHead>
              <TableHead>Recipient</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reportData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.date}</TableCell>
                <TableCell className="font-medium">{item.reportName}</TableCell>
                <TableCell>{item.recipient}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
