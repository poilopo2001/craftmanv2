"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationHeader } from "@/components/ui/LocationHeader";
import { StatisticsDisplay } from "@/components/ui/StatisticsDisplay";
import { LocalCraftsmenList } from "@/components/ui/LocalCraftsmenList";
import { getLocationBySlug, getLocalizedLocation } from "@/data/locations";
import { useLocale } from "@/hooks/useLocale";
import { notFound } from "next/navigation";

export default function LocationPage({ params }: { params: { locationSlug: string } }) {
  const { locale } = useLocale();
  const location = getLocationBySlug(params.locationSlug, locale);

  if (!location) {
    notFound();
  }

  const localizedLocation = getLocalizedLocation(location, locale);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <LocationHeader
          city={localizedLocation.name}
          postalCode="L-1234"
          activeCraftsmen={50}
          averageResponse={{ fr: "24 heures", en: "24 hours" }}
          coverImage="/images/locations/default.jpg"
        />
        <div className="container mx-auto px-4 py-12 grid gap-12">
          <StatisticsDisplay statistics={[]} />
          <LocalCraftsmenList craftsmen={[]} />
        </div>
      </main>
      <Footer />
    </div>
  );
}