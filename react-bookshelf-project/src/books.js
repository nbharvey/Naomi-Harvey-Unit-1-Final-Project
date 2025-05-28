const books = [
    {
        id: "1",
        title: "The Old Man and the Sea",
        author: "Ernest Hemingway",
        spineColor: "#99b27f",
        status: "Classic Fiction",
        description: "An aging fisherman engages in an epic battle with a giant marlin."
    },
    {
        id: "2",
        title: "American Dirt",
        author: "Jeanine Cummins",
        spineColor: "#eeedbe",
        status: "Contemporary Drama",
        description: "A Mexican bookseller flees to the U.S. with her son after a cartel attack."
    },
    {
        id: "3",
        title: "The Very Secret Society of Irregular Witches",
        author: "Sangu Mandanna",
        spineColor: "#e79e85",
        status: "Fantasy Romance",
        description: "An isolated witch finds family and love in an unexpected place."
    },
    {
        id: "4",
        title: "The Good Earth",
        author: "Pearl S. Buck",
        spineColor: "#bb5a5a",
        status: "Historical Fiction",
        description: "A Chinese farmer's life is chronicled through times of prosperity and hardship."
    },
    {
        id: "5",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        spineColor: "#58727f",
        status: "Classic Fiction",
        description: "A young girl confronts racial injustice in the Deep South."
    },
    {
        id: "6",
        title: "The Art of War",
        author: "Sun Tzu",
        spineColor: "#83afa6",
        status: "Military Strategy",
        description: "Ancient Chinese treatise on military tactics and strategy."
    },
    {
        id: "7",
        title: "Between the World and Me",
        author: "Ta-Nehisi Coates",
        spineColor: "#ed9f66",
        status: "Memoir Essay",
        description: "A father's letter to his son about the realities of being Black in America."
    },
    {
        id: "8",
        title: "Adventures of Huckleberry Finn",
        author: "Mark Twain",
        spineColor: "#ea8a8a",
        status: "Classic Adventure",
        description: "A boy and a runaway slave journey down the Mississippi River."
    },
    {
        id: "9",
        title: "Things Fall Apart",
        author: "Chinua Achebe",
        spineColor: "#6e7da2",
        status: "Postcolonial Fiction",
        description: "A Nigerian leader's life unravels amid colonial influence."
    },
    {
        id: "10",
        title: "Arrow of God",
        author: "Chinua Achebe",
        spineColor: "#8b4513",
        status: "Postcolonial Fiction",
        description: "A priest's authority is challenged by colonial forces in Nigeria."
    },
    {
        id: "11",
        title: "Isle Royale National Park: Foot Trails & Water Routes",
        author: "Jim Dufresne",
        spineColor: "#2e8b57",
        status: "Travel Guide",
        description: "A comprehensive guide to hiking and paddling in Isle Royale National Park."
    },
    {
        id: "12",
        title: "My Ántonia",
        author: "Willa Cather",
        spineColor: "#f5deb3",
        status: "Classic Fiction",
        description: "A young man's memories of a pioneer woman in Nebraska."
    },
    {
        id: "13",
        title: "The Awakening",
        author: "Kate Chopin",
        spineColor: "#efbfc6",
        status: "Feminist Fiction",
        description: "A woman's struggle for independence in 19th-century Louisiana."
    },
    {
        id: "14",
        title: "Dune",
        author: "Frank Herbert",
        spineColor: "#f4a460",
        status: "Science Fiction",
        description: "A noble family's rise to power on a desert planet rich in spice."
    },
    {
        id: "15",
        title: "Dune Messiah",
        author: "Frank Herbert",
        spineColor: "#cd853f",
        status: "Science Fiction",
        description: "The sequel to Dune, exploring the consequences of Paul Atreides' rule."
    },
    {
        id: "16",
        title: "How to Stop Time",
        author: "Matt Haig",
        spineColor: "#8cbeaa",
        status: "Speculative Fiction",
        description: "A man who ages slowly seeks a normal life across centuries."
    },
    {
        id: "17",
        title: "The Humans",
        author: "Matt Haig",
        spineColor: "#4682b4",
        status: "Science Fiction",
        description: "An alien inhabits a human body to study humanity's flaws and virtues."
    },
    {
        id: "18",
        title: "The Midnight Library",
        author: "Matt Haig",
        spineColor: "#bb5a5a",
        status: "Speculative Fiction",
        description: "A woman explores alternate lives in a magical library between life and death."
    },
    {
        id: "19",
        title: "Orlando",
        author: "Virginia Woolf",
        spineColor: "#8cbeaa",
        status: "Modernist Fiction",
        description: "A gender-shifting protagonist lives through centuries of English history."
    },
    {
        id: "20",
        title: "Peace Is Every Step",
        author: "Thich Nhat Hanh",
        spineColor: "#99b27f",
        status: "Spiritual Guide",
        description: "Mindfulness teachings for finding peace in everyday life."
    },
    {
        id: "21",
        title: "The Giver",
        author: "Lois Lowry",
        spineColor: "#eeedbe",
        status: "Dystopian Classic",
        description: "A boy learns the dark truth behind his community’s seeming perfection."
    },
    {
        id: "23",
        title: "Why Nations Fail",
        author: "Daron Acemoglu and James A. Robinson",
        spineColor: "#e79e85",
        status: "Economic History",
        description: "An exploration of how political and economic institutions shape national success..."
    },
        {
          id: "24",
          title: "What Doesn't Kill Us",
          author: "Scott Carney",
          spineColor: "#bb5a5a",
          status: "Fitness Exploration",
          description: "Investigates how cold exposure and breathing techniques can unlock human potential.",
        },
        {
          id: "25",
          title: "Tools of Titans",
          author: "Tim Ferriss",
          spineColor: "#58727f",
          status: "Self-Improvement",
          description: "A compilation of tactics and habits from world-class performers.",
        },
        {
          id: "26",
          title: "The Bulletproof Diet",
          author: "Dave Asprey",
          spineColor: "#83afa6",
          status: "Nutrition Guide",
          description: "Outlines a high-fat, low-carb diet to boost energy and weight loss.",
        },
        {
          id: "27",
          title: "Primal Endurance",
          author: "Mark Sisson and Brad Kearns",
          spineColor: "#ed9f66",
          status: "Endurance Training",
          description: "Advocates a holistic approach to endurance training focusing on fat adaptation.",
        },
        {
          id: "34",
          title: "1984",
          author: "George Orwell",
          spineColor: "#efbfc6",
          status: "Classic Mode",
          description: "A dystopian novel exploring surveillance, totalitarianism, and the manipulation of truth in a repressive regime.",
        },
        {
          id: "35",
          title: "Outliers",
          author: "Malcolm Gladwell",
          spineColor: "#f4a460",
          status: "Curious Mode",
          description: "A nonfiction exploration of the hidden factors behind extraordinary success, from culture to timing and opportunity.",
        },
        {
          id: "28",
          title: "Lonely Planet Kenya",
          author: "Lonely Planet",
          spineColor: "#ea8a8a",
          status: "Travel Guide",
          description: "Comprehensive guide to Kenya's attractions, culture, and travel tips.",
          url: "https://shop.lonelyplanet.com/products/kenya"
        },
        {
          id: "29",
          title: "How to Travel the World on $50 a Day",
          author: "Matt Kepnes",
          spineColor: "#6e7da2",
          status: "Budget Travel",
          description: "Provides strategies for affordable and enriching global travel experiences.",
        },
        {
          id: "30",
          title: "1000 Places to See Before You Die",
          author: "Patricia Schultz",
          spineColor: "#8b4513",
          status: "Travel Inspiration",
          description: "A curated list of must-see destinations around the globe.",
        },
        {
          id: "36",
          title: "Hatchet",
          author: "Gary Paulsen",
          spineColor: "#cd853f",
          status: "Survival Mode",
          description: "A story of resilience as a boy must survive alone in the wilderness after a plane crash with only a hatchet.",
        },
        {
          id: "31",
          title: "Remarkably Bright Creatures",
          author: "Shelby Van Pelt",
          spineColor: "#2e8b57",
          status: "Contemporary Fiction",
          description: "A widow forms an unexpected bond with a giant Pacific octopus.",
        },
        {
          id: "32",
          title: "Eloquent JavaScript",
          author: "Marijn Haverbeke",
          spineColor: "#f5deb3",
          status: "Programming Guide",
          description: "An in-depth introduction to JavaScript and programming concepts.",
        },
        {
          id: "33",
          title: "Colorado's Fourteeners",
          author: "Gerry Roach",
          spineColor: "#a7b99e",
          status: "Adventure Mode",
          description: "Mountaineering book with maps and route info necessary to climb all 53 of Colorado's 14,000' mountains.",
        }
      ];
      
      export default books;
