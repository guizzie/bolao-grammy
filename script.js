// CONFIGURAÇÃO DO SUPABASE
const SUPABASE_URL = "https://nhxqduzvqvkzimndosap.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_DJ3DQo6wpzr7BvkVVx9yiw_vGvEsOZs";

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// TODAS AS CATEGORIAS OFICIAIS DO GRAMMY COM CAPAS REAIS DO SPOTIFY
const categorias = [
    {
        id: "roty",
        nome: "Record Of The Year",
        indicados: [
            { nome: "Man I Need - Olivia Dean", img: "https://i.scdn.co/image/ab67616d0000b273e3d69e17dde129037a1f09e2" },
            { nome: "Choosin' Texas - Ella Langley", img: "https://i.scdn.co/image/ab67616d0000b27390958927fbba47a62c3e63f8" },
            { nome: "I Just Might - Bruno Mars", img: "https://i.scdn.co/image/ab67616d0000b273e7623a0a60f330ee2b24d498" },
            { nome: "WHERE IS MY HUSBAND! - RAYE", img: "https://i.scdn.co/image/ab67616d0000b2736ac3c7938191585c53c8180d" },
            { nome: "the cure - Olivia Rodrigo", img: "https://i.scdn.co/image/ab67616d0000b27379e480cbab8c7b86d277841a" },
            { nome: "Berghain - ROSALÍA, Björk, Yves Tumor", img: "https://i.scdn.co/image/ab67616d0000b273fb535a56e6bacfb6bee0c1b4" },
            { nome: "The Fate of Ophelia - Taylor Swift", img: "https://i.scdn.co/image/ab67616d0000b273d7812467811a7da6e6a44902" },
            { nome: "Dracula - Tame Impala, JENNIE", img: "https://i.scdn.co/image/ab67616d0000b2734806a1c10aa685b1b936158b" }
        ]
    },
    {
        id: "aoty",
        nome: "Album Of The Year",
        indicados: [
            { nome: "Lost Weekend - Phoebe Bridgers", img: "https://i.scdn.co/image/ab67616d0000b27325a647ace83ba32770ab5d0f" },
            { nome: "The Art of Loving - Olivia Dean", img: "https://i.scdn.co/image/ab67616d0000b2739a336bfb6d40bbd90a507417" },
            { nome: "Dandelion - Ella Langley", img: "https://i.scdn.co/image/ab67616d0000b2738606848da949bbaddf447d87" },
            { nome: "The Romantic - Bruno Mars", img: "https://i.scdn.co/image/ab67616d0000b2733eb8dc748f7efb1470f74395" },
            { nome: "THIS MUSIC MAY CONTAIN HOPE. - RAYE", img: "https://i.scdn.co/image/ab67616d0000b27397c0928704e5a2bd8d4c5b90" },
            { nome: "you seem pretty sad for a girl so in love - Olivia Rodrigo", img: "https://i.scdn.co/image/ab67616d0000b2735cf234eeb7a2edf44bf64a46" },
            { nome: "LUX (Complete Works) - ROSALÍA", img: "https://i.scdn.co/image/ab67616d0000b27393ee2e2f2dfb7de9befcc164" },
            { nome: "The Life of a Showgirl - Taylor Swift", img: "https://i.scdn.co/image/ab67616d0000b273d7812467811a7da6e6a44902" }
        ]
    },
    {
        id: "soty",
        nome: "Song Of The Year",
        indicados: [
            { nome: "Berghain - Björk, Noah Goldstein, Jake Miller, ROSALÍA, Dylan Wiggins", img: "https://i.scdn.co/image/ab67616d0000b273fb535a56e6bacfb6bee0c1b4" },
            { nome: "Choosin' Texas - Luke Dick, Miranda Lambert, Ella Langley, Joybeth Taylor", img: "https://i.scdn.co/image/ab67616d0000b27390958927fbba47a62c3e63f8" },
            { nome: "the cure - Daniel Nigro, Olivia Rodrigo", img: "https://i.scdn.co/image/ab67616d0000b27379e480cbab8c7b86d277841a" },
            { nome: "hate that i made you love me - Ariana Grande, Max Martin, Ilya", img: "https://i.scdn.co/image/ab67616d0000b273b622d42c30697e1e1414343c" },
            { nome: "I Knew It, I Knew You - Jack Antonoff, Taylor Swift", img: "https://i.scdn.co/image/ab67616d0000b273a35a1d4983e2b4fd0094f910" },
            { nome: "Man I Need - Olivia Dean, Tobias Jesso, Jr., Zach Nahome", img: "https://i.scdn.co/image/ab67616d0000b273e3d69e17dde129037a1f09e2" },
            { nome: "Risk it All - Dernst Emile II, James Fauntleroy, Philip Lawrence, Bruno Mars", img: "https://i.scdn.co/image/ab67616d0000b2733eb8dc748f7efb1470f74395" },
            { nome: "WHERE IS MY HUSBAND! - RAYE, Mike Sabath", img: "https://i.scdn.co/image/ab67616d0000b2736ac3c7938191585c53c8180d" }
        ]
    },
    {
        id: "bna",
        nome: "Best New Artist",
        indicados: [
            { nome: "Angine de Poitrine", img: "https://i.scdn.co/image/ab67616d0000b2734821b77fd92093513d7634b5" },
            { nome: "Geese", img: "https://i.scdn.co/image/ab67616d0000b27345e82ae0372a50834825c018" },
            { nome: "Ella Langley", img: "https://i.scdn.co/image/ab67616d0000b27390958927fbba47a62c3e63f8" },
            { nome: "Slayyyter", img: "https://i.scdn.co/image/ab67616d0000b27313823d6fa982add5b750bf15" },
            { nome: "Sienna Spiro", img: "https://i.scdn.co/image/ab67616d0000b2730901e50bfaff4351a29f462b" },
            { nome: "Don Toliver", img: "https://i.scdn.co/image/ab67616d0000b273307323fa550564b0201b1d76" },
            { nome: "Remi Wolf", img: "https://i.scdn.co/image/ab67616d0000b2739af0029a0cd8b1cd24e99533" },
            { nome: "The Womack Sisters", img: "https://i.scdn.co/image/ab67616d0000b273daa96ea6d96d900f7d95f2f4" }
        ]
    },
    {
        id: "pop_solo",
        nome: "Best Pop Solo Performance",
        indicados: [
            { nome: "Man I Need - Olivia Dean", img: "https://i.scdn.co/image/ab67616d0000b273e3d69e17dde129037a1f09e2" },
            { nome: "Risk It All - Bruno Mars", img: "https://i.scdn.co/image/ab67616d0000b2733eb8dc748f7efb1470f74395" },
            { nome: "WHERE IS MY HUSBAND! - RAYE", img: "https://i.scdn.co/image/ab67616d0000b2736ac3c7938191585c53c8180d" },
            { nome: "the cure - Olivia Rodrigo", img: "https://i.scdn.co/image/ab67616d0000b27379e480cbab8c7b86d277841a" },
            { nome: "Sauvignon Blanc - ROSALÍA", img: "https://i.scdn.co/image/ab67616d0000b27393ee2e2f2dfb7de9befcc164" }
        ]
    },
    {
        id: "pop_duo",
        nome: "Best Pop Duo/Group Performance",
        indicados: [
            { nome: "RUNWAY - Lady Gaga, Doechii", img: "https://i.scdn.co/image/ab67616d0000b273848b466bd71bcaa46cb20030" },
            { nome: "Bring Your Love - Madonna, Sabrina Carpenter", img: "https://i.scdn.co/image/ab67616d0000b2732e45924aa55275c64280cada" },
            { nome: "Click Clack Symphony - RAYE, Hans Zimmer", img: "https://i.scdn.co/image/ab67616d0000b27397c0928704e5a2bd8d4c5b90" },
            { nome: "The Life of a Showgirl - Taylor Swift, Sabrina Carpenter", img: "https://i.scdn.co/image/ab67616d0000b273d7812467811a7da6e6a44902" },
            { nome: "Dracula - Tame Impala, JENNIE", img: "https://i.scdn.co/image/ab67616d0000b273c7c031ce9d06b131f8563676" }
        ]
    },
    {
        id: "pop_asian",
        nome: "Best Asian Pop Music Performance",
        indicados: [
            { nome: "Sunset Kiss - BABYMETAL, Polyphia", img: "https://i.scdn.co/image/ab67616d0000b2734b0ed3119e27ff6e56298053" },
            { nome: "Unang Kilig - BINI", img: "https://i.scdn.co/image/ab67616d0000b273bd2925ff9a38cdf6c8d35acf" },
            { nome: "BANG BANG - IVE", img: "https://i.scdn.co/image/ab67616d0000b273775cb67ad6f1aa320a8cb945" },
            { nome: "404 (New Era) - KiiiKiii", img: "https://i.scdn.co/image/ab67616d0000b2730cc65398388cbc486fa4fff7" },
            { nome: "YES - LiSA", img: "https://i.scdn.co/image/ab67616d0000b273687509244bc2247252a4cc89" },
            { nome: "VISA - SB19", img: "https://i.scdn.co/image/ab67616d0000b273b7f16758509aa943a33fbcf9" }
        ]
    },
    {
        id: "pop_album",
        nome: "Best Pop Vocal Album",
        indicados: [
            { nome: "The Art of Loving - Olivia Dean", img: "https://i.scdn.co/image/ab67616d0000b2739a336bfb6d40bbd90a507417" },
            { nome: "petal - Ariana Grande", img: "https://i.scdn.co/image/ab67616d0000b2738baf677ee2d8dda6cc9fcbd7" },
            { nome: "The Romantic - Bruno Mars", img: "https://i.scdn.co/image/ab67616d0000b2733eb8dc748f7efb1470f74395" },
            { nome: "THIS MUSIC MAY CONTAIN HOPE. - RAYE", img: "https://i.scdn.co/image/ab67616d0000b27397c0928704e5a2bd8d4c5b90" },
            { nome: "you seem pretty sad for a girl so in love - Olivia Rodrigo", img: "https://i.scdn.co/image/ab67616d0000b2735cf234eeb7a2edf44bf64a46" }
        ]
    },
    {
        id: "dance_rec",
        nome: "Best Dance/Electronic Recording",
        indicados: [
            { nome: "Lights Burn Dimmer - Fred Again.., (Jamie T)", img: "https://i.scdn.co/image/ab67616d0000b2734018b70099d433d9c8aabb12" },
            { nome: "I Feel So Free - Madonna", img: "https://i.scdn.co/image/ab67616d0000b2732e45924aa55275c64280cada" },
            { nome: "CRANK - Slayyyter", img: "https://i.scdn.co/image/ab67616d0000b2734c6a0c9499470002aa8ba96f" },
            { nome: "My Old Ways - Tame Impala", img: "https://i.scdn.co/image/ab67616d0000b273208500450dcd0fd294d7bd3b" },
            { nome: "Melatonin - Tinashe", img: "https://i.scdn.co/image/ab67616d0000b27351a09fe2151501375959f883" },
            { nome: "Music - underscores", img: "https://i.scdn.co/image/ab67616d0000b273cab898cdda3ee7d1e9b25646" }
        ]
    },
    {
        id: "dance_pop",
        nome: "Best Dance Pop Recording",
        indicados: [
            { nome: "Blue Moon - Zara Larsson", img: "https://i.scdn.co/image/ab67616d0000b27393872dded9b6fe861ac52752" },
            { nome: "Danceteria - Madonna", img: "https://i.scdn.co/image/ab67616d0000b2732e45924aa55275c64280cada" },
            { nome: "Life Boat. - RAYE", img: "https://i.scdn.co/image/ab67616d0000b27397c0928704e5a2bd8d4c5b90" },
            { nome: "DANCE... - Slayyyter", img: "https://i.scdn.co/image/ab67616d0000b27313823d6fa982add5b750bf15" },
            { nome: "Too Easy - Tinashe", img: "https://i.scdn.co/image/ab67616d0000b273b727131d0cc73d73e2dd42ae" }
        ]
    },
    {
        id: "dance_album",
        nome: "Best Dance/Electronic Album",
        indicados: [
            { nome: "CONFESSIONS II - Madonna", img: "https://i.scdn.co/image/ab67616d0000b2732e45924aa55275c64280cada" },
            { nome: "Sexistential - Robyn", img: "https://i.scdn.co/image/ab67616d0000b27395462e3fa8aca9db0fdd8c19" },
            { nome: "SOMA - Skrillex", img: "https://i.scdn.co/image/ab67616d0000b273f4d40a252848a83d49e0ff1b" },
            { nome: "WOR$T GIRL IN AMERICA - Slayyyter", img: "https://i.scdn.co/image/ab67616d0000b27320511e4991de381db57b4df6" },
            { nome: "Deadbeat - Tame Impala", img: "https://i.scdn.co/image/ab67616d0000b273208500450dcd0fd294d7bd3b" }
        ]
    },
    {
        id: "rock_perf",
        nome: "Best Rock Performance",
        indicados: [
            { nome: "Sarniezz - Angine de Poitrine", img: "https://i.scdn.co/image/ab67616d0000b2734821b77fd92093513d7634b5" },
            { nome: "Lost Boys - Phoebe Bridgers", img: "https://i.scdn.co/image/ab67616d0000b2737d2d1eb695b8384b81bacb9d" },
            { nome: "Trinidad - Geese", img: "https://i.scdn.co/image/ab67616d0000b27345e82ae0372a50834825c018" },
            { nome: "what's wrong with me - Olivia Rodrigo, Robert Smith", img: "https://i.scdn.co/image/ab67616d0000b2735cf234eeb7a2edf44bf64a46" },
            { nome: "In The Stars - The Rolling Stones", img: "https://i.scdn.co/image/ab67616d0000b273ce029930e121e2884a5c1d43" }
        ]
    },
    {
        id: "metal_perf",
        nome: "Best Metal Performance",
        indicados: [
            { nome: "The Edge of Perfection - Anthrax", img: "https://i.scdn.co/image/ab67616d0000b2738921d23ffb8f2f9a0af874cf" },
            { nome: "Hive Mind - Knocked Loose, Denzel Curry", img: "https://i.scdn.co/image/ab67616d0000b273b0f2d071d2ee5965c435f83b" },
            { nome: "Your Ghost Again - Mastodon", img: "https://i.scdn.co/image/ab67616d0000b273a90be43a44bddd383672b345" },
            { nome: "Let There Be Shred - Megadeth", img: "https://i.scdn.co/image/ab67616d0000b2739259659bd5b7332b9bfa8860" },
            { nome: "End of You - Poppy, Amy Lee, Courtney LaPlante", img: "https://i.scdn.co/image/ab67616d0000b273460c53e36b10048efc49e76c" }
        ]
    },
    {
        id: "rock_album",
        nome: "Best Rock Album",
        indicados: [
            { nome: "Vol.II - Angine de Poitrine", img: "https://i.scdn.co/image/ab67616d0000b2734821b77fd92093513d7634b5" },
            { nome: "Your Favorite Toy - Foo Fighters", img: "https://i.scdn.co/image/ab67616d0000b2735e2a81c3b6561e817b0de2b1" },
            { nome: "The Wow! Signal - Muse", img: "https://i.scdn.co/image/ab67616d0000b273b295bd39e098e7b68d57aacf" },
            { nome: "Foreign Tongues - The Rolling Stones", img: "https://i.scdn.co/image/ab67616d0000b27313b9f6190eb9a01538240c62" },
            { nome: "Frozen Charlotte - Jack White", img: "https://i.scdn.co/image/ab67616d0000b2739ac6288d467ebcf60f8fb129" }
        ]
    },
    {
        id: "alt_album",
        nome: "Best Alternative Music Album",
        indicados: [
            { nome: "I Must Be Dreaming - Alabama Shakes", img: "https://i.scdn.co/image/ab67616d0000b2735bc2a3d104d2c2cdc67fb92e" },
            { nome: "Lost Weekend - Phoebe Bridgers", img: "https://i.scdn.co/image/ab67616d0000b27325a647ace83ba32770ab5d0f" },
            { nome: "Music, Fashion, Film - Charli XCX", img: "https://i.scdn.co/image/ab67616d0000b273238e2ff91714a8db91b8a64d" },
            { nome: "Getting Killed - Geese", img: "https://i.scdn.co/image/ab67616d0000b27345e82ae0372a50834825c018" },
            { nome: "The Mountain - Gorillaz", img: "https://i.scdn.co/image/ab67616d0000b273eeb01b41f48210d032d1b6a4" },
            { nome: "LUX (Complete Works) - ROSALÍA", img: "https://i.scdn.co/image/ab67616d0000b27393ee2e2f2dfb7de9befcc164" }
        ]
    },
    {
        id: "rb_album",
        nome: "Best R&B Album",
        indicados: [
            { nome: "BROWN (The Chocolate Edition) - Chris Brown", img: "https://i.scdn.co/image/ab67616d0000b273f9685817281327d5fecb244e" },
            { nome: "When The City Sleeps - Alex Isley", img: "https://i.scdn.co/image/ab67616d0000b2732dff90fbde8068b44d376d9f" },
            { nome: "Kehlani - Kehlani", img: "https://i.scdn.co/image/ab67616d0000b27332a01c92d55ba825969bff6e" },
            { nome: "Saturday Night - PJ Morton", img: "https://i.scdn.co/image/ab67616d0000b27367efe7cd135c913fc857f283" },
            { nome: "To Whom This May Concern - Jill Scott", img: "https://i.scdn.co/image/ab67616d0000b2737096302e941475f3e2649fc2" }
        ]
    },
    {
        id: "rap_album",
        nome: "Best Rap Album",
        indicados: [
            { nome: "DILLAGENCE II - Busta Rhymes", img: "https://i.scdn.co/image/ab67616d0000b273d699626da6baf5964debd01f" },
            { nome: "AM I THE DRAMA? - Cardi B", img: "https://i.scdn.co/image/ab67616d0000b273967b09b0309b97afc0b6ee1d" },
            { nome: "God Gotta Afro & Gold Hoops - Rapsody", img: "https://i.scdn.co/image/ab67616d0000b273a14e643189ec72ad53632618" },
            { nome: "OCTANE - Don Toliver", img: "https://i.scdn.co/image/ab67616d0000b27325c28f3c9fbdbab1a88dd619" },
            { nome: "everything is a lot. - Wale", img: "https://i.scdn.co/image/ab67616d0000b273e0888b11575de46f86c394fe" },
            { nome: "BULLY - DELUXE - Kanye West", img: "https://i.scdn.co/image/ab67616d0000b273c5b4082a6636bb067532b484" }
        ]
    },
    {
        id: "global_album",
        nome: "Best Global Music Album",
        indicados: [
            { nome: "EQUILIBRIVM - Anitta", img: "https://i.scdn.co/image/ab67616d0000b273fc561bc173dc5cf4a08e0ab7" },
            { nome: "Oriadé - Davido", img: "https://i.scdn.co/image/ab67616d0000b2730e2b0b3bdb38eeddcf7481fe" },
            { nome: "HOPE!! - Angélique Kidjo", img: "https://i.scdn.co/image/ab67616d0000b273faf5a814dab856027e848d9c" },
            { nome: "Starrgirl - Ayra Starr", img: "https://i.scdn.co/image/ab67616d0000b2734457e5b19771c406c6edad32" },
            { nome: "Love Is A Kingdom - Tems", img: "https://i.scdn.co/image/ab67616d0000b2734522df9fc7103540be3e7950" }
        ]
    },
    {
        id: "visual_media_song",
        nome: "Best Song Written For Visual Media",
        indicados: [
            { nome: "House [From \"Wuthering Heights\"] - John Cale, Charli XCX", img: "https://i.scdn.co/image/ab67616d0000b2735048960108f204f627b294b4" },
            { nome: "I Knew It, I Knew You [From \"Toy Story 5\"] - Taylor Swift", img: "https://i.scdn.co/image/ab67616d0000b273a35a1d4983e2b4fd0094f910" },
            { nome: "Need Someone [From \"The Pitt\"] - Andrew Bird", img: "https://i.scdn.co/image/ab67616d0000b27389abecfa010e5bbc825d739f" },
            { nome: "No Place Like Home [From \"Wicked: For Good\"] - Stephen Schwartz", img: "https://i.scdn.co/image/ab67616d0000b2733a81e76442b1aa620895a211" },
            { nome: "RUNWAY [From \"The Devil Wears Prada 2\"] - Lady Gaga, Doechii", img: "https://i.scdn.co/image/ab67616d0000b273848b466bd71bcaa46cb20030" }
        ]
    },
    {
        id: "music_video",
        nome: "Best Music Video",
        indicados: [
            { nome: "Lost Boys - Phoebe Bridgers", img: "https://i.scdn.co/image/ab67616d0000b2737d2d1eb695b8384b81bacb9d" },
            { nome: "STORM - GENER8ION, Yung Lean", img: "https://i.scdn.co/image/ab67616d0000b273f5a3e8908f546883d245acc8" },
            { nome: "hate that i made you love me - Ariana Grande", img: "https://i.scdn.co/image/ab67616d0000b273b622d42c30697e1e1414343c" },
            { nome: "Click Clack Symphony. - RAYE", img: "https://i.scdn.co/image/ab67616d0000b27397c0928704e5a2bd8d4c5b90" },
            { nome: "Berghain - ROSALÍA", img: "https://i.scdn.co/image/ab67616d0000b273fb535a56e6bacfb6bee0c1b4" }
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