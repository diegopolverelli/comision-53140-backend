https://help.glitch.com/hc/en-us/articles/16287495688845-What-version-of-Node-can-I-use-and-how-do-I-change-update-upgrade-it

// "engines": {
//     "node": "14.x"
//   },

// "engines": { "node": "16.x" }


Swal.fire({
    title:"Identifiquese",
    input:"text",
    text:"Ingrese su nickname",
    inputValidator: (value)=>{
        return !value && "Debe ingresar un nombre...!!!"
    },
    allowOutsideClick:false
})

Swal.fire({
    text:`${nombre} se ha conectado...!!!`,
    toast:true,
    position:"top-right"
})

divMensajes.scrollTop=divMensajes.scrollHeight;




<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>






// nodemon.json
// {
//     "ignore": ["*.json", "*.js"]
// }

let heroesConVillanos = [
    {
        id: 1,
        name: "Spider-Man",
        alias: "Peter Parker",
        powers: ["Wall-crawling", "Web-shooting", "Superhuman strength"],
        team: "Avengers",
        publisher: "Marvel",
        enemies: [
            { name: "Green Goblin", powers: ["Advanced technology", "Glider"] },
            { name: "Venom", powers: ["Symbiote bonding", "Superhuman strength"] },
            { name: "Doctor Octopus", powers: ["Mechanical arms", "Genius intellect"] },
            { name: "Sandman", powers: ["Shape-shifting sand body", "Superhuman strength"] }
        ]
    },
    {
        id: 2,
        name: "Superman",
        alias: "Clark Kent",
        powers: ["Superhuman strength", "Flight", "Heat vision"],
        team: "Justice League",
        publisher: "DC",
        enemies: [
            { name: "Lex Luthor", powers: ["Genius intellect", "Wealth"] },
            { name: "Doomsday", powers: ["Invulnerability", "Adaptive evolution"] },
            { name: "Brainiac", powers: ["Advanced technology", "Superhuman intellect"] },
            { name: "Darkseid", powers: ["Omega beams", "Superhuman strength"] }
        ]
    },
    {
        id: 3,
        name: "Iron Man",
        alias: "Tony Stark",
        powers: ["Powered armor", "Genius-level intellect", "Flight"],
        team: "Avengers",
        publisher: "Marvel",
        enemies: [
            { name: "Mandarin", powers: ["Rings of power", "Mystical abilities"] },
            { name: "Whiplash", powers: ["Whips with energy projection", "Engineering skills"] },
            { name: "Obadiah Stane", powers: ["Advanced technology", "Business acumen"] },
            { name: "Ultron", powers: ["Artificial intelligence", "Advanced weaponry"] }
        ]
    },
    {
        id: 4,
        name: "Wonder Woman",
        alias: "Diana Prince",
        powers: ["Superhuman strength", "Lasso of Truth", "Flight"],
        team: "Justice League",
        publisher: "DC",
        enemies: [
            { name: "Ares", powers: ["God of War", "Immortality"] },
            { name: "Cheetah", powers: ["Enhanced strength", "Agility"] },
            { name: "Circe", powers: ["Magic spells", "Immortality"] },
            { name: "Darkseid", powers: ["Omega beams", "Superhuman strength"] }
        ]
    },
    {
        id: 5,
        name: "Black Widow",
        alias: "Natasha Romanoff",
        powers: ["Expert spy", "Skilled hand-to-hand combatant", "Weaponry"],
        team: "Avengers",
        publisher: "Marvel",
        enemies: [
            { name: "Taskmaster", powers: ["Photographic reflexes", "Martial arts skills"] },
            { name: "Red Guardian", powers: ["Enhanced strength", "Soviet super-soldier serum"] },
            { name: "Winter Soldier", powers: ["Bionic arm", "Assassin training"] }
        ]
    },
    {
        id: 6,
        name: "Batman",
        alias: "Bruce Wayne",
        powers: ["Intelligence", "Peak human physical condition", "Advanced technology"],
        team: "Justice League",
        publisher: "DC",
        enemies: [
            { name: "Joker", powers: ["Criminal mastermind", "Maniacal humor"] },
            { name: "Two-Face", powers: ["Dual personality", "Coin-based decisions"] },
            { name: "Penguin", powers: ["Criminal underworld connections", "Trick umbrellas"] },
            { name: "Ra's al Ghul", powers: ["Immortality", "Martial arts mastery"] }
        ]
    },
    {
        id: 7,
        name: "Aquaman",
        alias: "Arthur Curry",
        powers: ["Superhuman strength", "Hydrokinesis", "Telepathy with sea life"],
        team: "Justice League",
        publisher: "DC",
        enemies: [
            { name: "Black Manta", powers: ["Advanced technology", "Underwater combat skills"] },
            { name: "Ocean Master", powers: ["Control over sea and weather", "Trident mastery"] },
            { name: "King Shark", powers: ["Superhuman strength", "Shark-like attributes"] }
        ]
    },
    {
        id: 8,
        name: "Captain America",
        alias: "Steve Rogers",
        powers: ["Superhuman strength", "Enhanced agility", "Indomitable will"],
        team: "Avengers",
        publisher: "Marvel",
        enemies: [
            { name: "Red Skull", powers: ["Superhuman intellect", "Adversarial combat skills"] },
            { name: "Winter Soldier", powers: ["Bionic arm", "Assassin training"] },
            { name: "Crossbones", powers: ["Enhanced strength", "Expert combatant"] }
        ]
    },
    {
        id: 9,
        name: "Flash",
        alias: "Barry Allen",
        powers: ["Super speed", "Time travel", "Speed force manipulation"],
        team: "Justice League",
        publisher: "DC",
        enemies: [
            { name: "Reverse-Flash", powers: ["Speedster abilities", "Time manipulation"] },
            { name: "Zoom", powers: ["Temporal manipulation", "Speedster abilities"] },
            { name: "Captain Cold", powers: ["Cryogenic weaponry", "Cold generation"] },
            { name: "Gorilla Grodd", powers: ["Telepathy", "Enhanced intelligence"] }
        ]
    },
    {
        id: 10,
        name: "Black Panther",
        alias: "T'Challa",
        powers: ["Enhanced senses", "Vibranium suit", "Skilled warrior"],
        team: "Avengers",
        publisher: "Marvel",
        enemies: [
            { name: "Killmonger", powers: ["Enhanced strength", "Wakandan combat training"] },
            { name: "Man-Ape", powers: ["Enhanced strength", "Gorilla-like abilities"] },
            { name: "Klaw", powers: ["Sonic emitter", "Vibranium manipulation"] }
        ]
    },
    {
        id: 11,
        name: "Green Lantern",
        alias: "Hal Jordan",
        powers: ["Ring-generated constructs", "Flight", "Energy manipulation"],
        team: "Justice League",
        publisher: "DC",
        enemies: [
            { name: "Sinestro", powers: ["Yellow power ring", "Fear manipulation"] },
            { name: "Atrocitus", powers: ["Red power ring", "Rage empowerment"] },
            { name: "Parallax", powers: ["Fear embodiment", "Reality manipulation"] }
        ]
    },
    {
        id: 12,
        name: "Thor",
        alias: "Thor Odinson",
        powers: ["Mjolnir (hammer)", "Control over lightning", "Superhuman durability"],
        team: "Avengers",
        publisher: "Marvel",
        enemies: [
            { name: "Loki", powers: ["Trickery", "Sorcery"] },
            { name: "Hela", powers: ["Death magic", "Immortality"] },
            { name: "Malekith", powers: ["Dark magic", "Reality manipulation"] },
            { name: "Surtur", powers: ["Fire manipulation", "Giant form"] }
        ]
    },
    {
        id: 13,
        name: "Batwoman",
        alias: "Kate Kane",
        powers: ["Martial arts", "Detective skills", "Advanced technology"],
        team: "Bat Family",
        publisher: "DC",
        enemies: [
            { name: "Alice", powers: ["Madness manipulation", "Martial arts"] },
            { name: "Mad Hatter", powers: ["Mind control technology", "Obsession with hats"] },
            { name: "The Many Arms of Death", powers: ["Assassin skills", "Mercenary group"] }
        ]
    },
    {
        id: 14,
        name: "Hulk",
        alias: "Bruce Banner",
        powers: ["Superhuman strength", "Invulnerability", "Regenerative healing"],
        team: "Avengers",
        publisher: "Marvel",
        enemies: [
            { name: "Abomination", powers: ["Enhanced strength", "Regeneration"] },
            { name: "The Leader", powers: ["Genius intellect", "Gamma radiation manipulation"] },
            { name: "Red Hulk", powers: ["Superhuman strength", "Heat manipulation"] }
        ]
    },
    {
        id: 15,
        name: "Zatanna",
        alias: "Zatanna Zatara",
        powers: ["Magic spells", "Sorcery", "Illusion manipulation"],
        team: "Justice League Dark",
        publisher: "DC",
        enemies: [
            { name: "Constantine", powers: ["Occult knowledge", "Hellblazer abilities"] },
            { name: "Nick Necro", powers: ["Dark magic", "Necromancy"] },
            { name: "Felix Faust", powers: ["Sorcery", "Dark rituals"] }
        ]
    },
    {
        id: 16,
        name: "Doctor Strange",
        alias: "Stephen Strange",
        powers: ["Mystic arts", "Reality manipulation", "Dimensional travel"],
        team: "Defenders",
        publisher: "Marvel",
        enemies: [
            { name: "Baron Mordo", powers: ["Sorcery", "Dark magic"] },
            { name: "Dormammu", powers: ["Dark dimension ruler", "Reality manipulation"] },
            { name: "Shuma-Gorath", powers: ["Chaos magic", "Reality warping"] }
        ]
    },
    {
        id: 17,
        name: "Green Arrow",
        alias: "Oliver Queen",
        powers: ["Archery skills", "Peak human physical condition", "Strategic mind"],
        team: "Justice League",
        publisher: "DC",
        enemies: [
            { name: "Deathstroke", powers: ["Enhanced strength", "Master tactician"] },
            { name: "Merlyn", powers: ["Expert marksman", "Assassin skills"] },
            { name: "Komodo", powers: ["Archery skills", "Biological enhancements"] }
        ]
    },
    {
        id: 18,
        name: "Scarlet Witch",
        alias: "Wanda Maximoff",
        powers: ["Reality manipulation", "Energy projection", "Telekinesis"],
        team: "Avengers",
        publisher: "Marvel",
        enemies: [
            { name: "Agatha Harkness", powers: ["Witchcraft", "Mentor to Scarlet Witch"] },
            { name: "Chthon", powers: ["Elder God", "Dark magic"] },
            { name: "Magneto", powers: ["Magnetism manipulation", "Master strategist"] }
        ]
    },
    {
        id: 19,
        name: "Martian Manhunter",
        alias: "J'onn J'onzz",
        powers: ["Shape-shifting", "Telepathy", "Super strength"],
        team: "Justice League",
        publisher: "DC",
        enemies: [
            { name: "Ma'alefa'ak", powers: ["Fire manipulation", "Mental abilities"] },
            { name: "White Martians", powers: ["Advanced shape-shifting", "Psychic powers"] },
            { name: "Fernus", powers: ["Fire manipulation", "Psychic powers"] }
        ]
    },
    {
        id: 20,
        name: "Deadpool",
        alias: "Wade Wilson",
        powers: ["Regenerative healing", "Expert marksman", "Fourth wall breaking"],
        team: "None",
        publisher: "Marvel",
        enemies: [
            { name: "Taskmaster", powers: ["Photographic reflexes", "Martial arts skills"] },
            { name: "Cable", powers: ["Telekinesis", "Time travel"] },
            { name: "Ajax", powers: ["Enhanced strength", "Regeneration"] }
        ]
    }
];

