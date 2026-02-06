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
import { createDistrict, updateDistrict } from "@/actions/district"
import { Plus } from "lucide-react"

const formSchema = z.object({
  kode: z.string().min(1, "Kode is required"),
  name: z.string().min(1, "Name is required"),
  provinceId: z.string().min(1, "Province is required"),
})

interface DistrictFormProps {
  initialData?: { uid: string; kode: string; name: string; provinceId: string } | null
  open?: boolean
  onOpenChange?: (open: boolean) => void
  provinces: { uid: string; name: string }[]
}

export function DistrictForm({ initialData, open, onOpenChange, provinces }: DistrictFormProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const isOpen = open !== undefined ? open : internalOpen
  const setIsOpen = onOpenChange || setInternalOpen

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      kode: "",
      name: "",
      provinceId: "",
    },
  })

  useEffect(() => {
    if (initialData) {
      form.reset({
        kode: initialData.kode,
        name: initialData.name,
        provinceId: initialData.provinceId
      })
    } else {
      form.reset({
        kode: "",
        name: "",
        provinceId: "",
      })
    }
  }, [initialData, form, isOpen])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (initialData) {
      await updateDistrict(initialData.uid, values)
    } else {
      await createDistrict(values)
    }
    setIsOpen(false)
    form.reset()
  }

  const title = initialData ? "Edit District" : "Create District"
  const description = initialData ? "Edit existing district details." : "Add a new district to the system."
  const action = initialData ? "Save Changes" : "Create"

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {!initialData && (
        <DialogTrigger asChild>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add District
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
              name="kode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kode</FormLabel>
                  <FormControl>
                    <Input placeholder="1404" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Pelalawan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="provinceId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Province</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a province" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {provinces.map((province) => (
                        <SelectItem key={province.uid} value={province.uid}>
                          {province.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
