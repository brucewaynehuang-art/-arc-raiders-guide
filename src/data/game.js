// Central data file. Update these values after each patch — every page reads from here.
// Last verified against public patch coverage: September 2026.

export const PATCH = {
  label: 'September 2026 cycle',
  note: 'Fifth Expedition window ran Sept 8\u201329, 2026. Frozen Trail arrives October 8, 2026.',
};

export const maps = [
  {
    slug: 'dam-battlegrounds',
    name: 'Dam Battlegrounds',
    difficulty: 'Beginner',
    blurb: 'The lowest-risk map in the rotation and the standard recommendation for learning the game. Also the community pick for boss farming.',
    bestFor: 'Learning the game, boss farming',
    overview: 'The map most Raiders learn on. Open sightlines, clearly readable points of interest, and a moderate ARC density that punishes carelessness without being unforgiving.',
    pois: [
      { name: 'Electrical Substations', note: 'Low-risk battery and material farming. A safe first stop on any run.' },
      { name: 'Research & Administration', note: 'The map\u2019s high-value, high-risk zone. Better gear here, more ARC and player attention.' },
    ],
    extraction: 'Extraction points here are generally forgiving compared to the rest of the rotation \u2014 the whole reason the map is the standard beginner recommendation. Identify your nearest one on landing and treat the rest of the raid as a bonus.',
    unlockNote: null,
  },
  {
    slug: 'buried-city',
    name: 'Buried City',
    difficulty: 'Advanced',
    blurb: 'A half-buried Italian downtown. Carries the highest player traffic of any map, which makes it a strong coin farm and the most dangerous place to be caught looting.',
    bestFor: 'Coin farming, PvP',
    overview: 'Buried City splits into four readable regions: Outskirts (quiet, industrial, safe for solo farming), West Village (safe residential loot, notably the Grandioso Apartments), Old Town (solid loot but heavy ARC pressure \u2014 play the rooftops), and the New District (the hottest zone on the map: stacked high-value buildings, constant PvP, multiple ARC spawns). Verticality is the map\u2019s real skill: ziplines, broken windows and elevated routes let you avoid the street-level lanes everyone else is watching.',
    pois: [
      { name: 'Library & Grandioso Apartments', note: 'The most consistently reliable loot in the map\u2019s calmer northern half.' },
      { name: 'Hospital, Research, Space Travel, Town Hall', note: 'The high-value cluster. Best loot on the map, and the most contested \u2014 expect both players and heavy ARC.' },
    ],
    extraction: 'Every extraction funnels through the Metro network, and entrances are predictable ambush points \u2014 plan your extraction before your loot route, not after. Northern Station is commonly used after a Hospital/Library run. Western Station requires crossing the exposed Marano Park. Southern Station\u2019s timer tends to run out early, so it suits short runs only, not runs where you are trying to stay topside longer.',
    unlockNote: null,
    arcSpawns: 'Rocketeers cluster near Hospital and Piazza Arbusto. Bombardiers appear in Old Town, Marano Park and on the Parking Garage roof. Bastions spawn in Marano Park, Old Town and Research. Expect Ticks and Fireballs inside tall buildings.',
  },
  {
    slug: 'spaceport',
    name: 'Spaceport',
    difficulty: 'Intermediate',
    blurb: 'An abandoned cosmodrome and one of the largest environments in the game, with long sightlines and sprawling interior complexes that reward players who already know their routes.',
    bestFor: 'Large-scale loot runs, ARC farming',
    overview: 'Spaceport is large, but the points of interest that matter concentrate in its southern half, centred on the Launch Towers. ARC density is heaviest there, which also makes it the best map for farming boss ARC drops and XP if you have the Security Breach skill and weapons suited to ARC damage, such as the Hullcracker, Aphelion or Jupiter.',
    pois: [
      { name: 'Launch Towers', note: 'The centre of the map and the densest ARC concentration \u2014 high risk, high XP and boss-drop farming.' },
      { name: 'Hidden Bunker (event)', note: 'A map modifier event: find eight consoles inside, download data from each (800 Trial Points and 500 XP per console), then extract. All eight must be completed for full credit.' },
      { name: 'Harvester event', note: 'The Queen and a Harvester typically spawn south of Vehicle Maintenance, near the Maintenance Hangar. Loot three containers, place them in the central engine, then destroy the alarm lights to open it \u2014 rewards include Jupiter and Equalizer blueprints. Bring a teammate; this is risky solo.' },
    ],
    extraction: 'Four extraction points, three of them comparatively safe. Western Elevator is the safest, sitting outside the major danger zones. Central Elevator is safer than its open surroundings suggest. South Elevator risks occasional Rocketeer patrols. East Elevator is the most dangerous, with minimal cover and frequent Bombardier activity. Raider Hatches are poorly placed \u2014 the Control Hatch north of Control Tower A6 is the only consistently practical one.',
    unlockNote: null,
  },
  {
    slug: 'blue-gate',
    name: 'Blue Gate',
    difficulty: 'Advanced',
    blurb: 'A mountainous, high-difficulty map north of Dam Battlegrounds with almost no cover between points of interest and the highest concentration of environmental puzzles in the game.',
    bestFor: 'Puzzle rewards, blueprint and Epic-tier loot',
    overview: 'Open terrain and long sightlines make Blue Gate one of the most dangerous maps to simply cross \u2014 snipers can hit you before you know where the shot came from, and ARC patrol the chokepoints constantly. What it offers in exchange is the largest number of environmental puzzles in the game: solving one unlocks purple or gold-tier loot and crafting blueprints. Before starting any puzzle, ask three questions: can you afford the noise, can you defend the interaction, and can you actually extract afterward. If the answer to any is no, take normal containers and move on instead.',
    pois: [
      { name: 'Ancient Fort', note: 'Southeast of the map. A puzzle requiring three fuel cells carried to three fuse boxes to open a basement door holding the map\u2019s most valuable loot. Expect company \u2014 this is one of the busiest puzzle sites.' },
      { name: "Raider's Refuge", note: 'Western section. Similar puzzle structure using four hidden switches instead of fuel cells, opening a cellar door.' },
      { name: 'Reinforced Reception', note: 'Central-northern part of the map. No fixed loot rating, but one of the most consistently player-active areas \u2014 nearly every route eventually passes through it.' },
    ],
    extraction: 'Airshaft exits are exposed vertical commitments and the main extraction type here; Raider Hatches are the safer alternative when you are carrying a Hatch Key. Do not assume the same extraction will be open every raid \u2014 check the raid interface and route toward whichever is safest from your current position. A Forest-side airshaft is generally the better default for solo players, since it avoids forcing the Warehouse and Checkpoint corridors.',
    unlockNote: null,
  },
  {
    slug: 'stella-montis',
    name: 'Stella Montis',
    difficulty: 'Advanced (Level 25+ recommended)',
    blurb: 'A compact, two-level underground research bunker in the northern mountains \u2014 the smallest map by footprint but the highest loot density in the game, and the most PvP-active zone in the rotation.',
    bestFor: 'Endgame blueprint farming, dense loot runs',
    overview: 'Stella Montis is Embark\u2019s only zone with a publicly stated level recommendation, and for good reason: the small footprint concentrates players into close, frequent contact, and the loadout cost of dying here is high. The upper level holds most of the high-value points of interest; the lower level functions mainly as a traversal and escape route. It is easy to get disoriented \u2014 check your map often, since this is one of the few places you can fail a raid purely by getting lost.',
    pois: [
      { name: 'Assembly Workshops & Medical Research', note: 'The two strongest loot locations on the map, and correspondingly the most contested.' },
      { name: 'Cultural Archives', note: 'Strong loot, but largely locked behind a key.' },
      { name: 'Seed Vault', note: 'Requires fuel cells to access. Contains scattered seed loot plus decent general containers and weapon crates nearby.' },
    ],
    extraction: 'Airshaft Extract sits at the far end of the map from most spawns and is comparatively safe. Metro station extracts are fine outside of hot lobbies, but dangerous in a heavily PvP-populated match.',
    unlockNote: 'Unlocks after 24 raids played. Two specific weapon blueprints \u2014 including the Tempest \u2014 only drop here during night raids.',
    arcSpawns: 'Fewer enemies overall than most maps. Bastion is the only boss ARC present; Shredder is the map\u2019s unique enemy and demands careful positioning.',
  },
  {
    slug: 'riven-tides',
    name: 'Riven Tides',
    difficulty: 'Advanced',
    blurb: 'A compact coastal map of beaches, cliffs and flooded industrial structures added in the 1.26.0 update. Widely considered the hardest map currently in rotation.',
    bestFor: 'High-value keycard loot, Beachcombing event farming',
    overview: 'Riven Tides rewards vertical play more than any other map \u2014 elevation controls sightlines across the coastal flats, and players who take the high ground beat close-range loadouts that can\u2019t answer at range. It splits into four zones: Hotel Panorama Azzurro (the highest gold-per-minute area, built around eight keycard-locked rooms), the Stacking Yard (industrial, heavy-ammo loot, one keycard room and a secret room puzzle needing two players), the Port Authority Building (the map\u2019s main PvP hotspot, packed with keycard rooms and close-range fights), and the Seabed (the Beachcombing event zone).',
    pois: [
      { name: 'Hotel Panorama Azzurro', note: 'The single best money-making route: Room 107 spawns three guaranteed Lv.3 IL Toro shotguns and holds the Room 208 keycard in its under-bed safe. Opening 107, then clearing 208 upstairs, can be worth 40,000\u201380,000 vendor gold in one raid \u2014 but it is also the densest indoor fight zone on the map.' },
      { name: 'Stacking Yard', note: 'Strong industrial loot with dangerous sightlines and patrolling ARC. Contains a two-player secret room puzzle requiring several batteries.' },
      { name: 'Wave Breaker / Seabed', note: 'Exposed beachfront with no rooms to hide in \u2014 Vaporizers roam here. Becomes the best loot location on the map once the Beachcombing event is active; a Dockmaster\u2019s Detector (from the Avian Alarm project) reveals buried valuables.' },
    ],
    extraction: 'Use beach access when running light and prioritising speed; use the elevated industrial platforms when carrying a full kit or in a contested lobby, since they are harder to camp from below. Flag both options before you start looting rather than after.',
    unlockNote: 'Unlocks after 20 raids played.',
  },
];