let heroes = [
    {
        id: 1,
        name: "Spider-Man",
        alias: "Peter Parker",
        powers: ["Wall-crawling", "Web-shooting", "Superhuman strength"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 2,
        name: "Superman",
        alias: "Clark Kent",
        powers: ["Superhuman strength", "Flight", "Heat vision"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 3,
        name: "Iron Man",
        alias: "Tony Stark",
        powers: ["Powered armor", "Genius-level intellect", "Flight"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 4,
        name: "Wonder Woman",
        alias: "Diana Prince",
        powers: ["Superhuman strength", "Lasso of Truth", "Flight"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 5,
        name: "Black Widow",
        alias: "Natasha Romanoff",
        powers: ["Expert spy", "Skilled hand-to-hand combatant", "Weaponry"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 6,
        name: "Batman",
        alias: "Bruce Wayne",
        powers: ["Intelligence", "Peak human physical condition", "Advanced technology"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 7,
        name: "Aquaman",
        alias: "Arthur Curry",
        powers: ["Superhuman strength", "Hydrokinesis", "Telepathy with sea life"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 8,
        name: "Captain America",
        alias: "Steve Rogers",
        powers: ["Superhuman strength", "Enhanced agility", "Indomitable will"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 9,
        name: "Flash",
        alias: "Barry Allen",
        powers: ["Super speed", "Time travel", "Speed force manipulation"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 10,
        name: "Black Panther",
        alias: "T'Challa",
        powers: ["Enhanced senses", "Vibranium suit", "Skilled warrior"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 11,
        name: "Green Lantern",
        alias: "Hal Jordan",
        powers: ["Ring-generated constructs", "Flight", "Energy manipulation"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 12,
        name: "Thor",
        alias: "Thor Odinson",
        powers: ["Mjolnir (hammer)", "Control over lightning", "Superhuman durability"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 13,
        name: "Batwoman",
        alias: "Kate Kane",
        powers: ["Martial arts", "Detective skills", "Advanced technology"],
        team: "Bat Family",
        publisher: "DC"
    },
    {
        id: 14,
        name: "Hulk",
        alias: "Bruce Banner",
        powers: ["Superhuman strength", "Invulnerability", "Regenerative healing"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 15,
        name: "Zatanna",
        alias: "Zatanna Zatara",
        powers: ["Magic spells", "Sorcery", "Illusion manipulation"],
        team: "Justice League Dark",
        publisher: "DC"
    },
    {
        id: 16,
        name: "Doctor Strange",
        alias: "Stephen Strange",
        powers: ["Mystic arts", "Reality manipulation", "Dimensional travel"],
        team: "Defenders",
        publisher: "Marvel"
    },
    {
        id: 17,
        name: "Green Arrow",
        alias: "Oliver Queen",
        powers: ["Archery skills", "Peak human physical condition", "Strategic mind"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 18,
        name: "Scarlet Witch",
        alias: "Wanda Maximoff",
        powers: ["Reality manipulation", "Energy projection", "Telekinesis"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 19,
        name: "Martian Manhunter",
        alias: "J'onn J'onzz",
        powers: ["Shape-shifting", "Telepathy", "Super strength"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 20,
        name: "Deadpool",
        alias: "Wade Wilson",
        powers: ["Regenerative healing", "Expert marksman", "Fourth wall breaking"],
        team: "None",
        publisher: "Marvel"
    }
];

let villanos = [
    {
        id: 1,
        name: "Joker",
        alias: "Unknown",
        powers: ["Criminal mastermind", "Insanity", "Trickery"],
        team: "Injustice League",
        publisher: "DC"
    },
    {
        id: 2,
        name: "Magneto",
        alias: "Erik Lehnsherr",
        powers: ["Magnetism manipulation", "Control over metal", "Leadership"],
        team: "Brotherhood of Mutants",
        publisher: "Marvel"
    },
    {
        id: 3,
        name: "Lex Luthor",
        alias: "Alexander Luthor",
        powers: ["Genius-level intellect", "Wealth", "Power suit"],
        team: "Injustice League",
        publisher: "DC"
    },
    {
        id: 4,
        name: "Loki",
        alias: "Loki Laufeyson",
        powers: ["Shape-shifting", "Illusions", "Sorcery"],
        team: "Asgardian rogues",
        publisher: "Marvel"
    },
    {
        id: 5,
        name: "Two-Face",
        alias: "Harvey Dent",
        powers: ["Duality obsession", "Coin flipping", "Expert marksman"],
        team: "None",
        publisher: "DC"
    },
    {
        id: 6,
        name: "Green Goblin",
        alias: "Norman Osborn",
        powers: ["Superhuman strength", "Glider flight", "Goblin gadgets"],
        team: "Sinister Six",
        publisher: "Marvel"
    },
    {
        id: 7,
        name: "Darkseid",
        alias: "Uxas",
        powers: ["Omega Beams", "Superhuman strength", "Immortality"],
        team: "New Gods",
        publisher: "DC"
    },
    {
        id: 8,
        name: "Thanos",
        alias: "Thanos",
        powers: ["Superhuman strength", "Reality manipulation", "Infinity Gauntlet"],
        team: "Black Order",
        publisher: "Marvel"
    },
    {
        id: 9,
        name: "Catwoman",
        alias: "Selina Kyle",
        powers: ["Acrobatics", "Thievery skills", "Whip mastery"],
        team: "None",
        publisher: "DC"
    },
    {
        id: 10,
        name: "Doctor Doom",
        alias: "Victor von Doom",
        powers: ["Genius-level intellect", "Armor suit", "Sorcery"],
        team: "None",
        publisher: "Marvel"
    },
    {
        id: 11,
        name: "Harley Quinn",
        alias: "Harleen Quinzel",
        powers: ["Acrobatics", "Deadly weapons", "Unpredictability"],
        team: "Injustice League",
        publisher: "DC"
    },
    {
        id: 12,
        name: "Sabretooth",
        alias: "Victor Creed",
        powers: ["Superhuman strength", "Enhanced senses", "Regenerative healing"],
        team: "Brotherhood of Mutants",
        publisher: "Marvel"
    },
    {
        id: 13,
        name: "Ra's al Ghul",
        alias: "Unknown",
        powers: ["Longevity", "Martial arts mastery", "Strategic genius"],
        team: "League of Assassins",
        publisher: "DC"
    },
    {
        id: 14,
        name: "Venom",
        alias: "Eddie Brock",
        powers: ["Symbiote bonding", "Superhuman strength", "Shape-shifting"],
        team: "None",
        publisher: "Marvel"
    },
    {
        id: 15,
        name: "Deathstroke",
        alias: "Slade Wilson",
        powers: ["Enhanced strength", "Master tactician", "Regenerative healing"],
        team: "Injustice League",
        publisher: "DC"
    },
    {
        id: 16,
        name: "Mystique",
        alias: "Raven Darkholme",
        powers: ["Shape-shifting", "Agility", "Combat expertise"],
        team: "Brotherhood of Mutants",
        publisher: "Marvel"
    },
    {
        id: 17,
        name: "Penguin",
        alias: "Oswald Cobblepot",
        powers: ["Cunning mind", "Wealth", "Umbrella gadgets"],
        team: "None",
        publisher: "DC"
    },
    {
        id: 18,
        name: "Red Skull",
        alias: "Johann Schmidt",
        powers: ["Strategic genius", "Superhuman durability", "Hatred for Captain America"],
        team: "Hydra",
        publisher: "Marvel"
    },
    {
        id: 19,
        name: "Enchantress",
        alias: "June Moone",
        powers: ["Magic spells", "Sorcery", "Reality manipulation"],
        team: "Suicide Squad",
        publisher: "DC"
    },
    {
        id: 20,
        name: "Kingpin",
        alias: "Wilson Fisk",
        powers: ["Superhuman strength", "Master tactician", "Criminal empire"],
        team: "None",
        publisher: "Marvel"
    }
];

let pets = [
    {
        id: 1,
        breed: "Labrador Retriever",
        origin: "United Kingdom",
        size: "Large",
        temperament: ["Outgoing", "Even-tempered", "Gentle"],
        lifespan: "10-12 years"
    },
    {
        id: 2,
        breed: "German Shepherd",
        origin: "Germany",
        size: "Large",
        temperament: ["Loyal", "Intelligent", "Confident"],
        lifespan: "9-13 years"
    },
    {
        id: 3,
        breed: "Golden Retriever",
        origin: "United Kingdom",
        size: "Large",
        temperament: ["Intelligent", "Friendly", "Devoted"],
        lifespan: "10-12 years"
    },
    {
        id: 4,
        breed: "French Bulldog",
        origin: "France",
        size: "Small",
        temperament: ["Adaptable", "Playful", "Affectionate"],
        lifespan: "10-12 years"
    },
    {
        id: 5,
        breed: "Bulldog",
        origin: "United Kingdom",
        size: "Medium",
        temperament: ["Docile", "Willful", "Friendly"],
        lifespan: "8-10 years"
    },
    {
        id: 6,
        breed: "Poodle",
        origin: "Germany / France",
        size: "Various (Standard, Miniature, Toy)",
        temperament: ["Intelligent", "Active", "Alert"],
        lifespan: "10-18 years"
    },
    {
        id: 7,
        breed: "Beagle",
        origin: "United Kingdom",
        size: "Small",
        temperament: ["Friendly", "Curious", "Merry"],
        lifespan: "10-15 years"
    },
    {
        id: 8,
        breed: "Rottweiler",
        origin: "Germany",
        size: "Large",
        temperament: ["Good-natured", "Loyal", "Courageous"],
        lifespan: "8-10 years"
    },
    {
        id: 9,
        breed: "Yorkshire Terrier",
        origin: "United Kingdom",
        size: "Small",
        temperament: ["Affectionate", "Sprightly", "Tomboyish"],
        lifespan: "12-15 years"
    },
    {
        id: 10,
        breed: "Dachshund",
        origin: "Germany",
        size: "Small",
        temperament: ["Clever", "Stubborn", "Devoted"],
        lifespan: "12-16 years"
    },
]

const starWarsCharacters = [
    {
        id: 1,
        name: "Luke Skywalker",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 2,
        name: "Darth Vader",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 3,
        name: "Princess Leia Organa",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 4,
        name: "Emperor Palpatine",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 5,
        name: "Han Solo",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 6,
        name: "Boba Fett",
        affiliation: "Villain",
        species: "Human",
        weapon: "Blaster",
        side: "Neutral"
    },
    {
        id: 7,
        name: "Obi-Wan Kenobi",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 8,
        name: "Count Dooku",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 9,
        name: "Rey",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 10,
        name: "Kylo Ren",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 11,
        name: "Yoda",
        affiliation: "Hero",
        species: "Yoda's species",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 12,
        name: "Maul",
        affiliation: "Villain",
        species: "Dathomirian",
        weapon: "Double-bladed lightsaber",
        side: "Dark"
    },
    {
        id: 13,
        name: "Chewbacca",
        affiliation: "Hero",
        species: "Wookiee",
        weapon: "Bowcaster",
        side: "Light"
    },
    {
        id: 14,
        name: "General Grievous",
        affiliation: "Villain",
        species: "Kaleesh",
        weapon: "Multiple lightsabers",
        side: "Dark"
    },
    {
        id: 15,
        name: "Anakin Skywalker",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 16,
        name: "Jabba the Hutt",
        affiliation: "Villain",
        species: "Hutt",
        weapon: "None",
        side: "Neutral"
    },
    {
        id: 17,
        name: "Lando Calrissian",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 18,
        name: "Admiral Thrawn",
        affiliation: "Villain",
        species: "Chiss",
        weapon: "Strategist",
        side: "Dark"
    },
    {
        id: 19,
        name: "Padmé Amidala",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 20,
        name: "Asajj Ventress",
        affiliation: "Villain",
        species: "Dathomirian",
        weapon: "Dual lightsabers",
        side: "Dark"
    },
]

const demonSlayer = [
    {
        id: 1,
        name: "Tanjiro Kamado",
        powers: ["Breathing Techniques", "Water Breathing"],
        role: "Main Protagonist",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 2,
        name: "Nezuko Kamado",
        powers: ["Demon Abilities", "Blood Demon Art"],
        role: "Main Protagonist",
        team: "None",
        demonSlayer: false
    },
    {
        id: 3,
        name: "Zenitsu Agatsuma",
        powers: ["Breathing Techniques", "Thunder Breathing"],
        role: "Main Character",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 4,
        name: "Inosuke Hashibira",
        powers: ["Beast Breathing", "Boar Mask"],
        role: "Main Character",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 5,
        name: "Kyojuro Rengoku",
        powers: ["Flame Breathing", "Fire Sword"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 6,
        name: "Enmu",
        powers: ["Morphing", "Blood Demon Art"],
        role: "Lower Moon One",
        team: "Twelve Kizuki",
        demonSlayer: false
    },
    {
        id: 7,
        name: "Rui",
        powers: ["Spider Threads", "Blood Demon Art"],
        role: "Lower Moon Five",
        team: "Twelve Kizuki",
        demonSlayer: false
    },
    {
        id: 8,
        name: "Shinobu Kocho",
        powers: ["Insect Breathing", "Venomous Wasp"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 9,
        name: "Muzan Kibutsuji",
        powers: ["Demon Abilities", "Blood Manipulation"],
        role: "Main Antagonist",
        team: "None",
        demonSlayer: false
    },
    {
        id: 10,
        name: "Giyu Tomioka",
        powers: ["Water Breathing", "Water Hashira"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 11,
        name: "Muichiro Tokito",
        powers: ["Mist Breathing", "Mist Hashira"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 12,
        name: "Tengen Uzui",
        powers: ["Sound Breathing", "Sound Hashira"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 13,
        name: "Akaza",
        powers: ["Upper Moon Three", "Demon Abilities"],
        role: "Twelve Kizuki",
        team: "None",
        demonSlayer: false
    },
    {
        id: 14,
        name: "Kanao Tsuyuri",
        powers: ["Flower Breathing", "Kaleidoscope Sword"],
        role: "Demon Slayer",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 15,
        name: "Kyogai",
        powers: ["Temari Ball", "Demon Abilities"],
        role: "Demon",
        team: "Twelve Kizuki",
        demonSlayer: false
    },
    {
        id: 16,
        name: "Genya Shinazugawa",
        powers: ["Mouth Demon Slayer", "Demon Abilities"],
        role: "Demon Slayer",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 17,
        name: "Sanemi Shinazugawa",
        powers: ["Wind Breathing", "Wind Hashira"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 18,
        name: "Kokushibo",
        powers: ["Upper Moon One", "Demon Abilities"],
        role: "Twelve Kizuki",
        team: "None",
        demonSlayer: false
    },
    {
        id: 19,
        name: "Mitsuri Kanroji",
        powers: ["Love Breathing", "Love Hashira"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 20,
        name: "Yushiro",
        powers: ["Demon Abilities", "Blood Manipulation"],
        role: "Demon",
        team: "None",
        demonSlayer: false
    }
];



const path=require('path')
const fs=require('fs')

let ruta=path.join(__dirname,'archivos','usuarios.json') 

function getUsers(){
    if(fs.existsSync(ruta)){
        return JSON.parse(fs.readFileSync(ruta,'utf-8'))
    }else{
        return []
    }
}

function saveUsers(users){
    fs.writeFileSync(ruta, JSON.stringify(users, null, 5))    
}


// https://www.youtube.com/watch?v=wfogZfIS03U     Expresiones Regulares 

// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet

// Ejemplos de expresiones regulares que sirven para validar emails (ej. para
// correr con JavaScript):
// Patrón corto
let reCorto = /\S+@\S+\.\S+/
// Patrón Medio
let reMedio = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
// Patrón Largo
let reLargo = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
let res=reCorto.test('prueba@correo.com') // true
console.log(res)
res=reMedio.test('prueba@correo.com') // true
console.log(res)
res=reLargo.test('prueba@correo.com') // true
console.log(res)

// --------------------------------------
// --------------------------------------
// --------------------------------------




