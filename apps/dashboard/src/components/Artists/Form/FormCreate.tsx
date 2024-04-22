import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import { z } from "zod"
import { UseFormReturn, useForm } from "react-hook-form"
import FormStepOne from "./FormStepOne"
import FormStepTwo from "./FormStepTwo"
import { formSchema } from "./FormSchema"
import { useEffect, useState } from "react"
import { createNewArtist, uploadArtistImage } from "@/services/ArtistsService"
import { useToast } from "@/components/ui/use-toast"
import { Artist } from "@/types/Artist"
import { ErrorResponse } from "@/lib/api-response"
import i18n from "@/translation/i18nInstance"

type ProfileFormProps = {
  setOpen: (open: boolean) => void;
  editArtist?: Artist
}

const handleFormError = (error: ErrorResponse, form: UseFormReturn<{
  username: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Image: File;
}, any, undefined>, setActiveStep: React.Dispatch<React.SetStateAction<number>>) => {
  error.details?.fields && Object.entries(error.details.fields).forEach(([key, value]) => {
    form.setError(key as keyof typeof formSchema.shape, {
      type: "server",
      message: i18n.t("CreateArtistModal." + value.code, { field: i18n.t(value.target).toLowerCase() }),
    });
    if (key !== "Image") {
      setActiveStep(1)
    } else {
      setActiveStep(2)
    }
  });
}

export function ArtistForm({ setOpen, editArtist }: ProfileFormProps) {
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(1)
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: editArtist?.username || "",
      FirstName: editArtist?.first_name || "",
      LastName: editArtist?.last_name || "",
      Email: editArtist?.email || "",
      Image: undefined,
    },
  })

  useEffect(() => {
    console.log(editArtist)
  }, [])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImage(file || null);

    setPreviewUrl(file ? URL.createObjectURL(file) : null);
  };

  const nextStep = () => {
    setActiveStep(activeStep + 1)
  }

  const previousStep = () => {
    setActiveStep(activeStep - 1);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {

    const response = await uploadArtistImage(values.Image, values.username);

    const data = await createNewArtist(values, response.id);

    if (data.status === "error") {
      handleFormError(data, form, setActiveStep);
      return;
    }
    setOpen(false);
    toast({
      className: "bg-green-500 text-white",
      variant: "default",
      description: "Your message has been sent.",
    })
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
