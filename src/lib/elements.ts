export type Category =
  | "alkali-metal"
  | "alkaline-earth"
  | "transition"
  | "post-transition"
  | "metalloid"
  | "nonmetal"
  | "halogen"
  | "noble-gas"
  | "lanthanide"
  | "actinide";

export type Block = "s" | "p" | "d" | "f";
export type Phase = "solid" | "liquid" | "gas" | "unknown";

export type ChemElement = {
  z: number;
  symbol: string;
  name: string;
  mass: number;
  category: Category;
  block: Block;
  period: number;
  group: number | null;
  col: number;
  row: number;
  electronConfig: string;
  electronegativity: number | null;
  melting: number | null;
  boiling: number | null;
  density: number | null;
  ionization: number | null;
  discovered: number | null;
  discoverer: string;
  phase: Phase;
  shells: number[];
  oxidation: string;
  summary: string;
};

export const CATEGORY_LABEL: Record<Category, string> = {
  "alkali-metal": "Alkali metal",
  "alkaline-earth": "Alkaline earth",
  transition: "Transition metal",
  "post-transition": "Post-transition",
  metalloid: "Metalloid",
  nonmetal: "Nonmetal",
  halogen: "Halogen",
  "noble-gas": "Noble gas",
  lanthanide: "Lanthanide",
  actinide: "Actinide",
};

export const CATEGORY_ORDER: Category[] = [
  "alkali-metal",
  "alkaline-earth",
  "transition",
  "lanthanide",
  "actinide",
  "post-transition",
  "metalloid",
  "nonmetal",
  "halogen",
  "noble-gas",
];

type Row = [
  z: number,
  symbol: string,
  name: string,
  mass: number,
  category: Category,
  block: Block,
  config: string,
  en: number | null,
  melt: number | null,
  boil: number | null,
  density: number | null,
  ionization: number | null,
  year: number | null,
  discoverer: string,
  phase: Phase,
  shells: number[],
  oxidation: string,
  summary: string,
];

