"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cld } from "@/utils/cloudinary";

export function AuthorizedDealerSection() {
  return (
    <section className="py-12 bg-muted/40">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Authorized Dealer – K R Electronics Industries
          </h2>
          <p className="text-muted-foreground mt-2">
            For Milk Analyzers & Milk Collection Systems (Advance & Dairy Khata DPU)
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-lg border-0">
          <CardContent className="grid md:grid-cols-2 gap-4 p-4 md:p-5 items-center">

            {/* Image */}
            <div className="relative w-full h-[360px]">
              <Image
  src={cld("v1772135052/krei-authorized-dealer_gd8hvd.webp", 100)}
  alt="Authorized Dealer Certificate"
  fill
  sizes="(max-width:768px) 100vw, (max-width:120px) 50vw, 33vw"
  className="object-contain"
  priority
/>
            </div>

            {/* Content */}
            <div className="space-y-2 text-sm md:text-[15px] leading-relaxed">

              <p><strong>Firm:</strong> Jai Shree Equipment Dairy</p>
              <p><strong>Proprietor:</strong> Akshay Choudhary</p>
              <p><strong>Head Office:</strong> Sri-ganganagar</p>
              <p><strong>Established:</strong> 2020</p>
              <p><strong>Authorized Dealer Since:</strong> 2023</p>
              <p><strong>Valid Till:</strong> 2028</p>
              <p><strong>Territory:</strong> Bikaner Division</p>
              <p><strong>Districts:</strong> Sri-Ganganagar, Hanumangarh, Bikaner</p>
              <p>
                <strong>Address:</strong><br />
                Shop No. B-42, Upper Side, Rohit Udhyog Market,
                Near HP Gas Agency, Shiv Circle Road,
                Sri Ganganagar, Rajasthan – 335001
              </p>

              <a
                href="tel:8112294173"
                className="text-base font-semibold text-primary block pt-1"
              >
                📞 8112294173
              </a>

              <div className="pt-2">
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://res.cloudinary.com/dddhtbuzs/image/upload/v1772135052/krei-authorized-dealer_gd8hvd.webp"
                    target="_blank"
                  >
                    View Certificate
                  </a>
                </Button>
              </div>

            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  )
}
