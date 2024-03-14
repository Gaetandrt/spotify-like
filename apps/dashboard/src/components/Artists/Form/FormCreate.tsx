"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import { z } from "zod"
import { useForm } from "react-hook-form"
import FormStepOne from "./FormStepOne"
import FormStepTwo from "./FormStepTwo"
import { formSchema } from "./FormSchema"
import { useState } from "react"
import { uploadArtistImage } from "@/services/ArtistsService"

export function ProfileForm() {
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(1)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Username: "",
      FirstName: "",
      LastName: "",
      Email: "",
      Image: undefined,
    },
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImage(file || null);

    setPreviewUrl(file ? URL.createObjectURL(file) : null);
  };

  const nextStep = () => {
    setActiveStep(activeStep + 1)
  }

  const previousStep = () => {
    setActiveStep(activeStep - 1)
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await uploadArtistImage(values.Image, values.Username)

    console.log(response)
  }

  const fileRef = form.register("Image");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {activeStep === 1 &&
          <FormStepOne
            form={form}
            nextStep={nextStep}
          />
        }
        {activeStep === 2 &&
          <FormStepTwo
            form={form}
            previousStep={previousStep}
            handleImageChange={handleImageChange}
            previewUrl={previewUrl}
            fileRef={fileRef}
          />
        }
      </form>
    </Form>
  )
}
