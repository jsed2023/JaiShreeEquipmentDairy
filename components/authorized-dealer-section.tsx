"use client";

import { Card, CardContent } from "@/components/ui/card";

export function AuthorizedDealerSection() {
  return (
    <section
      id="authorized-dealer"
      className="w-full bg-muted/40 py-12"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-4xl">
            Authorized Dealer – K R Electronics Industries
          </h2>

          <p className="mt-2 text-muted-foreground">
            For Milk Analyzers &amp; Milk Collection Systems
          </p>

          <p className="mt-2 text-muted-foreground">
            Brand Names: Advance Milk Analyzers &amp; Dairy Khata DPU
          </p>
        </div>

        {/* Dealer Card */}
        <Card className="mx-auto max-w-3xl border-0 shadow-lg">
          <CardContent className="p-5 sm:p-6 md:p-8">
            {/* Dealer Information */}
            <div className="space-y-3 text-sm leading-relaxed sm:text-base">
              <p>
                <strong>Firm:</strong> Jai Shree Equipment Dairy
              </p>

              <p>
                <strong>Proprietor:</strong> Akshay Choudhary
              </p>

              <p>
                <strong>Head Office:</strong> Sri Ganganagar, Rajasthan
              </p>

              <p>
                <strong>Established:</strong> 2020
              </p>

              <p>
                <strong>Authorized Dealer Since:</strong> 2023
              </p>

              <p>
                <strong>Valid Till:</strong> 2028
              </p>

              <p>
                <strong>Territory:</strong> Bikaner Division
              </p>

              <p>
                <strong>Districts:</strong> Sri Ganganagar, Hanumangarh,
                Bikaner
              </p>

              <address className="not-italic">
                <strong>Address:</strong>
                <br />
                Shop No. B-42, Upper Side, Rohit Udhyog Market,
                <br />
                Near HP Gas Agency, Shiv Circle Road,
                <br />
                Sri Ganganagar, Rajasthan – 335001
              </address>

              {/* Call Button */}
              
<a
  href="tel:+917375082341"
  aria-label="Call Jai Shree Equipment Dairy"
  className="
    mt-4
    inline-flex
    min-h-11
    items-center
    justify-center
    rounded-lg
    bg-sky-600
    px-5
    py-2
    font-semibold
    text-white
    transition-colors
    hover:bg-sky-700
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-sky-500
  "
>
  Call: 7375082341
</a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}