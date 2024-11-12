import "server-only";

const dictionaries = {
  "en-in": () =>
    import("./dictionaries/site-data-en-IN.json").then(
      (module) => module.default
    ),
  "ml-in": () =>
    import("./dictionaries/site-data-ml-IN.json").then(
      (module) => module.default
    ),
  "kan-in": () =>
    import("./dictionaries/site-data-kan-IN.json").then(
      (module) => module.default
    ),
};

export const getDictionary = async (locale) => {
  if (!dictionaries[locale]) {
    console.warn(`Unsupported locale: ${locale}. Falling back to 'en'.`);
    locale = "en-IN"; // Default to English if the locale is not supported
  }

  try {
    const dictionary = await dictionaries[locale]();
    if (!dictionary) {
      throw new Error("Dictionary could not be loaded");
    }
    return dictionary;
  } catch (error) {
    console.error(`Failed to load dictionary for locale '${locale}':`, error);
    // Fallback to English dictionary if the loading fails
    return dictionaries["en-in"]();
  }
};
