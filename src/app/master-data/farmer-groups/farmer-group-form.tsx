"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState, useEffect } from "react"
import { createFarmerGroup, updateFarmerGroup } from "@/actions/farmer-group"
import { Plus } from "lucide-react"

const formSchema = z.object({
  districtKode: z.string().min(1, "District is required"),
  fgCode: z.string().min(1, "FG Code is required"),
  abrv: z.string().min(1, "Abbreviation is required"),
  shortName: z.string().min(1, "Short Name is required"),
  fullName: z.string().min(1, "Full Name is required"),
})

interface FarmerGroupFormProps {
  initialData?: { 
      uid: string; 
      districtKode: string; 
      fgCode: string;
      abrv: string;
      shortName: string;
      fullName: string;
    } | null
  open?: boolean
  onOpenChange?: (open: boolean) => void
  districts: { uid: string; kode: string; name: string }[]
}

export function FarmerGroupForm({ initialData, open, onOpenChange, districts }: FarmerGroupFormProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const isOpen = open !== undefined ? open : internalOpen
  const setIsOpen = onOpenChange || setInternalOpen

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      districtKode: "",
      fgCode: "",
      abrv: "",
      shortName: "",
      fullName: "",
    },
  })

  useEffect(() => {
    if (initialData) {
      form.reset({
        districtKode: initialData.districtKode,
        fgCode: initialData.fgCode,
        abrv: initialData.abrv,
        shortName: initialData.shortName,
        fullName: initialData.fullName,
      })
    } else {
      form.reset({
        districtKode: "",
        fgCode: "",
        abrv: "",
        shortName: "",
        fullName: "",
      })
    }
  }, [initialData, form, isOpen])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (initialData) {
      await updateFarmerGroup(initialData.uid, values)
    } else {
      await createFarmerGroup(values)
    }
    setIsOpen(false)
    form.reset()
  }

  const title = initialData ? "Edit Farmer Group" : "Create Farmer Group"
  const description = initialData ? "Edit existing farmer group details." : "Add a new farmer group to the system."
  const action = initialData ? "Save Changes" : "Create"

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {!initialData && (
        <DialogTrigger asChild>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Farmer Group
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
             <FormField
              control={form.control}
              name="districtKode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>District</FormLabel>
                   <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a district" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {districts.map((district) => (
                        <SelectItem key={district.kode} value={district.kode}>
                          {district.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fgCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>FG Code</FormLabel>
                  <FormControl>
                    <Input placeholder="FG-1405-01" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="abrv"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Abbreviation</FormLabel>
                    <FormControl>
                        <Input placeholder="KMJ" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="shortName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Short Name</FormLabel>
                    <FormControl>
                        <Input placeholder="KPM KM" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
             <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Koperasi Produsen..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">{action}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