const RAW: Row[] = [
  [1, "H", "Hydrogen", 1.008, "nonmetal", "s", "1s¹", 2.2, 13.99, 20.27, 0.0000899, 1312, 1766, "Cavendish", "gas", [1], "−1, +1", "Lightest element and the fuel of stars — three quarters of all baryonic mass."],
  [2, "He", "Helium", 4.0026, "noble-gas", "s", "1s²", null, 0.95, 4.22, 0.0001785, 2372, 1868, "Janssen", "gas", [2], "0", "Named for the Sun, where it was first seen as a yellow spectral line."],
  [3, "Li", "Lithium", 6.94, "alkali-metal", "s", "[He] 2s¹", 0.98, 453.65, 1603, 0.534, 520, 1817, "Arfvedson", "solid", [2, 1], "+1", "The lightest metal; it floats on oil and powers almost every modern battery."],
  [4, "Be", "Beryllium", 9.0122, "alkaline-earth", "s", "[He] 2s²", 1.57, 1560, 2742, 1.85, 899, 1798, "Vauquelin", "solid", [2, 2], "+2", "Stiff, light, and toxic — the backbone of X-ray windows and missile skins."],
  [5, "B", "Boron", 10.81, "metalloid", "p", "[He] 2s² 2p¹", 2.04, 2349, 4200, 2.34, 801, 1808, "Gay-Lussac", "solid", [2, 3], "+3", "A hard black metalloid that turns silica into heat-proof borosilicate glass."],
  [6, "C", "Carbon", 12.011, "nonmetal", "p", "[He] 2s² 2p²", 2.55, 3823, 4098, 2.267, 1087, null, "Ancient", "solid", [2, 4], "−4, +2, +4", "The scaffolding of life, from graphite pencil lead to diamond and graphene."],
  [7, "N", "Nitrogen", 14.007, "nonmetal", "p", "[He] 2s² 2p³", 3.04, 63.15, 77.36, 0.001251, 1402, 1772, "Rutherford", "gas", [2, 5], "−3, +3, +5", "Four fifths of the air you breathe; the triple bond is notoriously stubborn."],
  [8, "O", "Oxygen", 15.999, "nonmetal", "p", "[He] 2s² 2p⁴", 3.44, 54.36, 90.2, 0.001429, 1314, 1774, "Priestley", "gas", [2, 6], "−2", "The reason fire burns and blood is red — Earth's most abundant crustal element."],
  [9, "F", "Fluorine", 18.998, "halogen", "p", "[He] 2s² 2p⁵", 3.98, 53.53, 85.03, 0.001696, 1681, 1886, "Moissan", "gas", [2, 7], "−1", "The most electronegative element; it attacks almost everything, including glass."],
  [10, "Ne", "Neon", 20.18, "noble-gas", "p", "[He] 2s² 2p⁶", null, 24.56, 27.07, 0.0009, 2081, 1898, "Ramsay", "gas", [2, 8], "0", "Inert, rare, and crimson when excited — the original night-sign gas."],
  [11, "Na", "Sodium", 22.99, "alkali-metal", "s", "[Ne] 3s¹", 0.93, 370.87, 1156, 0.968, 496, 1807, "Davy", "solid", [2, 8, 1], "+1", "Soft enough to cut with a knife; its yellow street-lamp glow is unmistakable."],
  [12, "Mg", "Magnesium", 24.305, "alkaline-earth", "s", "[Ne] 3s²", 1.31, 923, 1363, 1.738, 738, 1755, "Black", "solid", [2, 8, 2], "+2", "Burns with a blinding white flame; a third of chlorophyll's heart is magnesium."],
  [13, "Al", "Aluminium", 26.982, "post-transition", "p", "[Ne] 3s² 3p¹", 1.61, 933.47, 2792, 2.7, 578, 1825, "Ørsted", "solid", [2, 8, 3], "+3", "Once more precious than gold, now the skin of aircraft and soda cans."],
  [14, "Si", "Silicon", 28.085, "metalloid", "p", "[Ne] 3s² 3p²", 1.9, 1687, 3538, 2.33, 787, 1824, "Berzelius", "solid", [2, 8, 4], "−4, +4", "The element of sand, glass, and every chip that runs this page."],
  [15, "P", "Phosphorus", 30.974, "nonmetal", "p", "[Ne] 3s² 3p³", 2.19, 317.3, 553.7, 1.82, 1012, 1669, "Brand", "solid", [2, 8, 5], "−3, +3, +5", "Discovered in urine by an alchemist; white phosphorus glows in the dark."],
  [16, "S", "Sulfur", 32.06, "nonmetal", "p", "[Ne] 3s² 3p⁴", 2.58, 388.36, 717.8, 2.07, 1000, null, "Ancient", "solid", [2, 8, 6], "−2, +4, +6", "Brimstone of antiquity — yellow crystals, volcanic breath, gunpowder, and proteins."],
  [17, "Cl", "Chlorine", 35.45, "halogen", "p", "[Ne] 3s² 3p⁵", 3.16, 171.6, 239.11, 0.003214, 1251, 1774, "Scheele", "gas", [2, 8, 7], "−1, +1, +5, +7", "A green choking gas that also keeps swimming pools and drinking water safe."],
  [18, "Ar", "Argon", 39.948, "noble-gas", "p", "[Ne] 3s² 3p⁶", null, 83.81, 87.3, 0.001784, 1521, 1894, "Rayleigh", "gas", [2, 8, 8], "0", "Nearly 1% of air, yet almost chemically silent — the welder's shielding gas."],
  [19, "K", "Potassium", 39.098, "alkali-metal", "s", "[Ar] 4s¹", 0.82, 336.53, 1032, 0.856, 419, 1807, "Davy", "solid", [2, 8, 8, 1], "+1", "Cuts like cheese, ignites on water, and keeps every nerve impulse firing."],
  [20, "Ca", "Calcium", 40.078, "alkaline-earth", "s", "[Ar] 4s²", 1.0, 1115, 1757, 1.55, 590, 1808, "Davy", "solid", [2, 8, 8, 2], "+2", "Bones, limestone, and the mortar of civilization — fifth in Earth's crust."],
  [21, "Sc", "Scandium", 44.956, "transition", "d", "[Ar] 3d¹ 4s²", 1.36, 1814, 3109, 2.985, 633, 1879, "Nilson", "solid", [2, 8, 9, 2], "+3", "A rare light metal that hardens aluminium for fighter jets and bike frames."],
  [22, "Ti", "Titanium", 47.867, "transition", "d", "[Ar] 3d² 4s²", 1.54, 1941, 3560, 4.507, 659, 1791, "Gregor", "solid", [2, 8, 10, 2], "+3, +4", "As strong as steel, half the weight, and immune to seawater — the aerospace metal."],
  [23, "V", "Vanadium", 50.942, "transition", "d", "[Ar] 3d³ 4s²", 1.63, 2183, 3680, 6.11, 651, 1801, "del Río", "solid", [2, 8, 11, 2], "+2, +3, +4, +5", "A pinch in steel makes tools springy; its salts cycle through a rainbow of colors."],
  [24, "Cr", "Chromium", 51.996, "transition", "d", "[Ar] 3d⁵ 4s¹", 1.66, 2180, 2944, 7.15, 653, 1797, "Vauquelin", "solid", [2, 8, 13, 1], "+3, +6", "The shine on a bumper and the green in emeralds — named for its many colors."],
  [25, "Mn", "Manganese", 54.938, "transition", "d", "[Ar] 3d⁵ 4s²", 1.55, 1519, 2334, 7.21, 717, 1774, "Gahn", "solid", [2, 8, 13, 2], "+2, +4, +7", "Steel's workhorse and the reason leaves hold water; purple permanganate is its calling card."],
  [26, "Fe", "Iron", 55.845, "transition", "d", "[Ar] 3d⁶ 4s²", 1.83, 1811, 3134, 7.874, 763, null, "Ancient", "solid", [2, 8, 14, 2], "+2, +3", "Earth's core, blood's cargo, and the metal that built the industrial age."],
  [27, "Co", "Cobalt", 58.933, "transition", "d", "[Ar] 3d⁷ 4s²", 1.88, 1768, 3200, 8.86, 760, 1735, "Brandt", "solid", [2, 8, 15, 2], "+2, +3", "The deep blue of glass and the magnet in every EV motor."],
  [28, "Ni", "Nickel", 58.693, "transition", "d", "[Ar] 3d⁸ 4s²", 1.91, 1728, 3186, 8.912, 737, 1751, "Cronstedt", "solid", [2, 8, 16, 2], "+2", "A silvery coin metal that resists rust and hides in Earth's metallic core."],
  [29, "Cu", "Copper", 63.546, "transition", "d", "[Ar] 3d¹⁰ 4s¹", 1.9, 1357.77, 2835, 8.96, 746, null, "Ancient", "solid", [2, 8, 18, 1], "+1, +2", "The first metal humans smelted — still the veins of every electrical grid."],
  [30, "Zn", "Zinc", 65.38, "transition", "d", "[Ar] 3d¹⁰ 4s²", 1.65, 692.68, 1180, 7.134, 906, 1746, "Marggraf", "solid", [2, 8, 18, 2], "+2", "Sacrificial rust armor for steel, and the spark in every alkaline battery."],
  [31, "Ga", "Gallium", 69.723, "post-transition", "p", "[Ar] 3d¹⁰ 4s² 4p¹", 1.81, 302.91, 2673, 5.907, 579, 1875, "Lecoq de Boisbaudran", "solid", [2, 8, 18, 3], "+3", "Melts in a warm palm; the hidden metal in every blue LED and solar cell."],
  [32, "Ge", "Germanium", 72.63, "metalloid", "p", "[Ar] 3d¹⁰ 4s² 4p²", 2.01, 1211.4, 3106, 5.323, 762, 1886, "Winkler", "solid", [2, 8, 18, 4], "+2, +4", "Predicted by Mendeleev as eka-silicon; the first transistor material."],
  [33, "As", "Arsenic", 74.922, "metalloid", "p", "[Ar] 3d¹⁰ 4s² 4p³", 2.18, 1090, 887, 5.727, 947, 1250, "Albertus Magnus", "solid", [2, 8, 18, 5], "−3, +3, +5", "The poison of kings and the dopant that makes silicon chips p-type."],
  [34, "Se", "Selenium", 78.971, "nonmetal", "p", "[Ar] 3d¹⁰ 4s² 4p⁴", 2.55, 494, 958, 4.81, 941, 1817, "Berzelius", "solid", [2, 8, 18, 6], "−2, +4, +6", "Photovoltaic and photoconductive — the element that taught glass to see light."],
  [35, "Br", "Bromine", 79.904, "halogen", "p", "[Ar] 3d¹⁰ 4s² 4p⁵", 2.96, 265.8, 332, 3.122, 1140, 1826, "Balard", "liquid", [2, 8, 18, 7], "−1, +1, +5", "One of two elements liquid at room temperature; a deep red, stinging vapor."],
  [36, "Kr", "Krypton", 83.798, "noble-gas", "p", "[Ar] 3d¹⁰ 4s² 4p⁶", 3.0, 115.78, 119.93, 0.003733, 1351, 1898, "Ramsay", "gas", [2, 8, 18, 8], "0, +2", "Not Superman's undoing — a rare gas that defined the old meter with its spectral line."],
  [37, "Rb", "Rubidium", 85.468, "alkali-metal", "s", "[Kr] 5s¹", 0.82, 312.46, 961, 1.532, 403, 1861, "Bunsen", "solid", [2, 8, 18, 8, 1], "+1", "So reactive it ignites in air; used in atomic clocks of extraordinary precision."],
  [38, "Sr", "Strontium", 87.62, "alkaline-earth", "s", "[Kr] 5s²", 0.95, 1050, 1655, 2.64, 550, 1790, "Crawford", "solid", [2, 8, 18, 8, 2], "+2", "The crimson in fireworks, and the metal whose fallout marked the atomic age."],
  [39, "Y", "Yttrium", 88.906, "transition", "d", "[Kr] 4d¹ 5s²", 1.22, 1799, 3609, 4.472, 600, 1794, "Gadolin", "solid", [2, 8, 18, 9, 2], "+3", "Named for a Swedish quarry; the red phosphor in old CRT televisions."],
  [40, "Zr", "Zirconium", 91.224, "transition", "d", "[Kr] 4d² 5s²", 1.33, 2128, 4682, 6.52, 640, 1789, "Klaproth", "solid", [2, 8, 18, 10, 2], "+4", "Transparent as jewelry (cubic zirconia) and clad on nuclear fuel rods."],
  [41, "Nb", "Niobium", 92.906, "transition", "d", "[Kr] 4d⁴ 5s¹", 1.6, 2750, 5017, 8.57, 652, 1801, "Hatchett", "solid", [2, 8, 18, 12, 1], "+5", "Superconducts at modest cold; the quiet metal inside MRI magnets."],
  [42, "Mo", "Molybdenum", 95.95, "transition", "d", "[Kr] 4d⁵ 5s¹", 2.16, 2896, 4912, 10.28, 684, 1778, "Scheele", "solid", [2, 8, 18, 13, 1], "+4, +6", "Hardens steel for armor and enzymes that fix nitrogen in plants."],
  [43, "Tc", "Technetium", 98, "transition", "d", "[Kr] 4d⁵ 5s²", 1.9, 2430, 4538, 11.5, 702, 1937, "Perrier", "solid", [2, 8, 18, 13, 2], "+4, +7", "The first element discovered by synthesis — every atom on Earth is radioactive."],
  [44, "Ru", "Ruthenium", 101.07, "transition", "d", "[Kr] 4d⁷ 5s¹", 2.2, 2607, 4423, 12.37, 710, 1844, "Claus", "solid", [2, 8, 18, 15, 1], "+3, +4", "A hard platinum-group metal that toughens electrical contacts and fountain-pen nibs."],
  [45, "Rh", "Rhodium", 102.91, "transition", "d", "[Kr] 4d⁸ 5s¹", 2.28, 2237, 3968, 12.45, 720, 1803, "Wollaston", "solid", [2, 8, 18, 16, 1], "+3", "Rarer than gold, brighter than silver — the catalytic converter's secret."],
  [46, "Pd", "Palladium", 106.42, "transition", "d", "[Kr] 4d¹⁰", 2.2, 1828.05, 3236, 12.023, 804, 1803, "Wollaston", "solid", [2, 8, 18, 18], "+2, +4", "Drinks hydrogen like a sponge and catalyzes countless fine-chemical reactions."],
  [47, "Ag", "Silver", 107.87, "transition", "d", "[Kr] 4d¹⁰ 5s¹", 1.93, 1234.93, 2435, 10.49, 731, null, "Ancient", "solid", [2, 8, 18, 18, 1], "+1", "The best electrical and thermal conductor among the elements."],
  [48, "Cd", "Cadmium", 112.41, "transition", "d", "[Kr] 4d¹⁰ 5s²", 1.69, 594.22, 1040, 8.65, 868, 1817, "Stromeyer", "solid", [2, 8, 18, 18, 2], "+2", "A soft, toxic cousin of zinc, once the yellow of painters and NiCd batteries."],
  [49, "In", "Indium", 114.82, "post-transition", "p", "[Kr] 4d¹⁰ 5s² 5p¹", 1.78, 429.75, 2345, 7.31, 558, 1863, "Reich", "solid", [2, 8, 18, 18, 3], "+3", "Soft enough to squeal when bent; the transparent electrode in every touchscreen."],
  [50, "Sn", "Tin", 118.71, "post-transition", "p", "[Kr] 4d¹⁰ 5s² 5p²", 1.96, 505.08, 2875, 7.31, 709, null, "Ancient", "solid", [2, 8, 18, 18, 4], "+2, +4", "Bronze's other half, and the thin coat that keeps steel cans from rusting."],
  [51, "Sb", "Antimony", 121.76, "metalloid", "p", "[Kr] 4d¹⁰ 5s² 5p³", 2.05, 903.78, 1860, 6.697, 834, null, "Ancient", "solid", [2, 8, 18, 18, 5], "−3, +3, +5", "A brittle silver metalloid used to harden lead type and quiet the mind in old medicine."],
  [52, "Te", "Tellurium", 127.6, "metalloid", "p", "[Kr] 4d¹⁰ 5s² 5p⁴", 2.1, 722.66, 1261, 6.24, 869, 1782, "Müller", "solid", [2, 8, 18, 18, 6], "−2, +4, +6", "Rarer than gold in the crust; gives a garlic breath to anyone who works it."],
  [53, "I", "Iodine", 126.9, "halogen", "p", "[Kr] 4d¹⁰ 5s² 5p⁵", 2.66, 386.85, 457.4, 4.933, 1008, 1811, "Courtois", "solid", [2, 8, 18, 18, 7], "−1, +5, +7", "Violet vapor, thyroid hormone, and the stain of the field surgeon."],
  [54, "Xe", "Xenon", 131.29, "noble-gas", "p", "[Kr] 4d¹⁰ 5s² 5p⁶", 2.6, 161.4, 165.03, 0.005887, 1170, 1898, "Ramsay", "gas", [2, 8, 18, 18, 8], "0, +2, +4, +6", "The noble gas that broke the rule — it forms real compounds, and strobes camera flashes."],
  [55, "Cs", "Caesium", 132.91, "alkali-metal", "s", "[Xe] 6s¹", 0.79, 301.59, 944, 1.93, 376, 1860, "Bunsen", "solid", [2, 8, 18, 18, 8, 1], "+1", "The softest, most electropositive metal; its clock defines the second itself."],
  [56, "Ba", "Barium", 137.33, "alkaline-earth", "s", "[Xe] 6s²", 0.89, 1000, 2170, 3.51, 503, 1808, "Davy", "solid", [2, 8, 18, 18, 8, 2], "+2", "Green fireworks and the chalky swallow that lights up an X-ray of the gut."],
  [57, "La", "Lanthanum", 138.91, "lanthanide", "f", "[Xe] 5d¹ 6s²", 1.1, 1193, 3737, 6.162, 538, 1839, "Mosander", "solid", [2, 8, 18, 18, 9, 2], "+3", "The first rare earth — a soft gray metal that seeds camera lenses and hybrid batteries."],
  [58, "Ce", "Cerium", 140.12, "lanthanide", "f", "[Xe] 4f¹ 5d¹ 6s²", 1.12, 1068, 3716, 6.77, 534, 1803, "Berzelius", "solid", [2, 8, 18, 19, 9, 2], "+3, +4", "The most abundant rare earth; its oxide is the spark in a lighter flint."],
  [59, "Pr", "Praseodymium", 140.91, "lanthanide", "f", "[Xe] 4f³ 6s²", 1.13, 1208, 3793, 6.77, 527, 1885, "von Welsbach", "solid", [2, 8, 18, 21, 8, 2], "+3", "Named 'green twin'; tints glass yellow-green and magnets for aircraft."],
  [60, "Nd", "Neodymium", 144.24, "lanthanide", "f", "[Xe] 4f⁴ 6s²", 1.14, 1297, 3347, 7.01, 533, 1885, "von Welsbach", "solid", [2, 8, 18, 22, 8, 2], "+3", "The strongest permanent magnets on Earth — in earbuds, wind turbines, and EVs."],
  [61, "Pm", "Promethium", 145, "lanthanide", "f", "[Xe] 4f⁵ 6s²", 1.13, 1315, 3273, 7.26, 540, 1945, "Marinsky", "solid", [2, 8, 18, 23, 8, 2], "+3", "No stable isotopes; a faint radioactive glow once powered pacemaker batteries."],
  [62, "Sm", "Samarium", 150.36, "lanthanide", "f", "[Xe] 4f⁶ 6s²", 1.17, 1345, 2067, 7.52, 545, 1879, "Lecoq de Boisbaudran", "solid", [2, 8, 18, 24, 8, 2], "+2, +3", "Cobalt-samarium magnets that hold their field even at red heat."],
  [63, "Eu", "Europium", 151.96, "lanthanide", "f", "[Xe] 4f⁷ 6s²", 1.2, 1099, 1802, 5.24, 547, 1901, "Demarçay", "solid", [2, 8, 18, 25, 8, 2], "+2, +3", "The red phosphor of Euro banknotes — it fluoresces under UV as an anti-counterfeit tell."],
  [64, "Gd", "Gadolinium", 157.25, "lanthanide", "f", "[Xe] 4f⁷ 5d¹ 6s²", 1.2, 1585, 3546, 7.9, 593, 1880, "de Marignac", "solid", [2, 8, 18, 25, 9, 2], "+3", "The MRI contrast agent, and a metal that heats up when a magnet is pulled away."],
  [65, "Tb", "Terbium", 158.93, "lanthanide", "f", "[Xe] 4f⁹ 6s²", 1.1, 1629, 3503, 8.23, 566, 1843, "Mosander", "solid", [2, 8, 18, 27, 8, 2], "+3", "The green phosphor in fluorescent lamps, named for the same Ytterby mine."],
  [66, "Dy", "Dysprosium", 162.5, "lanthanide", "f", "[Xe] 4f¹⁰ 6s²", 1.22, 1680, 2840, 8.55, 573, 1886, "Lecoq de Boisbaudran", "solid", [2, 8, 18, 28, 8, 2], "+3", "Named 'hard to get'; a few percent makes neodymium magnets survive high heat."],
  [67, "Ho", "Holmium", 164.93, "lanthanide", "f", "[Xe] 4f¹¹ 6s²", 1.23, 1734, 2993, 8.8, 581, 1878, "Cleve", "solid", [2, 8, 18, 29, 8, 2], "+3", "The strongest known magnetic moment of any element — a lab curiosity with laser uses."],
  [68, "Er", "Erbium", 167.26, "lanthanide", "f", "[Xe] 4f¹² 6s²", 1.24, 1802, 3141, 9.07, 589, 1843, "Mosander", "solid", [2, 8, 18, 30, 8, 2], "+3", "The pink of art glass, and the optical amplifier that carries the internet on fiber."],
  [69, "Tm", "Thulium", 168.93, "lanthanide", "f", "[Xe] 4f¹³ 6s²", 1.25, 1818, 2223, 9.32, 597, 1879, "Cleve", "solid", [2, 8, 18, 31, 8, 2], "+3", "The rarest stable rare earth; portable X-ray sources use its radioactive isotope."],
  [70, "Yb", "Ytterbium", 173.05, "lanthanide", "f", "[Xe] 4f¹⁴ 6s²", 1.1, 1097, 1469, 6.9, 603, 1878, "de Marignac", "solid", [2, 8, 18, 32, 8, 2], "+2, +3", "Fourth element named for Ytterby; its clocks rival caesium for precision."],
  [71, "Lu", "Lutetium", 174.97, "lanthanide", "f", "[Xe] 4f¹⁴ 5d¹ 6s²", 1.27, 1925, 3675, 9.84, 524, 1907, "Urbain", "solid", [2, 8, 18, 32, 9, 2], "+3", "The last of the lanthanides, and the hardest — a catalyst in oil refining."],
  [72, "Hf", "Hafnium", 178.49, "transition", "d", "[Xe] 4f¹⁴ 5d² 6s²", 1.3, 2506, 4876, 13.31, 659, 1923, "Coster", "solid", [2, 8, 18, 32, 10, 2], "+4", "Chemically almost zirconium's twin; control rods in nuclear reactors soak up neutrons."],
  [73, "Ta", "Tantalum", 180.95, "transition", "d", "[Xe] 4f¹⁴ 5d³ 6s²", 1.5, 3290, 5731, 16.65, 761, 1802, "Ekeberg", "solid", [2, 8, 18, 32, 11, 2], "+5", "Named for Tantalus; inert enough for surgical implants and phone capacitors."],
  [74, "W", "Tungsten", 183.84, "transition", "d", "[Xe] 4f¹⁴ 5d⁴ 6s²", 2.36, 3695, 6203, 19.25, 770, 1783, "Elhuyar", "solid", [2, 8, 18, 32, 12, 2], "+6", "The highest melting point of any metal — the filament that lit the 20th century."],
  [75, "Re", "Rhenium", 186.21, "transition", "d", "[Xe] 4f¹⁴ 5d⁵ 6s²", 1.9, 3459, 5869, 21.02, 760, 1925, "Noddack", "solid", [2, 8, 18, 32, 13, 2], "+4, +7", "Last stable element found; jet-engine turbines and high-octane reforming catalysts."],
  [76, "Os", "Osmium", 190.23, "transition", "d", "[Xe] 4f¹⁴ 5d⁶ 6s²", 2.2, 3306, 5285, 22.59, 840, 1803, "Tennant", "solid", [2, 8, 18, 32, 14, 2], "+4, +8", "The densest stable element; its oxide is famously poisonous and stains fingerprints."],
  [77, "Ir", "Iridium", 192.22, "transition", "d", "[Xe] 4f¹⁴ 5d⁷ 6s²", 2.2, 2719, 4701, 22.56, 880, 1803, "Tennant", "solid", [2, 8, 18, 32, 15, 2], "+3, +4", "The cosmic fingerprint of the asteroid that ended the dinosaurs."],
  [78, "Pt", "Platinum", 195.08, "transition", "d", "[Xe] 4f¹⁴ 5d⁹ 6s¹", 2.28, 2041.4, 4098, 21.45, 870, 1735, "Ulloa", "solid", [2, 8, 18, 32, 17, 1], "+2, +4", "The inert noble metal of crucibles, catalytic converters, and wedding bands."],
  [79, "Au", "Gold", 196.97, "transition", "d", "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", 2.54, 1337.33, 3129, 19.32, 890, null, "Ancient", "solid", [2, 8, 18, 32, 18, 1], "+1, +3", "Unreactive, ductile, and the color of kings — one ounce can be beaten to 30 m²."],
  [80, "Hg", "Mercury", 200.59, "transition", "d", "[Xe] 4f¹⁴ 5d¹⁰ 6s²", 2.0, 234.32, 629.88, 13.534, 1007, null, "Ancient", "liquid", [2, 8, 18, 32, 18, 2], "+1, +2", "The only metal liquid in a cool room — thermometers, amalgams, and slow poison."],
  [81, "Tl", "Thallium", 204.38, "post-transition", "p", "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", 1.62, 577, 1746, 11.85, 589, 1861, "Crookes", "solid", [2, 8, 18, 32, 18, 3], "+1, +3", "Named for a green spectral line; a notorious poison that mimics potassium."],
  [82, "Pb", "Lead", 207.2, "post-transition", "p", "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", 2.33, 600.61, 2022, 11.34, 716, null, "Ancient", "solid", [2, 8, 18, 32, 18, 4], "+2, +4", "Soft, dense, and historically everywhere — pipes, paint, type, and the word plumbing."],
  [83, "Bi", "Bismuth", 208.98, "post-transition", "p", "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", 2.02, 544.7, 1837, 9.78, 703, 1753, "Geoffroy", "solid", [2, 8, 18, 32, 18, 5], "+3, +5", "The heaviest stable element, iridescent when oxidized, and oddly diamagnetic."],
  [84, "Po", "Polonium", 209, "post-transition", "p", "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", 2.0, 527, 1235, 9.32, 812, 1898, "M. Curie", "solid", [2, 8, 18, 32, 18, 6], "+2, +4", "Discovered by Marie Curie and named for Poland; lethally radioactive in micrograms."],
  [85, "At", "Astatine", 210, "halogen", "p", "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", 2.2, 575, 610, 7, 920, 1940, "Corson", "solid", [2, 8, 18, 32, 18, 7], "−1, +1, +5", "The rarest naturally occurring element — the entire crust holds less than a gram."],
  [86, "Rn", "Radon", 222, "noble-gas", "p", "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", 2.2, 202, 211.5, 0.00973, 1037, 1900, "Dorn", "gas", [2, 8, 18, 32, 18, 8], "0", "A dense radioactive noble gas that seeps from granite into basements."],
  [87, "Fr", "Francium", 223, "alkali-metal", "s", "[Rn] 7s¹", 0.7, 300, 950, 1.87, 380, 1939, "Perey", "solid", [2, 8, 18, 32, 18, 8, 1], "+1", "The most unstable alkali metal; at any moment the planet holds only a few grams."],
  [88, "Ra", "Radium", 226, "alkaline-earth", "s", "[Rn] 7s²", 0.9, 973, 2010, 5.5, 509, 1898, "Curies", "solid", [2, 8, 18, 32, 18, 8, 2], "+2", "It glows with its own light — the tragic pigment of the Radium Girls."],
  [89, "Ac", "Actinium", 227, "actinide", "f", "[Rn] 6d¹ 7s²", 1.1, 1323, 3471, 10.07, 499, 1899, "Debierne", "solid", [2, 8, 18, 32, 18, 9, 2], "+3", "Glows blue in the dark from the air it ionizes; names the actinide series."],
  [90, "Th", "Thorium", 232.04, "actinide", "f", "[Rn] 6d² 7s²", 1.3, 2115, 5061, 11.72, 587, 1829, "Berzelius", "solid", [2, 8, 18, 32, 18, 10, 2], "+4", "More abundant than tin, weakly radioactive, and a candidate fuel for future reactors."],
  [91, "Pa", "Protactinium", 231.04, "actinide", "f", "[Rn] 5f² 6d¹ 7s²", 1.5, 1841, 4300, 15.37, 568, 1913, "Fajans", "solid", [2, 8, 18, 32, 20, 9, 2], "+5", "A scarce, toxic bridge between thorium and uranium — hard to isolate, harder to love."],
  [92, "U", "Uranium", 238.03, "actinide", "f", "[Rn] 5f³ 6d¹ 7s²", 1.38, 1405.3, 4404, 19.1, 598, 1789, "Klaproth", "solid", [2, 8, 18, 32, 21, 9, 2], "+3, +4, +6", "The last primordial element in quantity — yellow cake, chain reactions, and deep time."],
  [93, "Np", "Neptunium", 237, "actinide", "f", "[Rn] 5f⁴ 6d¹ 7s²", 1.36, 917, 4273, 20.45, 605, 1940, "McMillan", "solid", [2, 8, 18, 32, 22, 9, 2], "+3, +4, +5", "First transuranic, found in a cyclotron a year after Neptune's neighbor was named."],
  [94, "Pu", "Plutonium", 244, "actinide", "f", "[Rn] 5f⁶ 7s²", 1.28, 912.5, 3501, 19.82, 585, 1940, "Seaborg", "solid", [2, 8, 18, 32, 24, 8, 2], "+3, +4, +6", "Warm to the touch from its own decay; the compact heart of nuclear weapons and some reactors."],
  [95, "Am", "Americium", 243, "actinide", "f", "[Rn] 5f⁷ 7s²", 1.13, 1449, 2880, 12, 578, 1944, "Seaborg", "solid", [2, 8, 18, 32, 25, 8, 2], "+3", "A household radioisotope — the click in most smoke detectors is americium-241."],
  [96, "Cm", "Curium", 247, "actinide", "f", "[Rn] 5f⁷ 6d¹ 7s²", 1.28, 1613, 3383, 13.51, 581, 1944, "Seaborg", "solid", [2, 8, 18, 32, 25, 9, 2], "+3", "Named for the Curies; its glow has powered spacecraft heading past the Sun."],
  [97, "Bk", "Berkelium", 247, "actinide", "f", "[Rn] 5f⁹ 7s²", 1.3, 1259, 2900, 14.78, 601, 1949, "Seaborg", "solid", [2, 8, 18, 32, 27, 8, 2], "+3", "Synthesized in Berkeley a milligram at a time — a stepping stone to heavier atoms."],
  [98, "Cf", "Californium", 251, "actinide", "f", "[Rn] 5f¹⁰ 7s²", 1.3, 1173, 1743, 15.1, 608, 1950, "Seaborg", "solid", [2, 8, 18, 32, 28, 8, 2], "+3", "A portable neutron source used to start reactors and hunt gold in boreholes."],
  [99, "Es", "Einsteinium", 252, "actinide", "f", "[Rn] 5f¹¹ 7s²", 1.3, 1133, 1269, 8.84, 619, 1952, "Ghiorso", "solid", [2, 8, 18, 32, 29, 8, 2], "+3", "Scooped from the debris of the first hydrogen bomb and named for Einstein."],
  [100, "Fm", "Fermium", 257, "actinide", "f", "[Rn] 5f¹² 7s²", 1.3, 1800, null, null, 627, 1952, "Ghiorso", "solid", [2, 8, 18, 32, 30, 8, 2], "+3", "Also born in that bomb test; too scarce and short-lived for any practical use."],
  [101, "Md", "Mendelevium", 258, "actinide", "f", "[Rn] 5f¹³ 7s²", 1.3, 1100, null, null, 635, 1955, "Ghiorso", "solid", [2, 8, 18, 32, 31, 8, 2], "+2, +3", "Named for the table's architect; first identified one atom at a time."],
  [102, "No", "Nobelium", 259, "actinide", "f", "[Rn] 5f¹⁴ 7s²", 1.3, 1100, null, null, 642, 1966, "Flerov / Ghiorso", "solid", [2, 8, 18, 32, 32, 8, 2], "+2, +3", "A disputed discovery between Dubna and Berkeley, settled in favor of the name Nobel."],
  [103, "Lr", "Lawrencium", 266, "actinide", "f", "[Rn] 5f¹⁴ 7s² 7p¹", 1.3, 1900, null, null, 470, 1965, "Ghiorso", "solid", [2, 8, 18, 32, 32, 8, 3], "+3", "The last actinide, named for the cyclotron's inventor, with a debated electron config."],
  [104, "Rf", "Rutherfordium", 267, "transition", "d", "[Rn] 5f¹⁴ 6d² 7s²", null, 2400, 5800, 23.2, 580, 1969, "Berkeley / Dubna", "unknown", [2, 8, 18, 32, 32, 10, 2], "+4", "Eka-hafnium, synthesized a few atoms at a time, named for the nucleus's cartographer."],
  [105, "Db", "Dubnium", 268, "transition", "d", "[Rn] 5f¹⁴ 6d³ 7s²", null, null, null, 29.3, null, 1970, "Dubna / Berkeley", "unknown", [2, 8, 18, 32, 32, 11, 2], "+5", "A cold-war naming fight ended with Dubna on the map of the table."],
  [106, "Sg", "Seaborgium", 269, "transition", "d", "[Rn] 5f¹⁴ 6d⁴ 7s²", null, null, null, 35, null, 1974, "Berkeley", "unknown", [2, 8, 18, 32, 32, 12, 2], "+6", "The first element named for a living person — Glenn T. Seaborg, who found plutonium."],
  [107, "Bh", "Bohrium", 270, "transition", "d", "[Rn] 5f¹⁴ 6d⁵ 7s²", null, null, null, 37.1, null, 1981, "Armbruster", "unknown", [2, 8, 18, 32, 32, 13, 2], "+7", "Named for Niels Bohr; produced in ones and twos, gone in milliseconds."],
  [108, "Hs", "Hassium", 277, "transition", "d", "[Rn] 5f¹⁴ 6d⁶ 7s²", null, null, null, 41, null, 1984, "Armbruster", "unknown", [2, 8, 18, 32, 32, 14, 2], "+8", "Named for the German state of Hesse; chemically a heavier sibling of osmium."],
  [109, "Mt", "Meitnerium", 278, "transition", "d", "[Rn] 5f¹⁴ 6d⁷ 7s²", null, null, null, 37.4, null, 1982, "Armbruster", "unknown", [2, 8, 18, 32, 32, 15, 2], "—", "Named for Lise Meitner, who explained fission and was denied the Nobel."],
  [110, "Ds", "Darmstadtium", 281, "transition", "d", "[Rn] 5f¹⁴ 6d⁸ 7s²", null, null, null, 34.8, null, 1994, "Hofmann", "unknown", [2, 8, 18, 32, 32, 16, 2], "—", "Born in Darmstadt, where the GSI heavy-ion accelerator minted new nuclei."],
  [111, "Rg", "Roentgenium", 282, "transition", "d", "[Rn] 5f¹⁴ 6d⁹ 7s²", null, null, null, 28.7, null, 1994, "Hofmann", "unknown", [2, 8, 18, 32, 32, 17, 2], "—", "Named for Röntgen, who made bones visible; this coinage metal exists for milliseconds."],
  [112, "Cn", "Copernicium", 285, "transition", "d", "[Rn] 5f¹⁴ 6d¹⁰ 7s²", null, null, 357, 14, null, 1996, "Hofmann", "unknown", [2, 8, 18, 32, 32, 18, 2], "+2", "A possible gas at room temperature — mercury's superheavy cousin, named for Copernicus."],
  [113, "Nh", "Nihonium", 286, "post-transition", "p", "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", null, 700, 1430, 16, null, 2004, "Riken", "unknown", [2, 8, 18, 32, 32, 18, 3], "+1, +3", "The first element discovered in Asia, named Nihon — Japan."],
  [114, "Fl", "Flerovium", 289, "post-transition", "p", "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", null, 340, 420, 9.9, null, 1998, "Dubna", "unknown", [2, 8, 18, 32, 32, 18, 4], "+2", "A superheavy that may behave more like a noble gas than like lead."],
  [115, "Mc", "Moscovium", 290, "post-transition", "p", "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", null, 670, 1400, 13.5, null, 2003, "Dubna", "unknown", [2, 8, 18, 32, 32, 18, 5], "+1, +3", "Named for the Moscow oblast, home of the Flerov laboratory that made it."],
  [116, "Lv", "Livermorium", 293, "post-transition", "p", "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", null, 709, 1085, 12.9, null, 2000, "Dubna / Livermore", "unknown", [2, 8, 18, 32, 32, 18, 6], "+2", "A joint prize of Dubna and Lawrence Livermore, gone in a fraction of a second."],
  [117, "Ts", "Tennessine", 294, "halogen", "p", "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", null, 723, 883, 7.2, null, 2010, "Dubna / ORNL", "unknown", [2, 8, 18, 32, 32, 18, 7], "−1, +1, +3, +5", "The second-heaviest halogen, named for Tennessee's Oak Ridge, Vanderbilt, and UT."],
  [118, "Og", "Oganesson", 294, "noble-gas", "p", "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", null, 325, 450, 7, null, 2006, "Dubna", "unknown", [2, 8, 18, 32, 32, 18, 8], "0, +2, +4", "The heaviest known element, named for Yuri Oganessian — and likely a solid, not a gas."],
];

