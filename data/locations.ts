export interface Location {
  id: string;
  name: {
    fr: string;
    en: string;
  };
  slug: {
    fr: string;
    en: string;
  };
  type: 'commune' | 'quartier' | 'localite';
  canton: string;
  parentMunicipality?: string;
  population: number;
}

export const locations: Location[] = [
  // Existing Luxembourg City and districts
  {
    id: "luxembourg_ville",
    name: {
      fr: "Luxembourg-Ville",
      en: "Luxembourg City"
    },
    slug: {
      fr: "luxembourg-ville",
      en: "luxembourg-city"
    },
    type: "commune",
    canton: "Luxembourg",
    population: 128514
  },
  {
    id: "luxembourg_gare",
    name: {
      fr: "Gare",
      en: "Station District"
    },
    slug: {
      fr: "gare",
      en: "station-district"
    },
    type: "quartier",
    canton: "Luxembourg",
    parentMunicipality: "luxembourg_ville",
    population: 12000
  },
  {
    id: "luxembourg_bonnevoie",
    name: {
      fr: "Bonnevoie",
      en: "Bonnevoie"
    },
    slug: {
      fr: "bonnevoie",
      en: "bonnevoie"
    },
    type: "quartier",
    canton: "Luxembourg",
    parentMunicipality: "luxembourg_ville",
    population: 18000
  },
  {
    id: "luxembourg_limpertsberg",
    name: {
      fr: "Limpertsberg",
      en: "Limpertsberg"
    },
    slug: {
      fr: "limpertsberg",
      en: "limpertsberg"
    },
    type: "quartier",
    canton: "Luxembourg",
    parentMunicipality: "luxembourg_ville",
    population: 11000
  },
  {
    id: "luxembourg_belair",
    name: {
      fr: "Belair",
      en: "Belair"
    },
    slug: {
      fr: "belair",
      en: "belair"
    },
    type: "quartier",
    canton: "Luxembourg",
    parentMunicipality: "luxembourg_ville",
    population: 12000
  },
  {
    id: "luxembourg_merl",
    name: {
      fr: "Merl",
      en: "Merl"
    },
    slug: {
      fr: "merl",
      en: "merl"
    },
    type: "quartier",
    canton: "Luxembourg",
    parentMunicipality: "luxembourg_ville",
    population: 9000
  },
  {
    id: "luxembourg_hollerich",
    name: {
      fr: "Hollerich",
      en: "Hollerich"
    },
    slug: {
      fr: "hollerich",
      en: "hollerich"
    },
    type: "quartier",
    canton: "Luxembourg",
    parentMunicipality: "luxembourg_ville",
    population: 8000
  },
  {
    id: "luxembourg_cessange",
    name: {
      fr: "Cessange",
      en: "Cessange"
    },
    slug: {
      fr: "cessange",
      en: "cessange"
    },
    type: "quartier",
    canton: "Luxembourg",
    parentMunicipality: "luxembourg_ville",
    population: 3500
  },
  {
    id: "luxembourg_gasperich",
    name: {
      fr: "Gasperich",
      en: "Gasperich"
    },
    slug: {
      fr: "gasperich",
      en: "gasperich"
    },
    type: "quartier",
    canton: "Luxembourg",
    parentMunicipality: "luxembourg_ville",
    population: 7000
  },
  {
    id: "luxembourg_beggen",
    name: {
      fr: "Beggen",
      en: "Beggen"
    },
    slug: {
      fr: "beggen",
      en: "beggen"
    },
    type: "quartier",
    canton: "Luxembourg",
    parentMunicipality: "luxembourg_ville",
    population: 4000
  },
  {
    id: "luxembourg_dommeldange",
    name: {
      fr: "Dommeldange",
      en: "Dommeldange"
    },
    slug: {
      fr: "dommeldange",
      en: "dommeldange"
    },
    type: "quartier",
    canton: "Luxembourg",
    parentMunicipality: "luxembourg_ville",
    population: 3000
  },
  {
    id: "luxembourg_eich",
    name: {
      fr: "Eich",
      en: "Eich"
    },
    slug: {
      fr: "eich",
      en: "eich"
    },
    type: "quartier",
    canton: "Luxembourg",
    parentMunicipality: "luxembourg_ville",
    population: 3000
  },
  {
    id: "luxembourg_neudorf",
    name: {
      fr: "Neudorf",
      en: "Neudorf"
    },
    slug: {
      fr: "neudorf",
      en: "neudorf"
    },
    type: "quartier",
    canton: "Luxembourg",
    parentMunicipality: "luxembourg_ville",
    population: 4500
  },
  {
    id: "luxembourg_clausen",
    name: {
      fr: "Clausen",
      en: "Clausen"
    },
    slug: {
      fr: "clausen",
      en: "clausen"
    },
    type: "quartier",
    canton: "Luxembourg",
    parentMunicipality: "luxembourg_ville",
    population: 1500
  },
  {
    id: "luxembourg_pfaffenthal",
    name: {
      fr: "Pfaffenthal",
      en: "Pfaffenthal"
    },
    slug: {
      fr: "pfaffenthal",
      en: "pfaffenthal"
    },
    type: "quartier",
    canton: "Luxembourg",
    parentMunicipality: "luxembourg_ville",
    population: 1500
  },
  {
    id: "luxembourg_kirchberg",
    name: {
      fr: "Kirchberg",
      en: "Kirchberg"
    },
    slug: {
      fr: "kirchberg",
      en: "kirchberg"
    },
    type: "quartier",
    canton: "Luxembourg",
    parentMunicipality: "luxembourg_ville",
    population: 8000
  },
  {
    id: "luxembourg_weimerskirch",
    name: {
      fr: "Weimerskirch",
      en: "Weimerskirch"
    },
    slug: {
      fr: "weimerskirch",
      en: "weimerskirch"
    },
    type: "quartier",
    canton: "Luxembourg",
    parentMunicipality: "luxembourg_ville",
    population: 2000
  },
  {
    id: "luxembourg_pulvermuhl",
    name: {
      fr: "Pulvermühl",
      en: "Pulvermuhl"
    },
    slug: {
      fr: "pulvermuhl",
      en: "pulvermuhl"
    },
    type: "quartier",
    canton: "Luxembourg",
    parentMunicipality: "luxembourg_ville",
    population: 500
  },

  // Esch-sur-Alzette and districts
  {
    id: "esch_alzette",
    name: {
      fr: "Esch-sur-Alzette",
      en: "Esch-sur-Alzette"
    },
    slug: {
      fr: "esch-sur-alzette",
      en: "esch-sur-alzette"
    },
    type: "commune",
    canton: "Esch-sur-Alzette",
    population: 36228
  },
  {
    id: "esch_raemerich",
    name: {
      fr: "Raemerich",
      en: "Raemerich"
    },
    slug: {
      fr: "raemerich",
      en: "raemerich"
    },
    type: "quartier",
    canton: "Esch-sur-Alzette",
    parentMunicipality: "esch_alzette",
    population: 3000
  },
  {
    id: "esch_bruch",
    name: {
      fr: "Bruch",
      en: "Bruch"
    },
    slug: {
      fr: "bruch",
      en: "bruch"
    },
    type: "quartier",
    canton: "Esch-sur-Alzette",
    parentMunicipality: "esch_alzette",
    population: 4000
  },
  {
    id: "esch_grenz",
    name: {
      fr: "Grenz",
      en: "Grenz"
    },
    slug: {
      fr: "grenz",
      en: "grenz"
    },
    type: "quartier",
    canton: "Esch-sur-Alzette",
    parentMunicipality: "esch_alzette",
    population: 5000
  },
  {
    id: "esch_lallingen",
    name: {
      fr: "Lallingen",
      en: "Lallingen"
    },
    slug: {
      fr: "lallingen",
      en: "lallingen"
    },
    type: "quartier",
    canton: "Esch-sur-Alzette",
    parentMunicipality: "esch_alzette",
    population: 2500
  },

// Add to the municipalities array
  {
    id: "larochette",
    name: {
      fr: "Larochette",
      en: "Larochette"
    },
    slug: {
      fr: "larochette",
      en: "larochette"
    },
    type: "commune",
    canton: "Mersch",
    population: 4500
  },

  {
    id: "beaufort",
    name: {
      fr: "Beaufort",
      en: "Beaufort"
    },
    slug: {
      fr: "beaufort",
      en: "beaufort"
    },
    type: "commune",
    canton: "Echternach",
    population: 4000
  },

  // Troisvierges and its localities
  {
    id: "troisvierges",
    name: {
      fr: "Troisvierges",
      en: "Troisvierges"
    },
    slug: {
      fr: "troisvierges",
      en: "troisvierges"
    },
    type: "commune",
    canton: "Clervaux",
    population: 4000
  },
  {
    id: "troisvierges_basbellain",
    name: {
      fr: "Basbellain",
      en: "Basbellain"
    },
    slug: {
      fr: "basbellain",
      en: "basbellain"
    },
    type: "localite",
    canton: "Clervaux",
    parent_municipality: "troisvierges",
    population: 600
  },
  {
    id: "troisvierges_hautbellain",
    name: {
      fr: "Hautbellain",
      en: "Hautbellain"
    },
    slug: {
      fr: "hautbellain",
      en: "hautbellain"
    },
    type: "localite",
    canton: "Clervaux",
    parent_municipality: "troisvierges",
    population: 500
  },

  {
    id: "weiswampach",
    name: {
      fr: "Weiswampach",
      en: "Weiswampach"
    },
    slug: {
      fr: "weiswampach",
      en: "weiswampach"
    },
    type: "commune",
    canton: "Clervaux",
    population: 3500
  },

  {
    id: "dalheim",
    name: {
      fr: "Dalheim",
      en: "Dalheim"
    },
    slug: {
      fr: "dalheim",
      en: "dalheim"
    },
    type: "commune",
    canton: "Remich",
    population: 3500
  },

  // Schuttrange and its localities
  {
    id: "schuttrange",
    name: {
      fr: "Schuttrange",
      en: "Schuttrange"
    },
    slug: {
      fr: "schuttrange",
      en: "schuttrange"
    },
    type: "commune",
    canton: "Luxembourg",
    population: 3500
  },
  {
    id: "schuttrange_munsbach",
    name: {
      fr: "Munsbach",
      en: "Munsbach"
    },
    slug: {
      fr: "munsbach",
      en: "munsbach"
    },
    type: "localite",
    canton: "Luxembourg",
    parent_municipality: "schuttrange",
    population: 1200
  },
  {
    id: "schuttrange_schrassig",
    name: {
      fr: "Schrassig",
      en: "Schrassig"
    },
    slug: {
      fr: "schrassig",
      en: "schrassig"
    },
    type: "localite",
    canton: "Luxembourg",
    parent_municipality: "schuttrange",
    population: 1000
  },

  // Contern and its localities
  {
    id: "contern",
    name: {
      fr: "Contern",
      en: "Contern"
    },
    slug: {
      fr: "contern",
      en: "contern"
    },
    type: "commune",
    canton: "Luxembourg",
    population: 3500
  },
  {
    id: "contern_moutfort",
    name: {
      fr: "Moutfort",
      en: "Moutfort"
    },
    slug: {
      fr: "moutfort",
      en: "moutfort"
    },
    type: "localite",
    canton: "Luxembourg",
    parent_municipality: "contern",
    population: 1000
  },
  {
    id: "contern_medingen",
    name: {
      fr: "Medingen",
      en: "Medingen"
    },
    slug: {
      fr: "medingen",
      en: "medingen"
    },
    type: "localite",
    canton: "Luxembourg",
    parent_municipality: "contern",
    population: 500
  },

  // Frisange and its localities
  {
    id: "frisange",
    name: {
      fr: "Frisange",
      en: "Frisange"
    },
    slug: {
      fr: "frisange",
      en: "frisange"
    },
    type: "commune",
    canton: "Esch-sur-Alzette",
    population: 3000
  },
  {
    id: "frisange_aspelt",
    name: {
      fr: "Aspelt",
      en: "Aspelt"
    },
    slug: {
      fr: "aspelt",
      en: "aspelt"
    },
    type: "localite",
    canton: "Esch-sur-Alzette",
    parent_municipality: "frisange",
    population: 1200
  },
  {
    id: "frisange_hellange",
    name: {
      fr: "Hellange",
      en: "Hellange"
    },
    slug: {
      fr: "hellange",
      en: "hellange"
    },
    type: "localite",
    canton: "Esch-sur-Alzette",
    parent_municipality: "frisange",
    population: 800
  },

  // Wincrange and its localities
  {
    id: "wincrange",
    name: {
      fr: "Wincrange",
      en: "Wincrange"
    },
    slug: {
      fr: "wincrange",
      en: "wincrange"
    },
    type: "commune",
    canton: "Clervaux",
    population: 3000
  },
  {
    id: "wincrange_hachiville",
    name: {
      fr: "Hachiville",
      en: "Hachiville"
    },
    slug: {
      fr: "hachiville",
      en: "hachiville"
    },
    type: "localite",
    canton: "Clervaux",
    parent_municipality: "wincrange",
    population: 400
  },
  {
    id: "wincrange_boevange",
    name: {
      fr: "Boevange",
      en: "Boevange"
    },
    slug: {
      fr: "boevange",
      en: "boevange"
    },
    type: "localite",
    canton: "Clervaux",
    parent_municipality: "wincrange",
    population: 350
  },

  // Rosport-Mompach and its localities
  {
    id: "rosport_mompach",
    name: {
      fr: "Rosport-Mompach",
      en: "Rosport-Mompach"
    },
    slug: {
      fr: "rosport-mompach",
      en: "rosport-mompach"
    },
    type: "commune",
    canton: "Echternach",
    population: 3000
  },
  {
    id: "rosport_mompach_dickweiler",
    name: {
      fr: "Dickweiler",
      en: "Dickweiler"
    },
    slug: {
      fr: "dickweiler",
      en: "dickweiler"
    },
    type: "localite",
    canton: "Echternach",
    parent_municipality: "rosport_mompach",
    population: 400
  },
  {
    id: "rosport_mompach_born",
    name: {
      fr: "Born",
      en: "Born"
    },
    slug: {
      fr: "born",
      en: "born"
    },
    type: "localite",
    canton: "Echternach",
    parent_municipality: "rosport_mompach",
    population: 500
  },

  // Betzdorf and its localities
  {
    id: "betzdorf",
    name: {
      fr: "Betzdorf",
      en: "Betzdorf"
    },
    slug: {
      fr: "betzdorf",
      en: "betzdorf"
    },
    type: "commune",
    canton: "Grevenmacher",
    population: 3000
  },
  {
    id: "betzdorf_mensdorf",
    name: {
      fr: "Mensdorf",
      en: "Mensdorf"
    },
    slug: {
      fr: "mensdorf",
      en: "mensdorf"
    },
    type: "localite",
    canton: "Grevenmacher",
    parent_municipality: "betzdorf",
    population: 800
  },
  {
    id: "betzdorf_roodt_sur_syre",
    name: {
      fr: "Roodt-sur-Syre",
      en: "Roodt-sur-Syre"
    },
    slug: {
      fr: "roodt-sur-syre",
      en: "roodt-sur-syre"
    },
    type: "localite",
    canton: "Grevenmacher",
    parent_municipality: "betzdorf",
    population: 1200
  },

  // Beckerich and its localities
  {
    id: "beckerich",
    name: {
      fr: "Beckerich",
      en: "Beckerich"
    },
    slug: {
      fr: "beckerich",
      en: "beckerich"
    },
    type: "commune",
    canton: "Redange",
    population: 2500
  },
  {
    id: "beckerich_noerdange",
    name: {
      fr: "Noerdange",
      en: "Noerdange"
    },
    slug: {
      fr: "noerdange",
      en: "noerdange"
    },
    type: "localite",
    canton: "Redange",
    parent_municipality: "beckerich",
    population: 500
  },
  {
    id: "beckerich_oberpallen",
    name: {
      fr: "Oberpallen",
      en: "Oberpallen"
    },
    slug: {
      fr: "oberpallen",
      en: "oberpallen"
    },
    type: "localite",
    canton: "Redange",
    parent_municipality: "beckerich",
    population: 400
  },

  {
    id: "bissen",
    name: {
      fr: "Bissen",
      en: "Bissen"
    },
    slug: {
      fr: "bissen",
      en: "bissen"
    },
    type: "commune",
    canton: "Mersch",
    population: 2500
  },

  // Bous and its localities
  {
    id: "bous",
    name: {
      fr: "Bous",
      en: "Bous"
    },
    slug: {
      fr: "bous",
      en: "bous"
    },
    type: "commune",
    canton: "Remich",
    population: 2000
  },
  {
    id: "bous_rolling",
    name: {
      fr: "Rolling",
      en: "Rolling"
    },
    slug: {
      fr: "rolling",
      en: "rolling"
    },
    type: "localite",
    canton: "Remich",
    parent_municipality: "bous",
    population: 400
  },
  {
    id: "bous_erpeldange",
    name: {
      fr: "Erpeldange",
      en: "Erpeldange"
    },
    slug: {
      fr: "erpeldange",
      en: "erpeldange"
    },
    type: "localite",
    canton: "Remich",
    parent_municipality: "bous",
    population: 300
  },

  {
    id: "colmar_berg",
    name: {
      fr: "Colmar-Berg",
      en: "Colmar-Berg"
    },
    slug: {
      fr: "colmar-berg",
      en: "colmar-berg"
    },
    type: "commune",
    canton: "Mersch",
    population: 2000
  },

  {
    id: "ell",
    name: {
      fr: "Ell",
      en: "Ell"
    },
    slug: {
      fr: "ell",
      en: "ell"
    },
    type: "commune",
    canton: "Redange",
    population: 1500
  },

  {
    id: "ermsdorf",
    name: {
      fr: "Ermsdorf",
      en: "Ermsdorf"
    },
    slug: {
      fr: "ermsdorf",
      en: "ermsdorf"
    },
    type: "commune",
    canton: "Diekirch",
    population: 1500
  },

  {
    id: "esch_sure",
    name: {
      fr: "Esch-sur-Sûre",
      en: "Esch-sur-Sure"
    },
    slug: {
      fr: "esch-sur-sure",
      en: "esch-sur-sure"
    },
    type: "commune",
    canton: "Wiltz",
    population: 1500
  },  

// Add these smaller communes to the municipalities array
  {
    id: "flaxweiler",
    name: {
      fr: "Flaxweiler",
      en: "Flaxweiler"
    },
    slug: {
      fr: "flaxweiler",
      en: "flaxweiler"
    },
    type: "commune",
    canton: "Grevenmacher",
    population: 1500
  },

  {
    id: "garnich",
    name: {
      fr: "Garnich",
      en: "Garnich"
    },
    slug: {
      fr: "garnich",
      en: "garnich"
    },
    type: "commune",
    canton: "Capellen",
    population: 1500
  },

  {
    id: "goesdorf",
    name: {
      fr: "Goesdorf",
      en: "Goesdorf"
    },
    slug: {
      fr: "goesdorf",
      en: "goesdorf"
    },
    type: "commune",
    canton: "Wiltz",
    population: 1500
  },

  {
    id: "grosbous",
    name: {
      fr: "Grosbous",
      en: "Grosbous"
    },
    slug: {
      fr: "grosbous",
      en: "grosbous"
    },
    type: "commune",
    canton: "Redange",
    population: 1000
  },

  {
    id: "heffingen",
    name: {
      fr: "Heffingen",
      en: "Heffingen"
    },
    slug: {
      fr: "heffingen",
      en: "heffingen"
    },
    type: "commune",
    canton: "Mersch",
    population: 1000
  },

  {
    id: "kehlen",
    name: {
      fr: "Kehlen",
      en: "Kehlen"
    },
    slug: {
      fr: "kehlen",
      en: "kehlen"
    },
    type: "commune",
    canton: "Capellen",
    population: 1000
  },

  {
    id: "koerich",
    name: {
      fr: "Koerich",
      en: "Koerich"
    },
    slug: {
      fr: "koerich",
      en: "koerich"
    },
    type: "commune",
    canton: "Capellen",
    population: 1000
  },

  {
    id: "kopstal",
    name: {
      fr: "Kopstal",
      en: "Kopstal"
    },
    slug: {
      fr: "kopstal",
      en: "kopstal"
    },
    type: "commune",
    canton: "Capellen",
    population: 1000
  },

  {
    id: "lac_haute_sure",
    name: {
      fr: "Lac de la Haute-Sûre",
      en: "Lac de la Haute-Sure"
    },
    slug: {
      fr: "lac-haute-sure",
      en: "lac-haute-sure"
    },
    type: "commune",
    canton: "Wiltz",
    population: 1000
  },

  {
    id: "lenningen",
    name: {
      fr: "Lenningen",
      en: "Lenningen"
    },
    slug: {
      fr: "lenningen",
      en: "lenningen"
    },
    type: "commune",
    canton: "Remich",
    population: 1000
  },

  {
    id: "manternach",
    name: {
      fr: "Manternach",
      en: "Manternach"
    },
    slug: {
      fr: "manternach",
      en: "manternach"
    },
    type: "commune",
    canton: "Grevenmacher",
    population: 1000
  },

  {
    id: "mertert",
    name: {
      fr: "Mertert",
      en: "Mertert"
    },
    slug: {
      fr: "mertert",
      en: "mertert"
    },
    type: "commune",
    canton: "Grevenmacher",
    population: 1000
  },

  {
    id: "putscheid",
    name: {
      fr: "Putscheid",
      en: "Putscheid"
    },
    slug: {
      fr: "putscheid",
      en: "putscheid"
    },
    type: "commune",
    canton: "Vianden",
    population: 1000
  },

  {
    id: "reisdorf",
    name: {
      fr: "Reisdorf",
      en: "Reisdorf"
    },
    slug: {
      fr: "reisdorf",
      en: "reisdorf"
    },
    type: "commune",
    canton: "Diekirch",
    population: 1000
  },

  {
    id: "saeul",
    name: {
      fr: "Saeul",
      en: "Saeul"
    },
    slug: {
      fr: "saeul",
      en: "saeul"
    },
    type: "commune",
    canton: "Redange",
    population: 1000
  },

  {
    id: "schieren",
    name: {
      fr: "Schieren",
      en: "Schieren"
    },
    slug: {
      fr: "schieren",
      en: "schieren"
    },
    type: "commune",
    canton: "Diekirch",
    population: 1000
  },

  {
    id: "septfontaines",
    name: {
      fr: "Septfontaines",
      en: "Septfontaines"
    },
    slug: {
      fr: "septfontaines",
      en: "septfontaines"
    },
    type: "commune",
    canton: "Capellen",
    population: 1000
  },

  {
    id: "stadtbredimus",
    name: {
      fr: "Stadtbredimus",
      en: "Stadtbredimus"
    },
    slug: {
      fr: "stadtbredimus",
      en: "stadtbredimus"
    },
    type: "commune",
    canton: "Remich",
    population: 1000
  },

  {
    id: "useldange",
    name: {
      fr: "Useldange",
      en: "Useldange"
    },
    slug: {
      fr: "useldange",
      en: "useldange"
    },
    type: "commune",
    canton: "Redange",
    population: 1000
  },

  {
    id: "waldbillig",
    name: {
      fr: "Waldbillig",
      en: "Waldbillig"
    },
    slug: {
      fr: "waldbillig",
      en: "waldbillig"
    },
    type: "commune",
    canton: "Echternach",
    population: 1000
  },

  {
    id: "waldbredimus",
    name: {
      fr: "Waldbredimus",
      en: "Waldbredimus"
    },
    slug: {
      fr: "waldbredimus",
      en: "waldbredimus"
    },
    type: "commune",
    canton: "Remich",
    population: 1000
  },

  {
    id: "wahl",
    name: {
      fr: "Wahl",
      en: "Wahl"
    },
    slug: {
      fr: "wahl",
      en: "wahl"
    },
    type: "commune",
    canton: "Redange",
    population: 1000
  },

  {
    id: "wellenstein",
    name: {
      fr: "Wellenstein",
      en: "Wellenstein"
    },
    slug: {
      fr: "wellenstein",
      en: "wellenstein"
    },
    type: "commune",
    canton: "Remich",
    population: 1000
  },

  {
    id: "winseler",
    name: {
      fr: "Winseler",
      en: "Winseler"
    },
    slug: {
      fr: "winseler",
      en: "winseler"
    },
    type: "commune",
    canton: "Wiltz",
    population: 1000
  },
  
  // Dudelange and districts
  {
    id: "dudelange",
    name: {
      fr: "Dudelange",
      en: "Dudelange"
    },
    slug: {
      fr: "dudelange",
      en: "dudelange"
    },
    type: "commune",
    canton: "Esch-sur-Alzette",
    population: 21500
  },
  {
    id: "dudelange_centre",
    name: {
      fr: "Centre",
      en: "Center"
    },
    slug: {
      fr: "centre",
      en: "center"
    },
    type: "quartier",
    canton: "Esch-sur-Alzette",
    parentMunicipality: "dudelange",
    population: 8000
  },
  {
    id: "dudelange_burange",
    name: {
      fr: "Burange",
      en: "Burange"
    },
    slug: {
      fr: "burange",
      en: "burange"
    },
    type: "quartier",
    canton: "Esch-sur-Alzette",
    parentMunicipality: "dudelange",
    population: 3000
  },
  {
    id: "dudelange_butschebuerg",
    name: {
      fr: "Butschebuerg",
      en: "Butschebuerg"
    },
    slug: {
      fr: "butschebuerg",
      en: "butschebuerg"
    },
    type: "quartier",
    canton: "Esch-sur-Alzette",
    parentMunicipality: "dudelange",
    population: 2500
  },

// Add to the municipalities array
  {
    id: "mondorf",
    name: {
      fr: "Mondorf-les-Bains",
      en: "Mondorf-les-Bains"
    },
    slug: {
      fr: "mondorf-les-bains",
      en: "mondorf-les-bains"
    },
    type: "commune",
    canton: "Remich",
    population: 9500
  },
  {
    id: "mondorf_altwies",
    name: {
      fr: "Altwies",
      en: "Altwies"
    },
    slug: {
      fr: "altwies",
      en: "altwies"
    },
    type: "localite",
    canton: "Remich",
    parent_municipality: "mondorf",
    population: 1500
  },
  {
    id: "mondorf_ellange",
    name: {
      fr: "Ellange",
      en: "Ellange"
    },
    slug: {
      fr: "ellange",
      en: "ellange"
    },
    type: "localite",
    canton: "Remich",
    parent_municipality: "mondorf",
    population: 1000
  },

  // Steinsel
  {
    id: "steinsel",
    name: {
      fr: "Steinsel",
      en: "Steinsel"
    },
    slug: {
      fr: "steinsel",
      en: "steinsel"
    },
    type: "commune",
    canton: "Luxembourg",
    population: 9000
  },
  {
    id: "steinsel_mullendorf",
    name: {
      fr: "Mullendorf",
      en: "Mullendorf"
    },
    slug: {
      fr: "mullendorf",
      en: "mullendorf"
    },
    type: "localite",
    canton: "Luxembourg",
    parent_municipality: "steinsel",
    population: 2000
  },
  {
    id: "steinsel_heisdorf",
    name: {
      fr: "Heisdorf",
      en: "Heisdorf"
    },
    slug: {
      fr: "heisdorf",
      en: "heisdorf"
    },
    type: "localite",
    canton: "Luxembourg",
    parent_municipality: "steinsel",
    population: 2500
  },

  // Rumelange
  {
    id: "rumelange",
    name: {
      fr: "Rumelange",
      en: "Rumelange"
    },
    slug: {
      fr: "rumelange",
      en: "rumelange"
    },
    type: "commune",
    canton: "Esch-sur-Alzette",
    population: 8500
  },

  // Roeser
  {
    id: "roeser",
    name: {
      fr: "Roeser",
      en: "Roeser"
    },
    slug: {
      fr: "roeser",
      en: "roeser"
    },
    type: "commune",
    canton: "Esch-sur-Alzette",
    population: 8000
  },
  {
    id: "roeser_peppange",
    name: {
      fr: "Peppange",
      en: "Peppange"
    },
    slug: {
      fr: "peppange",
      en: "peppange"
    },
    type: "localite",
    canton: "Esch-sur-Alzette",
    parent_municipality: "roeser",
    population: 1500
  },
  {
    id: "roeser_bivange",
    name: {
      fr: "Bivange",
      en: "Bivange"
    },
    slug: {
      fr: "bivange",
      en: "bivange"
    },
    type: "localite",
    canton: "Esch-sur-Alzette",
    parent_municipality: "roeser",
    population: 1200
  },
  {
    id: "roeser_livange",
    name: {
      fr: "Livange",
      en: "Livange"
    },
    slug: {
      fr: "livange",
      en: "livange"
    },
    type: "localite",
    canton: "Esch-sur-Alzette",
    parent_municipality: "roeser",
    population: 1000
  },
  {
    id: "roeser_crauthem",
    name: {
      fr: "Crauthem",
      en: "Crauthem"
    },
    slug: {
      fr: "crauthem",
      en: "crauthem"
    },
    type: "localite",
    canton: "Esch-sur-Alzette",
    parent_municipality: "roeser",
    population: 1500
  },

  // Junglinster
  {
    id: "junglinster",
    name: {
      fr: "Junglinster",
      en: "Junglinster"
    },
    slug: {
      fr: "junglinster",
      en: "junglinster"
    },
    type: "commune",
    canton: "Grevenmacher",
    population: 8000
  },
  {
    id: "junglinster_bourglinster",
    name: {
      fr: "Bourglinster",
      en: "Bourglinster"
    },
    slug: {
      fr: "bourglinster",
      en: "bourglinster"
    },
    type: "localite",
    canton: "Grevenmacher",
    parent_municipality: "junglinster",
    population: 1500
  },
  {
    id: "junglinster_gonderange",
    name: {
      fr: "Gonderange",
      en: "Gonderange"
    },
    slug: {
      fr: "gonderange",
      en: "gonderange"
    },
    type: "localite",
    canton: "Grevenmacher",
    parent_municipality: "junglinster",
    population: 2000
  },

  // Grevenmacher
  {
    id: "grevenmacher",
    name: {
      fr: "Grevenmacher",
      en: "Grevenmacher"
    },
    slug: {
      fr: "grevenmacher",
      en: "grevenmacher"
    },
    type: "commune",
    canton: "Grevenmacher",
    population: 7500
  },

  // Wiltz
  {
    id: "wiltz",
    name: {
      fr: "Wiltz",
      en: "Wiltz"
    },
    slug: {
      fr: "wiltz",
      en: "wiltz"
    },
    type: "commune",
    canton: "Wiltz",
    population: 7500
  },
  {
    id: "wiltz_weidingen",
    name: {
      fr: "Weidingen",
      en: "Weidingen"
    },
    slug: {
      fr: "weidingen",
      en: "weidingen"
    },
    type: "localite",
    canton: "Wiltz",
    parent_municipality: "wiltz",
    population: 1000
  },

  // Ettelbruck
  {
    id: "ettelbruck",
    name: {
      fr: "Ettelbruck",
      en: "Ettelbruck"
    },
    slug: {
      fr: "ettelbruck",
      en: "ettelbruck"
    },
    type: "commune",
    canton: "Diekirch",
    population: 7500
  },
  {
    id: "ettelbruck_warken",
    name: {
      fr: "Warken",
      en: "Warken"
    },
    slug: {
      fr: "warken",
      en: "warken"
    },
    type: "localite",
    canton: "Diekirch",
    parent_municipality: "ettelbruck",
    population: 1200
  },

  // Diekirch
  {
    id: "diekirch",
    name: {
      fr: "Diekirch",
      en: "Diekirch"
    },
    slug: {
      fr: "diekirch",
      en: "diekirch"
    },
    type: "commune",
    canton: "Diekirch",
    population: 7000
  },
  {
    id: "diekirch_gilsdorf",
    name: {
      fr: "Gilsdorf",
      en: "Gilsdorf"
    },
    slug: {
      fr: "gilsdorf",
      en: "gilsdorf"
    },
    type: "localite",
    canton: "Diekirch",
    parent_municipality: "diekirch",
    population: 1000
  },

  // Steinfort
  {
    id: "steinfort",
    name: {
      fr: "Steinfort",
      en: "Steinfort"
    },
    slug: {
      fr: "steinfort",
      en: "steinfort"
    },
    type: "commune",
    canton: "Capellen",
    population: 7000
  },
  {
    id: "steinfort_kleinbettingen",
    name: {
      fr: "Kleinbettingen",
      en: "Kleinbettingen"
    },
    slug: {
      fr: "kleinbettingen",
      en: "kleinbettingen"
    },
    type: "localite",
    canton: "Capellen",
    parent_municipality: "steinfort",
    population: 1200
  },
  {
    id: "steinfort_grass",
    name: {
      fr: "Grass",
      en: "Grass"
    },
    slug: {
      fr: "grass",
      en: "grass"
    },
    type: "localite",
    canton: "Capellen",
    parent_municipality: "steinfort",
    population: 800
  },
  {
    id: "steinfort_hagen",
    name: {
      fr: "Hagen",
      en: "Hagen"
    },
    slug: {
      fr: "hagen",
      en: "hagen"
    },
    type: "localite",
    canton: "Capellen",
    parent_municipality: "steinfort",
    population: 900
  },

  // Echternach
  {
    id: "echternach",
    name: {
      fr: "Echternach",
      en: "Echternach"
    },
    slug: {
      fr: "echternach",
      en: "echternach"
    },
    type: "commune",
    canton: "Echternach",
    population: 6500
  },

  // Redange
  {
    id: "redange",
    name: {
      fr: "Redange",
      en: "Redange"
    },
    slug: {
      fr: "redange",
      en: "redange"
    },
    type: "commune",
    canton: "Redange",
    population: 6000
  },

  // Remich
  {
    id: "remich",
    name: {
      fr: "Remich",
      en: "Remich"
    },
    slug: {
      fr: "remich",
      en: "remich"
    },
    type: "commune",
    canton: "Remich",
    population: 6000
  },

  // Clervaux
  {
    id: "clervaux",
    name: {
      fr: "Clervaux",
      en: "Clervaux"
    },
    slug: {
      fr: "clervaux",
      en: "clervaux"
    },
    type: "commune",
    canton: "Clervaux",
    population: 5500
  },
  {
    id: "clervaux_reuler",
    name: {
      fr: "Reuler",
      en: "Reuler"
    },
    slug: {
      fr: "reuler",
      en: "reuler"
    },
    type: "localite",
    canton: "Clervaux",
    parent_municipality: "clervaux",
    population: 800
  },
  {
    id: "clervaux_eselborn",
    name: {
      fr: "Eselborn",
      en: "Eselborn"
    },
    slug: {
      fr: "eselborn",
      en: "eselborn"
    },
    type: "localite",
    canton: "Clervaux",
    parent_municipality: "clervaux",
    population: 700
  },

  // Vianden
  {
    id: "vianden",
    name: {
      fr: "Vianden",
      en: "Vianden"
    },
    slug: {
      fr: "vianden",
      en: "vianden"
    },
    type: "commune",
    canton: "Vianden",
    population: 5000
  },  
  
// Leudelange
{
  id: "leudelange",
  name: {
    fr: "Leudelange",
    en: "Leudelange"
  },
  slug: {
    fr: "leudelange",
    en: "leudelange"
  },
  type: "commune",
  canton: "Esch-sur-Alzette",
  population: 10000
},

// Mamer and its localities
{
  id: "mamer",
  name: {
    fr: "Mamer",
    en: "Mamer"
  },
  slug: {
    fr: "mamer",
    en: "mamer"
  },
  type: "commune",
  canton: "Capellen",
  population: 14000
},
{
  id: "mamer_capellen",
  name: {
    fr: "Capellen",
    en: "Capellen"
  },
  slug: {
    fr: "capellen",
    en: "capellen"
  },
  type: "localite",
  canton: "Capellen",
  parent_municipality: "mamer",
  population: 3000
},
{
  id: "mamer_holzem",
  name: {
    fr: "Holzem",
    en: "Holzem"
  },
  slug: {
    fr: "holzem",
    en: "holzem"
  },
  type: "localite",
  canton: "Capellen",
  parent_municipality: "mamer",
  population: 2000
}
  
// Kayl
  {
    id: "kayl",
    name: {
      fr: "Kayl",
      en: "Kayl"
    },
    slug: {
      fr: "kayl",
      en: "kayl"
    },
    type: "commune",
    canton: "Esch-sur-Alzette",
    population: 13000
  },
  {
    id: "kayl_tetange",
    name: {
      fr: "Tétange",
      en: "Tetange"
    },
    slug: {
      fr: "tetange",
      en: "tetange"
    },
    type: "localite",
    canton: "Esch-sur-Alzette",
    parent_municipality: "kayl",
    population: 5000
  },

  // Mersch
  {
    id: "mersch",
    name: {
      fr: "Mersch",
      en: "Mersch"
    },
    slug: {
      fr: "mersch",
      en: "mersch"
    },
    type: "commune",
    canton: "Mersch",
    population: 12500
  },
  {
    id: "mersch_rollingen",
    name: {
      fr: "Rollingen",
      en: "Rollingen"
    },
    slug: {
      fr: "rollingen",
      en: "rollingen"
    },
    type: "localite",
    canton: "Mersch",
    parent_municipality: "mersch",
    population: 2000
  },
  {
    id: "mersch_reckange",
    name: {
      fr: "Reckange",
      en: "Reckange"
    },
    slug: {
      fr: "reckange",
      en: "reckange"
    },
    type: "localite",
    canton: "Mersch",
    parent_municipality: "mersch",
    population: 1000
  },

  // Walferdange
  {
    id: "walferdange",
    name: {
      fr: "Walferdange",
      en: "Walferdange"
    },
    slug: {
      fr: "walferdange",
      en: "walferdange"
    },
    type: "commune",
    canton: "Luxembourg",
    population: 12000
  },
  {
    id: "walferdange_helmsange",
    name: {
      fr: "Helmsange",
      en: "Helmsange"
    },
    slug: {
      fr: "helmsange",
      en: "helmsange"
    },
    type: "localite",
    canton: "Luxembourg",
    parent_municipality: "walferdange",
    population: 4000
  },
  {
    id: "walferdange_bereldange",
    name: {
      fr: "Bereldange",
      en: "Bereldange"
    },
    slug: {
      fr: "bereldange",
      en: "bereldange"
    },
    type: "localite",
    canton: "Luxembourg",
    parent_municipality: "walferdange",
    population: 5000
  },

  // Niederanven
  {
    id: "niederanven",
    name: {
      fr: "Niederanven",
      en: "Niederanven"
    },
    slug: {
      fr: "niederanven",
      en: "niederanven"
    },
    type: "commune",
    canton: "Luxembourg",
    population: 11500
  },
  {
    id: "niederanven_senningerberg",
    name: {
      fr: "Senningerberg",
      en: "Senningerberg"
    },
    slug: {
      fr: "senningerberg",
      en: "senningerberg"
    },
    type: "localite",
    canton: "Luxembourg",
    parent_municipality: "niederanven",
    population: 3000
  },
  {
    id: "niederanven_hostert",
    name: {
      fr: "Hostert",
      en: "Hostert"
    },
    slug: {
      fr: "hostert",
      en: "hostert"
    },
    type: "localite",
    canton: "Luxembourg",
    parent_municipality: "niederanven",
    population: 2500
  },
  {
    id: "niederanven_oberanven",
    name: {
      fr: "Oberanven",
      en: "Oberanven"
    },
    slug: {
      fr: "oberanven",
      en: "oberanven"
    },
    type: "localite",
    canton: "Luxembourg",
    parent_municipality: "niederanven",
    population: 2000
  },
  {
    id: "niederanven_rameldange",
    name: {
      fr: "Rameldange",
      en: "Rameldange"
    },
    slug: {
      fr: "rameldange",
      en: "rameldange"
    },
    type: "localite",
    canton: "Luxembourg",
    parent_municipality: "niederanven",
    population: 1500
  },

  // Bettembourg
  {
    id: "bettembourg",
    name: {
      fr: "Bettembourg",
      en: "Bettembourg"
    },
    slug: {
      fr: "bettembourg",
      en: "bettembourg"
    },
    type: "commune",
    canton: "Esch-sur-Alzette",
    population: 11000
  },
  {
    id: "bettembourg_noertzange",
    name: {
      fr: "Noertzange",
      en: "Noertzange"
    },
    slug: {
      fr: "noertzange",
      en: "noertzange"
    },
    type: "localite",
    canton: "Esch-sur-Alzette",
    parent_municipality: "bettembourg",
    population: 2000
  },
  {
    id: "bettembourg_huncherange",
    name: {
      fr: "Huncherange",
      en: "Huncherange"
    },
    slug: {
      fr: "huncherange",
      en: "huncherange"
    },
    type: "localite",
    canton: "Esch-sur-Alzette",
    parent_municipality: "bettembourg",
    population: 1500
  },

  // Schifflange
  {
    id: "schifflange",
    name: {
      fr: "Schifflange",
      en: "Schifflange"
    },
    slug: {
      fr: "schifflange",
      en: "schifflange"
    },
    type: "commune",
    canton: "Esch-sur-Alzette",
    population: 11000
  },

  // Sandweiler
  {
    id: "sandweiler",
    name: {
      fr: "Sandweiler",
      en: "Sandweiler"
    },
    slug: {
      fr: "sandweiler",
      en: "sandweiler"
    },
    type: "commune",
    canton: "Luxembourg",
    population: 10500
  },
  
// Pétange
  {
    id: "petange",
    name: {
      fr: "Pétange",
      en: "Petange"
    },
    slug: {
      fr: "petange",
      en: "petange"
    },
    type: "commune",
    canton: "Esch-sur-Alzette",
    population: 19313
  },
  {
    id: "petange_rodange",
    name: {
      fr: "Rodange",
      en: "Rodange"
    },
    slug: {
      fr: "rodange",
      en: "rodange"
    },
    type: "localite",
    canton: "Esch-sur-Alzette",
    parent_municipality: "petange",
    population: 6000
  },
  {
    id: "petange_lamadelaine",
    name: {
      fr: "Lamadelaine",
      en: "Lamadelaine"
    },
    slug: {
      fr: "lamadelaine",
      en: "lamadelaine"
    },
    type: "localite",
    canton: "Esch-sur-Alzette",
    parent_municipality: "petange",
    population: 4000
  },

  // Sanem
  {
    id: "sanem",
    name: {
      fr: "Sanem",
      en: "Sanem"
    },
    slug: {
      fr: "sanem",
      en: "sanem"
    },
    type: "commune",
    canton: "Esch-sur-Alzette",
    population: 17500
  },
  {
    id: "sanem_belvaux",
    name: {
      fr: "Belvaux",
      en: "Belvaux"
    },
    slug: {
      fr: "belvaux",
      en: "belvaux"
    },
    type: "localite",
    canton: "Esch-sur-Alzette",
    parent_municipality: "sanem",
    population: 6000
  },
  {
    id: "sanem_soleuvre",
    name: {
      fr: "Soleuvre",
      en: "Soleuvre"
    },
    slug: {
      fr: "soleuvre",
      en: "soleuvre"
    },
    type: "localite",
    canton: "Esch-sur-Alzette",
    parent_municipality: "sanem",
    population: 5000
  },
  {
    id: "sanem_ehlerange",
    name: {
      fr: "Ehlerange",
      en: "Ehlerange"
    },
    slug: {
      fr: "ehlerange",
      en: "ehlerange"
    },
    type: "localite",
    canton: "Esch-sur-Alzette",
    parent_municipality: "sanem",
    population: 2000
  },

  // Hesperange
  {
    id: "hesperange",
    name: {
      fr: "Hesperange",
      en: "Hesperange"
    },
    slug: {
      fr: "hesperange",
      en: "hesperange"
    },
    type: "commune",
    canton: "Luxembourg",
    population: 15500
  },
  {
    id: "hesperange_alzingen",
    name: {
      fr: "Alzingen",
      en: "Alzingen"
    },
    slug: {
      fr: "alzingen",
      en: "alzingen"
    },
    type: "localite",
    canton: "Luxembourg",
    parent_municipality: "hesperange",
    population: 3000
  },
  {
    id: "hesperange_fentange",
    name: {
      fr: "Fentange",
      en: "Fentange"
    },
    slug: {
      fr: "fentange",
      en: "fentange"
    },
    type: "localite",
    canton: "Luxembourg",
    parent_municipality: "hesperange",
    population: 2000
  },
  {
    id: "hesperange_howald",
    name: {
      fr: "Howald",
      en: "Howald"
    },
    slug: {
      fr: "howald",
      en: "howald"
    },
    type: "localite",
    canton: "Luxembourg",
    parent_municipality: "hesperange",
    population: 7000
  },
  {
    id: "hesperange_itzig",
    name: {
      fr: "Itzig",
      en: "Itzig"
    },
    slug: {
      fr: "itzig",
      en: "itzig"
    },
    type: "localite",
    canton: "Luxembourg",
    parent_municipality: "hesperange",
    population: 2500
  },

  // Bertrange
  {
    id: "bertrange",
    name: {
      fr: "Bertrange",
      en: "Bertrange"
    },
    slug: {
      fr: "bertrange",
      en: "bertrange"
    },
    type: "commune",
    canton: "Luxembourg",
    population: 15000
  },

  // Strassen
  {
    id: "strassen",
    name: {
      fr: "Strassen",
      en: "Strassen"
    },
    slug: {
      fr: "strassen",
      en: "strassen"
    },
    type: "commune",
    canton: "Luxembourg",
    population: 14500
  },
  
  // Differdange and districts
  {
    id: "differdange",
    name: {
      fr: "Differdange",
      en: "Differdange"
    },
    slug: {
      fr: "differdange",
      en: "differdange"
    },
    type: "commune",
    canton: "Esch-sur-Alzette",
    population: 27000
  },
  {
    id: "differdange_fousbann",
    name: {
      fr: "Fousbann",
      en: "Fousbann"
    },
    slug: {
      fr: "fousbann",
      en: "fousbann"
    },
    type: "quartier",
    canton: "Esch-sur-Alzette",
    parentMunicipality: "differdange",
    population: 4000
  },
  {
    id: "differdange_oberkorn",
    name: {
      fr: "Oberkorn",
      en: "Oberkorn"
    },
    slug: {
      fr: "oberkorn",
      en: "oberkorn"
    },
    type: "localite",
    canton: "Esch-sur-Alzette",
    parentMunicipality: "differdange",
    population: 8000
  },
  {
    id: "differdange_niederkorn",
    name: {
      fr: "Niederkorn",
      en: "Niederkorn"
    },
    slug: {
      fr: "niederkorn",
      en: "niederkorn"
    },
    type: "localite",
    canton: "Esch-sur-Alzette",
    parentMunicipality: "differdange",
    population: 7000
  },
  {
    id: "differdange_lasauvage",
    name: {
      fr: "Lasauvage",
      en: "Lasauvage"
    },
    slug: {
      fr: "lasauvage",
      en: "lasauvage"
    },
    type: "localite",
    canton: "Esch-sur-Alzette",
    parentMunicipality: "differdange",
    population: 500
  }
];

export function getLocationById(id: string): Location | undefined {
  return locations.find(location => location.id === id);
}

export function getLocationBySlug(slug: string, locale: 'fr' | 'en'): Location | undefined {
  return locations.find(location => location.slug[locale] === slug);
}

export function getLocationsByType(type: Location['type']): Location[] {
  return locations.filter(location => location.type === type);
}

export function getDistrictsByMunicipality(municipalityId: string): Location[] {
  return locations.filter(location => 
    (location.type === 'quartier' || location.type === 'localite') && 
    location.parentMunicipality === municipalityId
  );
}

export function getLocalizedLocation(location: Location, locale: 'fr' | 'en') {
  return {
    id: location.id,
    name: location.name[locale],
    slug: location.slug[locale],
    type: location.type,
    canton: location.canton,
    parentMunicipality: location.parentMunicipality,
    population: location.population
  };
}