export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",

          /* ✅ MULTI TYPE FOR BETTER UNDERSTANDING */
          "@type": ["LocalBusiness", "Store"],

          "@id": "https://jaishreeequipmentdairy.in/#localbusiness",
          "mainEntityOfPage": "https://jaishreeequipmentdairy.in/",

          "name": "Jai Shree Equipment Dairy",
          "alternateName": "Jai Shree Equipment Dairy Sri Ganganagar",

          "url": "https://jaishreeequipmentdairy.in/",
          "logo": "https://jaishreeequipmentdairy.in/favicon.ico",

          "image": [
            "https://jaishreeequipmentdairy.in/"
          ],

          "brand": {
            "@type": "Brand",
            "name": "Jai Shree Equipment Dairy"
          },

          "slogan": "Complete Dairy Equipment & Repair Solutions",

          "description":
            "JAI SHREE EQUIPMENT DAIRY, Established in 2020, is a premier provider of dairy farm equipment and repair services in Sri Ganganagar, Rajasthan. With its state-of-the-art facility and extensive range of products including Milk Analyzer Machines, Milk Collection Units, Milking Machines, Cream Separators, Weighing Scales and more, the company caters to dairy farmers across Rajasthan.",

          "foundingDate": "2020-10-01",

          "founder": {
            "@type": "Person",
            "name": "Akshay Choudhary"
          },

          "telephone": "+91-7375082341",

          "priceRange": "₹₹",

          /* ✅ BUSINESS HOURS */
          "openingHours": "Mo-Sa 09:00-19:00",

          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "19:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "10:00",
              "closes": "14:00"
            }
          ],

          "inLanguage": "en-IN",

          "currenciesAccepted": "INR",

          "knowsLanguage": [
            "Hindi",
            "English",
            "Punjabi"
          ],

          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-7375082341",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": [
              "Hindi",
              "English",
              "Punjabi"
            ]
          },

          "address": {
            "@type": "PostalAddress",
            "streetAddress":
              "Shop No B-42, Upper Side, Rohit Udhyog Market, Near HP Gas Agency, Shiv Circle Road",
            "addressLocality": "Sri Ganganagar",
            "addressRegion": "Rajasthan",
            "postalCode": "335001",
            "addressCountry": "IN"
          },

          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 29.9038,
            "longitude": 73.8772
          },

          "hasMap":
            "https://www.google.com/maps?q=29.9038,73.8772",

          "paymentAccepted": [
            "Cash",
            "UPI",
            "NFC Mobile Payments"
          ],

          "sameAs": [
            "https://wa.me/917375082341"
          ],

          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 29.9038,
              "longitude": 73.8772
            },
            "geoRadius": "150000"
          },

          "serviceArea": [
            {
              "@type": "AdministrativeArea",
              "name": "Sri Ganganagar, Rajasthan, India"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Hanumangarh, Rajasthan, India"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Suratgarh, Rajasthan, India"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Anupgarh, Rajasthan, India"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Raisingh Nagar, Rajasthan, India"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Padampur, Rajasthan, India"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Sri Vijaynagar, Rajasthan, India"
            }
          ],

          "knowsAbout": [
            "Milk Analyzer Machine",
            "Advance Milk Analyzer",
            "Ultrasonic Milk Analyzer",
            "Milking Machine",
            "Cream Separator Machine",
            "Automatic Milk Collection Unit",
            "Weighing Scale",
            "Milk Testing Equipment",
            "Dairy Equipment Repair"
          ],

          "makesOffer": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Advanced Milk Analyzer Machine Supplier"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Milk Analyzer Machine Supplier"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Milking Machine Supplier"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cream Separator Machine Supplier"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Automatic Milk Collection Unit Supplier"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Dairy Equipment Repair Service"
              }
            }
          ],

          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Dairy Machines",

            "itemListElement": [
              {
                "@type": "OfferCatalog",
                "name": "Advance Milk Analyzer Machine"
              },
              {
                "@type": "OfferCatalog",
                "name": "Milk Analyzer Machine"
              },
              {
                "@type": "OfferCatalog",
                "name": "Milking Machine"
              },
              {
                "@type": "OfferCatalog",
                "name": "Cream Separator"
              },
              {
                "@type": "OfferCatalog",
                "name": "Milk Collection Unit"
              },
              {
                "@type": "OfferCatalog",
                "name": "Weighing Scale"
              }
            ]
          },

          "keywords": [
            "milk analyzer machine in Sri Ganganagar",
            "milking machine supplier Rajasthan",
            "cream separator machine",
            "dairy equipment supplier",
            "milk testing machine",
            "automatic milk collection unit",
            "dairy equipment repair service",
            "weighing scale supplier",
            "milk analyzer repair",
            "dairy machine dealer Rajasthan"
          ],

          "hasDeliveryMethod":
            "https://purl.org/goodrelations/v1#DeliveryModeDirect"
        })
      }}
    />
  );
}