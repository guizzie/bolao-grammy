const fs = require('fs');
const clientId = 'f89caa35f8144ffeab1465e13b508b13';
const clientSecret = '706ec1f324c84d5692cfaf982a78d362';

// Lista completa dos itens para buscar
const itensParaBuscar = [
 // General Field
    "Man I Need Olivia Dean",
    "Choosin' Texas Ella Langley",
    "I Just Might Bruno Mars",
    "WHERE IS MY HUSBAND! RAYE",
    "the cure Olivia Rodrigo",
    "Berghain ROSALÍA",
    "The Fate of Ophelia Taylor Swift",
    "Dracula Tame Impala",
    
    "Lost Weekend Phoebe Bridgers",
    "The Art of Loving Olivia Dean",
    "Dandelion Ella Langley",
    "The Romantic Bruno Mars",
    "THIS MUSIC MAY CONTAIN HOPE. RAYE",
    "you seem pretty sad for a girl so in love Olivia Rodrigo",
    "LUX ROSALÍA",
    "The Life of a Showgirl Taylor Swift",

    "hate that i made you love me Ariana Grande",
    "I Knew It I Knew You Taylor Swift",
    "Risk it All Bruno Mars",

    "Angine de Poitrine",
    "Geese",
    "Ella Langley",
    "Slayyyter",
    "Sienna Spiro",
    "Don Toliver",
    "Remi Wolf",
    "The Womack Sisters",

    // Pop & Dance/Electronic
    "Sauvignon Blanc ROSALÍA",
    "RUNWAY Lady Gaga Doechii",
    "Bring Your Love Madonna Sabrina Carpenter",
    "Click Clack Symphony RAYE Hans Zimmer",
    "Dracula Tame Impala JENNIE",
    "Sunset Kiss BABYMETAL Polyphia",
    "Unang Kilig BINI",
    "BANG BANG IVE",
    "404 New Era KiiiKiii",
    "YES LiSA",
    "VISA SB19",
    "petal Ariana Grande",
    "Lights Burn Dimmer Fred again..",
    "I Feel So Free Madonna",
    "CRANK Slayyyter",
    "My Old Ways Tame Impala",
    "Melatonin Tinashe",
    "Music underscores",
    "Blue Moon Zara Larsson",
    "Danceteria Madonna",
    "Life Boat RAYE",
    "Too Easy Tinashe",
    "CONFESSIONS II Madonna",
    "Sexistential Robyn",
    "SOMA Skrillex",
    "WORST GIRL IN AMERICA Slayyyter",
    "Deadbeat Tame Impala",

    // Rock, Metal & Alternative
    "Sarniezz Angine de Poitrine",
    "Lost Boys Phoebe Bridgers",
    "Trinidad Geese",
    "whats wrong with me Olivia Rodrigo Robert Smith",
    "In The Stars The Rolling Stones",
    "The Edge of Perfection Anthrax",
    "Hive Mind Knocked Loose Denzel Curry",
    "Your Ghost Again Mastodon",
    "Let There Be Shred Megadeth",
    "End of You Poppy Amy Lee Courtney LaPlante",
    "My Only Angel Aerosmith YUNGBLUD",
    "Streets of Minneapolis Bruce Springsteen",
    "Your Favorite Toy Foo Fighters",
    "Vol.II Angine de Poitrine",
    "The Wow! Signal Muse",
    "Foreign Tongues The Rolling Stones",
    "Frozen Charlotte Jack White",
    "Fabienk Angine de Poitrine",
    "Kill Me Phoebe Bridgers",
    "Au Pays du Cocaine Geese",
    "Reliquia ROSALÍA",
    "Showbiz Hayley Williams",
    "I Must Be Dreaming Alabama Shakes",
    "Music Fashion Film Charli XCX",
    "Getting Killed Geese",
    "The Mountain Gorillaz",

    // R&B, Rap & Spoken Word
    "MORNING DEW Beyoncé",
    "Out The Window Kehlani",
    "Let Me Victoria Monét",
    "Pressha Jill Scott",
    "What You Need Tems",
    "Fallin Chris Brown Leon Thomas III",
    "47th Street Lalah Hathaway J. Ivy",
    "Sweet Nuthins Kehlani Leon Thomas III",
    "Mess PJ Morton Keyon Harrold",
    "To B Honest Jill Scott J.I.D",
    "I Found Myself Durand Bernarr",
    "Cant Let Go Lalah Hathaway",
    "Beautiful People Jill Scott",
    "My Muse Leon Thomas III",
    "If I Let You The Womack Sisters",
    "BERNARR Durand Bernarr",
    "Waves Moonchild",
    "The Last Balloon Tank And The Bangas",
    "PHOLKS Leon Thomas III",
    "Distracted Thundercat",
    "BROWN Chris Brown",
    "When The City Sleeps Alex Isley",
    "Kehlani Kehlani",
    "Saturday Night PJ Morton",
    "To Whom This May Concern Jill Scott",
    "Good Flirts Baby Keem Kendrick Lamar",
    "ErrTime Cardi B",
    "Run It Back De La Soul Nas",
    "LET EM KNOW T.I.",
    "Body Don Toliver",
    "This Woman Busta Rhymes",
    "Safe Cardi B Kehlani",
    "girl get up Doechii SZA",
    "E85 Don Toliver",
    "Watching Us Wale Leon Thomas III",
    "DILLAGENCE II Busta Rhymes",
    "AM I THE DRAMA Cardi B",
    "God Gotta Afro & Gold Hoops Rapsody",
    "OCTANE Don Toliver",
    "everything is a lot Wale",
    "BULLY DELUXE Kanye West",
    "Black Shaman Strikes Back Marc Marcel",
    "the color of rain Aja Monet",
    "A Hero And A Villain Mad Skillz",
    "How Love Grows Jwalt",
    "Leap Life Saul Williams",

    // Global & Visual Media
    "EQUILIBRIVM Anitta",
    "Oriadé Davido",
    "HOPE Angélique Kidjo",
    "Starrgirl Ayra Starr",
    "Love Is A Kingdom Tems",
    "House John Cale Charli XCX",
    "Need Someone Andrew Bird",
    "No Place Like Home Cynthia Erivo",
    "STORM GENER8ION Yung Lean"
];

async function obterToken() {
    const resposta = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
        },
        body: 'grant_type=client_credentials'
    });
    const dados = await resposta.json();
    return dados.access_token;
}

async function buscarCapaNoSpotify(termo, token) {
    try {
        const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(termo)}&type=track,album&limit=1`;
        const resposta = await fetch(url, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const dados = await resposta.json();
        
        let imagem = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80"; // fallback
        if (dados.tracks && dados.tracks.items.length > 0) {
            imagem = dados.tracks.items[0].album.images[0].url;
        } else if (dados.albums && dados.albums.items.length > 0) {
            imagem = dados.albums.items[0].images[0].url;
        }
        return imagem;
    } catch (e) {
        return "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80";
    }
}

async function rodar() {
    const token = await obterToken();
    console.log("Token obtido. Buscando capas no Spotify e gerando o arquivo...");

    let resultadosTexto = "";

    for (const item of itensParaBuscar) {
        const capa = await buscarCapaNoSpotify(item, token);
        const linha = `{ nome: "${item}", img: "${capa}" },\n`;
        resultadosTexto += linha;
        console.log(`Processado: ${item}`);
    }

    // Salva automaticamente em um arquivo de texto na mesma pasta
    fs.writeFileSync('resultados_capas.txt', resultadosTexto, 'utf-8');
    console.log("\nPronto! O arquivo 'resultados_capas.txt' foi gerado com todos os resultados.");
}

rodar();