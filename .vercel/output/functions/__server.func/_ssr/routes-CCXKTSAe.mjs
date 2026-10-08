import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, r as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as RotateCcw, c as ArrowRight, i as Search, o as Heart, r as Shuffle, s as Dices, t as X } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { t as Provider } from "../_libs/radix-ui__react-tooltip.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CCXKTSAe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORY_LABEL = {
	"alkali-metal": "Alkali metal",
	"alkaline-earth": "Alkaline earth",
	transition: "Transition metal",
	"post-transition": "Post-transition",
	metalloid: "Metalloid",
	nonmetal: "Nonmetal",
	halogen: "Halogen",
	"noble-gas": "Noble gas",
	lanthanide: "Lanthanide",
	actinide: "Actinide"
};
var CATEGORY_ORDER = [
	"alkali-metal",
	"alkaline-earth",
	"transition",
	"lanthanide",
	"actinide",
	"post-transition",
	"metalloid",
	"nonmetal",
	"halogen",
	"noble-gas"
];
var RAW = [
	[
		1,
		"H",
		"Hydrogen",
		1.008,
		"nonmetal",
		"s",
		"1s¹",
		2.2,
		13.99,
		20.27,
		899e-7,
		1312,
		1766,
		"Cavendish",
		"gas",
		[1],
		"−1, +1",
		"Lightest element and the fuel of stars — three quarters of all baryonic mass."
	],
	[
		2,
		"He",
		"Helium",
		4.0026,
		"noble-gas",
		"s",
		"1s²",
		null,
		.95,
		4.22,
		1785e-7,
		2372,
		1868,
		"Janssen",
		"gas",
		[2],
		"0",
		"Named for the Sun, where it was first seen as a yellow spectral line."
	],
	[
		3,
		"Li",
		"Lithium",
		6.94,
		"alkali-metal",
		"s",
		"[He] 2s¹",
		.98,
		453.65,
		1603,
		.534,
		520,
		1817,
		"Arfvedson",
		"solid",
		[2, 1],
		"+1",
		"The lightest metal; it floats on oil and powers almost every modern battery."
	],
	[
		4,
		"Be",
		"Beryllium",
		9.0122,
		"alkaline-earth",
		"s",
		"[He] 2s²",
		1.57,
		1560,
		2742,
		1.85,
		899,
		1798,
		"Vauquelin",
		"solid",
		[2, 2],
		"+2",
		"Stiff, light, and toxic — the backbone of X-ray windows and missile skins."
	],
	[
		5,
		"B",
		"Boron",
		10.81,
		"metalloid",
		"p",
		"[He] 2s² 2p¹",
		2.04,
		2349,
		4200,
		2.34,
		801,
		1808,
		"Gay-Lussac",
		"solid",
		[2, 3],
		"+3",
		"A hard black metalloid that turns silica into heat-proof borosilicate glass."
	],
	[
		6,
		"C",
		"Carbon",
		12.011,
		"nonmetal",
		"p",
		"[He] 2s² 2p²",
		2.55,
		3823,
		4098,
		2.267,
		1087,
		null,
		"Ancient",
		"solid",
		[2, 4],
		"−4, +2, +4",
		"The scaffolding of life, from graphite pencil lead to diamond and graphene."
	],
	[
		7,
		"N",
		"Nitrogen",
		14.007,
		"nonmetal",
		"p",
		"[He] 2s² 2p³",
		3.04,
		63.15,
		77.36,
		.001251,
		1402,
		1772,
		"Rutherford",
		"gas",
		[2, 5],
		"−3, +3, +5",
		"Four fifths of the air you breathe; the triple bond is notoriously stubborn."
	],
	[
		8,
		"O",
		"Oxygen",
		15.999,
		"nonmetal",
		"p",
		"[He] 2s² 2p⁴",
		3.44,
		54.36,
		90.2,
		.001429,
		1314,
		1774,
		"Priestley",
		"gas",
		[2, 6],
		"−2",
		"The reason fire burns and blood is red — Earth's most abundant crustal element."
	],
	[
		9,
		"F",
		"Fluorine",
		18.998,
		"halogen",
		"p",
		"[He] 2s² 2p⁵",
		3.98,
		53.53,
		85.03,
		.001696,
		1681,
		1886,
		"Moissan",
		"gas",
		[2, 7],
		"−1",
		"The most electronegative element; it attacks almost everything, including glass."
	],
	[
		10,
		"Ne",
		"Neon",
		20.18,
		"noble-gas",
		"p",
		"[He] 2s² 2p⁶",
		null,
		24.56,
		27.07,
		9e-4,
		2081,
		1898,
		"Ramsay",
		"gas",
		[2, 8],
		"0",
		"Inert, rare, and crimson when excited — the original night-sign gas."
	],
	[
		11,
		"Na",
		"Sodium",
		22.99,
		"alkali-metal",
		"s",
		"[Ne] 3s¹",
		.93,
		370.87,
		1156,
		.968,
		496,
		1807,
		"Davy",
		"solid",
		[
			2,
			8,
			1
		],
		"+1",
		"Soft enough to cut with a knife; its yellow street-lamp glow is unmistakable."
	],
	[
		12,
		"Mg",
		"Magnesium",
		24.305,
		"alkaline-earth",
		"s",
		"[Ne] 3s²",
		1.31,
		923,
		1363,
		1.738,
		738,
		1755,
		"Black",
		"solid",
		[
			2,
			8,
			2
		],
		"+2",
		"Burns with a blinding white flame; a third of chlorophyll's heart is magnesium."
	],
	[
		13,
		"Al",
		"Aluminium",
		26.982,
		"post-transition",
		"p",
		"[Ne] 3s² 3p¹",
		1.61,
		933.47,
		2792,
		2.7,
		578,
		1825,
		"Ørsted",
		"solid",
		[
			2,
			8,
			3
		],
		"+3",
		"Once more precious than gold, now the skin of aircraft and soda cans."
	],
	[
		14,
		"Si",
		"Silicon",
		28.085,
		"metalloid",
		"p",
		"[Ne] 3s² 3p²",
		1.9,
		1687,
		3538,
		2.33,
		787,
		1824,
		"Berzelius",
		"solid",
		[
			2,
			8,
			4
		],
		"−4, +4",
		"The element of sand, glass, and every chip that runs this page."
	],
	[
		15,
		"P",
		"Phosphorus",
		30.974,
		"nonmetal",
		"p",
		"[Ne] 3s² 3p³",
		2.19,
		317.3,
		553.7,
		1.82,
		1012,
		1669,
		"Brand",
		"solid",
		[
			2,
			8,
			5
		],
		"−3, +3, +5",
		"Discovered in urine by an alchemist; white phosphorus glows in the dark."
	],
	[
		16,
		"S",
		"Sulfur",
		32.06,
		"nonmetal",
		"p",
		"[Ne] 3s² 3p⁴",
		2.58,
		388.36,
		717.8,
		2.07,
		1e3,
		null,
		"Ancient",
		"solid",
		[
			2,
			8,
			6
		],
		"−2, +4, +6",
		"Brimstone of antiquity — yellow crystals, volcanic breath, gunpowder, and proteins."
	],
	[
		17,
		"Cl",
		"Chlorine",
		35.45,
		"halogen",
		"p",
		"[Ne] 3s² 3p⁵",
		3.16,
		171.6,
		239.11,
		.003214,
		1251,
		1774,
		"Scheele",
		"gas",
		[
			2,
			8,
			7
		],
		"−1, +1, +5, +7",
		"A green choking gas that also keeps swimming pools and drinking water safe."
	],
	[
		18,
		"Ar",
		"Argon",
		39.948,
		"noble-gas",
		"p",
		"[Ne] 3s² 3p⁶",
		null,
		83.81,
		87.3,
		.001784,
		1521,
		1894,
		"Rayleigh",
		"gas",
		[
			2,
			8,
			8
		],
		"0",
		"Nearly 1% of air, yet almost chemically silent — the welder's shielding gas."
	],
	[
		19,
		"K",
		"Potassium",
		39.098,
		"alkali-metal",
		"s",
		"[Ar] 4s¹",
		.82,
		336.53,
		1032,
		.856,
		419,
		1807,
		"Davy",
		"solid",
		[
			2,
			8,
			8,
			1
		],
		"+1",
		"Cuts like cheese, ignites on water, and keeps every nerve impulse firing."
	],
	[
		20,
		"Ca",
		"Calcium",
		40.078,
		"alkaline-earth",
		"s",
		"[Ar] 4s²",
		1,
		1115,
		1757,
		1.55,
		590,
		1808,
		"Davy",
		"solid",
		[
			2,
			8,
			8,
			2
		],
		"+2",
		"Bones, limestone, and the mortar of civilization — fifth in Earth's crust."
	],
	[
		21,
		"Sc",
		"Scandium",
		44.956,
		"transition",
		"d",
		"[Ar] 3d¹ 4s²",
		1.36,
		1814,
		3109,
		2.985,
		633,
		1879,
		"Nilson",
		"solid",
		[
			2,
			8,
			9,
			2
		],
		"+3",
		"A rare light metal that hardens aluminium for fighter jets and bike frames."
	],
	[
		22,
		"Ti",
		"Titanium",
		47.867,
		"transition",
		"d",
		"[Ar] 3d² 4s²",
		1.54,
		1941,
		3560,
		4.507,
		659,
		1791,
		"Gregor",
		"solid",
		[
			2,
			8,
			10,
			2
		],
		"+3, +4",
		"As strong as steel, half the weight, and immune to seawater — the aerospace metal."
	],
	[
		23,
		"V",
		"Vanadium",
		50.942,
		"transition",
		"d",
		"[Ar] 3d³ 4s²",
		1.63,
		2183,
		3680,
		6.11,
		651,
		1801,
		"del Río",
		"solid",
		[
			2,
			8,
			11,
			2
		],
		"+2, +3, +4, +5",
		"A pinch in steel makes tools springy; its salts cycle through a rainbow of colors."
	],
	[
		24,
		"Cr",
		"Chromium",
		51.996,
		"transition",
		"d",
		"[Ar] 3d⁵ 4s¹",
		1.66,
		2180,
		2944,
		7.15,
		653,
		1797,
		"Vauquelin",
		"solid",
		[
			2,
			8,
			13,
			1
		],
		"+3, +6",
		"The shine on a bumper and the green in emeralds — named for its many colors."
	],
	[
		25,
		"Mn",
		"Manganese",
		54.938,
		"transition",
		"d",
		"[Ar] 3d⁵ 4s²",
		1.55,
		1519,
		2334,
		7.21,
		717,
		1774,
		"Gahn",
		"solid",
		[
			2,
			8,
			13,
			2
		],
		"+2, +4, +7",
		"Steel's workhorse and the reason leaves hold water; purple permanganate is its calling card."
	],
	[
		26,
		"Fe",
		"Iron",
		55.845,
		"transition",
		"d",
		"[Ar] 3d⁶ 4s²",
		1.83,
		1811,
		3134,
		7.874,
		763,
		null,
		"Ancient",
		"solid",
		[
			2,
			8,
			14,
			2
		],
		"+2, +3",
		"Earth's core, blood's cargo, and the metal that built the industrial age."
	],
	[
		27,
		"Co",
		"Cobalt",
		58.933,
		"transition",
		"d",
		"[Ar] 3d⁷ 4s²",
		1.88,
		1768,
		3200,
		8.86,
		760,
		1735,
		"Brandt",
		"solid",
		[
			2,
			8,
			15,
			2
		],
		"+2, +3",
		"The deep blue of glass and the magnet in every EV motor."
	],
	[
		28,
		"Ni",
		"Nickel",
		58.693,
		"transition",
		"d",
		"[Ar] 3d⁸ 4s²",
		1.91,
		1728,
		3186,
		8.912,
		737,
		1751,
		"Cronstedt",
		"solid",
		[
			2,
			8,
			16,
			2
		],
		"+2",
		"A silvery coin metal that resists rust and hides in Earth's metallic core."
	],
	[
		29,
		"Cu",
		"Copper",
		63.546,
		"transition",
		"d",
		"[Ar] 3d¹⁰ 4s¹",
		1.9,
		1357.77,
		2835,
		8.96,
		746,
		null,
		"Ancient",
		"solid",
		[
			2,
			8,
			18,
			1
		],
		"+1, +2",
		"The first metal humans smelted — still the veins of every electrical grid."
	],
	[
		30,
		"Zn",
		"Zinc",
		65.38,
		"transition",
		"d",
		"[Ar] 3d¹⁰ 4s²",
		1.65,
		692.68,
		1180,
		7.134,
		906,
		1746,
		"Marggraf",
		"solid",
		[
			2,
			8,
			18,
			2
		],
		"+2",
		"Sacrificial rust armor for steel, and the spark in every alkaline battery."
	],
	[
		31,
		"Ga",
		"Gallium",
		69.723,
		"post-transition",
		"p",
		"[Ar] 3d¹⁰ 4s² 4p¹",
		1.81,
		302.91,
		2673,
		5.907,
		579,
		1875,
		"Lecoq de Boisbaudran",
		"solid",
		[
			2,
			8,
			18,
			3
		],
		"+3",
		"Melts in a warm palm; the hidden metal in every blue LED and solar cell."
	],
	[
		32,
		"Ge",
		"Germanium",
		72.63,
		"metalloid",
		"p",
		"[Ar] 3d¹⁰ 4s² 4p²",
		2.01,
		1211.4,
		3106,
		5.323,
		762,
		1886,
		"Winkler",
		"solid",
		[
			2,
			8,
			18,
			4
		],
		"+2, +4",
		"Predicted by Mendeleev as eka-silicon; the first transistor material."
	],
	[
		33,
		"As",
		"Arsenic",
		74.922,
		"metalloid",
		"p",
		"[Ar] 3d¹⁰ 4s² 4p³",
		2.18,
		1090,
		887,
		5.727,
		947,
		1250,
		"Albertus Magnus",
		"solid",
		[
			2,
			8,
			18,
			5
		],
		"−3, +3, +5",
		"The poison of kings and the dopant that makes silicon chips p-type."
	],
	[
		34,
		"Se",
		"Selenium",
		78.971,
		"nonmetal",
		"p",
		"[Ar] 3d¹⁰ 4s² 4p⁴",
		2.55,
		494,
		958,
		4.81,
		941,
		1817,
		"Berzelius",
		"solid",
		[
			2,
			8,
			18,
			6
		],
		"−2, +4, +6",
		"Photovoltaic and photoconductive — the element that taught glass to see light."
	],
	[
		35,
		"Br",
		"Bromine",
		79.904,
		"halogen",
		"p",
		"[Ar] 3d¹⁰ 4s² 4p⁵",
		2.96,
		265.8,
		332,
		3.122,
		1140,
		1826,
		"Balard",
		"liquid",
		[
			2,
			8,
			18,
			7
		],
		"−1, +1, +5",
		"One of two elements liquid at room temperature; a deep red, stinging vapor."
	],
	[
		36,
		"Kr",
		"Krypton",
		83.798,
		"noble-gas",
		"p",
		"[Ar] 3d¹⁰ 4s² 4p⁶",
		3,
		115.78,
		119.93,
		.003733,
		1351,
		1898,
		"Ramsay",
		"gas",
		[
			2,
			8,
			18,
			8
		],
		"0, +2",
		"Not Superman's undoing — a rare gas that defined the old meter with its spectral line."
	],
	[
		37,
		"Rb",
		"Rubidium",
		85.468,
		"alkali-metal",
		"s",
		"[Kr] 5s¹",
		.82,
		312.46,
		961,
		1.532,
		403,
		1861,
		"Bunsen",
		"solid",
		[
			2,
			8,
			18,
			8,
			1
		],
		"+1",
		"So reactive it ignites in air; used in atomic clocks of extraordinary precision."
	],
	[
		38,
		"Sr",
		"Strontium",
		87.62,
		"alkaline-earth",
		"s",
		"[Kr] 5s²",
		.95,
		1050,
		1655,
		2.64,
		550,
		1790,
		"Crawford",
		"solid",
		[
			2,
			8,
			18,
			8,
			2
		],
		"+2",
		"The crimson in fireworks, and the metal whose fallout marked the atomic age."
	],
	[
		39,
		"Y",
		"Yttrium",
		88.906,
		"transition",
		"d",
		"[Kr] 4d¹ 5s²",
		1.22,
		1799,
		3609,
		4.472,
		600,
		1794,
		"Gadolin",
		"solid",
		[
			2,
			8,
			18,
			9,
			2
		],
		"+3",
		"Named for a Swedish quarry; the red phosphor in old CRT televisions."
	],
	[
		40,
		"Zr",
		"Zirconium",
		91.224,
		"transition",
		"d",
		"[Kr] 4d² 5s²",
		1.33,
		2128,
		4682,
		6.52,
		640,
		1789,
		"Klaproth",
		"solid",
		[
			2,
			8,
			18,
			10,
			2
		],
		"+4",
		"Transparent as jewelry (cubic zirconia) and clad on nuclear fuel rods."
	],
	[
		41,
		"Nb",
		"Niobium",
		92.906,
		"transition",
		"d",
		"[Kr] 4d⁴ 5s¹",
		1.6,
		2750,
		5017,
		8.57,
		652,
		1801,
		"Hatchett",
		"solid",
		[
			2,
			8,
			18,
			12,
			1
		],
		"+5",
		"Superconducts at modest cold; the quiet metal inside MRI magnets."
	],
	[
		42,
		"Mo",
		"Molybdenum",
		95.95,
		"transition",
		"d",
		"[Kr] 4d⁵ 5s¹",
		2.16,
		2896,
		4912,
		10.28,
		684,
		1778,
		"Scheele",
		"solid",
		[
			2,
			8,
			18,
			13,
			1
		],
		"+4, +6",
		"Hardens steel for armor and enzymes that fix nitrogen in plants."
	],
	[
		43,
		"Tc",
		"Technetium",
		98,
		"transition",
		"d",
		"[Kr] 4d⁵ 5s²",
		1.9,
		2430,
		4538,
		11.5,
		702,
		1937,
		"Perrier",
		"solid",
		[
			2,
			8,
			18,
			13,
			2
		],
		"+4, +7",
		"The first element discovered by synthesis — every atom on Earth is radioactive."
	],
	[
		44,
		"Ru",
		"Ruthenium",
		101.07,
		"transition",
		"d",
		"[Kr] 4d⁷ 5s¹",
		2.2,
		2607,
		4423,
		12.37,
		710,
		1844,
		"Claus",
		"solid",
		[
			2,
			8,
			18,
			15,
			1
		],
		"+3, +4",
		"A hard platinum-group metal that toughens electrical contacts and fountain-pen nibs."
	],
	[
		45,
		"Rh",
		"Rhodium",
		102.91,
		"transition",
		"d",
		"[Kr] 4d⁸ 5s¹",
		2.28,
		2237,
		3968,
		12.45,
		720,
		1803,
		"Wollaston",
		"solid",
		[
			2,
			8,
			18,
			16,
			1
		],
		"+3",
		"Rarer than gold, brighter than silver — the catalytic converter's secret."
	],
	[
		46,
		"Pd",
		"Palladium",
		106.42,
		"transition",
		"d",
		"[Kr] 4d¹⁰",
		2.2,
		1828.05,
		3236,
		12.023,
		804,
		1803,
		"Wollaston",
		"solid",
		[
			2,
			8,
			18,
			18
		],
		"+2, +4",
		"Drinks hydrogen like a sponge and catalyzes countless fine-chemical reactions."
	],
	[
		47,
		"Ag",
		"Silver",
		107.87,
		"transition",
		"d",
		"[Kr] 4d¹⁰ 5s¹",
		1.93,
		1234.93,
		2435,
		10.49,
		731,
		null,
		"Ancient",
		"solid",
		[
			2,
			8,
			18,
			18,
			1
		],
		"+1",
		"The best electrical and thermal conductor among the elements."
	],
	[
		48,
		"Cd",
		"Cadmium",
		112.41,
		"transition",
		"d",
		"[Kr] 4d¹⁰ 5s²",
		1.69,
		594.22,
		1040,
		8.65,
		868,
		1817,
		"Stromeyer",
		"solid",
		[
			2,
			8,
			18,
			18,
			2
		],
		"+2",
		"A soft, toxic cousin of zinc, once the yellow of painters and NiCd batteries."
	],
	[
		49,
		"In",
		"Indium",
		114.82,
		"post-transition",
		"p",
		"[Kr] 4d¹⁰ 5s² 5p¹",
		1.78,
		429.75,
		2345,
		7.31,
		558,
		1863,
		"Reich",
		"solid",
		[
			2,
			8,
			18,
			18,
			3
		],
		"+3",
		"Soft enough to squeal when bent; the transparent electrode in every touchscreen."
	],
	[
		50,
		"Sn",
		"Tin",
		118.71,
		"post-transition",
		"p",
		"[Kr] 4d¹⁰ 5s² 5p²",
		1.96,
		505.08,
		2875,
		7.31,
		709,
		null,
		"Ancient",
		"solid",
		[
			2,
			8,
			18,
			18,
			4
		],
		"+2, +4",
		"Bronze's other half, and the thin coat that keeps steel cans from rusting."
	],
	[
		51,
		"Sb",
		"Antimony",
		121.76,
		"metalloid",
		"p",
		"[Kr] 4d¹⁰ 5s² 5p³",
		2.05,
		903.78,
		1860,
		6.697,
		834,
		null,
		"Ancient",
		"solid",
		[
			2,
			8,
			18,
			18,
			5
		],
		"−3, +3, +5",
		"A brittle silver metalloid used to harden lead type and quiet the mind in old medicine."
	],
	[
		52,
		"Te",
		"Tellurium",
		127.6,
		"metalloid",
		"p",
		"[Kr] 4d¹⁰ 5s² 5p⁴",
		2.1,
		722.66,
		1261,
		6.24,
		869,
		1782,
		"Müller",
		"solid",
		[
			2,
			8,
			18,
			18,
			6
		],
		"−2, +4, +6",
		"Rarer than gold in the crust; gives a garlic breath to anyone who works it."
	],
	[
		53,
		"I",
		"Iodine",
		126.9,
		"halogen",
		"p",
		"[Kr] 4d¹⁰ 5s² 5p⁵",
		2.66,
		386.85,
		457.4,
		4.933,
		1008,
		1811,
		"Courtois",
		"solid",
		[
			2,
			8,
			18,
			18,
			7
		],
		"−1, +5, +7",
		"Violet vapor, thyroid hormone, and the stain of the field surgeon."
	],
	[
		54,
		"Xe",
		"Xenon",
		131.29,
		"noble-gas",
		"p",
		"[Kr] 4d¹⁰ 5s² 5p⁶",
		2.6,
		161.4,
		165.03,
		.005887,
		1170,
		1898,
		"Ramsay",
		"gas",
		[
			2,
			8,
			18,
			18,
			8
		],
		"0, +2, +4, +6",
		"The noble gas that broke the rule — it forms real compounds, and strobes camera flashes."
	],
	[
		55,
		"Cs",
		"Caesium",
		132.91,
		"alkali-metal",
		"s",
		"[Xe] 6s¹",
		.79,
		301.59,
		944,
		1.93,
		376,
		1860,
		"Bunsen",
		"solid",
		[
			2,
			8,
			18,
			18,
			8,
			1
		],
		"+1",
		"The softest, most electropositive metal; its clock defines the second itself."
	],
	[
		56,
		"Ba",
		"Barium",
		137.33,
		"alkaline-earth",
		"s",
		"[Xe] 6s²",
		.89,
		1e3,
		2170,
		3.51,
		503,
		1808,
		"Davy",
		"solid",
		[
			2,
			8,
			18,
			18,
			8,
			2
		],
		"+2",
		"Green fireworks and the chalky swallow that lights up an X-ray of the gut."
	],
	[
		57,
		"La",
		"Lanthanum",
		138.91,
		"lanthanide",
		"f",
		"[Xe] 5d¹ 6s²",
		1.1,
		1193,
		3737,
		6.162,
		538,
		1839,
		"Mosander",
		"solid",
		[
			2,
			8,
			18,
			18,
			9,
			2
		],
		"+3",
		"The first rare earth — a soft gray metal that seeds camera lenses and hybrid batteries."
	],
	[
		58,
		"Ce",
		"Cerium",
		140.12,
		"lanthanide",
		"f",
		"[Xe] 4f¹ 5d¹ 6s²",
		1.12,
		1068,
		3716,
		6.77,
		534,
		1803,
		"Berzelius",
		"solid",
		[
			2,
			8,
			18,
			19,
			9,
			2
		],
		"+3, +4",
		"The most abundant rare earth; its oxide is the spark in a lighter flint."
	],
	[
		59,
		"Pr",
		"Praseodymium",
		140.91,
		"lanthanide",
		"f",
		"[Xe] 4f³ 6s²",
		1.13,
		1208,
		3793,
		6.77,
		527,
		1885,
		"von Welsbach",
		"solid",
		[
			2,
			8,
			18,
			21,
			8,
			2
		],
		"+3",
		"Named 'green twin'; tints glass yellow-green and magnets for aircraft."
	],
	[
		60,
		"Nd",
		"Neodymium",
		144.24,
		"lanthanide",
		"f",
		"[Xe] 4f⁴ 6s²",
		1.14,
		1297,
		3347,
		7.01,
		533,
		1885,
		"von Welsbach",
		"solid",
		[
			2,
			8,
			18,
			22,
			8,
			2
		],
		"+3",
		"The strongest permanent magnets on Earth — in earbuds, wind turbines, and EVs."
	],
	[
		61,
		"Pm",
		"Promethium",
		145,
		"lanthanide",
		"f",
		"[Xe] 4f⁵ 6s²",
		1.13,
		1315,
		3273,
		7.26,
		540,
		1945,
		"Marinsky",
		"solid",
		[
			2,
			8,
			18,
			23,
			8,
			2
		],
		"+3",
		"No stable isotopes; a faint radioactive glow once powered pacemaker batteries."
	],
	[
		62,
		"Sm",
		"Samarium",
		150.36,
		"lanthanide",
		"f",
		"[Xe] 4f⁶ 6s²",
		1.17,
		1345,
		2067,
		7.52,
		545,
		1879,
		"Lecoq de Boisbaudran",
		"solid",
		[
			2,
			8,
			18,
			24,
			8,
			2
		],
		"+2, +3",
		"Cobalt-samarium magnets that hold their field even at red heat."
	],
	[
		63,
		"Eu",
		"Europium",
		151.96,
		"lanthanide",
		"f",
		"[Xe] 4f⁷ 6s²",
		1.2,
		1099,
		1802,
		5.24,
		547,
		1901,
		"Demarçay",
		"solid",
		[
			2,
			8,
			18,
			25,
			8,
			2
		],
		"+2, +3",
		"The red phosphor of Euro banknotes — it fluoresces under UV as an anti-counterfeit tell."
	],
	[
		64,
		"Gd",
		"Gadolinium",
		157.25,
		"lanthanide",
		"f",
		"[Xe] 4f⁷ 5d¹ 6s²",
		1.2,
		1585,
		3546,
		7.9,
		593,
		1880,
		"de Marignac",
		"solid",
		[
			2,
			8,
			18,
			25,
			9,
			2
		],
		"+3",
		"The MRI contrast agent, and a metal that heats up when a magnet is pulled away."
	],
	[
		65,
		"Tb",
		"Terbium",
		158.93,
		"lanthanide",
		"f",
		"[Xe] 4f⁹ 6s²",
		1.1,
		1629,
		3503,
		8.23,
		566,
		1843,
		"Mosander",
		"solid",
		[
			2,
			8,
			18,
			27,
			8,
			2
		],
		"+3",
		"The green phosphor in fluorescent lamps, named for the same Ytterby mine."
	],
	[
		66,
		"Dy",
		"Dysprosium",
		162.5,
		"lanthanide",
		"f",
		"[Xe] 4f¹⁰ 6s²",
		1.22,
		1680,
		2840,
		8.55,
		573,
		1886,
		"Lecoq de Boisbaudran",
		"solid",
		[
			2,
			8,
			18,
			28,
			8,
			2
		],
		"+3",
		"Named 'hard to get'; a few percent makes neodymium magnets survive high heat."
	],
	[
		67,
		"Ho",
		"Holmium",
		164.93,
		"lanthanide",
		"f",
		"[Xe] 4f¹¹ 6s²",
		1.23,
		1734,
		2993,
		8.8,
		581,
		1878,
		"Cleve",
		"solid",
		[
			2,
			8,
			18,
			29,
			8,
			2
		],
		"+3",
		"The strongest known magnetic moment of any element — a lab curiosity with laser uses."
	],
	[
		68,
		"Er",
		"Erbium",
		167.26,
		"lanthanide",
		"f",
		"[Xe] 4f¹² 6s²",
		1.24,
		1802,
		3141,
		9.07,
		589,
		1843,
		"Mosander",
		"solid",
		[
			2,
			8,
			18,
			30,
			8,
			2
		],
		"+3",
		"The pink of art glass, and the optical amplifier that carries the internet on fiber."
	],
	[
		69,
		"Tm",
		"Thulium",
		168.93,
		"lanthanide",
		"f",
		"[Xe] 4f¹³ 6s²",
		1.25,
		1818,
		2223,
		9.32,
		597,
		1879,
		"Cleve",
		"solid",
		[
			2,
			8,
			18,
			31,
			8,
			2
		],
		"+3",
		"The rarest stable rare earth; portable X-ray sources use its radioactive isotope."
	],
	[
		70,
		"Yb",
		"Ytterbium",
		173.05,
		"lanthanide",
		"f",
		"[Xe] 4f¹⁴ 6s²",
		1.1,
		1097,
		1469,
		6.9,
		603,
		1878,
		"de Marignac",
		"solid",
		[
			2,
			8,
			18,
			32,
			8,
			2
		],
		"+2, +3",
		"Fourth element named for Ytterby; its clocks rival caesium for precision."
	],
	[
		71,
		"Lu",
		"Lutetium",
		174.97,
		"lanthanide",
		"f",
		"[Xe] 4f¹⁴ 5d¹ 6s²",
		1.27,
		1925,
		3675,
		9.84,
		524,
		1907,
		"Urbain",
		"solid",
		[
			2,
			8,
			18,
			32,
			9,
			2
		],
		"+3",
		"The last of the lanthanides, and the hardest — a catalyst in oil refining."
	],
	[
		72,
		"Hf",
		"Hafnium",
		178.49,
		"transition",
		"d",
		"[Xe] 4f¹⁴ 5d² 6s²",
		1.3,
		2506,
		4876,
		13.31,
		659,
		1923,
		"Coster",
		"solid",
		[
			2,
			8,
			18,
			32,
			10,
			2
		],
		"+4",
		"Chemically almost zirconium's twin; control rods in nuclear reactors soak up neutrons."
	],
	[
		73,
		"Ta",
		"Tantalum",
		180.95,
		"transition",
		"d",
		"[Xe] 4f¹⁴ 5d³ 6s²",
		1.5,
		3290,
		5731,
		16.65,
		761,
		1802,
		"Ekeberg",
		"solid",
		[
			2,
			8,
			18,
			32,
			11,
			2
		],
		"+5",
		"Named for Tantalus; inert enough for surgical implants and phone capacitors."
	],
	[
		74,
		"W",
		"Tungsten",
		183.84,
		"transition",
		"d",
		"[Xe] 4f¹⁴ 5d⁴ 6s²",
		2.36,
		3695,
		6203,
		19.25,
		770,
		1783,
		"Elhuyar",
		"solid",
		[
			2,
			8,
			18,
			32,
			12,
			2
		],
		"+6",
		"The highest melting point of any metal — the filament that lit the 20th century."
	],
	[
		75,
		"Re",
		"Rhenium",
		186.21,
		"transition",
		"d",
		"[Xe] 4f¹⁴ 5d⁵ 6s²",
		1.9,
		3459,
		5869,
		21.02,
		760,
		1925,
		"Noddack",
		"solid",
		[
			2,
			8,
			18,
			32,
			13,
			2
		],
		"+4, +7",
		"Last stable element found; jet-engine turbines and high-octane reforming catalysts."
	],
	[
		76,
		"Os",
		"Osmium",
		190.23,
		"transition",
		"d",
		"[Xe] 4f¹⁴ 5d⁶ 6s²",
		2.2,
		3306,
		5285,
		22.59,
		840,
		1803,
		"Tennant",
		"solid",
		[
			2,
			8,
			18,
			32,
			14,
			2
		],
		"+4, +8",
		"The densest stable element; its oxide is famously poisonous and stains fingerprints."
	],
	[
		77,
		"Ir",
		"Iridium",
		192.22,
		"transition",
		"d",
		"[Xe] 4f¹⁴ 5d⁷ 6s²",
		2.2,
		2719,
		4701,
		22.56,
		880,
		1803,
		"Tennant",
		"solid",
		[
			2,
			8,
			18,
			32,
			15,
			2
		],
		"+3, +4",
		"The cosmic fingerprint of the asteroid that ended the dinosaurs."
	],
	[
		78,
		"Pt",
		"Platinum",
		195.08,
		"transition",
		"d",
		"[Xe] 4f¹⁴ 5d⁹ 6s¹",
		2.28,
		2041.4,
		4098,
		21.45,
		870,
		1735,
		"Ulloa",
		"solid",
		[
			2,
			8,
			18,
			32,
			17,
			1
		],
		"+2, +4",
		"The inert noble metal of crucibles, catalytic converters, and wedding bands."
	],
	[
		79,
		"Au",
		"Gold",
		196.97,
		"transition",
		"d",
		"[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
		2.54,
		1337.33,
		3129,
		19.32,
		890,
		null,
		"Ancient",
		"solid",
		[
			2,
			8,
			18,
			32,
			18,
			1
		],
		"+1, +3",
		"Unreactive, ductile, and the color of kings — one ounce can be beaten to 30 m²."
	],
	[
		80,
		"Hg",
		"Mercury",
		200.59,
		"transition",
		"d",
		"[Xe] 4f¹⁴ 5d¹⁰ 6s²",
		2,
		234.32,
		629.88,
		13.534,
		1007,
		null,
		"Ancient",
		"liquid",
		[
			2,
			8,
			18,
			32,
			18,
			2
		],
		"+1, +2",
		"The only metal liquid in a cool room — thermometers, amalgams, and slow poison."
	],
	[
		81,
		"Tl",
		"Thallium",
		204.38,
		"post-transition",
		"p",
		"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
		1.62,
		577,
		1746,
		11.85,
		589,
		1861,
		"Crookes",
		"solid",
		[
			2,
			8,
			18,
			32,
			18,
			3
		],
		"+1, +3",
		"Named for a green spectral line; a notorious poison that mimics potassium."
	],
	[
		82,
		"Pb",
		"Lead",
		207.2,
		"post-transition",
		"p",
		"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
		2.33,
		600.61,
		2022,
		11.34,
		716,
		null,
		"Ancient",
		"solid",
		[
			2,
			8,
			18,
			32,
			18,
			4
		],
		"+2, +4",
		"Soft, dense, and historically everywhere — pipes, paint, type, and the word plumbing."
	],
	[
		83,
		"Bi",
		"Bismuth",
		208.98,
		"post-transition",
		"p",
		"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
		2.02,
		544.7,
		1837,
		9.78,
		703,
		1753,
		"Geoffroy",
		"solid",
		[
			2,
			8,
			18,
			32,
			18,
			5
		],
		"+3, +5",
		"The heaviest stable element, iridescent when oxidized, and oddly diamagnetic."
	],
	[
		84,
		"Po",
		"Polonium",
		209,
		"post-transition",
		"p",
		"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
		2,
		527,
		1235,
		9.32,
		812,
		1898,
		"M. Curie",
		"solid",
		[
			2,
			8,
			18,
			32,
			18,
			6
		],
		"+2, +4",
		"Discovered by Marie Curie and named for Poland; lethally radioactive in micrograms."
	],
	[
		85,
		"At",
		"Astatine",
		210,
		"halogen",
		"p",
		"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
		2.2,
		575,
		610,
		7,
		920,
		1940,
		"Corson",
		"solid",
		[
			2,
			8,
			18,
			32,
			18,
			7
		],
		"−1, +1, +5",
		"The rarest naturally occurring element — the entire crust holds less than a gram."
	],
	[
		86,
		"Rn",
		"Radon",
		222,
		"noble-gas",
		"p",
		"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
		2.2,
		202,
		211.5,
		.00973,
		1037,
		1900,
		"Dorn",
		"gas",
		[
			2,
			8,
			18,
			32,
			18,
			8
		],
		"0",
		"A dense radioactive noble gas that seeps from granite into basements."
	],
	[
		87,
		"Fr",
		"Francium",
		223,
		"alkali-metal",
		"s",
		"[Rn] 7s¹",
		.7,
		300,
		950,
		1.87,
		380,
		1939,
		"Perey",
		"solid",
		[
			2,
			8,
			18,
			32,
			18,
			8,
			1
		],
		"+1",
		"The most unstable alkali metal; at any moment the planet holds only a few grams."
	],
	[
		88,
		"Ra",
		"Radium",
		226,
		"alkaline-earth",
		"s",
		"[Rn] 7s²",
		.9,
		973,
		2010,
		5.5,
		509,
		1898,
		"Curies",
		"solid",
		[
			2,
			8,
			18,
			32,
			18,
			8,
			2
		],
		"+2",
		"It glows with its own light — the tragic pigment of the Radium Girls."
	],
	[
		89,
		"Ac",
		"Actinium",
		227,
		"actinide",
		"f",
		"[Rn] 6d¹ 7s²",
		1.1,
		1323,
		3471,
		10.07,
		499,
		1899,
		"Debierne",
		"solid",
		[
			2,
			8,
			18,
			32,
			18,
			9,
			2
		],
		"+3",
		"Glows blue in the dark from the air it ionizes; names the actinide series."
	],
	[
		90,
		"Th",
		"Thorium",
		232.04,
		"actinide",
		"f",
		"[Rn] 6d² 7s²",
		1.3,
		2115,
		5061,
		11.72,
		587,
		1829,
		"Berzelius",
		"solid",
		[
			2,
			8,
			18,
			32,
			18,
			10,
			2
		],
		"+4",
		"More abundant than tin, weakly radioactive, and a candidate fuel for future reactors."
	],
	[
		91,
		"Pa",
		"Protactinium",
		231.04,
		"actinide",
		"f",
		"[Rn] 5f² 6d¹ 7s²",
		1.5,
		1841,
		4300,
		15.37,
		568,
		1913,
		"Fajans",
		"solid",
		[
			2,
			8,
			18,
			32,
			20,
			9,
			2
		],
		"+5",
		"A scarce, toxic bridge between thorium and uranium — hard to isolate, harder to love."
	],
	[
		92,
		"U",
		"Uranium",
		238.03,
		"actinide",
		"f",
		"[Rn] 5f³ 6d¹ 7s²",
		1.38,
		1405.3,
		4404,
		19.1,
		598,
		1789,
		"Klaproth",
		"solid",
		[
			2,
			8,
			18,
			32,
			21,
			9,
			2
		],
		"+3, +4, +6",
		"The last primordial element in quantity — yellow cake, chain reactions, and deep time."
	],
	[
		93,
		"Np",
		"Neptunium",
		237,
		"actinide",
		"f",
		"[Rn] 5f⁴ 6d¹ 7s²",
		1.36,
		917,
		4273,
		20.45,
		605,
		1940,
		"McMillan",
		"solid",
		[
			2,
			8,
			18,
			32,
			22,
			9,
			2
		],
		"+3, +4, +5",
		"First transuranic, found in a cyclotron a year after Neptune's neighbor was named."
	],
	[
		94,
		"Pu",
		"Plutonium",
		244,
		"actinide",
		"f",
		"[Rn] 5f⁶ 7s²",
		1.28,
		912.5,
		3501,
		19.82,
		585,
		1940,
		"Seaborg",
		"solid",
		[
			2,
			8,
			18,
			32,
			24,
			8,
			2
		],
		"+3, +4, +6",
		"Warm to the touch from its own decay; the compact heart of nuclear weapons and some reactors."
	],
	[
		95,
		"Am",
		"Americium",
		243,
		"actinide",
		"f",
		"[Rn] 5f⁷ 7s²",
		1.13,
		1449,
		2880,
		12,
		578,
		1944,
		"Seaborg",
		"solid",
		[
			2,
			8,
			18,
			32,
			25,
			8,
			2
		],
		"+3",
		"A household radioisotope — the click in most smoke detectors is americium-241."
	],
	[
		96,
		"Cm",
		"Curium",
		247,
		"actinide",
		"f",
		"[Rn] 5f⁷ 6d¹ 7s²",
		1.28,
		1613,
		3383,
		13.51,
		581,
		1944,
		"Seaborg",
		"solid",
		[
			2,
			8,
			18,
			32,
			25,
			9,
			2
		],
		"+3",
		"Named for the Curies; its glow has powered spacecraft heading past the Sun."
	],
	[
		97,
		"Bk",
		"Berkelium",
		247,
		"actinide",
		"f",
		"[Rn] 5f⁹ 7s²",
		1.3,
		1259,
		2900,
		14.78,
		601,
		1949,
		"Seaborg",
		"solid",
		[
			2,
			8,
			18,
			32,
			27,
			8,
			2
		],
		"+3",
		"Synthesized in Berkeley a milligram at a time — a stepping stone to heavier atoms."
	],
	[
		98,
		"Cf",
		"Californium",
		251,
		"actinide",
		"f",
		"[Rn] 5f¹⁰ 7s²",
		1.3,
		1173,
		1743,
		15.1,
		608,
		1950,
		"Seaborg",
		"solid",
		[
			2,
			8,
			18,
			32,
			28,
			8,
			2
		],
		"+3",
		"A portable neutron source used to start reactors and hunt gold in boreholes."
	],
	[
		99,
		"Es",
		"Einsteinium",
		252,
		"actinide",
		"f",
		"[Rn] 5f¹¹ 7s²",
		1.3,
		1133,
		1269,
		8.84,
		619,
		1952,
		"Ghiorso",
		"solid",
		[
			2,
			8,
			18,
			32,
			29,
			8,
			2
		],
		"+3",
		"Scooped from the debris of the first hydrogen bomb and named for Einstein."
	],
	[
		100,
		"Fm",
		"Fermium",
		257,
		"actinide",
		"f",
		"[Rn] 5f¹² 7s²",
		1.3,
		1800,
		null,
		null,
		627,
		1952,
		"Ghiorso",
		"solid",
		[
			2,
			8,
			18,
			32,
			30,
			8,
			2
		],
		"+3",
		"Also born in that bomb test; too scarce and short-lived for any practical use."
	],
	[
		101,
		"Md",
		"Mendelevium",
		258,
		"actinide",
		"f",
		"[Rn] 5f¹³ 7s²",
		1.3,
		1100,
		null,
		null,
		635,
		1955,
		"Ghiorso",
		"solid",
		[
			2,
			8,
			18,
			32,
			31,
			8,
			2
		],
		"+2, +3",
		"Named for the table's architect; first identified one atom at a time."
	],
	[
		102,
		"No",
		"Nobelium",
		259,
		"actinide",
		"f",
		"[Rn] 5f¹⁴ 7s²",
		1.3,
		1100,
		null,
		null,
		642,
		1966,
		"Flerov / Ghiorso",
		"solid",
		[
			2,
			8,
			18,
			32,
			32,
			8,
			2
		],
		"+2, +3",
		"A disputed discovery between Dubna and Berkeley, settled in favor of the name Nobel."
	],
	[
		103,
		"Lr",
		"Lawrencium",
		266,
		"actinide",
		"f",
		"[Rn] 5f¹⁴ 7s² 7p¹",
		1.3,
		1900,
		null,
		null,
		470,
		1965,
		"Ghiorso",
		"solid",
		[
			2,
			8,
			18,
			32,
			32,
			8,
			3
		],
		"+3",
		"The last actinide, named for the cyclotron's inventor, with a debated electron config."
	],
	[
		104,
		"Rf",
		"Rutherfordium",
		267,
		"transition",
		"d",
		"[Rn] 5f¹⁴ 6d² 7s²",
		null,
		2400,
		5800,
		23.2,
		580,
		1969,
		"Berkeley / Dubna",
		"unknown",
		[
			2,
			8,
			18,
			32,
			32,
			10,
			2
		],
		"+4",
		"Eka-hafnium, synthesized a few atoms at a time, named for the nucleus's cartographer."
	],
	[
		105,
		"Db",
		"Dubnium",
		268,
		"transition",
		"d",
		"[Rn] 5f¹⁴ 6d³ 7s²",
		null,
		null,
		null,
		29.3,
		null,
		1970,
		"Dubna / Berkeley",
		"unknown",
		[
			2,
			8,
			18,
			32,
			32,
			11,
			2
		],
		"+5",
		"A cold-war naming fight ended with Dubna on the map of the table."
	],
	[
		106,
		"Sg",
		"Seaborgium",
		269,
		"transition",
		"d",
		"[Rn] 5f¹⁴ 6d⁴ 7s²",
		null,
		null,
		null,
		35,
		null,
		1974,
		"Berkeley",
		"unknown",
		[
			2,
			8,
			18,
			32,
			32,
			12,
			2
		],
		"+6",
		"The first element named for a living person — Glenn T. Seaborg, who found plutonium."
	],
	[
		107,
		"Bh",
		"Bohrium",
		270,
		"transition",
		"d",
		"[Rn] 5f¹⁴ 6d⁵ 7s²",
		null,
		null,
		null,
		37.1,
		null,
		1981,
		"Armbruster",
		"unknown",
		[
			2,
			8,
			18,
			32,
			32,
			13,
			2
		],
		"+7",
		"Named for Niels Bohr; produced in ones and twos, gone in milliseconds."
	],
	[
		108,
		"Hs",
		"Hassium",
		277,
		"transition",
		"d",
		"[Rn] 5f¹⁴ 6d⁶ 7s²",
		null,
		null,
		null,
		41,
		null,
		1984,
		"Armbruster",
		"unknown",
		[
			2,
			8,
			18,
			32,
			32,
			14,
			2
		],
		"+8",
		"Named for the German state of Hesse; chemically a heavier sibling of osmium."
	],
	[
		109,
		"Mt",
		"Meitnerium",
		278,
		"transition",
		"d",
		"[Rn] 5f¹⁴ 6d⁷ 7s²",
		null,
		null,
		null,
		37.4,
		null,
		1982,
		"Armbruster",
		"unknown",
		[
			2,
			8,
			18,
			32,
			32,
			15,
			2
		],
		"—",
		"Named for Lise Meitner, who explained fission and was denied the Nobel."
	],
	[
		110,
		"Ds",
		"Darmstadtium",
		281,
		"transition",
		"d",
		"[Rn] 5f¹⁴ 6d⁸ 7s²",
		null,
		null,
		null,
		34.8,
		null,
		1994,
		"Hofmann",
		"unknown",
		[
			2,
			8,
			18,
			32,
			32,
			16,
			2
		],
		"—",
		"Born in Darmstadt, where the GSI heavy-ion accelerator minted new nuclei."
	],
	[
		111,
		"Rg",
		"Roentgenium",
		282,
		"transition",
		"d",
		"[Rn] 5f¹⁴ 6d⁹ 7s²",
		null,
		null,
		null,
		28.7,
		null,
		1994,
		"Hofmann",
		"unknown",
		[
			2,
			8,
			18,
			32,
			32,
			17,
			2
		],
		"—",
		"Named for Röntgen, who made bones visible; this coinage metal exists for milliseconds."
	],
	[
		112,
		"Cn",
		"Copernicium",
		285,
		"transition",
		"d",
		"[Rn] 5f¹⁴ 6d¹⁰ 7s²",
		null,
		null,
		357,
		14,
		null,
		1996,
		"Hofmann",
		"unknown",
		[
			2,
			8,
			18,
			32,
			32,
			18,
			2
		],
		"+2",
		"A possible gas at room temperature — mercury's superheavy cousin, named for Copernicus."
	],
	[
		113,
		"Nh",
		"Nihonium",
		286,
		"post-transition",
		"p",
		"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
		null,
		700,
		1430,
		16,
		null,
		2004,
		"Riken",
		"unknown",
		[
			2,
			8,
			18,
			32,
			32,
			18,
			3
		],
		"+1, +3",
		"The first element discovered in Asia, named Nihon — Japan."
	],
	[
		114,
		"Fl",
		"Flerovium",
		289,
		"post-transition",
		"p",
		"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
		null,
		340,
		420,
		9.9,
		null,
		1998,
		"Dubna",
		"unknown",
		[
			2,
			8,
			18,
			32,
			32,
			18,
			4
		],
		"+2",
		"A superheavy that may behave more like a noble gas than like lead."
	],
	[
		115,
		"Mc",
		"Moscovium",
		290,
		"post-transition",
		"p",
		"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
		null,
		670,
		1400,
		13.5,
		null,
		2003,
		"Dubna",
		"unknown",
		[
			2,
			8,
			18,
			32,
			32,
			18,
			5
		],
		"+1, +3",
		"Named for the Moscow oblast, home of the Flerov laboratory that made it."
	],
	[
		116,
		"Lv",
		"Livermorium",
		293,
		"post-transition",
		"p",
		"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
		null,
		709,
		1085,
		12.9,
		null,
		2e3,
		"Dubna / Livermore",
		"unknown",
		[
			2,
			8,
			18,
			32,
			32,
			18,
			6
		],
		"+2",
		"A joint prize of Dubna and Lawrence Livermore, gone in a fraction of a second."
	],
	[
		117,
		"Ts",
		"Tennessine",
		294,
		"halogen",
		"p",
		"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
		null,
		723,
		883,
		7.2,
		null,
		2010,
		"Dubna / ORNL",
		"unknown",
		[
			2,
			8,
			18,
			32,
			32,
			18,
			7
		],
		"−1, +1, +3, +5",
		"The second-heaviest halogen, named for Tennessee's Oak Ridge, Vanderbilt, and UT."
	],
	[
		118,
		"Og",
		"Oganesson",
		294,
		"noble-gas",
		"p",
		"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
		null,
		325,
		450,
		7,
		null,
		2006,
		"Dubna",
		"unknown",
		[
			2,
			8,
			18,
			32,
			32,
			18,
			8
		],
		"0, +2, +4",
		"The heaviest known element, named for Yuri Oganessian — and likely a solid, not a gas."
	]
];
function periodOf(z) {
	if (z <= 2) return 1;
	if (z <= 10) return 2;
	if (z <= 18) return 3;
	if (z <= 36) return 4;
	if (z <= 54) return 5;
	if (z <= 86) return 6;
	return 7;
}
function groupOf(z) {
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
function gridPos(z) {
	if (z >= 57 && z <= 71) return {
		col: z - 54,
		row: 9
	};
	if (z >= 89 && z <= 103) return {
		col: z - 86,
		row: 10
	};
	const group = groupOf(z);
	const period = periodOf(z);
	return {
		col: group ?? 3,
		row: period
	};
}
function hydrate(row) {
	const [z, symbol, name, mass, category, block, electronConfig, electronegativity, melting, boiling, density, ionization, discovered, discoverer, phase, shells, oxidation, summary] = row;
	const { col, row: gridRow } = gridPos(z);
	return {
		z,
		symbol,
		name,
		mass,
		category,
		block,
		period: periodOf(z),
		group: groupOf(z),
		col,
		row: gridRow,
		electronConfig,
		electronegativity,
		melting,
		boiling,
		density,
		ionization,
		discovered,
		discoverer,
		phase,
		shells,
		oxidation: oxidation ?? "—",
		summary
	};
}
var ELEMENTS = RAW.map(hydrate);
var BY_Z = [];
for (const el of ELEMENTS) BY_Z[el.z] = el;
function getElement(z) {
	return BY_Z[z];
}
function phaseAt(el, kelvin) {
	if (el.melting == null && el.boiling == null) return "unknown";
	if (el.boiling != null && kelvin >= el.boiling) return "gas";
	if (el.melting != null && kelvin >= el.melting) return "liquid";
	if (el.melting != null && kelvin < el.melting) return "solid";
	if (el.boiling != null && kelvin < el.boiling) return "liquid";
	return el.phase;
}
function formatMass(mass) {
	if (Number.isInteger(mass)) return String(mass);
	return mass.toPrecision(6).replace(/\.?0+$/, "");
}
function formatTemp(k) {
	if (k == null) return "—";
	const c = k - 273.15;
	const cLabel = Math.abs(c) < 10 ? c.toFixed(1) : String(Math.round(c));
	return `${Math.round(k)} K  ·  ${cLabel} °C`;
}
function matchesQuery(el, q) {
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
function elementOfTheDay(date = /* @__PURE__ */ new Date()) {
	const start = Date.UTC(date.getUTCFullYear(), 0, 1);
	return ELEMENTS[(Math.floor((date.getTime() - start) / 864e5) % ELEMENTS.length + ELEMENTS.length) % ELEMENTS.length];
}
function neighbors(z) {
	const el = BY_Z[z];
	if (!el) return {};
	const at = (col, row) => ELEMENTS.find((e) => e.col === col && e.row === row)?.z;
	return {
		left: at(el.col - 1, el.row),
		right: at(el.col + 1, el.row),
		up: at(el.col, el.row - 1) ?? (el.row === 9 ? at(el.col, 6) : void 0),
		down: at(el.col, el.row + 1) ?? (el.row === 6 ? at(el.col, 9) : el.row === 7 ? at(el.col, 10) : void 0)
	};
}
var COLOR_MODE_LABEL = {
	category: "Category",
	block: "Block",
	state: "Phase",
	electronegativity: "Electronegativity",
	mass: "Mass",
	density: "Density",
	year: "Discovered"
};
function rangeOf(values) {
	let min = Infinity;
	let max = -Infinity;
	for (const v of values) {
		if (v == null || Number.isNaN(v)) continue;
		if (v < min) min = v;
		if (v > max) max = v;
	}
	if (!Number.isFinite(min) || !Number.isFinite(max) || min === max) return {
		min: 0,
		max: 1
	};
	return {
		min,
		max
	};
}
var EN_RANGE = rangeOf(ELEMENTS.map((e) => e.electronegativity));
var MASS_RANGE = rangeOf(ELEMENTS.map((e) => e.mass));
var DENSITY_RANGE = rangeOf(ELEMENTS.map((e) => e.density));
var YEAR_RANGE = rangeOf(ELEMENTS.map((e) => e.discovered));
function norm(value, range) {
	if (value == null) return null;
	return (value - range.min) / (range.max - range.min);
}
function heatValue(el, mode) {
	if (mode === "electronegativity") return norm(el.electronegativity, EN_RANGE);
	if (mode === "mass") return norm(el.mass, MASS_RANGE);
	if (mode === "density") return norm(el.density, DENSITY_RANGE);
	if (mode === "year") return norm(el.discovered, YEAR_RANGE);
	return null;
}
var HEAT_RANGE = {
	electronegativity: {
		min: String(EN_RANGE.min),
		max: String(EN_RANGE.max)
	},
	mass: {
		min: `${Math.round(MASS_RANGE.min)} u`,
		max: `${Math.round(MASS_RANGE.max)} u`
	},
	density: {
		min: `${DENSITY_RANGE.min.toPrecision(2)}`,
		max: `${DENSITY_RANGE.max.toFixed(0)} g/cm³`
	},
	year: {
		min: String(YEAR_RANGE.min),
		max: String(YEAR_RANGE.max)
	}
};
var useTable = create()(persist((set, get) => ({
	selectedZ: 26,
	query: "",
	colorMode: "category",
	temperatureK: 298,
	categoryFilter: null,
	view: "table",
	favorites: [],
	quizBest: 0,
	sheetOpen: false,
	setSelectedZ: (z) => set({
		selectedZ: z,
		sheetOpen: z != null
	}),
	setSheetOpen: (open) => set({ sheetOpen: open }),
	setQuery: (q) => set({ query: q }),
	setColorMode: (m) => set({ colorMode: m }),
	setTemperatureK: (k) => set({ temperatureK: k }),
	setCategoryFilter: (c) => set({ categoryFilter: c }),
	setView: (v) => set({ view: v }),
	toggleFavorite: (z) => {
		const cur = get().favorites;
		set({ favorites: cur.includes(z) ? cur.filter((n) => n !== z) : [...cur, z] });
	},
	setQuizBest: (n) => {
		if (n > get().quizBest) set({ quizBest: n });
	},
	surprise: () => {
		const pick = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
		if (pick) set({
			selectedZ: pick.z,
			view: "table",
			query: "",
			sheetOpen: true
		});
	}
}), {
	name: "elementa-v1",
	partialize: (s) => ({
		favorites: s.favorites,
		quizBest: s.quizBest
	})
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-fg text-bg hover:opacity-90",
			secondary: "bg-surface-2 text-fg shadow-border hover:bg-surface",
			ghost: "text-muted hover:bg-surface-2 hover:text-fg",
			outline: "text-fg shadow-border hover:bg-surface-2"
		},
		size: {
			default: "h-10 px-4",
			sm: "h-8 px-3 text-xs",
			lg: "h-11 px-5",
			icon: "size-10",
			"icon-sm": "size-8"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-10 w-full rounded-sm bg-surface-2 px-3 text-sm text-fg shadow-border outline-none transition-[box-shadow,background-color] duration-150 placeholder:text-subtle focus-visible:shadow-border-hover disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function AppHeader() {
	const query = useTable((s) => s.query);
	const setQuery = useTable((s) => s.setQuery);
	const view = useTable((s) => s.view);
	const setView = useTable((s) => s.setView);
	const surprise = useTable((s) => s.surprise);
	const inputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if (e.key === "/" && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
				e.preventDefault();
				setView("table");
				inputRef.current?.focus();
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [setView]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex flex-col gap-3 border-b border-border px-4 py-3 sm:flex-row sm:items-center sm:gap-4 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-xl leading-none tracking-tight text-fg",
						children: "Elementa"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 hidden text-xs text-muted sm:block",
						children: "The living periodic table"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 sm:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: view === "quiz" ? "secondary" : "ghost",
						size: "icon-sm",
						"aria-label": "Quiz",
						onClick: () => setView(view === "quiz" ? "table" : "quiz"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dices, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon-sm",
						"aria-label": "Random element",
						onClick: surprise,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, {})
					})]
				})]
			}),
			view === "table" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "relative min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Search elements"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						ref: inputRef,
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search name, symbol, or number",
						className: "h-10 pl-9",
						autoComplete: "off",
						spellCheck: false
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 flex-1 text-sm text-muted",
				children: "Ten questions. Name, symbol, number, family."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "hidden items-center gap-1 sm:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: view === "table" ? "secondary" : "ghost",
						size: "sm",
						onClick: () => setView("table"),
						className: cn(view === "table" && "text-fg"),
						children: "Table"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: view === "quiz" ? "secondary" : "ghost",
						size: "sm",
						onClick: () => setView("quiz"),
						children: "Quiz"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: surprise,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, {}), "Random"]
					})
				]
			})
		]
	});
}
var RADII = [
	22,
	36,
	50,
	64,
	78,
	92,
	106
];
function dotsFor(count, r) {
	const pts = [];
	for (let i = 0; i < count; i++) {
		const a = i / count * Math.PI * 2 - Math.PI / 2;
		pts.push({
			x: (110 + Math.cos(a) * r).toFixed(2),
			y: (110 + Math.sin(a) * r).toFixed(2)
		});
	}
	return pts;
}
function ElectronShell({ element }) {
	const shells = element.shells;
	const maxR = RADII[shells.length - 1] ?? 92;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 220 220",
		className: "mx-auto block w-52 text-fg",
		role: "img",
		"aria-label": `Electron shells of ${element.name}: ${shells.join(", ")}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "110",
				cy: "110",
				r: maxR + 8,
				fill: "none",
				className: "stroke-border",
				strokeWidth: "1"
			}),
			shells.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "110",
				cy: "110",
				r: RADII[i],
				fill: "none",
				className: "stroke-border-strong",
				strokeWidth: "1"
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "110",
				cy: "110",
				r: "16",
				className: "fill-surface-2 stroke-border-strong",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "110",
				y: "114",
				textAnchor: "middle",
				className: "fill-fg",
				fontSize: "11",
				fontFamily: "IBM Plex Mono, ui-monospace, monospace",
				fontWeight: "500",
				children: element.symbol
			}),
			shells.flatMap((count, i) => dotsFor(count, RADII[i] ?? 22).map((p, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: p.x,
				cy: p.y,
				r: count > 18 ? 1.5 : 2,
				className: "fill-accent"
			}, `${i}-${j}`)))
		]
	});
}
function Separator({ className, orientation = "horizontal", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "separator",
		className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className),
		...props
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-micro font-medium tracking-wide text-subtle uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-0.5 font-mono text-sm tabular-nums text-fg",
			children: value
		})]
	});
}
function Featured({ element }) {
	const setSelectedZ = useTable((s) => s.setSelectedZ);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setSelectedZ(element.z),
		className: "w-full rounded-md bg-surface-2 p-4 text-left shadow-border transition-transform duration-150 ease-out active:scale-[0.96]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-micro font-medium tracking-wide text-subtle uppercase",
				children: "Today"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 font-display text-2xl leading-tight text-fg",
				children: element.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 font-mono text-sm text-muted",
				children: [
					element.symbol,
					" · ",
					element.z
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: element.summary
			})
		]
	});
}
function Inspector({ onClose }) {
	const selectedZ = useTable((s) => s.selectedZ);
	const favorites = useTable((s) => s.favorites);
	const toggleFavorite = useTable((s) => s.toggleFavorite);
	const setSelectedZ = useTable((s) => s.setSelectedZ);
	const el = selectedZ ? getElement(selectedZ) : void 0;
	const featured = elementOfTheDay();
	const loved = el ? favorites.includes(el.z) : false;
	if (!el) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "flex h-full flex-col gap-5 p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-micro font-medium tracking-wide text-subtle uppercase",
				children: "Inspector"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-2xl leading-tight text-fg",
				children: "Select an element"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Click a cell, search by name or symbol, or open today's element."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Featured, { element: featured })]
	});
	const groupLabel = el.group == null ? "—" : String(el.group);
	const catVar = `var(--color-cat-${el.category})`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "flex h-full min-h-0 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3 p-5 pb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-2 rounded-full",
						style: { background: catVar },
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-micro font-medium tracking-wide text-subtle uppercase",
						children: CATEGORY_LABEL[el.category]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-3xl leading-none tracking-tight text-fg",
					children: el.name
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon-sm",
					"aria-label": loved ? "Remove from saved" : "Save element",
					"aria-pressed": loved,
					onClick: () => toggleFavorite(el.z),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4", loved && "fill-danger text-danger") })
				}), onClose ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon-sm",
					"aria-label": "Close inspector",
					onClick: onClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon-sm",
					"aria-label": "Clear selection",
					onClick: () => setSelectedZ(null),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1 overflow-y-auto px-5 pb-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-6xl leading-none tracking-tight text-fg",
						children: el.symbol
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-xs text-subtle",
							children: "Z"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-2xl tabular-nums text-fg",
							children: el.z
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted",
					children: el.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid grid-cols-2 gap-x-4 gap-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Atomic mass",
							value: `${formatMass(el.mass)} u`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Block / period",
							value: `${el.block}-block · ${el.period}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Group",
							value: groupLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Config",
							value: el.electronConfig
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Electronegativity",
							value: el.electronegativity == null ? "—" : el.electronegativity.toFixed(2)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Oxidation",
							value: el.oxidation
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Melting",
							value: formatTemp(el.melting)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Boiling",
							value: formatTemp(el.boiling)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Density",
							value: el.density == null ? "—" : `${el.density} g/cm³`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Ionization",
							value: el.ionization == null ? "—" : `${el.ionization} kJ/mol`
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-micro font-medium tracking-wide text-subtle uppercase",
					children: "Electron shells"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-mono text-xs tabular-nums text-muted",
					children: el.shells.join(" · ")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 rounded-md bg-surface-2 p-3 shadow-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElectronShell, { element: el })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Discovered",
							value: el.discovered == null ? el.discoverer : String(el.discovered)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "By",
							value: el.discoverer
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Standard phase",
							value: el.phase
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Shells",
							value: String(el.shells.length)
						})
					]
				})
			]
		})]
	});
}
function Slider({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
		className: cn("relative flex w-full touch-none items-center select-none", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
			className: "relative h-1 w-full grow overflow-hidden rounded-full bg-surface-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-accent" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-4 rounded-full bg-fg shadow-sm transition-transform duration-150 ease-out hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" })]
	});
}
var COLOR_MODES = [
	"category",
	"block",
	"state",
	"electronegativity",
	"mass",
	"density",
	"year"
];
function tileTone(el, mode, kelvin) {
	if (mode === "category") return { style: { background: `color-mix(in oklab, ${`var(--color-cat-${el.category})`} 22%, var(--color-surface))` } };
	if (mode === "block") return { style: { background: `color-mix(in oklab, ${{
		s: "var(--color-cat-alkali-metal)",
		p: "var(--color-cat-nonmetal)",
		d: "var(--color-cat-transition)",
		f: "var(--color-cat-lanthanide)"
	}[el.block]} 22%, var(--color-surface))` } };
	if (mode === "state") {
		const phase = phaseAt(el, kelvin);
		return { style: { background: `color-mix(in oklab, ${phase === "solid" ? "var(--color-phase-solid)" : phase === "liquid" ? "var(--color-phase-liquid)" : phase === "gas" ? "var(--color-phase-gas)" : "var(--color-phase-unknown)"} 28%, var(--color-surface))` } };
	}
	const t = heatValue(el, mode);
	if (t == null) return { style: { background: "var(--color-surface-2)" } };
	return {
		className: "heat-fill",
		style: { ["--t"]: String(t) }
	};
}
function ElementTile({ el, selected, dim, mode, kelvin, onSelect }) {
	const tone = tileTone(el, mode, kelvin);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: cn("el-tile", tone.className),
		style: {
			gridColumn: el.col + 1,
			gridRow: el.row === 9 ? 10 : el.row === 10 ? 11 : el.row + 1,
			...tone.style
		},
		"data-selected": selected,
		"data-dim": dim,
		"aria-pressed": selected,
		"aria-label": `${el.name}, ${el.symbol}, atomic number ${el.z}`,
		onClick: () => onSelect(el.z),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-2xs leading-none tabular-nums text-muted",
			children: el.z
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "my-auto font-mono text-sm leading-none font-medium",
			children: el.symbol
		})]
	});
}
function Placeholder({ label, col, row, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: "flex items-center justify-center rounded-xs bg-surface-2 font-mono text-tiny text-subtle shadow-border",
		style: {
			gridColumn: col + 1,
			gridRow: row + 1
		},
		"aria-label": label,
		children: "*"
	});
}
function PeriodicTable() {
	const selectedZ = useTable((s) => s.selectedZ);
	const setSelectedZ = useTable((s) => s.setSelectedZ);
	const query = useTable((s) => s.query);
	const colorMode = useTable((s) => s.colorMode);
	const setColorMode = useTable((s) => s.setColorMode);
	const temperatureK = useTable((s) => s.temperatureK);
	const setTemperatureK = useTable((s) => s.setTemperatureK);
	const categoryFilter = useTable((s) => s.categoryFilter);
	const setCategoryFilter = useTable((s) => s.setCategoryFilter);
	const q = query.trim();
	const dimFor = (0, import_react.useMemo)(() => {
		const set = /* @__PURE__ */ new Set();
		for (const el of ELEMENTS) {
			const matchQ = matchesQuery(el, q);
			const matchC = categoryFilter == null || el.category === categoryFilter;
			if (!(matchQ && matchC)) set.add(el.z);
		}
		return set;
	}, [q, categoryFilter]);
	const celsius = temperatureK - 273;
	const heat = colorMode === "electronegativity" || colorMode === "mass" || colorMode === "density" || colorMode === "year" ? HEAT_RANGE[colorMode] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					role: "tablist",
					"aria-label": "Color by",
					className: "flex max-w-full gap-1 overflow-x-auto rounded-md bg-surface p-1 shadow-border",
					children: COLOR_MODES.map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": colorMode === mode,
						onClick: () => setColorMode(mode),
						className: cn("h-8 shrink-0 rounded-sm px-2.5 text-xs font-medium transition-[background-color,color] duration-150", colorMode === mode ? "bg-surface-2 text-fg" : "text-muted hover:text-fg"),
						children: COLOR_MODE_LABEL[mode]
					}, mode))
				})
			}),
			colorMode === "state" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 rounded-md bg-surface px-4 py-3 shadow-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium text-muted",
							children: "Temperature"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-2xs tabular-nums text-fg",
							children: [
								Math.round(temperatureK),
								" K · ",
								Math.round(celsius),
								" °C"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						min: 0,
						max: 6e3,
						step: 1,
						value: [temperatureK],
						onValueChange: (v) => setTemperatureK(v[0] ?? 298),
						"aria-label": "Temperature in kelvin"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between font-mono text-tiny text-subtle",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "0 K" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "298 K" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "6000 K" })
						]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-h-0 flex-1 overflow-auto rounded-lg bg-surface p-3 shadow-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "periodic-grid",
					children: [
						Array.from({ length: 18 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-end justify-center pb-0.5 font-mono text-2xs text-subtle",
							style: {
								gridColumn: i + 2,
								gridRow: 1
							},
							children: i + 1
						}, `g${i}`)),
						Array.from({ length: 7 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-center font-mono text-2xs text-subtle",
							style: {
								gridColumn: 1,
								gridRow: i + 2
							},
							children: i + 1
						}, `p${i}`)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-center font-mono text-tiny text-subtle",
							style: {
								gridColumn: 1,
								gridRow: 10
							},
							children: "*"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-center font-mono text-tiny text-subtle",
							style: {
								gridColumn: 1,
								gridRow: 11
							},
							children: "**"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
							label: "57–71",
							col: 3,
							row: 6,
							onClick: () => setSelectedZ(57)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
							label: "89–103",
							col: 3,
							row: 7,
							onClick: () => setSelectedZ(89)
						}),
						ELEMENTS.map((el) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElementTile, {
							el,
							selected: selectedZ === el.z,
							dim: dimFor.has(el.z),
							mode: colorMode,
							kelvin: temperatureK,
							onSelect: setSelectedZ
						}, el.z))
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-center text-micro text-subtle lg:hidden",
					children: "Swipe to see every group"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
				mode: colorMode,
				categoryFilter,
				onCategory: setCategoryFilter,
				heat
			})
		]
	});
}
function Legend({ mode, categoryFilter, onCategory, heat }) {
	if (mode === "category") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-1.5",
		children: CATEGORY_ORDER.map((cat) => {
			const active = categoryFilter === cat;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onCategory(active ? null : cat),
				className: cn("inline-flex h-7 items-center gap-1.5 rounded-full px-2.5 text-micro font-medium text-muted shadow-border transition-opacity duration-150", categoryFilter && !active && "opacity-40"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "size-1.5 rounded-full",
					style: { background: `var(--color-cat-${cat})` },
					"aria-hidden": true
				}), CATEGORY_LABEL[cat]]
			}, cat);
		})
	});
	if (mode === "block") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-1.5",
		children: [
			{
				id: "s",
				label: "s-block",
				color: "var(--color-cat-alkali-metal)"
			},
			{
				id: "p",
				label: "p-block",
				color: "var(--color-cat-nonmetal)"
			},
			{
				id: "d",
				label: "d-block",
				color: "var(--color-cat-transition)"
			},
			{
				id: "f",
				label: "f-block",
				color: "var(--color-cat-lanthanide)"
			}
		].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex h-7 items-center gap-1.5 rounded-full px-2.5 text-micro font-medium text-muted shadow-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "size-1.5 rounded-full",
				style: { background: b.color }
			}), b.label]
		}, b.id))
	});
	if (mode === "state") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-1.5",
		children: [
			{
				id: "solid",
				label: "Solid",
				color: "var(--color-phase-solid)"
			},
			{
				id: "liquid",
				label: "Liquid",
				color: "var(--color-phase-liquid)"
			},
			{
				id: "gas",
				label: "Gas",
				color: "var(--color-phase-gas)"
			},
			{
				id: "unknown",
				label: "Unknown",
				color: "var(--color-phase-unknown)"
			}
		].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex h-7 items-center gap-1.5 rounded-full px-2.5 text-micro font-medium text-muted shadow-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "size-1.5 rounded-full",
				style: { background: p.color }
			}), p.label]
		}, p.id))
	});
	if (heat) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 text-micro text-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono tabular-nums",
				children: heat.min
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-1.5 flex-1 rounded-full",
				style: { background: "linear-gradient(90deg, var(--color-heat-low), var(--color-heat-high))" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono tabular-nums",
				children: heat.max
			})
		]
	});
	return null;
}
function shuffle(arr) {
	const copy = [...arr];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy;
}
function pick(arr, n, exclude) {
	return shuffle(exclude == null ? arr : arr.filter((x) => x !== exclude)).slice(0, n);
}
var STABLE = ELEMENTS.filter((e) => e.z <= 103);
function makeQuestion(recent) {
	const pool = STABLE.filter((e) => !recent.includes(e.z));
	const el = (pool.length ? pool : STABLE)[Math.floor(Math.random() * (pool.length || STABLE.length))];
	const kind = Math.floor(Math.random() * 4);
	if (kind === 0) {
		const names = pick(STABLE.map((e) => e.name), 3, el.name);
		return {
			prompt: `What is the name of ${el.symbol}?`,
			hint: `Atomic number ${el.z}`,
			options: shuffle([el.name, ...names]),
			answer: el.name,
			element: el
		};
	}
	if (kind === 1) {
		const symbols = pick(STABLE.map((e) => e.symbol), 3, el.symbol);
		return {
			prompt: `What is the symbol for ${el.name}?`,
			hint: `Atomic number ${el.z}`,
			options: shuffle([el.symbol, ...symbols]),
			answer: el.symbol,
			element: el
		};
	}
	if (kind === 2) {
		const others = pick(Object.keys(CATEGORY_LABEL), 3, el.category).map((c) => CATEGORY_LABEL[c]);
		return {
			prompt: `Which family does ${el.name} belong to?`,
			hint: el.symbol,
			options: shuffle([CATEGORY_LABEL[el.category], ...others]),
			answer: CATEGORY_LABEL[el.category],
			element: el
		};
	}
	const others = pick(STABLE.filter((e) => e.z !== el.z).map((e) => String(e.z)), 3);
	return {
		prompt: `What is the atomic number of ${el.name}?`,
		hint: el.symbol,
		options: shuffle([String(el.z), ...others]),
		answer: String(el.z),
		element: el
	};
}
function QuizView() {
	const quizBest = useTable((s) => s.quizBest);
	const setQuizBest = useTable((s) => s.setQuizBest);
	const setView = useTable((s) => s.setView);
	const setSelectedZ = useTable((s) => s.setSelectedZ);
	const [recent, setRecent] = (0, import_react.useState)([]);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [score, setScore] = (0, import_react.useState)(0);
	const [question, setQuestion] = (0, import_react.useState)(() => makeQuestion([]));
	const [answered, setAnswered] = (0, import_react.useState)(null);
	const [done, setDone] = (0, import_react.useState)(false);
	const progress = (0, import_react.useMemo)(() => index / 10, [index]);
	function choose(option) {
		if (answered) return;
		const correct = option === question.answer;
		setAnswered({
			pick: option,
			correct
		});
		if (correct) setScore((s) => s + 1);
	}
	function next() {
		const nextIndex = index + 1;
		const nextRecent = [...recent, question.element.z].slice(-12);
		if (nextIndex >= 10) {
			setQuizBest(score);
			setDone(true);
			return;
		}
		setRecent(nextRecent);
		setIndex(nextIndex);
		setQuestion(makeQuestion(nextRecent));
		setAnswered(null);
	}
	function restart() {
		setRecent([]);
		setIndex(0);
		setScore(0);
		setQuestion(makeQuestion([]));
		setAnswered(null);
		setDone(false);
	}
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center px-5 py-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-micro font-medium tracking-wide text-subtle uppercase",
				children: "Round complete"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 font-display text-5xl leading-none tracking-tight text-fg",
				children: [score, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-muted",
					children: ["/", 10]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-muted",
				children: [
					"Best on this device: ",
					Math.max(quizBest, score),
					" / ",
					10
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap items-center justify-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: restart,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {}), "Play again"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: () => setView("table"),
					children: "Back to the table"
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-lg flex-1 flex-col px-5 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 text-xs text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-medium tabular-nums",
					children: [
						index + 1,
						" / ",
						10
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono tabular-nums",
					children: ["Score ", score]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 h-1 overflow-hidden rounded-full bg-surface-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-accent transition-[width] duration-200 ease-out",
					style: { width: `${progress * 100}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-xs text-subtle",
					children: question.hint
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl leading-tight tracking-tight text-fg",
					children: question.prompt
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-2",
				children: question.options.map((option) => {
					const isPick = answered?.pick === option;
					const isAnswer = answered != null && option === question.answer;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => choose(option),
						disabled: answered != null,
						className: cn("min-h-12 rounded-md px-4 py-3 text-left text-sm font-medium text-fg shadow-border transition-[background-color,transform] duration-150 ease-out active:not-disabled:scale-[0.96]", answered == null && "bg-surface hover:bg-surface-2", answered != null && !isPick && !isAnswer && "bg-surface opacity-40", isAnswer && "bg-ok/20 text-fg", isPick && !isAnswer && "bg-danger/20 text-fg"),
						children: option
					}, option);
				})
			}),
			answered ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: answered.correct ? "Correct." : `It was ${question.answer}.`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: () => {
							setSelectedZ(question.element.z);
							setView("table");
						},
						children: "Open in table"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						onClick: next,
						children: [index + 1 >= 10 ? "See score" : "Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})]
				})]
			}) : null
		]
	});
}
var TooltipProvider = Provider;
function Home() {
	const view = useTable((s) => s.view);
	const selectedZ = useTable((s) => s.selectedZ);
	const setSelectedZ = useTable((s) => s.setSelectedZ);
	const setQuery = useTable((s) => s.setQuery);
	const sheetOpen = useTable((s) => s.sheetOpen);
	const setSheetOpen = useTable((s) => s.setSheetOpen);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
				if (e.key === "Escape") {
					e.target.blur();
					setQuery("");
				}
				return;
			}
			if (e.key === "Escape") {
				setSheetOpen(false);
				return;
			}
			if (view !== "table" || selectedZ == null) return;
			const n = neighbors(selectedZ);
			if (e.key === "ArrowLeft" && n.left) {
				e.preventDefault();
				setSelectedZ(n.left);
			} else if (e.key === "ArrowRight" && n.right) {
				e.preventDefault();
				setSelectedZ(n.right);
			} else if (e.key === "ArrowUp" && n.up) {
				e.preventDefault();
				setSelectedZ(n.up);
			} else if (e.key === "ArrowDown" && n.down) {
				e.preventDefault();
				setSelectedZ(n.down);
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		selectedZ,
		setSelectedZ,
		setQuery,
		setSheetOpen,
		view
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
		delayDuration: 250,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-dvh flex-col bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {}),
				view === "quiz" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizView, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-0 flex-1 flex-col lg:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "flex min-h-0 min-w-0 flex-1 flex-col p-3 sm:p-4 lg:p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeriodicTable, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden w-96 shrink-0 border-l border-border lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inspector, {})
					})]
				}),
				view === "table" && sheetOpen && selectedZ != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "fixed inset-0 z-40 bg-bg/70",
						"aria-label": "Dismiss inspector",
						onClick: () => setSheetOpen(false)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inspector-sheet fixed inset-x-0 bottom-0 z-50 overflow-hidden rounded-t-xl bg-surface shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-2 h-1 w-10 rounded-full bg-border-strong" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inspector-sheet overflow-y-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inspector, { onClose: () => setSheetOpen(false) })
						})]
					})]
				}) : null
			]
		})
	});
}
//#endregion
export { Home as component };
