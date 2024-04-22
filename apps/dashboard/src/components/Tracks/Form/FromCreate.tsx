
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import { z } from "zod"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form"
import { Input } from "../../ui/input"
import { Button } from "../../ui/button"
import { useForm } from "react-hook-form"
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "../../ui/command"
import { cn } from "@/lib/utils"
import { TrackEdit } from "@/types/Track"
import { fetchAutcompleteArtists } from "@/services/ArtistsService"
import { useEffect } from "react"

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const fileSchema = z.object({
  size: z.number().min(1, "File is required").max(MAX_FILE_SIZE, "Max size is 5MB"),
  type: z.string().refine(type => type === 'audio/mpeg', "Only .mp3 format is supported"),
})

const formSchema = z.object({
  Artist: z.string().min(1, {
    message: "You must select an artist.",
  }),
  Title: z.string().min(1, {
    message: "You must choose a title.",
  }),
  lastname: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  Track: fileSchema,
})

type TrackFormProps = {
  editTrack?: TrackEdit
}

async function getData() {
  const data = await fetchAutcompleteArtists();

  if (!data) {
    return [];
  }

  return data;
}


export async function TrackForm({ editTrack }: TrackFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Artist: editTrack?.artist_id || "",
      Title: editTrack?.title || "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }


  const data = await fetchAutcompleteArtists()

  useEffect(() => {

  }, [])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="Artist"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{field.name}</FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? data.find(
                            (item) => item.value === field.value
                          )?.label
                          : "Select an artist"}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput
                        placeholder="Search artist..."
                        className="h-9"
                      />
                      <CommandEmpty>No artist found.</CommandEmpty>
                      <CommandGroup>
                        {data.map((item) => (
                          <CommandItem
                            value={item.label}
                            key={item.value}
                            onSelect={() => {
                              form.setValue("Artist", item.value)
                            }}
                          >
                            {item.label}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                item.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormDescription>
                This is the artist of the track.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{field.name}</FormLabel>
              <FormControl>
                <Input placeholder="Vacancia" {...field} />
              </FormControl>
              <FormDescription>
                This is the title of the track.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Track"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{field.name}</FormLabel>
              <FormControl>
                <Input type="file" className="hover:bg-gray-100 cursor-pointer" />
              </FormControl>
              <FormDescription>
                This is the title of the track.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}
