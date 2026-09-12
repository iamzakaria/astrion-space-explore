import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, b as require_jsx_runtime, f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, y as useRouter, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { G as getPlanet, H as SiteShell, J as systemOf, K as planetsForStar, S as starsInConstellation, b as relatedStars, k as PLANETS$1, r as CONSTELLATION_BY_SLUG, v as getStar } from "./catalog-N4vBopjS.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/moons-C3judFXP.js
var LUNA_RADIUS_KM = 1737.4;
var LUNA_MASS_KG = 7342e19;
var MOON_KIND_INFO = [
	{
		id: "rocky",
		label: "Rocky",
		summary: "Silicate worlds — Earth’s Moon, the Martian pair, and a few battered inner satellites."
	},
	{
		id: "icy",
		label: "Icy",
		summary: "Water-ice crusts over rock or ocean. Most moons past the snow line are this."
	},
	{
		id: "volcanic",
		label: "Volcanic",
		summary: "Tidal heat that melts the interior. Io is the type specimen; a few others still vent."
	},
	{
		id: "irregular",
		label: "Irregular",
		summary: "Captured bodies on distant, often retrograde paths — leftovers the planet never formed."
	}
];
var MOON_KIND_LABEL = Object.fromEntries(MOON_KIND_INFO.map((k) => [k.id, k.label]));
var MOON_TAG_LABEL = {
	galilean: "Galilean",
	"ocean-world": "Ocean world",
	atmosphere: "Atmosphere",
	captured: "Captured",
	visited: "Visited",
	binary: "Binary",
	inner: "Inner moon",
	largest: "Largest of its system"
};
var MOONS = [
	{
		slug: "luna",
		name: "The Moon",
		designation: "Earth I",
		planetSlug: "earth",
		planetName: "Earth",
		kind: "rocky",
		palette: "mercury",
		radiusKm: 1737.4,
		massKg: 7342e19,
		periodDays: 27.322,
		semiMajorKm: 384400,
		discovered: "Prehistory",
		summary: "The only moon that ever had people on it. A dry silicate world locked to Earth, raising the tides and steadying the tilt that makes the seasons.",
		facts: [
			"Formed from debris after a Mars-sized impact about 4.5 billion years ago.",
			"Tidally locked: the same face has watched Earth for most of its life.",
			"Twelve Apollo astronauts walked here between 1969 and 1972."
		],
		notable: ["visited", "largest"]
	},
	{
		slug: "phobos",
		name: "Phobos",
		designation: "Mars I",
		planetSlug: "mars",
		planetName: "Mars",
		kind: "rocky",
		palette: "mars",
		radiusKm: 11.3,
		massKg: 0x25a8a4d29e8000,
		periodDays: .319,
		semiMajorKm: 9376,
		discovered: "1877",
		discoverer: "Asaph Hall",
		summary: "The larger Martian moon: a potato of carbonaceous rock racing around Mars three times a day, so close it would graze the atmosphere if it were any nearer.",
		facts: [
			"Rises in the west and sets in the east — it outruns the planet’s spin.",
			"Stickney crater, 9 km across, nearly broke it apart.",
			"It is spiralling in and will be torn into a ring in a few tens of millions of years."
		],
		notable: [
			"visited",
			"inner",
			"captured"
		]
	},
	{
		slug: "deimos",
		name: "Deimos",
		designation: "Mars II",
		planetSlug: "mars",
		planetName: "Mars",
		kind: "rocky",
		palette: "ceres",
		radiusKm: 6.2,
		massKg: 0x5543df729c000,
		periodDays: 1.263,
		semiMajorKm: 23463,
		discovered: "1877",
		discoverer: "Asaph Hall",
		summary: "Mars’s outer pebble. Smoother than Phobos, farther out, and slowly drifting away. Named for terror’s quieter sibling, dread.",
		facts: [
			"From the Martian surface it is a bright star that never quite looks like a disc.",
			"Probably a captured asteroid, though a giant-impact origin is not ruled out.",
			"Hall found it six nights after Phobos, using the U.S. Naval Observatory’s 26-inch refractor."
		],
		notable: ["visited", "captured"]
	},
	{
		slug: "io",
		name: "Io",
		designation: "Jupiter I",
		planetSlug: "jupiter",
		planetName: "Jupiter",
		kind: "volcanic",
		palette: "lava",
		radiusKm: 1821.6,
		massKg: 8932e19,
		periodDays: 1.769,
		semiMajorKm: 421700,
		discovered: "1610",
		discoverer: "Galileo Galilei",
		summary: "The most volcanic body in the Solar System. Jupiter’s tides squeeze Io so hard that sulphur lakes and umbrella plumes rewrite the surface in decades.",
		facts: [
			"Hundreds of active volcanoes; Loki Patera is a lava lake larger than some countries.",
			"Locked in a 1:2:4 resonance with Europa and Ganymede that keeps the heat on.",
			"Its thin sulphur dioxide air collapses on the night side."
		],
		notable: [
			"galilean",
			"visited",
			"inner"
		]
	},
	{
		slug: "europa",
		name: "Europa",
		designation: "Jupiter II",
		planetSlug: "jupiter",
		planetName: "Jupiter",
		kind: "icy",
		palette: "ice",
		radiusKm: 1560.8,
		massKg: 48e21,
		periodDays: 3.551,
		semiMajorKm: 671100,
		discovered: "1610",
		discoverer: "Galileo Galilei",
		summary: "A cracked ice shell over a salt ocean that may hold twice Earth’s seawater. The youngest surface of the Galileans — and the one most often named for life.",
		facts: [
			"The ice is perhaps 15–25 km thick; the ocean beneath may be 60–150 km deep.",
			"Red-brown fractures are salts and perhaps organic compounds upwelled from below.",
			"NASA’s Europa Clipper is on the way to taste the ice and the thin air."
		],
		notable: [
			"galilean",
			"ocean-world",
			"visited"
		]
	},
	{
		slug: "ganymede",
		name: "Ganymede",
		designation: "Jupiter III",
		planetSlug: "jupiter",
		planetName: "Jupiter",
		kind: "icy",
		palette: "haze",
		radiusKm: 2634.1,
		massKg: 1482e20,
		periodDays: 7.155,
		semiMajorKm: 1070400,
		discovered: "1610",
		discoverer: "Galileo Galilei",
		summary: "The largest moon in the Solar System — bigger than Mercury — with its own magnetic field and a deep ocean sandwiched between ice layers.",
		facts: [
			"The only moon known to generate a dynamo magnetic field.",
			"Dark, cratered terrain sits beside grooved ice that split and spread.",
			"ESA’s JUICE mission will orbit it in the 2030s."
		],
		notable: [
			"galilean",
			"ocean-world",
			"visited",
			"largest"
		]
	},
	{
		slug: "callisto",
		name: "Callisto",
		designation: "Jupiter IV",
		planetSlug: "jupiter",
		planetName: "Jupiter",
		kind: "icy",
		palette: "mercury",
		radiusKm: 2410.3,
		massKg: 1076e20,
		periodDays: 16.689,
		semiMajorKm: 1882700,
		discovered: "1610",
		discoverer: "Galileo Galilei",
		summary: "The outermost Galilean: an ancient, crater-saturated ice-rock mix that never fully differentiated. The quiet archive of the Jovian system.",
		facts: [
			"Valhalla is a 3,800 km multi-ring impact basin — a bullseye on the night side.",
			"A possible salty ocean lies tens of kilometres down, far quieter than Europa’s.",
			"Outside Jupiter’s main radiation belts, it is the gentlest large moon to visit."
		],
		notable: [
			"galilean",
			"ocean-world",
			"visited"
		]
	},
	{
		slug: "amalthea",
		name: "Amalthea",
		designation: "Jupiter V",
		planetSlug: "jupiter",
		planetName: "Jupiter",
		kind: "rocky",
		palette: "mars",
		radiusKm: 83.5,
		massKg: 0x1cdda4faccd00000,
		periodDays: .498,
		semiMajorKm: 181400,
		discovered: "1892",
		discoverer: "Edward Emerson Barnard",
		summary: "A dark red inner potato, the last moon found by eye. It orbits inside Io and feeds Jupiter’s gossamer rings with dust knocked off its surface.",
		facts: [
			"Barnard found it with the Lick 36-inch refractor — the first Jovian moon since Galileo.",
			"Irregular, 250 × 146 × 128 km, and redder than any other inner moon.",
			"Galileo flew within 160 km in 2002 and measured its density: porous rock, or ice with rock."
		],
		notable: ["visited", "inner"]
	},
	{
		slug: "himalia",
		name: "Himalia",
		designation: "Jupiter VI",
		planetSlug: "jupiter",
		planetName: "Jupiter",
		kind: "irregular",
		palette: "ceres",
		radiusKm: 85,
		massKg: 0x3a4965bf58a40000,
		periodDays: 250.56,
		semiMajorKm: 11461e3,
		discovered: "1904",
		discoverer: "Charles Dillon Perrine",
		irregular: true,
		summary: "The largest of Jupiter’s captured swarm. A dark, distant body heading a family of irregulars that share its orbit — wreckage of a broken parent.",
		facts: [
			"It takes eight months to circuit Jupiter, far beyond the Galileans.",
			"The Himalia group holds several smaller moons on similar paths.",
			"Cassini glimpsed it on the way to Saturn; New Horizons took a distant portrait."
		],
		notable: ["captured"]
	},
	{
		slug: "mimas",
		name: "Mimas",
		designation: "Saturn I",
		planetSlug: "saturn",
		planetName: "Saturn",
		kind: "icy",
		palette: "ice",
		radiusKm: 198.2,
		massKg: 0x2086ac35105260000,
		periodDays: .942,
		semiMajorKm: 185539,
		discovered: "1789",
		discoverer: "William Herschel",
		summary: "The Death Star moon: an ice ball whose giant crater Herschel nearly split it. It herds the inner edge of Saturn’s rings.",
		facts: [
			"Herschel crater is 139 km across — a third of Mimas’s diameter.",
			"It clears the Cassini Division in concert with resonances in the rings.",
			"Cassini found a slight wobble that may hide a young, local ocean."
		],
		notable: ["visited", "inner"]
	},
	{
		slug: "enceladus",
		name: "Enceladus",
		designation: "Saturn II",
		planetSlug: "saturn",
		planetName: "Saturn",
		kind: "icy",
		palette: "ice",
		radiusKm: 252.1,
		massKg: 0x5dacd13ca9e300000,
		periodDays: 1.37,
		semiMajorKm: 237948,
		discovered: "1789",
		discoverer: "William Herschel",
		summary: "A white ice world that vents its ocean into space. The south-polar tiger stripes spray salt water that feeds Saturn’s E ring — and has been tasted by a spacecraft.",
		facts: [
			"Cassini flew through the plumes and found silica, organics, and molecular hydrogen.",
			"The global ocean sits under 5–30 km of ice; the south pole is thinnest.",
			"Albedo is about 1.4 — the most reflective large surface in the Solar System."
		],
		notable: ["ocean-world", "visited"]
	},
	{
		slug: "tethys",
		name: "Tethys",
		designation: "Saturn III",
		planetSlug: "saturn",
		planetName: "Saturn",
		kind: "icy",
		palette: "ice",
		radiusKm: 531.1,
		massKg: 0x21729856fe70040000,
		periodDays: 1.888,
		semiMajorKm: 294619,
		discovered: "1684",
		discoverer: "Giovanni Cassini",
		summary: "A mid-sized ice moon split by Ithaca Chasma, a canyon that girdles three-quarters of the globe, and scarred by the huge Odysseus basin.",
		facts: [
			"Density is near that of water ice — little rock inside.",
			"Odysseus is 450 km across; the crust relaxed instead of collapsing.",
			"Two Trojan moons, Telesto and Calypso, share its orbit."
		],
		notable: ["visited"]
	},
	{
		slug: "dione",
		name: "Dione",
		designation: "Saturn IV",
		planetSlug: "saturn",
		planetName: "Saturn",
		kind: "icy",
		palette: "ice",
		radiusKm: 561.4,
		massKg: 1095e18,
		periodDays: 2.737,
		semiMajorKm: 377396,
		discovered: "1684",
		discoverer: "Giovanni Cassini",
		summary: "A bright leading face and a trailing face of cliffs. Ice tectonics and a possible thin ocean make Dione more alive than its craters first suggest.",
		facts: [
			"Wispy terrain is ice cliffs from tectonic fracturing, not frost deposits.",
			"Cassini’s gravity data allow a global or regional ocean.",
			"Helene and Polydeuces are Trojan companions in the same orbit."
		],
		notable: ["ocean-world", "visited"]
	},
	{
		slug: "rhea",
		name: "Rhea",
		designation: "Saturn V",
		planetSlug: "saturn",
		planetName: "Saturn",
		kind: "icy",
		palette: "ice",
		radiusKm: 763.8,
		massKg: 2307e18,
		periodDays: 4.518,
		semiMajorKm: 527108,
		discovered: "1672",
		discoverer: "Giovanni Cassini",
		summary: "Saturn’s second-largest moon: an icy sphere of two halves, one crater-crowded, one cracked. A whisper of oxygen and carbon dioxide stands in for an atmosphere.",
		facts: [
			"A possible tenuous ring of debris was reported, then left unconfirmed.",
			"The interior is only partly differentiated — ice and rock still mixed.",
			"Wispy fractures on the trailing hemisphere echo Dione’s cliffs."
		],
		notable: ["visited", "atmosphere"]
	},
	{
		slug: "titan",
		name: "Titan",
		designation: "Saturn VI",
		planetSlug: "saturn",
		planetName: "Saturn",
		kind: "icy",
		palette: "haze",
		radiusKm: 2574.7,
		massKg: 1345e20,
		periodDays: 15.945,
		semiMajorKm: 1221870,
		discovered: "1655",
		discoverer: "Christiaan Huygens",
		summary: "The only moon with a thick air, and the only world besides Earth with stable surface liquid. Nitrogen skies, methane rain, and lakes at the poles.",
		facts: [
			"Atmosphere is 1.5 times thicker than Earth’s, mostly nitrogen with methane.",
			"Huygens landed in 2005 on a damp pebble plain near a dry river channel.",
			"Kraken Mare, a hydrocarbon sea, is larger than the Caspian."
		],
		notable: [
			"atmosphere",
			"ocean-world",
			"visited",
			"largest"
		]
	},
	{
		slug: "hyperion",
		name: "Hyperion",
		designation: "Saturn VII",
		planetSlug: "saturn",
		planetName: "Saturn",
		kind: "icy",
		palette: "ceres",
		radiusKm: 135,
		massKg: 0x4dfe403955b20000,
		periodDays: 21.276,
		semiMajorKm: 1481010,
		discovered: "1848",
		discoverer: "William Bond & William Lassell",
		summary: "A sponge of ice that tumbles. Hyperion has no fixed day: chaotic rotation, a porosity like a rubble pile, and craters that look like they were carved in foam.",
		facts: [
			"The only known moon with chaotic rotation — its day never repeats.",
			"Density is about half that of water; it is mostly empty space.",
			"Cassini’s close pass in 2005 showed a honeycomb of dark-floored pits."
		],
		notable: ["visited"]
	},
	{
		slug: "iapetus",
		name: "Iapetus",
		designation: "Saturn VIII",
		planetSlug: "saturn",
		planetName: "Saturn",
		kind: "icy",
		palette: "pluto",
		radiusKm: 734.5,
		massKg: 1806e18,
		periodDays: 79.322,
		semiMajorKm: 3560820,
		discovered: "1671",
		discoverer: "Giovanni Cassini",
		summary: "The two-faced moon. One hemisphere is as bright as snow, the other as dark as coal, with a 20 km equatorial ridge that makes it look like a walnut.",
		facts: [
			"Cassini (the person) could see it on one side of Saturn and not the other.",
			"The dark leading face is coated in dust, much of it shed by Phoebe.",
			"The equatorial ridge may be a collapsed ring that Iapetus later swept up."
		],
		notable: ["visited"]
	},
	{
		slug: "phoebe",
		name: "Phoebe",
		designation: "Saturn IX",
		planetSlug: "saturn",
		planetName: "Saturn",
		kind: "irregular",
		palette: "ceres",
		radiusKm: 106.5,
		massKg: 0x730bff13e3fd0000,
		periodDays: 550.56,
		semiMajorKm: 12947800,
		discovered: "1898",
		discoverer: "William Henry Pickering",
		retrograde: true,
		irregular: true,
		summary: "A captured Centaur on a backward orbit, dark and cratered, shedding the dust that paints Iapetus. The first moon found photographically.",
		facts: [
			"Cassini flew by at 2,000 km in 2004 — the first close look at an irregular.",
			"Ice under a dark lag suggests a Kuiper-belt origin.",
			"The Phoebe ring is a vast, faint torus of dust stretching millions of kilometres."
		],
		notable: ["captured", "visited"]
	},
	{
		slug: "miranda",
		name: "Miranda",
		designation: "Uranus V",
		planetSlug: "uranus",
		planetName: "Uranus",
		kind: "icy",
		palette: "ice",
		radiusKm: 235.8,
		massKg: 0x3928bd4d8ca3e0000,
		periodDays: 1.413,
		semiMajorKm: 129900,
		discovered: "1948",
		discoverer: "Gerard Kuiper",
		summary: "The smallest of Uranus’s major moons, and the strangest: chevron cliffs, coronae, and a 20 km scarp that looks as if the world was broken and poorly glued.",
		facts: [
			"Verona Rupes is the tallest known cliff in the Solar System, about 20 km high.",
			"Voyager 2’s only close Uranian moon pass was this one, in 1986.",
			"Tidal heating during past resonances may have resurfaced patches of ice."
		],
		notable: ["visited", "inner"]
	},
	{
		slug: "ariel",
		name: "Ariel",
		designation: "Uranus I",
		planetSlug: "uranus",
		planetName: "Uranus",
		kind: "icy",
		palette: "ice",
		radiusKm: 578.9,
		massKg: 125e19,
		periodDays: 2.52,
		semiMajorKm: 190900,
		discovered: "1851",
		discoverer: "William Lassell",
		summary: "The brightest Uranian moon, scored by canyons and smooth flows. The youngest-looking of the five majors — ice that moved after the craters fell.",
		facts: [
			"Fault canyons tens of kilometres deep cross the imaged south.",
			"Smooth floors may be cryovolcanic ice, not just slumps.",
			"Named for the airy spirit in The Tempest, like its siblings."
		],
		notable: ["visited"]
	},
	{
		slug: "umbriel",
		name: "Umbriel",
		designation: "Uranus II",
		planetSlug: "uranus",
		planetName: "Uranus",
		kind: "icy",
		palette: "mercury",
		radiusKm: 584.7,
		massKg: 127e19,
		periodDays: 4.144,
		semiMajorKm: 266e3,
		discovered: "1851",
		discoverer: "William Lassell",
		summary: "The dark one. Oldest surface of the Uranian five, charcoal-grey ice, and a mysterious bright ring on the floor of Wunda crater at the pole Voyager saw.",
		facts: [
			"Albedo is about 0.1 — the gloomiest of the major Uranian moons.",
			"Wunda’s bright annulus is still unexplained.",
			"Lassell found it the same year as Ariel, with a speculum-metal reflector."
		],
		notable: ["visited"]
	},
	{
		slug: "titania",
		name: "Titania",
		designation: "Uranus III",
		planetSlug: "uranus",
		planetName: "Uranus",
		kind: "icy",
		palette: "ice",
		radiusKm: 788.9,
		massKg: 34e20,
		periodDays: 8.706,
		semiMajorKm: 436300,
		discovered: "1787",
		discoverer: "William Herschel",
		summary: "Uranus’s largest moon: ice and rock, a possible thin ocean, and a network of scarps and canyons from the freeze-expansion of an interior that once ran warmer.",
		facts: [
			"Messina Chasmata runs more than 1,500 km.",
			"A tenuous carbon dioxide atmosphere has been hinted at.",
			"Herschel found it and Oberon six years after he found Uranus."
		],
		notable: [
			"visited",
			"largest",
			"ocean-world"
		]
	},
	{
		slug: "oberon",
		name: "Oberon",
		designation: "Uranus IV",
		planetSlug: "uranus",
		planetName: "Uranus",
		kind: "icy",
		palette: "pluto",
		radiusKm: 761.4,
		massKg: 308e19,
		periodDays: 13.463,
		semiMajorKm: 583500,
		discovered: "1787",
		discoverer: "William Herschel",
		summary: "The outer major of Uranus. Heavily cratered, with a mountain that may be a central peak poking off the limb, and a possible ocean at depth.",
		facts: [
			"Hamlet crater is 206 km across with a dark floor.",
			"Voyager 2 imaged only the southern hemisphere; the north is still unknown.",
			"Named for the king of the fairies, opposite Titania."
		],
		notable: ["visited", "ocean-world"]
	},
	{
		slug: "triton",
		name: "Triton",
		designation: "Neptune I",
		planetSlug: "neptune",
		planetName: "Neptune",
		kind: "icy",
		palette: "ice",
		radiusKm: 1353.4,
		massKg: 2139e19,
		periodDays: 5.877,
		semiMajorKm: 354759,
		discovered: "1846",
		discoverer: "William Lassell",
		retrograde: true,
		summary: "A captured Kuiper-belt world, orbiting backward, cantaloupe terrain and nitrogen geysers. Larger than Pluto, and slowly spiralling in toward Neptune.",
		facts: [
			"Found 17 days after Neptune itself.",
			"Voyager 2 saw plumes of nitrogen 8 km high in 1989.",
			"It will cross the Roche limit in a few billion years and may become a ring."
		],
		notable: [
			"captured",
			"visited",
			"atmosphere",
			"largest",
			"ocean-world"
		]
	},
	{
		slug: "proteus",
		name: "Proteus",
		designation: "Neptune VIII",
		planetSlug: "neptune",
		planetName: "Neptune",
		kind: "icy",
		palette: "neptune",
		radiusKm: 210,
		massKg: 0x2629f66e0c5300000,
		periodDays: 1.122,
		semiMajorKm: 117647,
		discovered: "1989",
		discoverer: "Voyager 2",
		summary: "Neptune’s largest inner moon, found on Voyager approach. A battered, nearly round ice body that just fails to pull itself into a sphere.",
		facts: [
			"As big as Mimas but darker and more irregular.",
			"Pharos crater is 230 km across — a wound half the moon wide.",
			"It may have formed from debris after Triton’s capture wrecked the original system."
		],
		notable: ["visited", "inner"]
	},
	{
		slug: "nereid",
		name: "Nereid",
		designation: "Neptune II",
		planetSlug: "neptune",
		planetName: "Neptune",
		kind: "irregular",
		palette: "ice",
		radiusKm: 170,
		massKg: 0x1ae361fc1451c0000,
		periodDays: 360.14,
		semiMajorKm: 5513818,
		discovered: "1949",
		discoverer: "Gerard Kuiper",
		irregular: true,
		summary: "A distant wanderer on one of the most eccentric orbits of any moon: from 1.4 to 9.6 million km in a single 360-day lap. A leftover of Triton’s violent arrival.",
		facts: [
			"Eccentricity is 0.75 — more comet than satellite.",
			"Kuiper found it photographically at McDonald Observatory.",
			"Voyager 2 passed at 4.7 million km; the disc stayed a smudge."
		],
		notable: ["captured"]
	},
	{
		slug: "charon",
		name: "Charon",
		designation: "Pluto I",
		planetSlug: "pluto",
		planetName: "Pluto",
		kind: "icy",
		palette: "pluto",
		radiusKm: 606,
		massKg: 1586e18,
		periodDays: 6.387,
		semiMajorKm: 19591,
		discovered: "1978",
		discoverer: "James Christy",
		summary: "Not so much a moon as a partner. Charon is so massive the barycentre sits outside Pluto, and the two keep the same faces locked on each other.",
		facts: [
			"New Horizons found a red polar cap of tholins — “Mordor Macula.”",
			"A 1,000 km canyon, Serenity Chasma, splits the icy crust.",
			"Christy spotted the bump on Pluto’s elongated image in a Naval Observatory plate."
		],
		notable: [
			"binary",
			"visited",
			"largest"
		]
	},
	{
		slug: "styx",
		name: "Styx",
		designation: "Pluto V",
		planetSlug: "pluto",
		planetName: "Pluto",
		kind: "icy",
		palette: "ice",
		radiusKm: 8,
		massKg: 75e14,
		periodDays: 20.16,
		semiMajorKm: 42656,
		discovered: "2012",
		discoverer: "Mark Showalter",
		summary: "The innermost of Pluto’s four small moons, a lumpy ice shard in near-resonance with Nix and Hydra, found in Hubble images while New Horizons was already en route.",
		facts: [
			"Roughly 16 × 9 × 8 km — elongated, not round.",
			"It occupies a 1:3:4:5:6 resonance chain with the other small moons.",
			"Named for the river the dead crossed; the IAU let the public vote."
		],
		notable: ["visited", "inner"]
	},
	{
		slug: "nix",
		name: "Nix",
		designation: "Pluto II",
		planetSlug: "pluto",
		planetName: "Pluto",
		kind: "icy",
		palette: "ice",
		radiusKm: 22,
		massKg: 0x9fdf42f6e48000,
		periodDays: 24.85,
		semiMajorKm: 48694,
		discovered: "2005",
		discoverer: "Hal Weaver & the Pluto Companion Search Team",
		summary: "A tumbling ice brick. New Horizons caught Nix as a pale, cratered body with a rusty spot — a small world that does not keep a steady day.",
		facts: [
			"Chaotic rotation, like Hyperion, because of Charon’s tug.",
			"About 50 × 35 × 33 km; the “radius” is a mean.",
			"Found with Hydra in the same Hubble program."
		],
		notable: ["visited"]
	},
	{
		slug: "kerberos",
		name: "Kerberos",
		designation: "Pluto IV",
		planetSlug: "pluto",
		planetName: "Pluto",
		kind: "icy",
		palette: "pluto",
		radiusKm: 12,
		massKg: 0x38d7ea4c680000,
		periodDays: 32.17,
		semiMajorKm: 57783,
		discovered: "2011",
		discoverer: "Mark Showalter",
		summary: "A double-lobed ice moon, smaller and darker than expected. New Horizons showed two stuck-together lobes, like a miniature contact binary.",
		facts: [
			"Named for the three-headed dog; the IAU spelling is Kerberos, not Cerberus.",
			"Hubble overestimated its brightness; it is tiny and dark.",
			"It orbits between Nix and Hydra in the packed Pluto system."
		],
		notable: ["visited"]
	},
	{
		slug: "hydra",
		name: "Hydra",
		designation: "Pluto III",
		planetSlug: "pluto",
		planetName: "Pluto",
		kind: "icy",
		palette: "ice",
		radiusKm: 25.5,
		massKg: 0xaa87bee5380000,
		periodDays: 38.2,
		semiMajorKm: 64738,
		discovered: "2005",
		discoverer: "Hal Weaver & the Pluto Companion Search Team",
		summary: "Pluto’s outermost small moon, irregular and tumbling, with a bright icy surface New Horizons resolved into craters and a lumpy silhouette.",
		facts: [
			"The largest of the four small moons, about 65 × 45 × 25 km.",
			"Also in chaotic rotation; the day is not a useful number.",
			"Named for the nine-headed serpent Hercules fought."
		],
		notable: ["visited"]
	},
	{
		slug: "dysnomia",
		name: "Dysnomia",
		designation: "Eris I",
		planetSlug: "eris",
		planetName: "Eris",
		kind: "icy",
		palette: "ice",
		radiusKm: 350,
		massKg: 0xad78ebc5ac6200000,
		periodDays: 15.786,
		semiMajorKm: 37370,
		discovered: "2005",
		discoverer: "Mike Brown et al.",
		summary: "Eris’s only known moon, and the reason we know Eris’s mass. A darkish ice companion that let astronomers weigh the world that dethroned Pluto.",
		facts: [
			"The name is Eris’s daughter, spirit of lawlessness.",
			"Its orbit gave Eris a mass about 27% greater than Pluto’s.",
			"JWST is tightening the diameter; 350 km is still a working mean."
		],
		notable: ["largest"]
	},
	{
		slug: "hiiaka",
		name: "Hiʻiaka",
		designation: "Haumea I",
		planetSlug: "haumea",
		planetName: "Haumea",
		kind: "icy",
		palette: "ice",
		radiusKm: 160,
		massKg: 0xf8699329677e0000,
		periodDays: 49.46,
		semiMajorKm: 49880,
		discovered: "2005",
		discoverer: "Mike Brown et al.",
		summary: "Haumea’s larger child, almost pure water ice, almost certainly born in the impact that spun Haumea into an egg and gave it a ring.",
		facts: [
			"Named for the Hawaiian goddess of dance, daughter of Haumea.",
			"The spectrum is crystalline water ice — a chip off the parent.",
			"It is the outer of the two, on a 49-day orbit."
		],
		notable: ["largest"]
	},
	{
		slug: "namaka",
		name: "Namaka",
		designation: "Haumea II",
		planetSlug: "haumea",
		planetName: "Haumea",
		kind: "icy",
		palette: "ice",
		radiusKm: 85,
		massKg: 0x18d75b8423f30000,
		periodDays: 18.28,
		semiMajorKm: 25657,
		discovered: "2005",
		discoverer: "Mike Brown et al.",
		summary: "The inner, smaller daughter of Haumea. Its orbit is perturbed by Hiʻiaka, a three-body dance still settling after the smash that made them.",
		facts: [
			"Named for a water spirit, another daughter of Haumea.",
			"About one-tenth Hiʻiaka’s mass.",
			"Mutual events in 2009–11 pinned down the sizes."
		],
		notable: ["inner"]
	},
	{
		slug: "mk2",
		name: "MK2",
		designation: "S/2015 (136472) 1",
		planetSlug: "makemake",
		planetName: "Makemake",
		kind: "icy",
		palette: "ceres",
		radiusKm: 87.5,
		massKg: null,
		periodDays: 12.4,
		semiMajorKm: 21e3,
		discovered: "2016",
		discoverer: "Alex Parker et al.",
		summary: "Makemake’s dark, unofficially nicknamed moon, found in Hubble images. No proper name yet; the designation is a date and a number.",
		facts: [
			"About 175 km across if dark, smaller if bright — the working size is ~175 km diameter.",
			"It is much darker than Makemake, which is why it hid for a decade.",
			"Its orbit will eventually yield Makemake’s mass."
		],
		notable: ["largest"]
	}
];
var MOON_BY_SLUG = Object.fromEntries(MOONS.map((m) => [m.slug, m]));
function getMoon(slug) {
	return MOON_BY_SLUG[slug];
}
function moonsForPlanet(planetSlug) {
	return MOONS.filter((m) => m.planetSlug === planetSlug).sort((a, b) => a.semiMajorKm - b.semiMajorKm);
}
var MOON_PLANETS = [
	"earth",
	"mars",
	"jupiter",
	"saturn",
	"uranus",
	"neptune",
	"pluto",
	"eris",
	"haumea",
	"makemake"
];
var MOON_PLANET_LABEL = {
	earth: "Earth",
	mars: "Mars",
	jupiter: "Jupiter",
	saturn: "Saturn",
	uranus: "Uranus",
	neptune: "Neptune",
	pluto: "Pluto",
	eris: "Eris",
	haumea: "Haumea",
	makemake: "Makemake"
};
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/nebulae-DmANztWC.js
var NEBULA_KIND_LABEL = {
	emission: "Emission",
	reflection: "Reflection",
	planetary: "Planetary",
	remnant: "Supernova remnant",
	dark: "Dark",
	mixed: "Emission + reflection"
};
var NEBULA_KIND_INFO = [
	{
		id: "emission",
		label: "Emission",
		summary: "Gas ionised by hot stars, glowing in hydrogen-alpha red and oxygen-III teal. Most are stellar nurseries."
	},
	{
		id: "reflection",
		label: "Reflection",
		summary: "Dust that does not shine on its own. It scatters the blue light of nearby stars, the way smoke catches a lamp."
	},
	{
		id: "planetary",
		label: "Planetary",
		summary: "A Sun-like star’s last envelope, lit from inside by a white dwarf. The name is a leftover from small-telescope views."
	},
	{
		id: "remnant",
		label: "Supernova remnant",
		summary: "The shredded atmosphere of a star that exploded. Filaments of ionised gas expand for millennia."
	},
	{
		id: "dark",
		label: "Dark",
		summary: "Cold molecular clouds that hide the stars behind them. They are where the next generation is still assembling."
	},
	{
		id: "mixed",
		label: "Mixed",
		summary: "A single cloud showing both emission and reflection — ionised gas on one side, blue dust on the other."
	}
];
var NEBULA_TAG_LABEL = {
	messier: "Messier",
	"naked-eye": "Naked eye",
	"stellar-nursery": "Nursery",
	imaged: "Imaged",
	extreme: "Extreme",
	historical: "Historical"
};
var NEBULAE = [
	{
		slug: "orion",
		name: "Orion Nebula",
		designation: "M42 · NGC 1976",
		kind: "emission",
		shape: "cloud",
		constellation: "orion",
		constellationName: "Orion",
		ra: 5.588,
		dec: -5.391,
		distanceLy: 1344,
		sizeLy: 24,
		angularArcmin: 65,
		discovered: "1610",
		illuminatorSlug: null,
		illuminatorName: "Trapezium Cluster",
		colors: [
			"#ff5b7a",
			"#5ad0c8",
			"#ffc48a"
		],
		summary: "The brightest stellar nursery in the northern sky, hanging from Orion’s sword. Four hot O and B stars of the Trapezium ionise a cloud you can see with the naked eye.",
		facts: [
			"About 1,344 light-years away and 24 light-years across.",
			"Peiresc noted it in 1610; Messier catalogued it as M42 in 1769.",
			"JWST images show thousands of planet-forming disks still embedded in the gas."
		],
		notable: [
			"messier",
			"naked-eye",
			"stellar-nursery",
			"imaged"
		]
	},
	{
		slug: "horsehead",
		name: "Horsehead Nebula",
		designation: "Barnard 33",
		kind: "dark",
		shape: "silhouette",
		constellation: "orion",
		constellationName: "Orion",
		ra: 5.679,
		dec: -2.458,
		distanceLy: 1375,
		sizeLy: 3.5,
		angularArcmin: 8,
		discovered: "1888",
		illuminatorSlug: null,
		illuminatorName: "σ Orionis",
		colors: [
			"#2a1c18",
			"#c45a6a",
			"#e8b090"
		],
		summary: "A dark pillar of cold dust silhouetted against the glowing hydrogen of IC 434. The horse’s head is a coincidence of angle — a few light-years of molecular cloud.",
		facts: [
			"First recorded on a Harvard plate by Williamina Fleming in 1888.",
			"Sits just south of Alnitak, the eastern star of Orion’s belt.",
			"The bright rim is ionised by σ Orionis, a hot O9 star out of frame."
		],
		notable: ["imaged", "stellar-nursery"]
	},
	{
		slug: "flame",
		name: "Flame Nebula",
		designation: "NGC 2024",
		kind: "emission",
		shape: "cloud",
		constellation: "orion",
		constellationName: "Orion",
		ra: 5.697,
		dec: -1.757,
		distanceLy: 1350,
		sizeLy: 12,
		angularArcmin: 30,
		discovered: "1786",
		illuminatorSlug: null,
		illuminatorName: "Alnitak",
		colors: [
			"#ff6a4a",
			"#ffb070",
			"#5a3040"
		],
		summary: "A dark dust lane splits a glowing H II region next to Alnitak, looking like a flame caught in a photograph. Young stars are still forming in the lane.",
		facts: [
			"William Herschel catalogued it in 1786.",
			"Alnitak’s ultraviolet light ionises the cloud; a dust band hides the cluster at optical wavelengths.",
			"Infrared images punch through the dust to a packed young cluster."
		],
		notable: ["stellar-nursery", "imaged"]
	},
	{
		slug: "lagoon",
		name: "Lagoon Nebula",
		designation: "M8 · NGC 6523",
		kind: "emission",
		shape: "cloud",
		constellation: "sagittarius",
		constellationName: "Sagittarius",
		ra: 18.06,
		dec: -24.38,
		distanceLy: 4100,
		sizeLy: 110,
		angularArcmin: 90,
		discovered: "1654",
		illuminatorSlug: null,
		illuminatorName: "Herschel 36",
		colors: [
			"#ff4d78",
			"#ff9ab0",
			"#7ad0c8"
		],
		summary: "A vast H II region in Sagittarius, bright enough for binoculars. A dark lagoon of dust cuts across the pink glow, and the Hourglass sits at its brightest knot.",
		facts: [
			"Hodierna recorded it around 1654; Messier listed it in 1764.",
			"Contains the open cluster NGC 6530, a few million years old.",
			"Bok globules in the cloud are collapsing into new stars."
		],
		notable: [
			"messier",
			"naked-eye",
			"stellar-nursery"
		]
	},
	{
		slug: "eagle",
		name: "Eagle Nebula",
		designation: "M16 · NGC 6611",
		kind: "emission",
		shape: "pillars",
		constellation: "serpens",
		constellationName: "Serpens",
		ra: 18.313,
		dec: -13.807,
		distanceLy: 5700,
		sizeLy: 70,
		angularArcmin: 35,
		discovered: "1745",
		illuminatorSlug: null,
		illuminatorName: "NGC 6611",
		colors: [
			"#ff6b7a",
			"#e8c090",
			"#5ad0c8"
		],
		summary: "Home of the Pillars of Creation — three evaporating towers of molecular hydrogen, made famous by Hubble in 1995. New stars are still lighting up inside them.",
		facts: [
			"de Chéseaux found the cluster in 1745; Messier added the nebula in 1764.",
			"The tallest pillar is about four light-years high.",
			"A nearby supernova shock may already have destroyed the pillars — the light has not reached us yet."
		],
		notable: [
			"messier",
			"stellar-nursery",
			"imaged",
			"historical"
		]
	},
	{
		slug: "omega",
		name: "Omega Nebula",
		designation: "M17 · NGC 6618",
		kind: "emission",
		shape: "cloud",
		constellation: "sagittarius",
		constellationName: "Sagittarius",
		ra: 18.346,
		dec: -16.177,
		distanceLy: 5500,
		sizeLy: 40,
		angularArcmin: 46,
		discovered: "1745",
		illuminatorSlug: null,
		illuminatorName: "NGC 6618",
		colors: [
			"#ff5a8a",
			"#ffd0a0",
			"#70d0c8"
		],
		summary: "Also called the Swan. A bright, swan-shaped H II region next to the Eagle, ionised by a still-embedded cluster of O stars.",
		facts: [
			"de Chéseaux found it in 1745; Messier catalogued it in 1764.",
			"One of the brightest star-forming regions in the Galaxy at radio wavelengths.",
			"The swan’s neck is a ridge of denser gas seen edge-on."
		],
		notable: ["messier", "stellar-nursery"]
	},
	{
		slug: "trifid",
		name: "Trifid Nebula",
		designation: "M20 · NGC 6514",
		kind: "mixed",
		shape: "cloud",
		constellation: "sagittarius",
		constellationName: "Sagittarius",
		ra: 18.033,
		dec: -23.03,
		distanceLy: 4100,
		sizeLy: 40,
		angularArcmin: 28,
		discovered: "1764",
		illuminatorSlug: null,
		illuminatorName: "HD 164492",
		colors: [
			"#ff5b7a",
			"#7eb6ff",
			"#e8c4a8"
		],
		summary: "Three dark dust lanes split a pink emission core; a blue reflection nebula sits beside it. One cloud, two kinds of light.",
		facts: [
			"Messier found it in 1764. The name is from Latin trifidus, “split into three.”",
			"The dark lanes are part of a foreground molecular cloud.",
			"A single O7 star ionises the emission half; cooler stars light the blue dust."
		],
		notable: [
			"messier",
			"stellar-nursery",
			"imaged"
		]
	},
	{
		slug: "carina",
		name: "Carina Nebula",
		designation: "NGC 3372",
		kind: "emission",
		shape: "pillars",
		constellation: "carina",
		constellationName: "Carina",
		ra: 10.75,
		dec: -59.87,
		distanceLy: 7500,
		sizeLy: 460,
		angularArcmin: 120,
		discovered: "1752",
		illuminatorSlug: "eta-carinae",
		illuminatorName: "Eta Carinae",
		colors: [
			"#ff6b7a",
			"#e8c090",
			"#5ad0c8"
		],
		summary: "One of the largest H II regions in the Milky Way, four times the span of the Orion Nebula. Eta Carinae, a pair of unstable hypergiants, sits in a dusty Keyhole at its heart.",
		facts: [
			"Lacaille catalogued it from the Cape in 1752.",
			"The Homunculus around Eta Carinae is debris from the Great Eruption of the 1840s.",
			"Contains the open clusters Trumpler 14 and 16, packed with O stars."
		],
		notable: [
			"naked-eye",
			"stellar-nursery",
			"imaged",
			"extreme"
		]
	},
	{
		slug: "rosette",
		name: "Rosette Nebula",
		designation: "NGC 2237",
		kind: "emission",
		shape: "shell",
		constellation: "monoceros",
		constellationName: "Monoceros",
		ra: 6.528,
		dec: 4.995,
		distanceLy: 5e3,
		sizeLy: 130,
		angularArcmin: 80,
		discovered: "1784",
		illuminatorSlug: null,
		illuminatorName: "NGC 2244",
		colors: [
			"#ff5a78",
			"#ffb0c0",
			"#70c8c0"
		],
		summary: "A circular H II region like a rose seen from above. Winds from the cluster NGC 2244 have blown a hole in the middle.",
		facts: [
			"Herschel catalogued parts of it in the 1780s; the cluster was known earlier.",
			"About 130 light-years across — five times Orion.",
			"The cavity is still expanding at a few kilometres per second."
		],
		notable: ["stellar-nursery", "imaged"]
	},
	{
		slug: "north-america",
		name: "North America Nebula",
		designation: "NGC 7000",
		kind: "emission",
		shape: "cloud",
		constellation: "cygnus",
		constellationName: "Cygnus",
		ra: 20.98,
		dec: 44.53,
		distanceLy: 2200,
		sizeLy: 90,
		angularArcmin: 120,
		discovered: "1786",
		illuminatorSlug: "deneb",
		illuminatorName: "Deneb",
		colors: [
			"#ff4d70",
			"#ff9aa8",
			"#5ad0c8"
		],
		summary: "A continent of hydrogen next to Deneb. Dark dust draws a Gulf of Mexico; the Pelican Nebula is the ocean to the west.",
		facts: [
			"Herschel found it in 1786; Max Wolf named it for the map in 1890.",
			"The ionising star was long hidden; 2MASS J205551.25+435422.5 is the current candidate.",
			"Spans about four Moon-widths of sky."
		],
		notable: ["naked-eye", "stellar-nursery"]
	},
	{
		slug: "pelican",
		name: "Pelican Nebula",
		designation: "IC 5070",
		kind: "emission",
		shape: "cloud",
		constellation: "cygnus",
		constellationName: "Cygnus",
		ra: 20.85,
		dec: 44.35,
		distanceLy: 1800,
		sizeLy: 30,
		angularArcmin: 60,
		discovered: "1891",
		illuminatorSlug: "deneb",
		illuminatorName: "Deneb",
		colors: [
			"#ff5b7a",
			"#e090a0",
			"#70d0c8"
		],
		summary: "The companion to the North America Nebula, separated by a dark lane. Ionisation fronts chew into the molecular cloud like a bird’s beak.",
		facts: [
			"Photographed by Max Wolf in 1891.",
			"Herbig–Haro jets poke out of the dark clouds along the “beak.”",
			"Same complex as NGC 7000, a few hundred light-years closer on average."
		],
		notable: ["stellar-nursery"]
	},
	{
		slug: "california",
		name: "California Nebula",
		designation: "NGC 1499",
		kind: "emission",
		shape: "cloud",
		constellation: "perseus",
		constellationName: "Perseus",
		ra: 4.051,
		dec: 36.37,
		distanceLy: 1e3,
		sizeLy: 100,
		angularArcmin: 145,
		discovered: "1884",
		illuminatorSlug: null,
		illuminatorName: "ξ Persei",
		colors: [
			"#ff4a68",
			"#ff8a9a",
			"#c07080"
		],
		summary: "A long, faint H-alpha streak that traces the outline of California. It is lit by the runaway O star Menkhib.",
		facts: [
			"Barnard discovered it photographically in 1884.",
			"Almost 2.5° long — easy in a camera, hard in an eyepiece.",
			"Menkhib (ξ Per) is an O7.5 giant fleeing the Perseus OB2 association."
		],
		notable: ["imaged"]
	},
	{
		slug: "tarantula",
		name: "Tarantula Nebula",
		designation: "30 Doradus · NGC 2070",
		kind: "emission",
		shape: "cloud",
		constellation: "dorado",
		constellationName: "Dorado",
		ra: 5.645,
		dec: -69.101,
		distanceLy: 16e4,
		sizeLy: 1800,
		angularArcmin: 40,
		discovered: "1751",
		illuminatorSlug: null,
		illuminatorName: "R136",
		colors: [
			"#ff4d6a",
			"#ffc070",
			"#5ad0c8"
		],
		summary: "The most violent star factory in the Local Group, in the Large Magellanic Cloud. If it sat at Orion’s distance it would fill a quarter of the sky.",
		facts: [
			"Lacaille catalogued it in 1751. The spider name is twentieth-century.",
			"The cluster R136 holds stars over 150 solar masses, including R136a1.",
			"SN 1987A exploded on its outskirts."
		],
		notable: [
			"naked-eye",
			"stellar-nursery",
			"extreme",
			"imaged"
		]
	},
	{
		slug: "heart",
		name: "Heart Nebula",
		designation: "IC 1805",
		kind: "emission",
		shape: "shell",
		constellation: "cassiopeia",
		constellationName: "Cassiopeia",
		ra: 2.55,
		dec: 61.45,
		distanceLy: 7500,
		sizeLy: 200,
		angularArcmin: 150,
		discovered: "1787",
		illuminatorSlug: null,
		illuminatorName: "Melotte 15",
		colors: [
			"#ff4d70",
			"#e090a0",
			"#70c8c0"
		],
		summary: "A valentine of ionised hydrogen in Cassiopeia, blown by the winds of Melotte 15. The Soul Nebula sits next to it.",
		facts: [
			"Herschel logged the cluster in 1787; the nebula is a later photographic find.",
			"The “heart” is a chance of dust and ionisation fronts.",
			"Several small open clusters sit inside the shell."
		],
		notable: ["stellar-nursery"]
	},
	{
		slug: "crescent",
		name: "Crescent Nebula",
		designation: "NGC 6888",
		kind: "emission",
		shape: "shell",
		constellation: "cygnus",
		constellationName: "Cygnus",
		ra: 20.201,
		dec: 38.355,
		distanceLy: 5e3,
		sizeLy: 25,
		angularArcmin: 18,
		discovered: "1792",
		illuminatorSlug: null,
		illuminatorName: "WR 136",
		colors: [
			"#ff5b7a",
			"#5ad0c8",
			"#e8c090"
		],
		summary: "A clamshell of gas where the fast wind of a Wolf–Rayet star slams into slower material shed earlier. Hydrogen-alpha rims a teal oxygen interior.",
		facts: [
			"Herschel found it in 1792.",
			"WR 136 is a WN6 star of about 15 solar masses, already stripped.",
			"The shell is only a few hundred thousand years old."
		],
		notable: ["imaged", "extreme"]
	},
	{
		slug: "bubble",
		name: "Bubble Nebula",
		designation: "NGC 7635",
		kind: "emission",
		shape: "shell",
		constellation: "cassiopeia",
		constellationName: "Cassiopeia",
		ra: 23.347,
		dec: 61.2,
		distanceLy: 7100,
		sizeLy: 7,
		angularArcmin: 15,
		discovered: "1787",
		illuminatorSlug: null,
		illuminatorName: "BD+60°2522",
		colors: [
			"#7eb6ff",
			"#ff7a9a",
			"#c5d8ff"
		],
		summary: "A seven-light-year bubble blown by the O star BD+60°2522 into a molecular cloud. Hubble’s 2016 image is almost a perfect sphere.",
		facts: [
			"Herschel catalogued it in 1787.",
			"The star is off-centre — the cloud is denser on one side.",
			"Sits on the edge of the open cluster M52."
		],
		notable: ["imaged"]
	},
	{
		slug: "witch-head",
		name: "Witch Head Nebula",
		designation: "IC 2118",
		kind: "reflection",
		shape: "cloud",
		constellation: "eridanus",
		constellationName: "Eridanus",
		ra: 5.09,
		dec: -7.23,
		distanceLy: 900,
		sizeLy: 50,
		angularArcmin: 180,
		discovered: "1909",
		illuminatorSlug: "rigel",
		illuminatorName: "Rigel",
		colors: [
			"#7eb6ff",
			"#c5d8ff",
			"#4a7ec8"
		],
		summary: "A blue witch in profile, catching the light of Rigel from 2.6° away. No ionising flux — only scattered starlight on fine dust.",
		facts: [
			"Barnard photographed it in 1909; the witch name is later.",
			"The dust is part of the Orion–Eridanus superbubble wall.",
			"Rigel, a B8 supergiant, is the lamp. Move the lamp and the witch vanishes."
		],
		notable: ["imaged"]
	},
	{
		slug: "pleiades-nebula",
		name: "Pleiades Reflection",
		designation: "M45 nebulosity",
		kind: "reflection",
		shape: "cloud",
		constellation: "taurus",
		constellationName: "Taurus",
		ra: 3.79,
		dec: 24.12,
		distanceLy: 444,
		sizeLy: 20,
		angularArcmin: 110,
		discovered: "1859",
		illuminatorSlug: null,
		illuminatorName: "Alcyone",
		colors: [
			"#9ec4ff",
			"#e8f0ff",
			"#6a90c8"
		],
		summary: "Blue veils around the Seven Sisters. The cluster is drifting through a dust cloud it did not form in — a chance encounter that photographs beautifully.",
		facts: [
			"Tempel noted Merope’s nebula in 1859. Longer plates showed the rest.",
			"The dust is unrelated to the cluster’s birth cloud, already dispersed.",
			"Merope (23 Tau) lights the brightest patch, NGC 1435."
		],
		notable: [
			"messier",
			"naked-eye",
			"imaged"
		]
	},
	{
		slug: "iris",
		name: "Iris Nebula",
		designation: "NGC 7023",
		kind: "reflection",
		shape: "cloud",
		constellation: "cepheus",
		constellationName: "Cepheus",
		ra: 21.027,
		dec: 68.163,
		distanceLy: 1300,
		sizeLy: 6,
		angularArcmin: 18,
		discovered: "1794",
		illuminatorSlug: null,
		illuminatorName: "HD 200775",
		colors: [
			"#8eb4ff",
			"#e8c0d0",
			"#c5d8ff"
		],
		summary: "A dusty flower in Cepheus, blue from scattered light and faintly pink where large organic molecules fluoresce. A young B star sits in the cup.",
		facts: [
			"Herschel found it in 1794.",
			"The central star HD 200775 is a Herbig Be star still accreting.",
			"PAH emission gives the reddish fringe in wide-field images."
		],
		notable: ["imaged"]
	},
	{
		slug: "ring",
		name: "Ring Nebula",
		designation: "M57 · NGC 6720",
		kind: "planetary",
		shape: "ring",
		constellation: "lyra",
		constellationName: "Lyra",
		ra: 18.893,
		dec: 33.029,
		distanceLy: 2300,
		sizeLy: 1.3,
		angularArcmin: 1.4,
		discovered: "1779",
		illuminatorSlug: null,
		illuminatorName: "Central white dwarf",
		colors: [
			"#5ad0c8",
			"#e07a9a",
			"#b8fff0"
		],
		summary: "A smoke-ring between Vega and Sheliak. We are looking down a barrel of ejected gas; the white dwarf at the centre is the core of a Sun-like star that has already finished.",
		facts: [
			"Darquier found it in 1779, days after Messier independently logged it.",
			"The ring is a torus seen nearly face-on; Hubble resolved the polar lobes.",
			"The central star is a 120,000 K white dwarf of about 0.6 solar masses."
		],
		notable: [
			"messier",
			"imaged",
			"historical"
		]
	},
	{
		slug: "helix",
		name: "Helix Nebula",
		designation: "NGC 7293",
		kind: "planetary",
		shape: "helix",
		constellation: "aquarius",
		constellationName: "Aquarius",
		ra: 22.494,
		dec: -20.837,
		distanceLy: 650,
		sizeLy: 2.5,
		angularArcmin: 16,
		discovered: "1824",
		illuminatorSlug: null,
		illuminatorName: "WD 2226-210",
		colors: [
			"#5ad0c8",
			"#e07a9a",
			"#7ad0ff"
		],
		summary: "The Eye of God: the nearest bright planetary nebula, a stacked pair of rings that look like a helix in projection. Cometary knots point away from the white dwarf.",
		facts: [
			"Harding found it in 1824. It is too large and faint for Messier’s list.",
			"About 650 light-years away — a backyard target in dark skies.",
			"Thousands of tadpole knots are denser gas being evaporated."
		],
		notable: ["imaged"]
	},
	{
		slug: "dumbbell",
		name: "Dumbbell Nebula",
		designation: "M27 · NGC 6853",
		kind: "planetary",
		shape: "bipolar",
		constellation: "vulpecula",
		constellationName: "Vulpecula",
		ra: 19.993,
		dec: 22.721,
		distanceLy: 1360,
		sizeLy: 2,
		angularArcmin: 8,
		discovered: "1764",
		illuminatorSlug: null,
		illuminatorName: "WD 1957+225",
		colors: [
			"#6ee0a0",
			"#e07a9a",
			"#b8fff0"
		],
		summary: "The first planetary nebula ever found. An apple-core of [O III] green with hydrogen-alpha lobes — a bipolar envelope seen from the side.",
		facts: [
			"Messier discovered it on 12 July 1764.",
			"The apple-green tint in eyepieces is oxygen-III emission.",
			"The central star is a 0.56 solar-mass white dwarf at about 85,000 K."
		],
		notable: [
			"messier",
			"historical",
			"imaged"
		]
	},
	{
		slug: "cats-eye",
		name: "Cat’s Eye Nebula",
		designation: "NGC 6543",
		kind: "planetary",
		shape: "helix",
		constellation: "draco",
		constellationName: "Draco",
		ra: 17.979,
		dec: 66.633,
		distanceLy: 3300,
		sizeLy: .4,
		angularArcmin: .3,
		discovered: "1786",
		illuminatorSlug: null,
		illuminatorName: "HD 164963",
		colors: [
			"#5ad0c8",
			"#e8c090",
			"#7ad0ff"
		],
		summary: "Nested bubbles and jets around a dying star in Draco. Hubble’s portrait looks like a cat’s iris; the outer halo is a slower wind from earlier millennia.",
		facts: [
			"Herschel found it in 1786. Huggins took its spectrum in 1864 — the first for a planetary.",
			"At least eleven nested shells, ejected in pulses a few hundred years apart.",
			"The central star is a rare Wolf–Rayet-type white-dwarf precursor."
		],
		notable: [
			"imaged",
			"historical",
			"extreme"
		]
	},
	{
		slug: "eskimo",
		name: "Eskimo Nebula",
		designation: "NGC 2392",
		kind: "planetary",
		shape: "shell",
		constellation: "gemini",
		constellationName: "Gemini",
		ra: 7.484,
		dec: 20.913,
		distanceLy: 2900,
		sizeLy: .7,
		angularArcmin: .8,
		discovered: "1787",
		illuminatorSlug: null,
		illuminatorName: "HD 59088",
		colors: [
			"#7ad0ff",
			"#e8d0a0",
			"#5ad0c8"
		],
		summary: "A double-shell planetary in Gemini, once nicknamed for a parka hood. The inner bubble is being shredded by a fast wind; the outer halo is older, slower gas.",
		facts: [
			"Herschel discovered it in 1787.",
			"The inner shell is only about a thousand years old.",
			"Also catalogued as the Clown Face Nebula."
		],
		notable: ["imaged"]
	},
	{
		slug: "butterfly",
		name: "Butterfly Nebula",
		designation: "NGC 6302",
		kind: "planetary",
		shape: "bipolar",
		constellation: "scorpius",
		constellationName: "Scorpius",
		ra: 17.139,
		dec: -37.107,
		distanceLy: 3400,
		sizeLy: 3,
		angularArcmin: 1.5,
		discovered: "1880",
		illuminatorSlug: null,
		illuminatorName: "HD 155520",
		colors: [
			"#e07a4a",
			"#5ad0c8",
			"#ffc090"
		],
		summary: "One of the most extreme planetary nebulae: two lobes racing apart at 600 km/s from a white dwarf hotter than 200,000 K. Dust hides the star at optical wavelengths.",
		facts: [
			"Barnard noted it in 1880; Hubble named the wings.",
			"The central star is among the hottest known, a PG 1159-type remnant.",
			"The dark waist is a dusty torus, edge-on, collimating the outflow."
		],
		notable: ["imaged", "extreme"]
	},
	{
		slug: "crab",
		name: "Crab Nebula",
		designation: "M1 · NGC 1952",
		kind: "remnant",
		shape: "filaments",
		constellation: "taurus",
		constellationName: "Taurus",
		ra: 5.575,
		dec: 22.014,
		distanceLy: 6500,
		sizeLy: 11,
		angularArcmin: 6,
		discovered: "1731",
		illuminatorSlug: null,
		illuminatorName: "Crab Pulsar",
		colors: [
			"#ff6b7a",
			"#6ec8ff",
			"#ffd080"
		],
		summary: "The shredded remains of a star that exploded in 1054, recorded as a guest star by Chinese and Arabic astronomers. A 33-millisecond pulsar still winds the nebula from inside.",
		facts: [
			"Bevis found the nebula in 1731; Messier made it M1, the start of his catalogue.",
			"The pulsar was discovered in 1968. It is a neutron star about 20 km across.",
			"The filaments expand at about 1,500 km/s. The synchrotron glow is pale teal."
		],
		notable: [
			"messier",
			"historical",
			"extreme",
			"imaged"
		]
	},
	{
		slug: "veil",
		name: "Veil Nebula",
		designation: "NGC 6960 / 6992",
		kind: "remnant",
		shape: "filaments",
		constellation: "cygnus",
		constellationName: "Cygnus",
		ra: 20.75,
		dec: 30.7,
		distanceLy: 2400,
		sizeLy: 110,
		angularArcmin: 180,
		discovered: "1784",
		illuminatorSlug: null,
		illuminatorName: null,
		colors: [
			"#ff5b7a",
			"#5ad0c8",
			"#7eb6ff"
		],
		summary: "The brightest threads of the Cygnus Loop, a supernova blast about 10,000–20,000 years old. Western Veil (Witch’s Broom) hangs on 52 Cygni; Eastern Veil is a separate arc.",
		facts: [
			"Herschel found the western veil in 1784.",
			"The full loop spans 3° — six full Moons.",
			"Shock fronts light hydrogen-alpha red and [O III] teal as they hit the ISM."
		],
		notable: ["imaged", "historical"]
	},
	{
		slug: "cassiopeia-a",
		name: "Cassiopeia A",
		designation: "Cas A",
		kind: "remnant",
		shape: "filaments",
		constellation: "cassiopeia",
		constellationName: "Cassiopeia",
		ra: 23.391,
		dec: 58.808,
		distanceLy: 11e3,
		sizeLy: 10,
		angularArcmin: 5,
		discovered: "1947",
		illuminatorSlug: null,
		illuminatorName: null,
		colors: [
			"#ff7a4a",
			"#6ec8ff",
			"#ffd080"
		],
		summary: "The youngest known supernova remnant in the Milky Way, about 350 years old. Optically dim, it is one of the brightest radio sources in the sky.",
		facts: [
			"Discovered at Cambridge as a radio source in 1947.",
			"The explosion was likely around 1680; no confirmed contemporary report.",
			"Chandra maps iron, silicon, and calcium flung in different directions."
		],
		notable: [
			"extreme",
			"historical",
			"imaged"
		]
	},
	{
		slug: "vela-snr",
		name: "Vela Supernova Remnant",
		designation: "Gum 16",
		kind: "remnant",
		shape: "filaments",
		constellation: "vela",
		constellationName: "Vela",
		ra: 8.59,
		dec: -45.83,
		distanceLy: 800,
		sizeLy: 100,
		angularArcmin: 480,
		discovered: "1955",
		illuminatorSlug: null,
		illuminatorName: "Vela Pulsar",
		colors: [
			"#ff6b7a",
			"#7eb6ff",
			"#5ad0c8"
		],
		summary: "A nearby, huge remnant overlapping the Gum Nebula. The Vela Pulsar at its centre spins 11 times a second and was one of the first radio pulsars found.",
		facts: [
			"The optical filaments were photographed in the 1950s; the pulsar in 1968.",
			"The blast was about 11,000–12,000 years ago.",
			"At 800 light-years it is one of the closest supernova remnants."
		],
		notable: ["extreme", "imaged"]
	},
	{
		slug: "sn-1987a",
		name: "SN 1987A",
		designation: "SN 1987A",
		kind: "remnant",
		shape: "ring",
		constellation: "dorado",
		constellationName: "Dorado",
		ra: 5.592,
		dec: -69.27,
		distanceLy: 168e3,
		sizeLy: 1.3,
		angularArcmin: .03,
		discovered: "1987",
		illuminatorSlug: null,
		illuminatorName: "Sanduleak −69 202",
		colors: [
			"#ffc070",
			"#5ad0c8",
			"#ff6b7a"
		],
		summary: "The nearest supernova in four centuries, exploding in the Large Magellanic Cloud on 23 February 1987. Three rings of earlier wind still light up as the blast hits them.",
		facts: [
			"Neutrinos arrived two hours before the light — the first from a supernova.",
			"The progenitor was a blue supergiant, Sanduleak −69 202.",
			"JWST has started to show a neutron star in the debris."
		],
		notable: [
			"historical",
			"extreme",
			"imaged"
		]
	},
	{
		slug: "coalsack",
		name: "Coalsack Nebula",
		designation: "Caldwell 99",
		kind: "dark",
		shape: "silhouette",
		constellation: "crux",
		constellationName: "Crux",
		ra: 12.85,
		dec: -63.6,
		distanceLy: 600,
		sizeLy: 60,
		angularArcmin: 420,
		discovered: "pre-historic",
		illuminatorSlug: null,
		illuminatorName: null,
		colors: [
			"#2a2420",
			"#6b5344",
			"#c4a890"
		],
		summary: "The most obvious dark nebula in the sky, a sooty patch next to the Southern Cross. Aboriginal Australian traditions call it the head of the Emu in the Sky.",
		facts: [
			"Visible to the naked eye from the southern hemisphere; Vicente Yáñez Pinzón noted it in 1499.",
			"A cold molecular cloud about 600 light-years away.",
			"Several small, dense cores inside are on the verge of forming stars."
		],
		notable: ["naked-eye", "historical"]
	},
	{
		slug: "barnard-68",
		name: "Barnard 68",
		designation: "B68",
		kind: "dark",
		shape: "silhouette",
		constellation: "ophiuchus",
		constellationName: "Ophiuchus",
		ra: 17.377,
		dec: -23.83,
		distanceLy: 410,
		sizeLy: .5,
		angularArcmin: 4,
		discovered: "1919",
		illuminatorSlug: null,
		illuminatorName: null,
		colors: [
			"#1a1410",
			"#5a4034",
			"#c4a890"
		],
		summary: "A nearly round Bok globule that blocks the starfield behind it like a hole in the sky. At infrared wavelengths the hidden stars shine through, mapping the dust.",
		facts: [
			"Barnard catalogued it in 1919. Alves, Lada, and Lada mapped it in 2001.",
			"About half a light-year across and 410 light-years away.",
			"It is close to gravitational collapse — a star may form within the next 100,000 years."
		],
		notable: ["imaged", "stellar-nursery"]
	},
	{
		slug: "pipe",
		name: "Pipe Nebula",
		designation: "Barnard 59 / 77 / 78",
		kind: "dark",
		shape: "silhouette",
		constellation: "ophiuchus",
		constellationName: "Ophiuchus",
		ra: 17.45,
		dec: -26.5,
		distanceLy: 500,
		sizeLy: 20,
		angularArcmin: 300,
		discovered: "1919",
		illuminatorSlug: null,
		illuminatorName: null,
		colors: [
			"#241c18",
			"#6b5344",
			"#d0b090"
		],
		summary: "A smoking-pipe of dust against the Sagittarius Milky Way. The stem is Barnard 59; the bowl is a cluster of dark clouds including the Snake.",
		facts: [
			"Barnard’s plates from 1919 made the shape obvious.",
			"Part of the Ophiuchus dark-cloud complex, a few hundred light-years away.",
			"The stem is actively forming low-mass stars."
		],
		notable: ["naked-eye", "stellar-nursery"]
	}
];
var NEBULA_BY_SLUG = Object.fromEntries(NEBULAE.map((n) => [n.slug, n]));
function getNebula(slug) {
	return NEBULA_BY_SLUG[slug];
}
function nebulaeForStar(slug) {
	return NEBULAE.filter((n) => n.illuminatorSlug === slug);
}
function nebulaeInConstellation(slug) {
	return NEBULAE.filter((n) => n.constellation === slug).sort((a, b) => a.distanceLy - b.distanceLy);
}
function kindCountNebulae(kind) {
	return NEBULAE.filter((n) => n.kind === kind).length;
}
var NEBULA_COUNT = NEBULAE.length;
var FEATURED_NEBULAE = [
	"orion",
	"carina",
	"helix",
	"crab",
	"horsehead",
	"witch-head"
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-krysFcP6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-CTVAuNvW.css";
var APP_NAME = "Astrion";
var Route$14 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Astrion is a stellar atlas — named stars, planets, moons, and the nebulae that light the gaps between them."
			},
			{
				name: "theme-color",
				content: "#07070a"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600&display=swap"
			}
		]
	}),
	component: Root,
	notFoundComponent: NotFound
});
function Root() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-[70dvh] max-w-lg flex-col items-center justify-center px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-[0.2em] text-muted uppercase",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight",
				children: "Not in this atlas"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "That designation is not among the stars, planets, or moons here. Return to the catalog and choose another."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-8 text-sm text-accent underline-offset-4 hover:underline",
				children: "Back to Astrion"
			})
		]
	});
}
var $$splitComponentImporter$13 = () => import("./routes-DW01dzm8.mjs");
var Route$13 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./atlas-CAd76XYh.mjs");
var SPECTRAL = /* @__PURE__ */ new Set([
	"O",
	"B",
	"A",
	"F",
	"G",
	"K",
	"M",
	"W",
	"D",
	"N",
	"L",
	"C"
]);
var KINDS$3 = /* @__PURE__ */ new Set([
	"main-sequence",
	"subgiant",
	"giant",
	"bright-giant",
	"supergiant",
	"hypergiant",
	"white-dwarf",
	"neutron-star",
	"wolf-rayet",
	"luminous-blue-variable"
]);
var DIST = /* @__PURE__ */ new Set([
	"nearby",
	"neighborhood",
	"galactic",
	"distant"
]);
var SORTS$3 = /* @__PURE__ */ new Set([
	"name",
	"distance",
	"magnitude",
	"temperature",
	"luminosity"
]);
var Route$12 = createFileRoute("/atlas")({
	validateSearch: (search) => {
		const next = {};
		if (typeof search.q === "string" && search.q) next.q = search.q;
		if (typeof search.spectral === "string" && SPECTRAL.has(search.spectral)) next.spectral = search.spectral;
		if (typeof search.kind === "string" && KINDS$3.has(search.kind)) next.kind = search.kind;
		if (typeof search.constellation === "string" && search.constellation) next.constellation = search.constellation;
		if (typeof search.distance === "string" && DIST.has(search.distance)) next.distance = search.distance;
		if (typeof search.notable === "string" && search.notable) next.notable = search.notable;
		if (typeof search.sort === "string" && SORTS$3.has(search.sort)) next.sort = search.sort;
		return next;
	},
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./classes-C4kG3bNS.mjs");
var Route$11 = createFileRoute("/classes")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./constellations-OW37pRn4.mjs");
var Route$10 = createFileRoute("/constellations")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./moons-DW36Bwsn.mjs");
var KINDS$2 = /* @__PURE__ */ new Set([
	"rocky",
	"icy",
	"volcanic",
	"irregular"
]);
var PLANETS = new Set(MOON_PLANETS);
var TAGS$2 = /* @__PURE__ */ new Set([
	"galilean",
	"ocean-world",
	"atmosphere",
	"captured",
	"visited",
	"binary",
	"inner",
	"largest"
]);
var SORTS$2 = /* @__PURE__ */ new Set([
	"orbit",
	"name",
	"radius",
	"period"
]);
var Route$9 = createFileRoute("/moons")({
	validateSearch: (search) => {
		const next = {};
		if (typeof search.q === "string" && search.q) next.q = search.q;
		if (typeof search.planet === "string" && PLANETS.has(search.planet)) next.planet = search.planet;
		if (typeof search.kind === "string" && KINDS$2.has(search.kind)) next.kind = search.kind;
		if (typeof search.notable === "string" && TAGS$2.has(search.notable)) next.notable = search.notable;
		if (typeof search.sort === "string" && SORTS$2.has(search.sort)) next.sort = search.sort;
		return next;
	},
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./nebulae-Hbp1OC3h.mjs");
var KINDS$1 = /* @__PURE__ */ new Set([
	"emission",
	"reflection",
	"planetary",
	"remnant",
	"dark",
	"mixed"
]);
var TAGS$1 = /* @__PURE__ */ new Set([
	"messier",
	"naked-eye",
	"stellar-nursery",
	"imaged",
	"extreme",
	"historical"
]);
var SORTS$1 = /* @__PURE__ */ new Set([
	"distance",
	"name",
	"size"
]);
var Route$8 = createFileRoute("/nebulae")({
	validateSearch: (search) => {
		const next = {};
		if (typeof search.q === "string" && search.q) next.q = search.q;
		if (typeof search.kind === "string" && KINDS$1.has(search.kind)) next.kind = search.kind;
		if (typeof search.notable === "string" && TAGS$1.has(search.notable)) next.notable = search.notable;
		if (typeof search.sort === "string" && SORTS$1.has(search.sort)) next.sort = search.sort;
		return next;
	},
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./planets-gDp19HJj.mjs");
var KINDS = /* @__PURE__ */ new Set([
	"terrestrial",
	"gas-giant",
	"ice-giant",
	"dwarf",
	"super-earth",
	"hot-jupiter",
	"mini-neptune"
]);
var SYSTEMS = /* @__PURE__ */ new Set(["solar", "exoplanet"]);
var TAGS = /* @__PURE__ */ new Set([
	"habitable-zone",
	"rings",
	"life",
	"first",
	"extreme",
	"visited",
	"transiting",
	"imaged"
]);
var DISCOVERIES = /* @__PURE__ */ new Set([
	"visual",
	"transit",
	"radial-velocity",
	"imaging",
	"timing"
]);
var SORTS = /* @__PURE__ */ new Set([
	"au",
	"name",
	"mass",
	"radius",
	"period"
]);
var Route$7 = createFileRoute("/planets")({
	validateSearch: (search) => {
		const next = {};
		if (typeof search.q === "string" && search.q) next.q = search.q;
		if (typeof search.kind === "string" && KINDS.has(search.kind)) next.kind = search.kind;
		if (typeof search.system === "string" && SYSTEMS.has(search.system)) next.system = search.system;
		if (typeof search.notable === "string" && TAGS.has(search.notable)) next.notable = search.notable;
		if (typeof search.discovery === "string" && DISCOVERIES.has(search.discovery)) next.discovery = search.discovery;
		if (typeof search.sort === "string" && SORTS.has(search.sort)) next.sort = search.sort;
		return next;
	},
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./sky-CGtolY8j.mjs");
var Route$6 = createFileRoute("/sky")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./constellations.index-Cd6om2Zh.mjs");
var Route$5 = createFileRoute("/constellations/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./constellations._slug-CqhFJ1_2.mjs");
var Route$4 = createFileRoute("/constellations/$slug")({
	loader: ({ params }) => {
		const constellation = CONSTELLATION_BY_SLUG[params.slug];
		if (!constellation) throw notFound();
		return {
			constellation,
			stars: starsInConstellation(params.slug),
			nebulae: nebulaeInConstellation(params.slug)
		};
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.constellation.name} — Astrion` : "Astrion" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./moon._slug-vid6KMPu.mjs");
var Route$3 = createFileRoute("/moon/$slug")({
	loader: ({ params }) => {
		const moon = getMoon(params.slug);
		if (!moon) throw notFound();
		return {
			moon,
			planet: getPlanet(moon.planetSlug),
			siblings: moonsForPlanet(moon.planetSlug).filter((m) => m.slug !== moon.slug)
		};
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.moon.name} — Astrion` : "Astrion" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./nebula._slug-Dj-LEDmG.mjs");
var Route$2 = createFileRoute("/nebula/$slug")({
	loader: ({ params }) => {
		const nebula = getNebula(params.slug);
		if (!nebula) throw notFound();
		return {
			nebula,
			illuminator: nebula.illuminatorSlug ? getStar(nebula.illuminatorSlug) : void 0,
			constellation: CONSTELLATION_BY_SLUG[nebula.constellation],
			siblings: nebulaeInConstellation(nebula.constellation).filter((n) => n.slug !== nebula.slug)
		};
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.nebula.name} — Astrion` : "Astrion" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./planet._slug-BMycO4gS.mjs");
var Route$1 = createFileRoute("/planet/$slug")({
	loader: ({ params }) => {
		const planet = getPlanet(params.slug);
		if (!planet) throw notFound();
		const system = systemOf(planet);
		const siblings = system.filter((p) => p.slug !== planet.slug);
		return {
			planet,
			system,
			related: [...siblings, ...PLANETS$1.filter((p) => p.slug !== planet.slug && p.kind === planet.kind && !siblings.some((s) => s.slug === p.slug))].slice(0, 4),
			moons: moonsForPlanet(planet.slug)
		};
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.planet.name} — Astrion` : "Astrion" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./star._slug-CJDqUeRr.mjs");
var Route = createFileRoute("/star/$slug")({
	loader: ({ params }) => {
		const star = getStar(params.slug);
		if (!star) throw notFound();
		const planets = planetsForStar(star.slug);
		const nebulae = nebulaeForStar(star.slug);
		return {
			star,
			related: relatedStars(star),
			planets,
			nebulae
		};
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.star.name} — Astrion` : "Astrion" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$14
});
var AtlasRoute = Route$12.update({
	id: "/atlas",
	path: "/atlas",
	getParentRoute: () => Route$14
});
var ClassesRoute = Route$11.update({
	id: "/classes",
	path: "/classes",
	getParentRoute: () => Route$14
});
var ConstellationsRoute = Route$10.update({
	id: "/constellations",
	path: "/constellations",
	getParentRoute: () => Route$14
});
var MoonsRoute = Route$9.update({
	id: "/moons",
	path: "/moons",
	getParentRoute: () => Route$14
});
var NebulaeRoute = Route$8.update({
	id: "/nebulae",
	path: "/nebulae",
	getParentRoute: () => Route$14
});
var PlanetsRoute = Route$7.update({
	id: "/planets",
	path: "/planets",
	getParentRoute: () => Route$14
});
var SkyRoute = Route$6.update({
	id: "/sky",
	path: "/sky",
	getParentRoute: () => Route$14
});
var ConstellationsIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => ConstellationsRoute
});
var ConstellationsSlugRoute = Route$4.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ConstellationsRoute
});
var MoonSlugRoute = Route$3.update({
	id: "/moon/$slug",
	path: "/moon/$slug",
	getParentRoute: () => Route$14
});
var NebulaSlugRoute = Route$2.update({
	id: "/nebula/$slug",
	path: "/nebula/$slug",
	getParentRoute: () => Route$14
});
var PlanetSlugRoute = Route$1.update({
	id: "/planet/$slug",
	path: "/planet/$slug",
	getParentRoute: () => Route$14
});
var StarSlugRoute = Route.update({
	id: "/star/$slug",
	path: "/star/$slug",
	getParentRoute: () => Route$14
});
var ConstellationsRouteChildren = {
	ConstellationsSlugRoute,
	ConstellationsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AtlasRoute,
	ClassesRoute,
	ConstellationsRoute: ConstellationsRoute._addFileChildren(ConstellationsRouteChildren),
	MoonsRoute,
	NebulaeRoute,
	PlanetsRoute,
	SkyRoute,
	MoonSlugRoute,
	NebulaSlugRoute,
	PlanetSlugRoute,
	StarSlugRoute
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { MOON_BY_SLUG as C, MOON_PLANET_LABEL as D, MOON_PLANETS as E, MOON_TAG_LABEL as O, MOONS as S, MOON_KIND_LABEL as T, NEBULA_TAG_LABEL as _, Route$3 as a, LUNA_MASS_KG as b, Route$8 as c, FEATURED_NEBULAE as d, NEBULAE as f, NEBULA_KIND_LABEL as g, NEBULA_KIND_INFO as h, Route$2 as i, Route$9 as l, NEBULA_COUNT as m, Route as n, Route$4 as o, NEBULA_BY_SLUG as p, Route$1 as r, Route$7 as s, router_exports as t, Route$12 as u, getNebula as v, MOON_KIND_INFO as w, LUNA_RADIUS_KM as x, kindCountNebulae as y };
