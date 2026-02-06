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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useState, useEffect } from "react"
import { createGroup, updateGroup } from "@/actions/group"
import { Plus } from "lucide-react"

const formSchema = z.object({
  abrv: z.string().min(1, "Abbreviation is required"),
  name: z.string().min(1, "Name is required"),
  is_active: z.boolean(),
})

interface GroupFormProps {
  initialData?: { uid: string; abrv: string; name: string; is_active: boolean } | null
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function GroupForm({ initialData, open, onOpenChange }: GroupFormProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const isOpen = open !== undefined ? open : internalOpen
  const setIsOpen = onOpenChange || setInternalOpen

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      abrv: "",
      name: "",
      is_active: true,
    },
  })

  useEffect(() => {
    if (initialData) {
      form.reset({
        abrv: initialData.abrv,
        name: initialData.name,
        is_active: initialData.is_active,
      })
    } else {
      form.reset({
        abrv: "",
        name: "",
        is_active: true,
      })
    }
  }, [initialData, form, isOpen])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (initialData) {
      await updateGroup(initialData.uid, values)
    } else {
      await createGroup(values)
    }
    setIsOpen(false)
    form.reset()
  }

  const title = initialData ? "Edit Group" : "Create Group"
  const description = initialData ? "Edit existing group details." : "Add a new group to the system."
  const action = initialData ? "Save Changes" : "Create"

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {!initialData && (
        <DialogTrigger asChild>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Group
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
              name="abrv"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Abbreviation</FormLabel>
                  <FormControl>
                    <Input placeholder="WRI" {...field} />
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
                    <Input placeholder="World Resources Institute" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="is_active"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Active
                    </FormLabel>
                    <FormDescription>
                      Is this group currently active?
                    </FormDescription>
                  </div>
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