function periodOf(z: number): number {
  if (z <= 2) return 1;
  if (z <= 10) return 2;
  if (z <= 18) return 3;
  if (z <= 36) return 4;
  if (z <= 54) return 5;
  if (z <= 86) return 6;
  return 7;
}

function groupOf(z: number): number | null {
  if (z >= 57 && z <= 71) return null;
  if (z >= 89 && z <= 103) return null;
  if (z === 1) return 1;
  if (z === 2) return 18;
  if (z >= 3 && z <= 4) return z - 2;
  if (z >= 5 && z <= 10) return z + 8;
  if (z >= 11 && z <= 12) return z - 10;
  if (z >= 13 && z <= 18) return z;
  if (z >= 19 && z <= 36) return z - 18;
  if (z >= 37 && z <= 54) return z - 36;
  if (z === 55) return 1;
  if (z === 56) return 2;
  if (z >= 72 && z <= 86) return z - 68;
  if (z === 87) return 1;
  if (z === 88) return 2;
  if (z >= 104 && z <= 118) return z - 100;
  return null;
}

function gridPos(z: number): { col: number; row: number } {
  if (z >= 57 && z <= 71) return { col: z - 54, row: 9 };
  if (z >= 89 && z <= 103) return { col: z - 86, row: 10 };
  const group = groupOf(z);
  const period = periodOf(z);
  return { col: group ?? 3, row: period };
}

