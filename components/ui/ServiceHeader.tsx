"use client";

import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLocale } from '@/hooks/useLocale';

interface ServiceHeaderProps {
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  imageUrl: string;
  averagePrice: {
    fr: string;
    en: string;
  };
  completionTime: {
    fr: string;
    en: string;
  };
}

export function ServiceHeader({ 
  title, 
  description, 
  imageUrl, 
  averagePrice, 
  completionTime 
}: ServiceHeaderProps) {
  const { locale } = useLocale();

  const translations = {
    fr: {
      averagePrice: "Prix moyen",
      duration: "Durée typique",
      getQuotes: "Obtenir des devis gratuits"
    },
    en: {
      averagePrice: "Average Price",
      duration: "Typical Duration",
      getQuotes: "Get Free Quotes"
    }
  };

  const t = translations[locale];

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div 
        className="absolute inset-0 bg-black opacity-50" 
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}
      ></div>
      <div className="relative container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {title[locale]}
          </h1>
          <p className="mt-4 text-xl">{description[locale]}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-sm">{t.averagePrice}</p>
              <p className="font-semibold">{averagePrice[locale]}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-sm">{t.duration}</p>
              <p className="font-semibold">{completionTime[locale]}</p>
            </div>
          </div>
          <Button size="lg" className="mt-8">
            {t.getQuotes} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}