import ImageWithFallback from '@/components/Image/ImageWithFallback';
import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import i18n from '@/translation/i18nInstance';
import Image from 'next/image';
import React, { useState } from 'react'
import { UseFormRegisterReturn, UseFormReturn } from 'react-hook-form';

type FormStepTwoProps = {
  form: UseFormReturn<{
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    Image: File;
  }, any, undefined>
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  previewUrl: string | null
  previousStep: () => void
  fileRef: UseFormRegisterReturn<"Image">
}

function FormStepTwo({ form, previousStep, handleImageChange, previewUrl, fileRef }: FormStepTwoProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="Image"
        render={() => {
          return (
            <FormItem>
              <FormLabel>{i18n.t("CreateArtistModal.Picture")}</FormLabel>
              <FormControl>
                <Input type="file" placeholder="shadcn" {...fileRef} onChange={handleImageChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
      <div>
        {previewUrl && <ImageWithFallback src={previewUrl} fallbackSrc="/spotify-logo.svg" alt="Image preview" width={400} height={400} />}
      </div>
      <div className='w-full flex justify-between'>
        <Button onClick={previousStep}>{i18n.t("Previous")}</Button>
        <Button type='submit'>{i18n.t("Submit")}</Button>
      </div>
    </>
  )
}

export default FormStepTwo