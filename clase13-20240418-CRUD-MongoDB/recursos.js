let alumnos1=[{nombre:'Claudio', apellido:'Garcia'},{nombre:'Jimena', apellido:'Lopez'},{nombre:'Julian', apellido:'Nuñez'}]

let alumnos=[
    {
        nombre:'Ricardo', apellido:'Tapia'
    },
    {
        nombre:'Romina', apellido:'Gaitan'
    },
    {
        nombre:'Cristina', apellido:'Vallejos'
    },
    {
        nombre:'Jimena', apellido:'Rodriguez'
    },
]

let mascotas=[
    {
        nombre:'Azrael',
        especie:'gato',
        edad: 12
    },
    {
        nombre:'Cringer',
        especie: 'tigre',
        edad: 9
    },
    {
        nombre:'Suertudo',
        especie:'gato',
        edad:5
    }
]

let estudiantes=[
    {
        nombre:'Laura',
        apellido:'Perez',
        curso:'Programación Backend',
        edad:27,
        correo:'lperez@gmail.com',
        sexo:'F',
    },
    {
        nombre:'Ariel',
        apellido:'Ramirez',
        curso:'Programación Backend',
        edad:35,
        correo:'aremirez@gmail.com',
        sexo:'M',
    },
    {
        nombre:'Guillermo',
        apellido:'Morales',
        curso:'Programación Backend',
        edad:32,
        correo:'jmoralez@gmail.com',
        sexo:'M',
    },    {
        nombre:'Felipe',
        apellido:'Aguirre',
        curso:'Curso SQL',
        edad:29,
        correo:'faguirre@gmail.com',
        sexo:'M',
    },    {
        nombre:'Laura',
        apellido:'Esquivel',
        curso:'Calculo I',
        edad:19,
        correo:'lesquivel@gmail.com',
        sexo:'F',
    },
]

let estudiante={
    nombre:'Pablo', apellido:'Brown', curso:'Calculo I'
}

let heroesConVillanos = [
    {
        id: 1,
        name: "Spider-Man",
        alias: "Peter Parker",
        powers: ["Wall-crawling", "Superhuman strength"],
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
        powers: ["Superhuman strength", "Lasso of Truth"],
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
        powers: ["Intelligence", "Peak human physical condition", "Advanced technology", "Skilled hand-to-hand combatant"],
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
            { name: "Loki", powers: ["Trickery", "Sorcery", "Reality manipulation"] },
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
            { name: "Red Hulk", powers: ["Superhuman strength", "Heat manipulation", "Invulnerability"] }
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

let masEstudiantes=[
    {
        nombre:'Rafael',
        apellido:'Perez',
        curso:'Programación Backend',
        edad:41,
        correo:'rperez@gmail.com',
        sexo:'M',
    },
    {
        nombre:'Patricia',
        apellido:'Rojas',
        curso:'Calculo I',
        edad:20,
        correo:'projas@gmail.com',
        sexo:'F',
    },
    {
        nombre:'Carolina',
        apellido:'Garcia',
        curso:'Diseño Grafico',
        edad:33,
        correo:'cgarcia@gmail.com',
        sexo:'F',
    },    {
        nombre:'Ruben',
        apellido:'Aguirre',
        curso:'Diseño Grafico',
        edad:36,
        correo:'raguirre@gmail.com',
        sexo:'M',
    },    {
        nombre:'Micaela',
        apellido:'Gork',
        curso:'Calculo I',
        edad:24,
        correo:'mgork@gmail.com',
        sexo:'F',
    },
]

let otroEstudiante={
    nombre:'Ramiro'
}

let masEstudiantes2=[
    { "nombre" : "Pablo", "edad" : 25 },
    { "nombre" : "Juan", "edad" : 22 },
    { "nombre" : "Lucia", "edad" : 25 },
    { "nombre" : "Juan", "edad" : 29 },
    { "nombre" : "Fede", "edad" : 35 },
    { "nombre" : "Raúl", "edad" : 23 },
]

let movies=[
    {
       title: 'Titanic',
       year: 1997,
       genres: [ 'Drama', 'Romance' ]
    },
    {
       title: 'Spirited Away',
       year: 2001,
       genres: [ 'Animation', 'Adventure', 'Family' ]
    },
    {
       title: 'Casablanca',
       genres: [ 'Drama', 'Romance', 'War' ]
    }
]

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