function hydrate(row: Row): ChemElement {
  const [
    z, symbol, name, mass, category, block, electronConfig, electronegativity,
    melting, boiling, density, ionization, discovered, discoverer, phase, shells,
    oxidation, summary,
  ] = row;
  const { col, row: gridRow } = gridPos(z);
  return {
    z, symbol, name, mass, category, block, period: periodOf(z), group: groupOf(z),
    col, row: gridRow, electronConfig, electronegativity, melting, boiling, density,
    ionization, discovered, discoverer, phase, shells, oxidation: oxidation ?? "—", summary,
  };
}

export const ELEMENTS: ChemElement[] = RAW.map(hydrate);
export const BY_Z: ChemElement[] = [];
for (const el of ELEMENTS) BY_Z[el.z] = el;

export function getElement(z: number): ChemElement | undefined {
  return BY_Z[z];
}

export function phaseAt(el: ChemElement, kelvin: number): Phase {
  if (el.melting == null && el.boiling == null) return "unknown";
  if (el.boiling != null && kelvin >= el.boiling) return "gas";
  if (el.melting != null && kelvin >= el.melting) return "liquid";
  if (el.melting != null && kelvin < el.melting) return "solid";
  if (el.boiling != null && kelvin < el.boiling) return "liquid";
  return el.phase;
}

