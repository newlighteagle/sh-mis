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
import { useState, useEffect } from "react"
import { createProvince, updateProvince } from "@/actions/province"
import { Plus } from "lucide-react"

const formSchema = z.object({
  kode: z.string().min(1, "Kode is required"),
  name: z.string().min(1, "Name is required"),
})

interface ProvinceFormProps {
  initialData?: { uid: string; kode: string; name: string } | null
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function ProvinceForm({ initialData, open, onOpenChange }: ProvinceFormProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  
  // Use controlled or internal state
  const isOpen = open !== undefined ? open : internalOpen
  const setIsOpen = onOpenChange || setInternalOpen

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      kode: "",
      name: "",
    },
  })

  // Reset form when initialData changes or dialog opens
  useEffect(() => {
    if (initialData) {
      form.reset({
        kode: initialData.kode,
        name: initialData.name,
      })
    } else {
      form.reset({
        kode: "",
        name: "",
      })
    }
  }, [initialData, form, isOpen])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (initialData) {
      await updateProvince(initialData.uid, values)
    } else {
      await createProvince(values)
    }
    setIsOpen(false)
    form.reset()
  }

  const title = initialData ? "Edit Province" : "Create Province"
  const description = initialData ? "Edit existing province details." : "Add a new province to the system."
  const action = initialData ? "Save Changes" : "Create"

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {!initialData && (
        <DialogTrigger asChild>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Province
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
                    <Input placeholder="14" {...field} />
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
                    <Input placeholder="Riau" {...field} />
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
