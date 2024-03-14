import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_MIME_TYPES = ["image/jpeg", "image/png", "image/jpg"];

export const formSchema = z.object({
  Username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  FirstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  LastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  Email: z.string().email({
    message: "Please enter a valid email.",
  }),
  Image: z.custom<FileList>()
    .refine((fileList) => fileList.length === 1, 'Expected file')
    .transform((file) => file[0] as File)
    .refine((file) => {
      return file.size <= MAX_FILE_SIZE;
    }, `File size should be less than 1gb.`)
    .refine(
      (file) => ACCEPTED_IMAGE_MIME_TYPES.includes(file.type),
      'Only these types are allowed .jpg, .jpeg, .png, .webp and mp4',
    ),
})