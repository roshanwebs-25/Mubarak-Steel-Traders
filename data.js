/**
 * data.js — Mubarak Steel Traders
 * Product catalogue. All product details sourced from business information.
 */

const products = [
  {
    id: "iron",
    name: "Iron",
    shortDesc: "High-grade iron materials for structural and fabrication use across all scales of construction.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80",
    detailDesc: "Our iron products are sourced from trusted manufacturers and are ideal for a wide range of construction and industrial applications. We supply TMT bars, angle iron, flat iron, channel sections, and more — all quality-checked for strength, grade compliance, and durability. Available in both retail quantities and bulk supply for large projects.",
    specs: [
      "Available in TMT bars (Fe-415, Fe-500 grades)",
      "Angle iron, flat iron, and channel sections",
      "Various sizes and thicknesses in stock",
      "Bulk pricing available for large orders",
      "Sourced from reputable manufacturers"
    ],
    usecases: [
      "Structural framework for buildings, bridges, and flyovers",
      "Gates, grills & security fencing",
      "Industrial fabrication & heavy machinery",
      "Reinforcement in concrete structures",
      "Agricultural equipment and storage structures"
    ]
  },
  {
    id: "steel",
    name: "Steel",
    shortDesc: "Premium structural steel for high-load construction, industrial, and engineering projects.",
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=700&q=80",
    detailDesc: "We offer a comprehensive range of steel products including TMT bars, steel sheets, HR coils, and structural steel sections. Ideal for high-load bearing applications, our steel ensures longevity and compliance with BIS standards. Trusted by engineers, contractors, and builders across Kurnool and the surrounding region.",
    specs: [
      "TMT bars, HR sheets, and structural sections",
      "BIS-compliant grades for all applications",
      "Available in standard and custom lengths",
      "Wholesale pricing for bulk procurement",
      "Reliable stock maintained year-round"
    ],
    usecases: [
      "High-rise building construction and complexes",
      "Bridge and flyover fabrication",
      "Industrial plant structures and factory sheds",
      "Machinery and equipment manufacturing",
      "Shipbuilding and heavy infrastructure"
    ]
  },
  {
    id: "colour-roofing-sheets",
    name: "Colour Roofing Sheets",
    shortDesc: "Weather-resistant, colour-coated galvanized sheets for residential, commercial, and industrial roofing.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    detailDesc: "Our colour-coated roofing sheets offer excellent protection against rain, heat, and corrosion. Available in a variety of colours and profiles, they combine functionality with visual appeal — perfect for residential, commercial, and industrial roofing needs. Long service life with minimal maintenance required.",
    specs: [
      "Available in multiple colour options",
      "Galvanized base for anti-corrosion protection",
      "Standard and custom lengths available",
      "Suitable for all weather conditions",
      "Lightweight yet durable construction"
    ],
    usecases: [
      "Residential roofing and full roof renovation",
      "Warehouse and factory industrial shed roofing",
      "Commercial and retail building rooftops",
      "Agricultural sheds, poultry farms, and storage",
      "Pre-engineered building (PEB) systems"
    ],
    brands: [
      {
        name: "TATA DURASHINE",
        desc: "India's most trusted colour-coated roofing brand. GreenPro certified.",
        img: "https://5.imimg.com/data5/SELLER/Default/2022/12/LG/GH/FD/68388226/tata-durashine-colour-coated-roofing-sheets.jpg"
      },
      {
        name: "APOLLO SHEETS",
        desc: "High-strength galvanised & colour-coated corrugated roofing sheets.",
        img: "https://5.imimg.com/data5/SELLER/Default/2022/9/UX/GY/KV/150743748/apollo-roofing-sheets.jpg"
      },
      {
        name: "SR SHEETS",
        desc: "PPGL colour-coated profile sheets. Durable for all climate types.",
        img: "https://5.imimg.com/data5/SELLER/Default/2023/3/KS/RB/NX/190168929/sr-colour-coated-roofing-sheet.jpg"
      },
      {
        name: "JSW PLUS SHEETS",
        desc: "JSW Colouron Plus — premium Galvalume-based roofing sheets.",
        img: "https://5.imimg.com/data5/SELLER/Default/2022/7/WG/DY/CX/115482752/jsw-colour-coated-roofing-sheet.jpg"
      }
    ]
  },
  {
    id: "ms-pipes",
    name: "MS Pipes",
    shortDesc: "Genuine TATA mild steel pipes in all sizes for construction, plumbing, and industrial systems.",
    image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=700&q=80",
    detailDesc: "As an authorized TATA Pipes dealer, we supply genuine mild steel (MS) pipes in a wide range of sizes and wall thicknesses. Used by construction contractors, plumbers, and industrial engineers, TATA MS pipes are the benchmark for quality and reliability in India. Every pipe is backed by the TATA brand assurance.",
    specs: [
      "Authorized TATA Pipes — 100% genuine",
      "Available in all standard NB sizes",
      "Light, medium, and heavy-duty wall thicknesses",
      "ERW (Electric Resistance Welded) construction",
      "Suitable for water, gas, and structural applications"
    ],
    usecases: [
      "Construction piping, scaffolding, and formwork",
      "Water supply and drainage pipeline systems",
      "Industrial fluid and gas transport",
      "Structural columns and support frames",
      "Fire-fighting and sprinkler pipeline systems"
    ],
    brands: [
      {
        name: "TATA STRUCTURA",
        desc: "Square, rectangular & circular hollow sections. IS 4923 certified.",
        img: "https://5.imimg.com/data5/SELLER/Default/2021/10/PO/WX/LJ/138096066/tata-structura-ms-square-pipes.jpg"
      },
      {
        name: "APL APOLLO",
        desc: "ERW steel tubes in all profiles. Trusted across India.",
        img: "https://5.imimg.com/data5/SELLER/Default/2022/5/OC/XT/VW/11430271/apl-apollo-ms-pipe.jpg"
      },
      {
        name: "MPL PIPES",
        desc: "Premium quality MS pipes for plumbing & structural use.",
        img: "https://5.imimg.com/data5/SELLER/Default/2021/7/AZ/MZ/UA/32580673/mpl-ms-pipe.jpg"
      },
      {
        name: "MS VAYU",
        desc: "Hot rolled MS pipes for water supply & industrial piping.",
        img: "https://5.imimg.com/data5/SELLER/Default/2023/1/YT/SL/HX/174804690/ms-vayu-pipe.jpg"
      }
    ]
  },
  {
    id: "welding-materials",
    name: "Welding Materials",
    shortDesc: "Complete range of electrodes, MIG wire, flux, and safety equipment for every welding application.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=700&q=80",
    detailDesc: "We stock a full range of welding consumables including electrodes, MIG wire, flux, and safety equipment. Compatible with all major welding processes — SMAW, MIG, and TIG — our products are trusted by fabrication workshops, construction contractors, and industrial operators across the region.",
    specs: [
      "Wide range of welding electrodes (rods)",
      "MIG wire and TIG rods in multiple grades",
      "Welding flux for submerged arc welding",
      "Welding safety equipment and accessories",
      "Compatible with all major welding processes"
    ],
    usecases: [
      "Steel structure fabrication — beams, columns, trusses",
      "Pipe welding in construction and industrial projects",
      "Automotive, vehicle, and machinery repair",
      "Heavy machinery fabrication and on-site erection",
      "Gate, grill, and steel furniture manufacturing"
    ]
  }
];