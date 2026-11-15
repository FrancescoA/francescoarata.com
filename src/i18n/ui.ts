export type Lang = "en" | "it" | "fr";

export const ui = {

  "home.introduction.high-five": {
    en: "High five!",
    it: "Batti cinque!",
    fr: "Tope-là!"
  },
  
  "home.introduction.kilobytes": {
    en: "My Internet bonsai!",
    it: "Il mio bonsai di Internet!",
    fr: "Mon bonsaï virtuel!"
  },

  "home.introduction.math": {
    en: "Math",
    it: "Matematica",
    fr: "Mathématiques"
  },

  "home.introduction.data": {
    en: "Data",
    it: "Data",
    fr: "Donnés"
  },

  "home.introduction.languages": {
    en: "Languages",
    it: "Lingue",
    fr: "Langues"
  },

  "home.introduction.everything": {
    en: "Everything",
    it: "Tutto",
    fr: "Tout"
  },

  "home.details.skills": {
    en: "Skills",
    it: "Competenze",
    fr: "Compétences"
  },

  "home.details.interests": {
    en: "Interests",
    it: "Interessi",
    fr: "Intérêts"
  },

  "home.details.projects": {
    en: "Projects",
    it: "Progetti",
    fr: "Projéts"
  },

} satisfies Record<string, Record<Lang, string>>;

export type TranslationKey = keyof typeof ui;