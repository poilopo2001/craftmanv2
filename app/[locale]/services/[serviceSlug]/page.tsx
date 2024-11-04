"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceHeader } from "@/components/ui/ServiceHeader";
import { PriceGuideTable } from "@/components/ui/PriceGuideTable";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ProjectGallery } from "@/components/ui/ProjectGallery";
import { LocalCraftsmenList } from "@/components/ui/LocalCraftsmenList";
import { RelatedServicesGrid } from "@/components/ui/RelatedServicesGrid";
import { getServiceBySlug, getLocalizedService } from "@/data/services";
import { useLocale } from "@/hooks/useLocale";
import { notFound } from "next/navigation";

export default function ServicePage({ params }: { params: { serviceSlug: string } }) {
  const { locale } = useLocale();
  const service = getServiceBySlug(params.serviceSlug, locale);

  if (!service) {
    notFound();
  }

  const localizedService = getLocalizedService(service, locale);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ServiceHeader
          title={localizedService.name}
          description={localizedService.description}
          imageUrl="/images/services/default.jpg"
          averagePrice={{ fr: "€500 - €1500", en: "€500 - €1500" }}
          completionTime={{ fr: "2-3 jours", en: "2-3 days" }}
        />
        <div className="container mx-auto px-4 py-12 grid gap-12">
          <PriceGuideTable
            basePrice={{ min: 500, max: 1500, currency: "€" }}
            factors={[]}
            lastUpdated="2024-01-01"
          />
          <FAQAccordion faqs={[]} />
          <ProjectGallery images={[]} />
          <LocalCraftsmenList craftsmen={[]} />
          <RelatedServicesGrid services={[]} />
        </div>
      </main>
      <Footer />
    </div>
  );
}