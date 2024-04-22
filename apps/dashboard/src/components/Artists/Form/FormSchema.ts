import i18n from "@/translation/i18nInstance";
import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_MIME_TYPES = ["image/jpeg", "image/png", "image/jpg"];

export const formSchema = z.object({
  username: z.string().min(2, {
    message: i18n.t("CreateArtistModal.UsernameZodMin"),
  },).max(20, {
    message: i18n.t("CreateArtistModal.UsernameZodMax"),
  }),
  firstname: z.string().min(2, {
    message: i18n.t("CreateArtistModal.firstnameZodMin"),
  }).max(20, {
    message: i18n.t("CreateArtistModal.firstnameZodMax"),
  }),
  lastname: z.string().min(2, {
    message: i18n.t("CreateArtistModal.lastnameZodMin"),
  }).max(20, {
    message: i18n.t("CreateArtistModal.lastnameZodMax"),
  }),
  email: z.string().email({
    message: i18n.t("CreateArtistModal.emailInvalidZod"),
  }).max(50, {
    message: i18n.t("CreateArtistModal.emailZodMax"),
  }),
  Image: z.custom<FileList>()
    .refine((fileList) => fileList.length === 1, i18n.t("CreateArtistModal.NoImageZod"))
    .transform((file) => file[0] as File)
    .refine((file) => {
      return file.size <= MAX_FILE_SIZE;
    }, i18n.t("CreateArtistModal.ImageSizeZod"))
    .refine(
      (file) => ACCEPTED_IMAGE_MIME_TYPES.includes(file.type),
      'Only these types are allowed .jpg, .jpeg, .png, .webp and mp4',
    ),
})