export function formatMass(mass: number): string {
  if (Number.isInteger(mass)) return String(mass);
  const text = mass.toPrecision(6).replace(/\.?0+$/, "");
  return text;
}

export function formatTemp(k: number | null): string {
  if (k == null) return "—";
  const c = k - 273.15;
  const cLabel = Math.abs(c) < 10 ? c.toFixed(1) : String(Math.round(c));
  return `${Math.round(k)} K  ·  ${cLabel} °C`;
}

export function matchesQuery(el: ChemElement, q: string): boolean {
  if (!q) return true;
  const s = q.trim().toLowerCase();
  if (!s) return true;
  if (el.symbol.toLowerCase() === s) return true;
  if (String(el.z) === s) return true;
  if (el.name.toLowerCase().startsWith(s)) return true;
  if (el.name.toLowerCase().includes(s)) return true;
  if (el.symbol.toLowerCase().includes(s)) return true;
  if (CATEGORY_LABEL[el.category].toLowerCase().includes(s)) return true;
  return false;
}

export function elementOfTheDay(date = new Date()): ChemElement {
  const start = Date.UTC(date.getUTCFullYear(), 0, 1);
  const day = Math.floor((date.getTime() - start) / 86_400_000);
  return ELEMENTS[((day % ELEMENTS.length) + ELEMENTS.length) % ELEMENTS.length]!;
}

