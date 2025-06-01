const books = [
  {
    id: "1",
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    spineColor: "#99b27f",
    status: "Classic Fiction",
    description: "An aging fisherman engages in an epic battle with a giant marlin.",
    because: "It's on my bookshelf because it reminds me of the quiet strength found in persistence and solitude."
  },
  {
    id: "2",
    title: "American Dirt",
    author: "Jeanine Cummins",
    spineColor: "#eeedbe",
    status: "Contemporary Drama",
    description: "A Mexican bookseller flees to the U.S. with her son after a cartel attack.",
    because: "It's on my bookshelf because it sheds light on courage and survival."
  },
  {
    id: "3",
    title: "The Very Secret Society of Irregular Witches",
    author: "Sangu Mandanna",
    spineColor: "#e79e85",
    status: "Fantasy Romance",
    description: "An isolated witch finds family and love in an unexpected place.",
    because: "It's on my bookshelf because it blends a found family—theme with magical whimsy."
  },
  {
    id: "4",
    title: "The Good Earth",
    author: "Pearl S. Buck",
    spineColor: "#bb5a5a",
    status: "Historical Fiction",
    description: "A Chinese farmer's life is chronicled through times of prosperity and hardship.",
    because: "It's on my bookshelf because learning how people lived in ancient times fascinates me."
  },
  {
    id: "5",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    spineColor: "#58727f",
    status: "Classic Fiction",
    description: "A young girl confronts racial injustice in the Deep South.",
    because: "It's on my bookshelf because I read it in middle school and it's theme of standing up for what is right resonated with me."
  },
  {
    id: "6",
    title: "The Art of War",
    author: "Sun Tzu",
    spineColor: "#83afa6",
    status: "Military Strategy",
    description: "Ancient Chinese treatise on military tactics and strategy.",
    because: 'It is on my bookshelf because of the quote: "If you know the enemy and know yourself, you need not fear the result of a hundred battles. This shows how important self-awareness and knowing your own strengths can be."',
  },
  {
    id: "7",
    title: "Between the World and Me",
    author: "Ta-Nehisi Coates",
    spineColor: "#ed9f66",
    status: "Memoir Essay",
    description: "A father's letter to his son about the realities of being Black in America.",
    because: "It's on my bookshelf because it challenged me to reflect deeply on justice and identity, especially in light of the 2020 BLM protests."
  },
  {
    id: "8",
    title: "Adventures of Huckleberry Finn",
    author: "Mark Twain",
    spineColor: "#ea8a8a",
    status: "Classic Adventure",
    description: "A boy and a runaway slave journey down the Mississippi River.",
    because: "It's on my bookshelf because I love stories of freedom and questioning the rules."
  },
  {
    id: "9",
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    spineColor: "#6e7da2",
    status: "Postcolonial Fiction",
    description: "A Nigerian leader's life unravels amid colonial influence.",
    because: "It's on my bookshelf because of my time spent in Africa: this author gives power voice to a culture and conflict that people would not know about otherwise."
  },
  {
    id: "10",
    title: "Arrow of God",
    author: "Chinua Achebe",
    spineColor: "#8b4513",
    status: "Postcolonial Fiction",
    description: "A priest's authority is challenged by colonial forces in Nigeria.",
    because: "The sequel to 'Things Fall Apart', it's on my bookshelf because I appreciate Achebe’s powerful storytelling and insight into change."
  },
  {
    id: "11",
    title: "Isle Royale National Park: Foot Trails & Water Routes",
    author: "Jim Dufresne",
    spineColor: "#2e8b57",
    status: "Travel Guide",
    description: "A comprehensive guide to hiking and paddling in Isle Royale National Park.",
    because: "It's on my bookshelf because of my week backpacking in Isle Royale National Park, and represents the extensive planning that is required to spend a week alone on island with no resources but what you carry on your back."
  },
  {
    id: "12",
    title: "My Ántonia",
    author: "Willa Cather",
    spineColor: "#f5deb3",
    status: "Classic Fiction",
    description: "A young man's memories of a strong pioneer woman shaping the frontier in Nebraska.",
    because: "It's on my bookshelf because I from Nebraska and it reminds me of home and all of the strong women I know who are still working tirelessy on farms to shape the land."
  },
  {
    id: "13",
    title: "The Awakening",
    author: "Kate Chopin",
    spineColor: "#efbfc6",
    status: "Feminist Fiction",
    description: "A woman's struggle for independence in 19th-century Louisiana.",
    because: "It's on my bookshelf because it speaks to the timeless desire for freedom and identity."
  },
  {
    id: "14",
    title: "Dune",
    author: "Frank Herbert",
    spineColor: "#f4a460",
    status: "Science Fiction",
    description: "A noble family's rise to power on a desert planet rich in spice.",
    because: "It's on my bookshelf because I love epic journeys and complex, visionary worlds."
  },
  {
    id: "15",
    title: "Dune Messiah",
    author: "Frank Herbert",
    spineColor: "#cd853f",
    status: "Science Fiction",
    description: "The sequel to Dune, exploring the consequences of Paul Atreides' rule.",
    because: "It's on my bookshelf because it deepens a story I’m captivated by."
  },
  {
    id: "16",
    title: "How to Stop Time",
    author: "Matt Haig",
    spineColor: "#8cbeaa",
    status: "Speculative Fiction",
    description: "A man who ages slowly seeks a normal life across centuries.",
    because: "It's on my bookshelf because I love stories that play with time and emotion."
  },
  {
    id: "17",
    title: "The Humans",
    author: "Matt Haig",
    spineColor: "#4682b4",
    status: "Science Fiction",
    description: "An alien inhabits a human body to study humanity's flaws and virtues.",
    because: "It's on my bookshelf because it’s a quirky, gentle reminder to be kinder to ourselves."
  },
  {
    id: "18",
    title: "The Midnight Library",
    author: "Matt Haig",
    spineColor: "#bb5a5a",
    status: "Speculative Fiction",
    description: "A woman explores alternate lives in a magical library between life and death.",
    because: "It's on my bookshelf because it speaks to regrets, choices, and second chances."
  },
  {
    id: "19",
    title: "Orlando",
    author: "Virginia Woolf",
    spineColor: "#8cbeaa",
    status: "Modernist Fiction",
    description: "A gender-shifting protagonist lives through centuries of English history.",
    because: "It’s on my bookshelf because I’m inspired by Virginia Woolf’s bravery in writing so openly about gender and identity in a time when such topics were rarely acknowledged, let alone embraced."
  },
  {
    id: "20",
    title: "Peace Is Every Step",
    author: "Thich Nhat Hanh",
    spineColor: "#99b27f",
    status: "Spiritual Guide",
    description: "Mindfulness teachings for finding peace in everyday life.",
    because: "It's on my bookshelf because it helps me return to stillness and intention."
  },
  {
    id: "21",
    title: "The Giver",
    author: "Lois Lowry",
    spineColor: "#eeedbe",
    status: "Dystopian Classic",
    description: "A boy learns the dark truth behind his community’s seeming perfection.",
    because: "It's on my bookshelf because it made me question comfort, control, and the cost of peace."
  },
  {
    id: "22",
    title: "Why Nations Fail",
    author: "Daron Acemoglu and James A. Robinson",
    spineColor: "#e79e85",
    status: "Economic History",
    description: "An exploration of how political and economic institutions shape national success...",
    because: "It's on my bookshelf because it helps me understand the deep roots of inequality and power."
  },
  {
    id: "23",
    title: "What Doesn't Kill Us",
    author: "Scott Carney",
    spineColor: "#bb5a5a",
    status: "Fitness Exploration",
    description: "Investigates how cold exposure and breathing techniques can unlock human potential.",
    because: "It's on my bookshelf because it pushed me to explore my phyical limits through cold exposure in regards to open water swimming techniques in the sport of triathlon."
  },
  {
    id: "24",
    title: "Tools of Titans",
    author: "Tim Ferriss",
    spineColor: "#58727f",
    status: "Self-Improvement",
    description: "A compilation of tactics and habits from world-class performers.",
    because: "It’s on my bookshelf because Tim Ferriss’s ideas on fitness—like using minimal effective dose workouts and focusing on recovery—have helped me train smarter, not harder."
  },
  {
    id: "25",
    title: "The Bulletproof Diet",
    author: "Dave Asprey",
    spineColor: "#83afa6",
    status: "Nutrition Guide",
    description: "Outlines a high-fat, low-carb diet to boost energy and weight loss.",
    because: "It's on my bookshelf because I’m always experimenting with ways to feel better and think clearer."
  },
  {
    id: "26",
    title: "Primal Endurance",
    author: "Mark Sisson and Brad Kearns",
    spineColor: "#ed9f66",
    status: "Endurance Training",
    description: "Advocates a holistic approach to endurance training focusing on fat adaptation.",
    because: "It's on my bookshelf because it reshaped how I train, recover, and eat as an endurance athlete."
  },
  {
    id: "27",
    title: "The War of the Worlds",
    author: "H.G. Wells",
    spineColor: "#efbfc6",
    status: "Classic Mode",
    description: "A dystopian novel exploring surveillance, totalitarianism, and the manipulation of truth in a repressive regime.",
    because: "It's on my shelf because in 1938, Orson Welles adapted The War of the Worlds into a radio drama that was so realistic, many listeners thought an actual invasion was happening, and if that isn't a testament to the power of storytelling then I don't know what is!"
  },
  {
    id: "28",
    title: "Outliers",
    author: "Malcolm Gladwell",
    spineColor: "#f4a460",
    status: "Curious Mode",
    description: "A nonfiction exploration of the hidden factors behind extraordinary success, from culture to timing and opportunity.",
    because: "It's on my bookshelf because it challenges the myth of pure talent and celebrates context."
  },
  {
    id: "29",
    title: "Lonely Planet Kenya",
    author: "Lonely Planet",
    spineColor: "#ea8a8a",
    status: "Travel Guide",
    description: "Comprehensive guide to Kenya's attractions, culture, and travel tips.",
    because: "It's on my bookshelf because I read it cover to cover on both of my visits to the country, and reminds me both of the beautiful land and the complex challenges the country faces. "
  },
  {
    id: "30",
    title: "How to Travel the World on $50 a Day",
    author: "Matt Kepnes",
    spineColor: "#6e7da2",
    status: "Budget Travel",
    description: "Provides strategies for affordable and enriching global travel experiences.",
    because: "It's on my bookshelf because it taught me that money doesn't have to be a barrier to seeing the world."
  },
  {
    id: "31",
    title: "1000 Places to See Before You Die",
    author: "Patricia Schultz",
    spineColor: "#8b4513",
    status: "Travel Inspiration",
    description: "A curated list of must-see destinations around the globe.",
    because: "It's on my bookshelf because my uncle sent it to me in the mail one day, and it reminds me to keep exploring the world."
  },
  {
    id: "32",
    title: "Hatchet",
    author: "Gary Paulsen",
    spineColor: "#cd853f",
    status: "Survival Mode",
    description: "A story of resilience as a boy must survive alone in the wilderness after a plane crash with only a hatchet.",
    because: "It's on my bookshelf because I read this story as a read-aloud to every 4th grade class I taught. It reminds me of my students and the awe they had when they heard this epic story of survival for the first time."
  },
  {
    id: "33",
    title: "Remarkably Bright Creatures",
    author: "Shelby Van Pelt",
    spineColor: "#2e8b57",
    status: "Contemporary Fiction",
    description: "A widow forms an unexpected bond with a giant Pacific octopus.",
    because: "It's on my bookshelf because it made me cry, laugh, and look at grief and connection in a new way."
  },
  {
    id: "34",
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    spineColor: "#f5deb3",
    status: "Programming Guide",
    description: "An in-depth introduction to JavaScript and programming concepts.",
    because: "It's on my bookshelf because my brother, a developer, put it on my table with a note that said 'For Naomi' and no other explanation. It’s where I started learning how to think like a developer."
  },
  {
    id: "35",
    title: "Colorado's Fourteeners",
    author: "Gerry Roach",
    spineColor: "#a7b99e",
    status: "Adventure Mode",
    description: "Mountaineering book with maps and route info necessary to climb all 53 of Colorado's 14,000' mountains.",
    because: "It's on my bookshelf because climbing those peaks changed how I see challenge, nature, and myself."
  }
];

export default books;