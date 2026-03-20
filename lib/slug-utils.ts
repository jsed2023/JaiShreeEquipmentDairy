export const getServiceAndCity = (slug: string) => {

const clean = slug
.replace("best-", "")
.replace("top-", "")
.replace("price-", "")
.replace("dealer-", "")
.replace("supplier-", "")
.replace("manufacturer-", "")
.replace("-near-me", "");

const parts = clean.split("-");

const city = parts.slice(-2).join(" ");
const service = parts.slice(0, -2).join(" ");

const format = (text: string) =>
text.replace(/\b\w/g, (l) => l.toUpperCase());

return {
city: format(city),
service: format(service)
};

};