export const weaponTiers = [
  {
    rank: 'S',
    color: 'var(--color-rust-bright)',
    summary: 'Meta-defining. Worth building your loadout around.',
    weapons: [
      { name: 'Anvil', type: 'Hand cannon', note: 'Heavy-ammo sidearm that hits like a primary. Shreds ARC armor and punishes headshots. The single most consistent secondary in the game.' },
      { name: 'Ferro', type: 'Battle rifle', note: 'Craftable from 5 metal and 2 rubber with no blueprint required, yet competes with Rare and Epic weapons. The best value pick in the game.' },
      { name: 'Dolabra', type: 'Energy shotgun', note: 'Legendary. Fires either a wide cone or a medium-range blast. Expensive, but nothing at its price point matches its two-shot potential.' },
      { name: 'Tempest', type: 'Assault rifle', note: 'The fastest documented time-to-kill among assault rifles post-patch. Pairs extremely well with a Silencer III for quiet aggression.' },
      { name: 'Renegade', type: 'Battle rifle', note: 'Accurate, fast and versatile once fully upgraded. Handles PvE and PvP without compromise. Blueprint required.' },
    ],
  },
  {
    rank: 'A',
    color: 'var(--color-arc-teal)',
    summary: 'Strong picks that hold up in most raids.',
    weapons: [
      { name: 'Bobcat', type: 'SMG', note: 'Widely regarded as the best SMG in the game since launch, with burst damage that rivals S-tier options in close PvP.' },
      { name: 'Venator', type: 'Marksman', note: 'Excellent close-to-mid power and versatility, but needs full upgrades before it truly delivers. Rebalanced in patch 1.17.0.' },
      { name: 'Bettina', type: 'Heavy', note: 'Stays very strong when your run leans ARC-heavy rather than PvP-heavy.' },
      { name: 'Stitcher', type: 'SMG', note: 'The best early full-auto find. Commonly dropped in low-tier zones with plenty of Light ammo nearby. Craftable without a blueprint.' },
      { name: 'Hullcracker', type: 'Anti-ARC', note: 'Deals zero damage to players \u2014 purely an ARC-killing tool. Indispensable for Matriarch and Bastion fights, dead weight in PvP.' },
    ],
  },
  {
    rank: 'B',
    color: 'var(--color-text-muted)',
    summary: 'Situational or outclassed, but serviceable.',
    weapons: [
      { name: 'Kettle', type: 'Assault rifle', note: 'Repeatedly nerfed \u2014 fire rate cut from 600 to 450 RPM in 1.11.0, then base damage from 10 to 8.5. Still rewards accurate headshot play, but no longer meta.' },
      { name: 'Jupiter', type: 'Heavy', note: 'Easier to justify after handling buffs, though still more specialised than the safest meta picks.' },
      { name: 'Aphelion', type: 'Special', note: 'Blueprint-dependent and specialised. Rewarding in the right hands, awkward in most loadouts.' },
      { name: 'Arpeggio', type: 'Burst rifle', note: 'Its three-round burst is dismissed by many players, but accuracy and control make it a genuinely lethal early-game option.' },
      { name: 'Equalizer', type: 'Energy', note: 'Powerful, but its bright visible beam broadcasts your exact position to everything in range.' },
    ],
  },
  {
    rank: 'C',
    color: 'var(--color-danger)',
    summary: 'Skip unless you have nothing else.',
    weapons: [
      { name: 'Osprey', type: 'Sniper', note: 'Inaccurate relative to its damage and outclassed in nearly every scenario. Not worth the investment.' },
      { name: 'Hairpin', type: 'Pistol', note: 'The worst PvP damage in the weapon pool, but its integrated suppressor makes it exceptionally quiet \u2014 useful only for silently clearing small ARC.' },
      { name: 'Rattler', type: 'SMG', note: 'An early-game stopgap with tiny magazines. Replace it as soon as your crafting develops.' },
      { name: 'Pharaoh', type: 'Pistol', note: 'Another early option that gets outclassed quickly.' },
    ],
  },
];

