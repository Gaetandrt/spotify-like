import { Button } from '@/components/ui/button'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import i18n from '@/translation/i18nInstance'
import React from 'react'
import { UseFormReturn } from 'react-hook-form'

type FormStepOneProps = {
  form: UseFormReturn<{
    username: string;
    FirstName: string;
    LastName: string;
    Email: string;
    Image: File;
}, any, undefined>
  nextStep: () => void
}

function FormStepOne({ form, nextStep }: FormStepOneProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{i18n.t("CreateArtistModal." + field.name)}</FormLabel>
            <FormControl>
              <Input placeholder="Kaarism" {...field} />
            </FormControl>
            <FormDescription>
              {i18n.t("CreateArtistModal.ArtistUsernameFormDescr")}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="FirstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{field.name}</FormLabel>
            <FormControl>
              <Input placeholder="Franck" {...field} />
            </FormControl>
            <FormDescription>
              This is the first name of the artist.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="LastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{field.name}</FormLabel>
            <FormControl>
              <Input placeholder="Dubosque" {...field} />
            </FormControl>
            <FormDescription>
              This is the last name of the artist.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="Email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{field.name}</FormLabel>
            <FormControl>
              <Input placeholder="email@email.com" {...field} />
            </FormControl>
            <FormDescription>
              This is the email of the artist.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className='w-full flex justify-end'>
        <Button type="button" onClick={nextStep}>Next</Button>
      </div>
    </>
  )
}

export default FormStepOne