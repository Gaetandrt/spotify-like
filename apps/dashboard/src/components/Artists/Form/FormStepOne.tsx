import { Button } from '@/components/ui/button'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import i18n from '@/translation/i18nInstance'
import React from 'react'
import { UseFormReturn } from 'react-hook-form'

type FormStepOneProps = {
  form: UseFormReturn<{
    username: string;
    firstname: string;
    lastname: string;
    email: string;
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
              <Input placeholder="Jul" {...field} />
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
        name="firstname"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{i18n.t("CreateArtistModal." + field.name)}</FormLabel>
            <FormControl>
              <Input placeholder="Julien" {...field} />
            </FormControl>
            <FormDescription>
              {i18n.t("CreateArtistModal.ArtistFirstnameFormDescr")}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lastname"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{i18n.t("CreateArtistModal." + field.name)}</FormLabel>
            <FormControl>
              <Input placeholder="Mari" {...field} />
            </FormControl>
            <FormDescription>
              {i18n.t("CreateArtistModal.ArtistLastnameFormDescr")}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{i18n.t("CreateArtistModal." + field.name)}</FormLabel>
            <FormControl>
              <Input placeholder="majolie@oretplatine.dp" {...field} />
            </FormControl>
            <FormDescription>
              {i18n.t("CreateArtistModal.ArtistEmailFormDescr")}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className='w-full flex justify-end'>
        <Button type="button" onClick={nextStep}>{i18n.t("Next")}</Button>
      </div>
    </>
  )
}

export default FormStepOne