export const enemies = [
  {
    name: 'Tick',
    threat: 'Low',
    weakPoint: 'Body \u2014 no armor',
    strategy: 'Leaps at you and latches on before detonating. Shoot or melee it the moment you hear it move. Any weapon works.',
  },
  {
    name: 'Wasp',
    threat: 'Low',
    weakPoint: 'Body \u2014 no armor',
    strategy: 'Small flying drone that chips away at shields. The Flyswatter skill turns these into one-hit kills, saving significant ammo over a raid.',
  },
  {
    name: 'Rollbot',
    threat: 'Low',
    weakPoint: 'Exposed core',
    strategy: 'Low-priority nuisance. Drop it with light ammo and move on rather than burning good rounds.',
  },
  {
    name: 'Hornet',
    threat: 'Medium',
    weakPoint: 'Thrusters',
    strategy: 'Destroy two thrusters and it goes down. Light and medium ammo handle it fine \u2014 no need for heavy.',
  },
  {
    name: 'Firefly',
    threat: 'Medium',
    weakPoint: 'Thrusters',
    strategy: 'Added alongside the Comet and Vaporizer. Treat like a Hornet variant: disable flight first, then finish.',
  },
  {
    name: 'Rocketeer',
    threat: 'Very High',
    weakPoint: 'Thrusters (all four armored)',
    strategy: 'The heaviest flying drone, firing rockets that deal area damage even through cover. A Hornet Driver or Showstopper grenade grounds it for roughly ten seconds. All four thrusters are armored, so bring heavy ammo \u2014 or a single Wolfpack, which nearly drops it outright.',
  },
  {
    name: 'Leaper',
    threat: 'High',
    weakPoint: 'Leg joints, then core',
    strategy: 'Heavily armored mechanical spider that jumps to your position and hits you with a radial sonic blast. Stun it with a Showstopper, then destroy the leg joints to immobilise it before going for the core.',
  },
  {
    name: 'Bastion',
    threat: 'Very High',
    weakPoint: 'Back panel, face plate, leg joints',
    strategy: 'An armored walker with a front-facing minigun that erases shields in seconds out in the open. Its weak spot is on its back \u2014 stick a Snap Hook or Trigger grenade to it. Sticky grenades work; bouncing ones do not. Without stickies, bait it into cover and break the knees, which triggers a small explosion that disables it briefly.',
  },
  {
    name: 'Bombardier',
    threat: 'Very High',
    weakPoint: 'Thrusters and underbelly',
    strategy: 'Flying artillery. Precision heavy ammo or coordinated grenades. Do not fight it in the open.',
  },
  {
    name: 'Snitch',
    threat: 'Medium (escalating)',
    weakPoint: 'Body',
    strategy: 'Does not kill you directly \u2014 it calls in what does. Since update 1.42.0 it can summon a Rocketeer, or a Firefly and Hornet duo. Kill it immediately or leave the area.',
  },
  {
    name: 'Matriarch',
    threat: 'Extreme',
    weakPoint: 'Face plate, then exposed core',
    strategy: 'Its blue shield makes it fully immune \u2014 hold your fire while it is up. When the shield drops, put Hullcracker rounds into the face to break the outer plating, then keep hitting the exposed core. It calls in Bastions and Rocketeers to pressure you from multiple directions. Bring Wolfpack grenades and a full heavy loadout. Not a solo fight.',
    loot: 'Matriarch Reactor, Magnegic Accelerator, Complex Gun Parts, ARC Alloy, Advanced ARC Powercell',
  },
  {
    name: 'Queen',
    threat: 'Extreme',
    weakPoint: 'Leg joints \u2192 head core',
    strategy: 'The hardest ARC in the game. It uses laser beams, EMPs and ground slams while continuously calling Rocketeers. The reliable approach is a stagger loop: break the leg joints to force a knockdown, dump heavy damage into the exposed core, then reset behind cover and manage the adds before repeating. During an early playtest the Queen was killed only 58 times across roughly four million raids \u2014 that is the intended difficulty. Solo kills exist, but expect a long fight and enormous ammo costs.',
  },
];

