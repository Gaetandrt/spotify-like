import ptBR from "i18n-js/json/pt-BR.json";
import en from "i18n-js/json/en.json";
import fr from "i18n-js/json/fr.json";
import frFR from "./fr-FR.json"
import enEN from "./en-EN.json"
import { I18n } from "i18n-js";

let i18n = new I18n({
  ...ptBR,
  ...en,
  ...fr,
})

i18n.store(frFR)
i18n.store(enEN)

i18n.locale = "fr"

export default i18n;