export function neighbors(z: number): { left?: number; right?: number; up?: number; down?: number } {
  const el = BY_Z[z];
  if (!el) return {};
  const at = (col: number, row: number) =>
    ELEMENTS.find((e) => e.col === col && e.row === row)?.z;
  return {
    left: at(el.col - 1, el.row),
    right: at(el.col + 1, el.row),
    up: at(el.col, el.row - 1) ?? (el.row === 9 ? at(el.col, 6) : undefined),
    down: at(el.col, el.row + 1) ?? (el.row === 6 ? at(el.col, 9) : el.row === 7 ? at(el.col, 10) : undefined),
  };
}

export type ColorMode = "category" | "block" | "state" | "electronegativity" | "mass" | "density" | "year";

export const COLOR_MODE_LABEL: Record<ColorMode, string> = {
  category: "Category",
  block: "Block",
  state: "Phase",
  electronegativity: "Electronegativity",
  mass: "Mass",
  density: "Density",
  year: "Discovered",
};

function rangeOf(values: Array<number | null | undefined>): { min: number; max: number } {
  let min = Infinity;
  let max = -Infinity;
  for (const v of values) {
    if (v == null || Number.isNaN(v)) continue;
    if (v < min) min = v;
    if (v > max) max = v;
  }
  if (!Number.isFinite(min) || !Number.isFinite(max) || min === max) return { min: 0, max: 1 };
  return { min, max };
}