export const skillTrees = [
  {
    name: 'Mobility',
    focus: 'Stamina, traversal, dodging, climbing',
    verdict: 'Start here. Starting stamina is painfully low and Mobility fixes that faster than anything else.',
    keySkills: [
      { name: 'Marathon Runner', note: 'Reduces stamina cost while moving. Widely considered the single most impactful skill in the game \u2014 max all five ranks before spending anywhere else.' },
      { name: 'Youthful Lungs', note: 'Raises maximum stamina. More sprint, more dodges, more escape options.' },
      { name: 'Effortless Roll', note: 'Cuts dodge roll stamina cost. Directly improves PvP survivability.' },
      { name: 'Carry the Momentum', note: 'Sprint without stamina drain after a sprint dodge roll.' },
      { name: 'Calming Stroll', note: 'Stamina regenerates while walking as if you were standing still. Requires 15 points in Mobility.' },
    ],
  },
  {
    name: 'Survival',
    focus: 'Looting, stealth, field crafting, carry weight',
    verdict: 'Where your profit comes from. Essential for solo players and anyone farming stash value between expeditions.',
    keySkills: [
      { name: "Looter's Instincts", note: 'Containers reveal their contents faster \u2014 less time standing still and exposed.' },
      { name: 'Broad Shoulders', note: 'Increases maximum carry weight. Directly raises what you extract per run.' },
      { name: "Looter's Luck", note: 'Chance to reveal twice as many items at once while looting.' },
      { name: 'Security Breach', note: 'Unlocks Security Locker breaching, a major loot source. Requires 36 points spent in Survival.' },
      { name: 'In-Round Crafting', note: 'Field-craft items while topside. Typically comes online around level 36.' },
    ],
  },
  {
    name: 'Conditioning',
    focus: 'Encumbrance, breaching, combat recovery',
    verdict: 'Mostly clutch and quality-of-life effects. Valuable, but do not invest heavily before your Mobility foundation is in place.',
    keySkills: [
      { name: 'Used to the Weight', note: 'Reduces the movement penalty from wearing a shield. Since you will wear a shield almost constantly, this scales well \u2014 max it.' },
      { name: 'Proficient Pryer', note: 'Faster breaching on containers and doors.' },
      { name: 'Gentle Pressure', note: 'Masks the sound you make while looting. Very strong for solo players.' },
      { name: "Survivor's Stamina", note: 'Faster stamina regeneration when critically hurt.' },
      { name: 'Back on Your Feet', note: 'Health regeneration when critically hurt \u2014 a genuine clutch survival skill.' },
      { name: 'Flyswatter', note: 'One-hit kills on Wasps and turrets. Saves ammo and time across a full raid.' },
    ],
  },
];
