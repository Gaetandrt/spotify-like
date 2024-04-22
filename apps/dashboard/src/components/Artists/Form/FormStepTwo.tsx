import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React, { useState } from 'react'
import { UseFormRegisterReturn, UseFormReturn } from 'react-hook-form';

type FormStepTwoProps = {
  form: UseFormReturn<{
    username: string;
    FirstName: string;
    LastName: string;
    Email: string;
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
              <FormLabel>File</FormLabel>
              <FormControl>
                <Input type="file" placeholder="shadcn" {...fileRef} onChange={handleImageChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
      <div>
        {previewUrl && <Image src={previewUrl} width="0"
          height="0"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }} alt="Image preview" />}
      </div>
      <div className='w-full flex justify-between'>
        <Button onClick={previousStep}>Previous</Button>
        <Button type='submit'>Submit</Button>
      </div>
    </>
  )
}

export default FormStepTwo