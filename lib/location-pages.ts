import { rajasthanLocations } from "./rajasthan-locations";
import { serviceSlugs } from "./service-slugs";
import { serviceModifiers } from "./service-modifiers";

export const locationPages: string[] = [];

rajasthanLocations.forEach((city) => {

serviceSlugs.forEach((service) => {

serviceModifiers.forEach((modifier) => {

  let slug = "";

  if (modifier === "") {
    slug = `${service}-${city}`;
  } else if (modifier === "near-me") {
    slug = `${service}-near-me-${city}`;
  } else {
    slug = `${modifier}-${service}-${city}`;
  }

  locationPages.push(slug);

});

});

});