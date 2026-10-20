// Rozsomák tanár úr fizikapélda-gyakorlója - Feladat paraméterek és beállítások
// Ez a fájl a feladat_adatok.json-nal megegyező struktúrát biztosít a közvetlen (file://) megnyitáshoz is.
const FELADAT_ADATOK = {
  "settings": {
    "countdownSeconds": 15,
    "precisionDecimals": 2,
    "tolerance": {
      "absolute": 0.02,
      "relative": 0.015
    }
  },
  "animals": [
    { "id": "rozsomak", "name": "rozsomák", "subject": "A rozsomák" },
    { "id": "kecske", "name": "kecske", "subject": "A kecske" },
    { "id": "tengerimalac", "name": "tengerimalac", "subject": "A tengerimalac" },
    { "id": "tatarantilop", "name": "tatárantilop", "subject": "A tatárantilop" },
    { "id": "vizidiszno", "name": "vízidisznó", "subject": "A vízidisznó" },
    { "id": "sarki_roka", "name": "sarki róka", "subject": "A sarki róka" },
    { "id": "mosomedve", "name": "mosómedve", "subject": "A mosómedve" },
    { "id": "lama", "name": "láma", "subject": "A láma" },
    { "id": "vombat", "name": "vombat", "subject": "A vombat" },
    { "id": "gepard", "name": "gepárd", "subject": "A gepárd" }
  ],
  "vehicles": [
    {
      "id": "tricikli",
      "name": "tricikli",
      "instr": "egy triciklivel",
      "minV": 1.2,
      "maxV": 2.8,
      "timeRange": { "min": 10, "max": 90 },
      "accelRange": { "min": 0.2, "max": 0.5 }
    },
    {
      "id": "roller",
      "name": "roller",
      "instr": "egy rollerrel",
      "minV": 3.0,
      "maxV": 5.5,
      "timeRange": { "min": 10, "max": 90 },
      "accelRange": { "min": 0.4, "max": 0.9 }
    },
    {
      "id": "varosi_bicikli",
      "name": "városi bicikli",
      "instr": "egy városi biciklivel",
      "minV": 4.0,
      "maxV": 7.0,
      "timeRange": { "min": 15, "max": 120 },
      "accelRange": { "min": 0.5, "max": 1.2 }
    },
    {
      "id": "versenykerekpar",
      "name": "versenykerékpár",
      "instr": "egy versenykerékpárral",
      "minV": 8.0,
      "maxV": 13.5,
      "timeRange": { "min": 15, "max": 120 },
      "accelRange": { "min": 0.8, "max": 1.8 }
    },
    {
      "id": "elektromos_moped",
      "name": "elektromos moped",
      "instr": "egy elektromos mopettel",
      "minV": 7.0,
      "maxV": 12.0,
      "timeRange": { "min": 15, "max": 120 },
      "accelRange": { "min": 1.0, "max": 2.2 }
    },
    {
      "id": "kis_traktor",
      "name": "kis traktor",
      "instr": "egy kis traktorral",
      "minV": 4.0,
      "maxV": 8.0,
      "timeRange": { "min": 15, "max": 120 },
      "accelRange": { "min": 0.5, "max": 1.4 }
    },
    {
      "id": "szemelyauto",
      "name": "személyautó",
      "instr": "egy személyautóval",
      "minV": 14.0,
      "maxV": 33.0,
      "timeRange": { "min": 20, "max": 120 },
      "accelRange": { "min": 1.5, "max": 3.5 }
    },
    {
      "id": "bugatti_chiron",
      "name": "Bugatti Chiron",
      "instr": "egy Bugatti Chironnal",
      "minV": 50.0,
      "maxV": 100.0,
      "timeRange": { "min": 15, "max": 60 },
      "accelRange": { "min": 5.0, "max": 9.5 }
    },
    {
      "id": "magnesvasut",
      "name": "mágnesvasút (Maglev)",
      "instr": "egy mágnesvasúttal",
      "minV": 80.0,
      "maxV": 125.0,
      "timeRange": { "min": 15, "max": 60 },
      "accelRange": { "min": 0.8, "max": 1.6 }
    },
    {
      "id": "spacex_raketa",
      "name": "SpaceX rakéta",
      "instr": "egy SpaceX rakétával",
      "minV": 1500.0,
      "maxV": 3200.0,
      "timeRange": { "min": 10, "max": 45 },
      "accelRange": { "min": 15.0, "max": 35.0 }
    }
  ],
  "taskTypes": [
    {
      "id": 1,
      "title": "1. Egyenletes mozgás alapképlete (v = x / t)",
      "description": "Hiányzó érték (sebesség, út vagy idő) kiszámítása tiszta SI alapegységekben (m/s, m, s)."
    },
    {
      "id": 2,
      "title": "2. Egyenletes mozgás mértékegység-átváltással",
      "description": "Számítások km/h és m/s, percek és másodpercek, valamint kilométerek és méterek közötti átváltásokkal."
    },
    {
      "id": 3,
      "title": "3. Összetett mozgás átlagsebessége",
      "description": "2, 3 vagy 4 szakaszból álló mozgás teljes átlagsebességének kiszámítása a szakaszok ismert részadataiból.",
      "minStages": 2,
      "maxStages": 4
    },
    {
      "id": 4,
      "title": "4. Egyenletesen változó mozgás: sebesség és gyorsulás",
      "description": "Gyorsulás (a), kezdő- és végsebesség (v₀, v), valamint időtartam (t) kiszámítása az a = Δv / t képlet alapján."
    },
    {
      "id": 5,
      "title": "5. Egyenletesen gyorsuló mozgás: út és fékút",
      "description": "Megtett út (x), fékút és gyorsulás kiszámítása nyugalomból vagy kezdősebességről indulva (x = a/2·t², x = v_átlag·t)."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.FELADAT_ADATOK = FELADAT_ADATOK;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FELADAT_ADATOK;
}
