// CONFIGURAÇÃO DO SUPABASE
const SUPABASE_URL = "https://nhxqduzvqvkzimndosap.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_DJ3DQo6wpzr7BvkVVx9yiw_vGvEsOZs";

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 1. TODAS AS CATEGORIAS OFICIAIS DO GRAMMY
const categorias = [
    {
        id: "roty",
        nome: "Record Of The Year",
        indicados: [
            { nome: "Man I Need - Olivia Dean", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80" },
            { nome: "Choosin' Texas - Ella Langley", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80" },
            { nome: "I Just Might - Bruno Mars", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80" },
            { nome: "WHERE IS MY HUSBAND! - RAYE", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
            { nome: "the cure - Olivia Rodrigo", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
            { nome: "Berghain - ROSALÍA, Björk, Yves Tumor", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" },
            { nome: "The Fate of Ophelia - Taylor Swift", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" },
            { nome: "Dracula - Tame Impala, JENNIE", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: "aoty",
        nome: "Album Of The Year",
        indicados: [
            { nome: "Lost Weekend - Phoebe Bridgers", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80" },
            { nome: "The Art of Loving - Olivia Dean", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80" },
            { nome: "Dandelion - Ella Langley", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80" },
            { nome: "The Romantic - Bruno Mars", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
            { nome: "THIS MUSIC MAY CONTAIN HOPE. - RAYE", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
            { nome: "you seem pretty sad for a girl so in love - Olivia Rodrigo", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" },
            { nome: "LUX (Complete Works) - ROSALÍA", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" },
            { nome: "The Life of a Showgirl - Taylor Swift", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: "soty",
        nome: "Song Of The Year",
        indicados: [
            { nome: "Berghain - Björk, Noah Goldstein, Jake Miller, ROSALÍA, Dylan Wiggins", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80" },
            { nome: "Choosin' Texas - Luke Dick, Miranda Lambert, Ella Langley, Joybeth Taylor", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80" },
            { nome: "the cure - Daniel Nigro, Olivia Rodrigo", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80" },
            { nome: "hate that i made you love me - Ariana Grande, Max Martin, Ilya", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
            { nome: "I Knew It, I Knew You - Jack Antonoff, Taylor Swift", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
            { nome: "Man I Need - Olivia Dean, Tobias Jesso, Jr., Zach Nahome", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" },
            { nome: "Risk it All - Dernst Emile II, James Fauntleroy, Philip Lawrence, Bruno Mars", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" },
            { nome: "WHERE IS MY HUSBAND! - RAYE, Mike Sabath", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: "bna",
        nome: "Best New Artist",
        indicados: [
            { nome: "Angine de Poitrine", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80" },
            { nome: "Geese", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80" },
            { nome: "Ella Langley", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80" },
            { nome: "Slayyyter", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
            { nome: "Sienna Spiro", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
            { nome: "Don Toliver", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" },
            { nome: "Remi Wolf", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" },
            { nome: "The Womack Sisters", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: "pop_solo",
        nome: "Best Pop Solo Performance",
        indicados: [
            { nome: "Man I Need - Olivia Dean", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80" },
            { nome: "Risk It All - Bruno Mars", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80" },
            { nome: "WHERE IS MY HUSBAND! - RAYE", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80" },
            { nome: "the cure - Olivia Rodrigo", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
            { nome: "Sauvignon Blanc - ROSALÍA", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: "pop_duo",
        nome: "Best Pop Duo/Group Performance",
        indicados: [
            { nome: "RUNWAY - Lady Gaga, Doechii", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80" },
            { nome: "Bring Your Love - Madonna, Sabrina Carpenter", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80" },
            { nome: "Click Clack Symphony - RAYE, Hans Zimmer", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80" },
            { nome: "The Life of a Showgirl - Taylor Swift, Sabrina Carpenter", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
            { nome: "Dracula - Tame Impala, JENNIE", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: "pop_asian",
        nome: "Best Asian Pop Music Performance",
        indicados: [
            { nome: "Sunset Kiss - BABYMETAL, Polyphia", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80" },
            { nome: "Unang Kilig - BINI", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80" },
            { nome: "BANG BANG - IVE", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80" },
            { nome: "404 (New Era) - KiiiKiii", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
            { nome: "YES - LiSA", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
            { nome: "VISA - SB19", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: "pop_album",
        nome: "Best Pop Vocal Album",
        indicados: [
            { nome: "The Art of Loving - Olivia Dean", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80" },
            { nome: "petal - Ariana Grande", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80" },
            { nome: "The Romantic - Bruno Mars", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80" },
            { nome: "THIS MUSIC MAY CONTAIN HOPE. - RAYE", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
            { nome: "you seem pretty sad for a girl so in love - Olivia Rodrigo", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: "dance_rec",
        nome: "Best Dance/Electronic Recording",
        indicados: [
            { nome: "Lights Burn Dimmer - Fred Again.., (Jamie T)", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80" },
            { nome: "I Feel So Free - Madonna", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80" },
            { nome: "CRANK - Slayyyter", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80" },
            { nome: "My Old Ways - Tame Impala", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
            { nome: "Melatonin - Tinashe", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
            { nome: "Music - underscores", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: "dance_pop",
        nome: "Best Dance Pop Recording",
        indicados: [
            { nome: "Blue Moon - Zara Larsson", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80" },
            { nome: "Danceteria - Madonna", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80" },
            { nome: "Life Boat. - RAYE", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80" },
            { nome: "DANCE... - Slayyyter", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
            { nome: "Too Easy - Tinashe", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: "dance_album",
        nome: "Best Dance/Electronic Album",
        indicados: [
            { nome: "CONFESSIONS II - Madonna", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80" },
            { nome: "Sexistential - Robyn", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80" },
            { nome: "SOMA - Skrillex", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80" },
            { nome: "WOR$T GIRL IN AMERICA - Slayyyter", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
            { nome: "Deadbeat - Tame Impala", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: "rock_perf",
        nome: "Best Rock Performance",
        indicados: [
            { nome: "Sarniezz - Angine de Poitrine", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80" },
            { nome: "Lost Boys - Phoebe Bridgers", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80" },
            { nome: "Trinidad - Geese", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80" },
            { nome: "what's wrong with me - Olivia Rodrigo, Robert Smith", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
            { nome: "In The Stars - The Rolling Stones", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: "metal_perf",
        nome: "Best Metal Performance",
        indicados: [
            { nome: "The Edge of Perfection - Anthrax", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80" },
            { nome: "Hive Mind - Knocked Loose, Denzel Curry", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80" },
            { nome: "Your Ghost Again - Mastodon", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80" },
            { nome: "Let There Be Shred - Megadeth", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
            { nome: "End of You - Poppy, Amy Lee, Courtney LaPlante", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: "rock_album",
        nome: "Best Rock Album",
        indicados: [
            { nome: "Vol.II - Angine de Poitrine", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80" },
            { nome: "Your Favorite Toy - Foo Fighters", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80" },
            { nome: "The Wow! Signal - Muse", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80" },
            { nome: "Foreign Tongues - The Rolling Stones", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
            { nome: "Frozen Charlotte - Jack White", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: "alt_album",
        nome: "Best Alternative Music Album",
        indicados: [
            { nome: "I Must Be Dreaming - Alabama Shakes", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80" },
            { nome: "Lost Weekend - Phoebe Bridgers", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80" },
            { nome: "Music, Fashion, Film - Charli XCX", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80" },
            { nome: "Getting Killed - Geese", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
            { nome: "The Mountain - Gorillaz", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
            { nome: "LUX (Complete Works) - ROSALÍA", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: "rb_album",
        nome: "Best R&B Album",
        indicados: [
            { nome: "BROWN (The Chocolate Edition) - Chris Brown", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80" },
            { nome: "When The City Sleeps - Alex Isley", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80" },
            { nome: "Kehlani - Kehlani", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80" },
            { nome: "Saturday Night - PJ Morton", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
            { nome: "To Whom This May Concern - Jill Scott", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: "rap_album",
        nome: "Best Rap Album",
        indicados: [
            { nome: "DILLAGENCE II - Busta Rhymes", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80" },
            { nome: "AM I THE DRAMA? - Cardi B", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80" },
            { nome: "God Gotta Afro & Gold Hoops - Rapsody", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80" },
            { nome: "OCTANE - Don Toliver", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
            { nome: "everything is a lot. - Wale", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
            { nome: "BULLY - DELUXE - Kanye West", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: "global_album",
        nome: "Best Global Music Album",
        indicados: [
            { nome: "EQUILIBRIVM - Anitta", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80" },
            { nome: "Oriadé - Davido", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80" },
            { nome: "HOPE!! - Angélique Kidjo", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80" },
            { nome: "Starrgirl - Ayra Starr", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
            { nome: "Love Is A Kingdom - Tems", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: "visual_media_song",
        nome: "Best Song Written For Visual Media",
        indicados: [
            { nome: "House (From Wuthering Heights) - John Cale, Charli XCX", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80" },
            { nome: "I Knew It, I Knew You (From Toy Story 5) - Taylor Swift", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80" },
            { nome: "Need Someone (From The Pitt) - Andrew Bird", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80" },
            { nome: "No Place Like Home (From Wicked: For Good) - Stephen Schwartz", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
            { nome: "RUNWAY (From The Devil Wears Prada 2) - Lady Gaga, Doechii", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: "music_video",
        nome: "Best Music Video",
        indicados: [
            { nome: "Lost Boys - Phoebe Bridgers", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80" },
            { nome: "STORM - GENER8ION, Yung Lean", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80" },
            { nome: "hate that i made you love me - Ariana Grande", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80" },
            { nome: "Click Clack Symphony - RAYE", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
            { nome: "Berghain - ROSALÍA", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" }
        ]
    }
];

// Lista de avatares pré-definidos
const avataresPredefinidos = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
];

// Elementos da tela
const listaCategoriasDiv = document.getElementById("lista-categorias");
const galeriaAvataresDiv = document.getElementById("galeria-avatares");
const inputAvatarSelecionado = document.getElementById("avatar-selecionado");
const formBolao = document.getElementById("form-bolao");
const sucessoSection = document.getElementById("sucesso-section");
const cardVotosLista = document.getElementById("card-votos-lista");
const cardNome = document.getElementById("card-nome");
const cardAvatar = document.getElementById("card-avatar");
const btnBaixar = document.getElementById("btn-baixar");
const btnVoltar = document.getElementById("btn-voltar");

// Função para renderizar as categorias com imagens
function carregarCategorias() {
    listaCategoriasDiv.innerHTML = "";
    categorias.forEach(cat => {
        const divCat = document.createElement("div");
        divCat.classList.add("categoria-card");

        let htmlIndicados = `<h3>${cat.nome}</h3><div class="opcoes-grid">`;
        cat.indicados.forEach(ind => {
            htmlIndicados += `
                <label class="opcao-label">
                    <input type="radio" name="${cat.id}" value="${ind.nome}" data-img="${ind.img}" required>
                    <img src="${ind.img}" alt="${ind.nome}" class="opcao-img">
                    <span class="opcao-texto">${ind.nome}</span>
                </label>
            `;
        });
        htmlIndicados += `</div>`;
        divCat.innerHTML = htmlIndicados;
        listaCategoriasDiv.appendChild(divCat);
    });
}

// Função para renderizar os avatares
function carregarAvatares() {
    galeriaAvataresDiv.innerHTML = "";
    avataresPredefinidos.forEach((urlFoto, index) => {
        const img = document.createElement("img");
        img.src = urlFoto;
        img.classList.add("avatar-opcao");
        img.alt = `Avatar ${index + 1}`;

        img.addEventListener("click", () => {
            document.querySelectorAll(".avatar-opcao").forEach(el => el.classList.remove("selecionado"));
            img.classList.add("selecionado");
            inputAvatarSelecionado.value = urlFoto;
        });

        galeriaAvataresDiv.appendChild(img);
    });
}

// Envio dos dados e montagem do card com capinhas
formBolao.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome-usuario").value;
    const avatar = inputAvatarSelecionado.value;

    if (!avatar) {
        alert("Por favor, escolha um avatar!");
        return;
    }

    const votos = {};
    const votosDetalhes = [];

    categorias.forEach(cat => {
        const selecionado = document.querySelector(`input[name="${cat.id}"]:checked`);
        if (selecionado) {
            const nomeIndicado = selecionado.value;
            const imgIndicado = selecionado.getAttribute("data-img");
            
            votos[cat.id] = nomeIndicado;
            votosDetalhes.push({
                catNome: cat.nome,
                indicado: nomeIndicado,
                img: imgIndicado
            });
        }
    });

    const btnEnviar = document.getElementById("btn-enviar");
    btnEnviar.disabled = true;
    btnEnviar.textContent = "Salvando apostas...";

    try {
        const { error } = await _supabase
            .from('participantes')
            .insert([{ nome: nome, avatar: avatar, votos: votos }]);

        if (error) throw error;

        cardNome.textContent = nome;
        cardAvatar.src = avatar;
        cardVotosLista.innerHTML = "";

        votosDetalhes.forEach(voto => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("card-item-voto");
            itemDiv.innerHTML = `
                <img src="${voto.img}" alt="Capa">
                <div>
                    <span>${voto.catNome}</span>
                    <strong>${voto.indicado}</strong>
                </div>
            `;
            cardVotosLista.appendChild(itemDiv);
        });

        formBolao.classList.add("hidden");
        sucessoSection.classList.remove("hidden");
        window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error) {
        console.error("Erro ao salvar:", error);
        alert("Erro ao enviar apostas.");
    } finally {
        btnEnviar.disabled = false;
        btnEnviar.textContent = "Enviar Apostas";
    }
});

// Botão para baixar o card em imagem PNG
btnBaixar.addEventListener("click", () => {
    const cardElement = document.getElementById("card-template");
    
    htmlToImage.toPng(cardElement, { quality: 0.95, pixelRatio: 2 })
        .then((dataUrl) => {
            const link = document.createElement('a');
            link.download = 'bolao-grammy-apostas.png';
            link.href = dataUrl;
            link.click();
        })
        .catch((error) => {
            console.error("Erro ao gerar imagem:", error);
            alert("Não foi possível gerar a imagem.");
        });
});

// Botão para voltar
btnVoltar.addEventListener("click", () => {
    sucessoSection.classList.add("hidden");
    formBolao.classList.remove("hidden");
    formBolao.reset();
    document.querySelectorAll(".avatar-opcao").forEach(el => el.classList.remove("selecionado"));
    inputAvatarSelecionado.value = "";
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Inicialização
carregarCategorias();
carregarAvatares();