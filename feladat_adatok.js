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
    { "id": "rozsomak", "name": "rozsomák", "subject": "A rozsomák", "mass": 15 },
    { "id": "kecske", "name": "kecske", "subject": "A kecske", "mass": 45 },
    { "id": "tengerimalac", "name": "tengerimalac", "subject": "A tengerimalac", "mass": 1 },
    { "id": "tatarantilop", "name": "tatárantilop", "subject": "A tatárantilop", "mass": 35 },
    { "id": "vizidiszno", "name": "vízidisznó", "subject": "A vízidisznó", "mass": 50 },
    { "id": "sarki_roka", "name": "sarki róka", "subject": "A sarki róka", "mass": 4 },
    { "id": "mosomedve", "name": "mosómedve", "subject": "A mosómedve", "mass": 8 },
    { "id": "lama", "name": "láma", "subject": "A láma", "mass": 130 },
    { "id": "vombat", "name": "vombat", "subject": "A vombat", "mass": 25 },
    { "id": "gepard", "name": "gepárd", "subject": "A gepárd", "mass": 50 }
  ],
  "throwableObjects": [
    { "id": "frizbi", "name": "frizbi", "acc": "egy frizbit", "def": "A frizbi" },
    { "id": "teniszlabda", "name": "teniszlabda", "acc": "egy teniszlabdát", "def": "A teniszlabda" },
    { "id": "bumerang", "name": "bumeráng", "acc": "egy bumerángot", "def": "A bumeráng" },
    { "id": "hogolyo", "name": "hógolyó", "acc": "egy hógolyót", "def": "A hógolyó" },
    { "id": "toboz", "name": "fenyőtoboz", "acc": "egy fenyőtobozt", "def": "A fenyőtoboz" },
    { "id": "kavics", "name": "lapos kavics", "acc": "egy lapos kavicsot", "def": "A lapos kavics" },
    { "id": "alma", "name": "piros alma", "acc": "egy piros almát", "def": "A piros alma" },
    { "id": "gumikacsa", "name": "gumikacsa", "acc": "egy gumikacsát", "def": "A gumikacsa" },
    { "id": "patko", "name": "patkó", "acc": "egy patkót", "def": "A patkó" },
    { "id": "dio", "name": "aranydió", "acc": "egy aranydiót", "def": "Az aranydió" }
  ],
  "vehicles": [
    {
      "id": "tricikli",
      "name": "tricikli",
      "instr": "egy triciklivel",
      "minV": 1.2,
      "maxV": 2.8,
      "timeRange": { "min": 10, "max": 90 },
      "accelRange": { "min": 0.2, "max": 0.5 },
      "mass": 10
    },
    {
      "id": "roller",
      "name": "roller",
      "instr": "egy rollerrel",
      "minV": 3.0,
      "maxV": 5.5,
      "timeRange": { "min": 10, "max": 90 },
      "accelRange": { "min": 0.4, "max": 0.9 },
      "mass": 12
    },
    {
      "id": "varosi_bicikli",
      "name": "városi bicikli",
      "instr": "egy városi biciklivel",
      "minV": 4.0,
      "maxV": 7.0,
      "timeRange": { "min": 15, "max": 120 },
      "accelRange": { "min": 0.5, "max": 1.2 },
      "mass": 18
    },
    {
      "id": "versenykerekpar",
      "name": "versenykerékpár",
      "instr": "egy versenykerékpárral",
      "minV": 8.0,
      "maxV": 13.5,
      "timeRange": { "min": 15, "max": 120 },
      "accelRange": { "min": 0.8, "max": 1.8 },
      "mass": 8
    },
    {
      "id": "elektromos_moped",
      "name": "elektromos moped",
      "instr": "egy elektromos mopettel",
      "minV": 7.0,
      "maxV": 12.0,
      "timeRange": { "min": 15, "max": 120 },
      "accelRange": { "min": 1.0, "max": 2.2 },
      "mass": 80
    },
    {
      "id": "kis_traktor",
      "name": "kis traktor",
      "instr": "egy kis traktorral",
      "minV": 4.0,
      "maxV": 8.0,
      "timeRange": { "min": 15, "max": 120 },
      "accelRange": { "min": 0.5, "max": 1.4 },
      "mass": 1200
    },
    {
      "id": "szemelyauto",
      "name": "személyautó",
      "instr": "egy személyautóval",
      "minV": 14.0,
      "maxV": 33.0,
      "timeRange": { "min": 20, "max": 120 },
      "accelRange": { "min": 1.5, "max": 3.5 },
      "mass": 1400
    },
    {
      "id": "bugatti_chiron",
      "name": "Bugatti Chiron",
      "instr": "egy Bugatti Chironnal",
      "minV": 50.0,
      "maxV": 100.0,
      "timeRange": { "min": 15, "max": 60 },
      "accelRange": { "min": 5.0, "max": 9.5 },
      "mass": 1995
    },
    {
      "id": "magnesvasut",
      "name": "mágnesvasút (Maglev)",
      "instr": "egy mágnesvasúttal",
      "minV": 80.0,
      "maxV": 125.0,
      "timeRange": { "min": 15, "max": 60 },
      "accelRange": { "min": 0.8, "max": 1.6 },
      "mass": 45000
    },
    {
      "id": "spacex_raketa",
      "name": "SpaceX rakéta",
      "instr": "egy SpaceX rakétával",
      "minV": 1500.0,
      "maxV": 3200.0,
      "timeRange": { "min": 10, "max": 45 },
      "accelRange": { "min": 15.0, "max": 35.0 },
      "mass": 25000
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
    },
    {
      "id": 6,
      "title": "6. Vízszintes hajítás magasból (v_x és h)",
      "description": "Egy adott magasságból vízszintes v_x kezdősebességgel elhajított tárgy repülési idejének, hatótávolságának vagy ledobási magasságának kiszámítása (g = 10 m/s²)."
    },
    {
      "id": 7,
      "title": "7. Hajítás sebességkomponensekkel (v_x és v_y)",
      "description": "Ferde hajítás szögfüggvények nélkül: repülési idő, maximális emelkedési magasság és távolság kiszámítása a vízszintes és függőleges sebességből (g = 10 m/s²)."
    },
    {
      "id": 8,
      "title": "8. Newton II. törvénye (F = m · a)",
      "description": "Erő (F), tömeg (m) és gyorsulás (a) kiszámítása a dinamika alaptörvénye alapján, valamint az erő és sebességváltozás kapcsolata."
    },
    {
      "id": 9,
      "title": "9. Newton III. törvénye (kölcsönhatás és erő-ellenerő)",
      "description": "Erő-ellenerő egyenlősége, két test kölcsönhatásakor fellépő erők és gyorsulások aránya (m₁ · a₁ = m₂ · a₂), elrugaszkodás."
    },
    {
      "id": 10,
      "title": "10. Lendületmegmaradás és rugalmas ütközések",
      "description": "Lendület (p = m · v), lendületmegmaradás centrális rugalmas ütközéseknél, sebességcsere, visszapattanás és ütközési erők."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.FELADAT_ADATOK = FELADAT_ADATOK;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FELADAT_ADATOK;
}
