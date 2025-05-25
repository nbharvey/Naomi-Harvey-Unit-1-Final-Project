const books = [
    {
        id: "1",
        title: "The Old Man and the Sea",
        author: "Ernest Hemingway",
        coverUrl: "/the-old-man-and-the-sea.png",
        spineColor: "#99b27f",
        status: "Classic Fiction",
        description: "An aging fisherman engages in an epic battle with a giant marlin.",
        url: "https://www.amazon.com/Old-Man-Sea-Ernest-Hemingway/dp/0684801221"
    },
    {
        id: "2",
        title: "American Dirt",
        author: "Jeanine Cummins",
        coverUrl: "/american-dirt.png",
        spineColor: "#eeedbe",
        status: "Contemporary Drama",
        description: "A Mexican bookseller flees to the U.S. with her son after a cartel attack.",
        url: "https://www.amazon.com/American-Dirt-Jeanine-Cummins/dp/1250209765"
    },
    {
        id: "3",
        title: "The Very Secret Society of Irregular Witches",
        author: "Sangu Mandanna",
        coverUrl: "/irregular-witches.png",
        spineColor: "#e79e85",
        status: "Fantasy Romance",
        description: "An isolated witch finds family and love in an unexpected place.",
        url: "https://www.amazon.com/Very-Secret-Society-Irregular-Witches/dp/0593439360"
    },
    {
        id: "4",
        title: "The Good Earth",
        author: "Pearl S. Buck",
        coverUrl: "/the-good-earth.png",
        spineColor: "#bb5a5a",
        status: "Historical Fiction",
        description: "A Chinese farmer's life is chronicled through times of prosperity and hardship.",
        url: "https://www.amazon.com/Good-Earth-Oprahs-Book-Club/dp/0743272935"
    },
    {
        id: "5",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        coverUrl: "/to-kill-a-mockingbird.png",
        spineColor: "#58727f",
        status: "Classic Fiction",
        description: "A young girl confronts racial injustice in the Deep South.",
        url: "https://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0446310786"
    },
    {
        id: "6",
        title: "The Art of War",
        author: "Sun Tzu",
        coverUrl: "/the-art-of-war.png",
        spineColor: "#83afa6",
        status: "Military Strategy",
        description: "Ancient Chinese treatise on military tactics and strategy.",
        url: "https://www.amazon.com/Art-War-Sun-Tzu/dp/1599869772"
    },
    {
        id: "7",
        title: "Between the World and Me",
        author: "Ta-Nehisi Coates",
        coverUrl: "/between-the-world-and-me.png",
        spineColor: "#ed9f66",
        status: "Memoir Essay",
        description: "A father's letter to his son about the realities of being Black in America.",
        url: "https://www.amazon.com/Between-World-Me-Ta-Nehisi-Coates/dp/0812993543"
    },
    {
        id: "8",
        title: "Adventures of Huckleberry Finn",
        author: "Mark Twain",
        coverUrl: "/huckleberry-finn.png",
        spineColor: "#ea8a8a",
        status: "Classic Adventure",
        description: "A boy and a runaway slave journey down the Mississippi River.",
        url: "https://www.amazon.com/Adventures-Huckleberry-Finn-Mark-Twain/dp/0486280616"
    },
    {
        id: "9",
        title: "Things Fall Apart",
        author: "Chinua Achebe",
        coverUrl: "/things-fall-apart.png",
        spineColor: "#6e7da2",
        status: "Postcolonial Fiction",
        description: "A Nigerian leader's life unravels amid colonial influence.",
        url: "https://www.amazon.com/Things-Fall-Apart-Chinua-Achebe/dp/0385474547"
    },
    {
        id: "10",
        title: "Arrow of God",
        author: "Chinua Achebe",
        coverUrl: "/arrow-of-god.png",
        spineColor: "#8b4513",
        status: "Postcolonial Fiction",
        description: "A priest's authority is challenged by colonial forces in Nigeria.",
        url: "https://www.amazon.com/Arrow-God-Chinua-Achebe/dp/0385014805"
    },
    {
        id: "11",
        title: "Isle Royale National Park: Foot Trails & Water Routes",
        author: "Jim Dufresne",
        coverUrl: "/isle-royale.png",
        spineColor: "#2e8b57",
        status: "Travel Guide",
        description: "A comprehensive guide to hiking and paddling in Isle Royale National Park.",
        url: "https://www.amazon.com/Isle-Royale-National-Park-Trails/dp/0983015007"
    },
    {
        id: "12",
        title: "My Ántonia",
        author: "Willa Cather",
        coverUrl: "/my-antonia.png",
        spineColor: "#f5deb3",
        status: "Classic Fiction",
        description: "A young man's memories of a pioneer woman in Nebraska.",
        url: "https://www.amazon.com/My-Antonia-Willa-Cather/dp/0486282406"
    },
    {
        id: "13",
        title: "The Awakening",
        author: "Kate Chopin",
        coverUrl: "/the-awakening.png",
        spineColor: "#efbfc6",
        status: "Feminist Fiction",
        description: "A woman's struggle for independence in 19th-century Louisiana.",
        url: "https://www.amazon.com/Awakening-Kate-Chopin/dp/0486277860"
    },
    {
        id: "14",
        title: "Dune",
        author: "Frank Herbert",
        coverUrl: "/dune.png",
        spineColor: "#f4a460",
        status: "Science Fiction",
        description: "A noble family's rise to power on a desert planet rich in spice.",
        url: "https://www.amazon.com/Dune-Frank-Herbert/dp/0441172717"
    },
    {
        id: "15",
        title: "Dune Messiah",
        author: "Frank Herbert",
        coverUrl: "/dune-messiah.png",
        spineColor: "#cd853f",
        status: "Science Fiction",
        description: "The sequel to Dune, exploring the consequences of Paul Atreides' rule.",
        url: "https://www.amazon.com/Dune-Messiah-Frank-Herbert/dp/0441172695"
    },
    {
        id: "16",
        title: "How to Stop Time",
        author: "Matt Haig",
        coverUrl: "/how-to-stop-time.png",
        spineColor: "#8cbeaa",
        status: "Speculative Fiction",
        description: "A man who ages slowly seeks a normal life across centuries.",
        url: "https://www.amazon.com/How-Stop-Time-Matt-Haig/dp/0525522875"
    },
    {
        id: "17",
        title: "The Humans",
        author: "Matt Haig",
        coverUrl: "/the-humans.png",
        spineColor: "#4682b4",
        status: "Science Fiction",
        description: "An alien inhabits a human body to study humanity's flaws and virtues.",
        url: "https://www.amazon.com/Humans-Novel-Matt-Haig/dp/1476730598"
    },
    {
        id: "18",
        title: "The Midnight Library",
        author: "Matt Haig",
        coverUrl: "/the-midnight-library.png",
        spineColor: "#bb5a5a",
        status: "Speculative Fiction",
        description: "A woman explores alternate lives in a magical library between life and death.",
        url: "https://www.amazon.com/Midnight-Library-Novel-Matt-Haig/dp/0525559477"
    },
    {
        id: "19",
        title: "Orlando",
        author: "Virginia Woolf",
        coverUrl: "/orlando.png",
        spineColor: "#8cbeaa",
        status: "Modernist Fiction",
        description: "A gender-shifting protagonist lives through centuries of English history.",
        url: "https://www.amazon.com/Orlando-Virginia..."
    },
    {
        id: "20",
        title: "Peace Is Every Step",
        author: "Thich Nhat Hanh",
        coverUrl: "/peace-is-every-step.png",
        spineColor: "#99b27f",
        status: "Spiritual Guide",
        description: "Mindfulness teachings for finding peace in everyday life.",
        url: "https://www.amazon.com/Peace-Every-Step-Mindfulness-Everyday/dp/0553351397"
    },
        {
            id: "21",
            title: "The Giver",
            author: "Lois Lowry",
            coverUrl: "/the-giver.png",
            spineColor: "#eeedbe",
            status: "Dystopian Classic",
            description: "A boy learns the dark truth behind his community’s seeming perfection.",
            url: "https://www.amazon.com/Giver-Lois-Lowry/dp/0544336267"
        },
            {
            id: "23",
                title: "Why Nations Fail",
                author: "Daron Acemoglu and James A. Robinson",
                coverUrl: "/why-nations-fail.png",
                spineColor: "#e79e85",
                status: "Economic History",
                description: "An exploration of how political and economic institutions shape national success or failure.",
                url: "https://www.amazon.com/Why-Nations-Fail-Origins-Prosperity/dp/0307719227"
            },
            {
                id: "24",
                title: "What Doesn't Kill Us",
            author: "Scott Carney",
                coverUrl: "/what-doesnt-kill-us.png",
                spineColor: "#bb5a5a",
                status: "Fitness Exploration",
            description: "Investigates how cold exposure and breathing techniques can unlock human potential.",
                url: "https://www.amazon.com/What-Doesnt-Kill-Environmental-Conditioning/dp/1623366909"
            },
            {
                id: "25",
                title: "Tools of Titans",
                author: "Tim Ferriss",
                coverUrl: "/tools-of-titans.png",
                spineColor: "#58727f",
                status: "Self-Improvement",
                description: "A compilation of tactics and habits from world-class performers.",
                url: "https://www.amazon.com/Tools-Titans-Billionaires-World-Class-Performers/dp/1328683788"
            },
            {
                id: "26",
                title: "The Bulletproof Diet",
                author: "Dave Asprey",
                coverUrl: "/bulletproof-diet.png",
                spineColor: "#83afa6",
                status: "Nutrition Guide",
                description: "Outlines a high-fat, low-carb diet to boost energy and weight loss.",
                url: "https://www.amazon.com/Bulletproof-Diet-Reclaim-Energy-Upgrade/dp/162336518X"
            },
            {
                id: "27",
                title: "Primal Endurance",
            author: "Mark Sisson and Brad Kearns",
               coverUrl: "/primal-endurance.png",
            spineColor: "#ed9f66",
                status: "Endurance Training",
                description: "Advocates a holistic approach to endurance training focusing on fat adaptation.",
                url: "https://www.amazon.com/Primal-Endurance-chronic-carbohydrate-dependency/dp/1939563089",
    },
    {
        id: "34",
        title: "1984",
        author: "George Orwell",
        coverUrl: "/1984.png",
        spineColor: "#efbfc6",
        status: "Classic Mode",
        description: "A dystopian novel exploring surveillance, totalitarianism, and the manipulation of truth in a repressive regime.",
        url: "",
    },
      {
        id: "35",
        title: "Outliers",
        author: "Malcolm Gladwell",
        coverUrl: "/outliers.png",
        spineColor: "#f4a460",
        status: "Curious Mode",
        description: "A nonfiction exploration of the hidden factors behind extraordinary success, from culture to timing and opportunity.",
        url: "",
    },   
            {
                "id": "28",
                "title": "Lonely Planet Kenya",
                "author": "Lonely Planet",
                "coverUrl": "/lonely-planet-kenya.png",
                "spineColor": "#ea8a8a",
                "status": "Travel Guide",
                "description": "Comprehensive guide to Kenya's attractions, culture, and travel tips.",
                "url": "https://shop.lonelyplanet.com/products/kenya"
            },
            {
                id: "29",
                title: "How to Travel the World on $50 a Day",
                author: "Matt Kepnes",
                coverUrl: "/travel-world-50-day.png",
            spineColor: "#6e7da2",
                status: "Budget Travel",
                description: "Provides strategies for affordable and enriching global travel experiences.",
                url: "https://www.amazon.com/How-Travel-World-50-Day/dp/0399173285"
            },
            {
                id: "30",
                title: "1000 Places to See Before You Die",
                author: "Patricia Schultz",
                coverUrl: "/1000-places.png",
                spineColor: "#8b4513",
                status: "Travel Inspiration",
                description: "A curated list of must-see destinations around the globe.",
                url: "https://www.amazon.com/000-Places-See-Before-You/dp/0761156860"
    },
    {
        id: "36",
        title: "Hatchet",
        author: "Gary Paulsen",
        coverUrl: "/hatchet.png",
        spineColor: "#cd853f",
        status: "Survival Mode",
        description: "A story of resilience as a boy must survive alone in the wilderness after a plane crash with only a hatchet.",
      url: "",
    },
            {
                id: "31",
                title: "Remarkably Bright Creatures",
                author: "Shelby Van Pelt",
                coverUrl: "/remarkably-bright-creatures.png",
                spineColor: "#2e8b57",
                status: "Contemporary Fiction",
                description: "A widow forms an unexpected bond with a giant Pacific octopus.",
                url: "https://www.amazon.com/Remarkably-Bright-Creatures-Shelby-Pelt/dp/0063204150"
            },
            {
                id: "32",
                title: "Eloquent JavaScript",
                author: "Marijn Haverbeke",
                coverUrl: "/eloquent-javascript.png",
                spineColor: "#f5deb3",
                status: "Programming Guide",
                description: "An in-depth introduction to JavaScript and programming concepts.",
                url: "https://eloquentjavascript.net/"
            },
    {
        id: "33",
        title: "Colorado's Fourtneers",
        author: "Gerry Roach",
        coverUrl: "/colorado.png",
        spineColor: "#a7b99e",
        status: "Adventure Mode",
        description: "Mountaineering book with maps and route info necessary to climb all 53 of Colorado's 14,000' mountains.",
        url:"",
    }
]

export default books