const EN_RANGE = rangeOf(ELEMENTS.map((e) => e.electronegativity));
const MASS_RANGE = rangeOf(ELEMENTS.map((e) => e.mass));
const DENSITY_RANGE = rangeOf(ELEMENTS.map((e) => e.density));
const YEAR_RANGE = rangeOf(ELEMENTS.map((e) => e.discovered));

function norm(value: number | null, range: { min: number; max: number }): number | null {
  if (value == null) return null;
  return (value - range.min) / (range.max - range.min);
}

export function heatValue(el: ChemElement, mode: ColorMode): number | null {
  if (mode === "electronegativity") return norm(el.electronegativity, EN_RANGE);
  if (mode === "mass") return norm(el.mass, MASS_RANGE);
  if (mode === "density") return norm(el.density, DENSITY_RANGE);
  if (mode === "year") return norm(el.discovered, YEAR_RANGE);
  return null;
}

export const HEAT_RANGE: Record<"electronegativity" | "mass" | "density" | "year", { min: string; max: string }> = {
  electronegativity: { min: String(EN_RANGE.min), max: String(EN_RANGE.max) },
  mass: { min: `${Math.round(MASS_RANGE.min)} u`, max: `${Math.round(MASS_RANGE.max)} u` },
  density: { min: `${DENSITY_RANGE.min.toPrecision(2)}`, max: `${DENSITY_RANGE.max.toFixed(0)} g/cm³` },
  year: { min: String(YEAR_RANGE.min), max: String(YEAR_RANGE.max) },
};
