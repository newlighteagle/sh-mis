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
import { cmsContent } from "@/lib/restrict-data/dummy-cms"
import { Plus, Pencil, Trash2, Eye } from "lucide-react"

export function CmsView({ slug }: { slug: string }) {
  const contentKey = (slug in cmsContent) ? slug as keyof typeof cmsContent : null;
  const data = contentKey ? cmsContent[contentKey] : [];
  
  // Dynamically get columns from first item keys, excluding 'id' if possible or just use all
  const columns = data.length > 0 ? Object.keys(data[0]).filter(k => k !== 'id') : ['No Data'];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium capitalize">{slug} Content Management</h3>
        <Button size="sm">
           <Plus className="mr-2 h-4 w-4" />
           Create New Content
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col, idx) => (
                <TableHead key={idx} className="capitalize">{col}</TableHead>
              ))}
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length === 0 ? (
               <TableRow>
                 <TableCell colSpan={columns.length + 1} className="text-center h-24">
                    No content available
                 </TableCell>
               </TableRow>
            ) : (
              data.map((row: any, idx) => (
                <TableRow key={idx}>
                  {columns.map((col, vIdx) => (
                    <TableCell key={vIdx}>{row[col]}</TableCell>
                  ))}
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                       <Button variant="ghost" size="icon" className="h-8 w-8">
                         <Eye className="h-4 w-4 text-gray-500" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                         <Pencil className="h-4 w-4 text-blue-500" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                         <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
