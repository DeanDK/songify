export type Song = {
    id: string;
    title: string;
    artist: string;
    duration: string;
};

export type Playlist = {
    id: string;
    title: string;
    image: string;
    songs: Song[];
};

export const playlists: Playlist[] = [
    {
        id: "1",
        title: "90s East Coast",
        image: "/images/90s-east-coast.jpg",
        songs: [
            {id: "s1", title: "N.Y. State of Mind", artist: "Nas", duration: "4:54"},
            {id: "s2", title: "Juicy", artist: "The Notorious B.I.G.", duration: "5:00"},
            {id: "s3", title: "Shook Ones Pt. II", artist: "Mobb Deep", duration: "4:25"},
            {id: "s4", title: "N.Y. State of Mind", artist: "Nas", duration: "4:54"},
            {id: "s5", title: "Juicy", artist: "The Notorious B.I.G.", duration: "5:00"},
            {id: "s6", title: "Shook Ones Pt. II", artist: "Mobb Deep", duration: "4:25"}
        ]
    },
    {
        id: "2",
        title: "West Coast Legends",
        image: "/images/west-coast-legends.jpg",
        songs: [
            {id: "s7", title: "California Love", artist: "2Pac", duration: "4:45"},
            {id: "s8", title: "Nuthin' but a 'G' Thang", artist: "Dr. Dre", duration: "3:58"},
            {id: "s9", title: "Regulate", artist: "Warren G", duration: "4:11"},
            {id: "s10", title: "California Love", artist: "2Pac", duration: "4:45"},
            {id: "s11", title: "Nuthin' but a 'G' Thang", artist: "Dr. Dre", duration: "3:58"},
            {id: "s12", title: "Regulate", artist: "Warren G", duration: "4:11"}
        ]
    },
    {
        id: "3",
        title: "Modern Hip-Hop",
        image: "/images/modern-hip-hop.jpg",
        songs: [
            {id: "s13", title: "SICKO MODE", artist: "Travis Scott", duration: "5:12"},
            {id: "s14", title: "Money Trees", artist: "Kendrick Lamar", duration: "6:26"},
            {id: "s15", title: "God's Plan", artist: "Drake", duration: "3:19"},
            {id: "s16", title: "SICKO MODE", artist: "Travis Scott", duration: "5:12"},
            {id: "s17", title: "Money Trees", artist: "Kendrick Lamar", duration: "6:26"},
            {id: "s18", title: "God's Plan", artist: "Drake", duration: "3:19"}
        ]
    },
    {
        id: "4",
        title: "Conscious Rap",
        image: "/images/conscious.jpg",
        songs: [
            {id: "s19", title: "The Message", artist: "Grandmaster Flash", duration: "3:10"},
            {id: "s20", title: "Alright", artist: "Kendrick Lamar", duration: "3:39"},
            {id: "s21", title: "Fight the Power", artist: "Public Enemy", duration: "4:42"},
            {id: "s22", title: "The Message", artist: "Grandmaster Flash", duration: "3:10"},
            {id: "s23", title: "Alright", artist: "Kendrick Lamar", duration: "3:39"},
            {id: "s24", title: "Fight the Power", artist: "Public Enemy", duration: "4:42"}
        ]
    },
    {
        id: "5",
        title: "Southern Bangers",
        image: "/images/southern-bangers.png",
        songs: [
            {id: "s25", title: "International Players Anthem", artist: "UGK", duration: "5:06"},
            {id: "s26", title: "Still Tippin'", artist: "Mike Jones", duration: "4:32"},
            {id: "s27", title: "Ms. Jackson", artist: "Outkast", duration: "4:30"},
            {id: "s28", title: "International Players Anthem", artist: "UGK", duration: "5:06"},
            {id: "s29", title: "Still Tippin'", artist: "Mike Jones", duration: "4:32"},
            {id: "s30", title: "Ms. Jackson", artist: "Outkast", duration: "4:30"}
        ]
    },
    {
        id: "6",
        title: "Golden Era",
        image: "/images/golden-era.jpg",
        songs: [
            {id: "s31", title: "It Was a Good Day", artist: "Ice Cube", duration: "4:21"},
            {id: "s32", title: "C.R.E.A.M.", artist: "Wu-Tang Clan", duration: "4:12"},
            {id: "s33", title: "Scenario", artist: "A Tribe Called Quest", duration: "4:10"},
            {id: "s34", title: "It Was a Good Day", artist: "Ice Cube", duration: "4:21"},
            {id: "s35", title: "C.R.E.A.M.", artist: "Wu-Tang Clan", duration: "4:12"},
            {id: "s36", title: "Scenario", artist: "A Tribe Called Quest", duration: "4:10"}
        ]
    }
];
