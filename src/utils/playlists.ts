import type {Song} from "../types.ts";
import {v4 as uuidv4} from "uuid";

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
            {
                id: uuidv4(),
                title: "N.Y. State of Mind",
                artist: "Nas",
                duration: "4:54",
                favourite: true
            },
            {
                id: uuidv4(),
                title: "Juicy",
                artist: "The Notorious B.I.G.",
                duration: "5:00",
                favourite: false
            },
            {
                id: uuidv4(),
                title: "Shook Ones Pt. II",
                artist: "Mobb Deep",
                duration: "4:25",
                favourite: false
            },
            {
                id: uuidv4(),
                title: "N.Y. State of Mind",
                artist: "Nas",
                duration: "4:54",
                favourite: false
            },
            {
                id: uuidv4(),
                title: "Juicy",
                artist: "The Notorious B.I.G.",
                duration: "5:00",
                favourite: false
            },
            {
                id: uuidv4(),
                title: "Shook Ones Pt. II",
                artist: "Mobb Deep",
                duration: "4:25",
                favourite: true
            }
        ]
    },
    {
        id: "2",
        title: "West Coast Legends",
        image: "/images/west-coast-legends.jpg",
        songs: [
            {
                id: uuidv4(),
                title: "California Love",
                artist: "2Pac",
                duration: "4:45",
                favourite: false
            },
            {
                id: uuidv4(),
                title: "Nuthin' but a 'G' Thang",
                artist: "Dr. Dre",
                duration: "3:58",
                favourite: false
            },
            {id: "s9", title: "Regulate", artist: "Warren G", duration: "4:11", favourite: false},
            {
                id: uuidv4(),
                title: "California Love",
                artist: "2Pac",
                duration: "4:45",
                favourite: true
            },
            {
                id: uuidv4(),
                title: "Nuthin' but a 'G' Thang",
                artist: "Dr. Dre",
                duration: "3:58",
                favourite: false
            },
            {id: "s12", title: "Regulate", artist: "Warren G", duration: "4:11", favourite: false}
        ]
    },
    {
        id: "3",
        title: "Modern Hip-Hop",
        image: "/images/modern-hip-hop.jpg",
        songs: [
            {
                id: uuidv4(),
                title: "SICKO MODE",
                artist: "Travis Scott",
                duration: "5:12",
                favourite: false
            },
            {
                id: uuidv4(),
                title: "Money Trees",
                artist: "Kendrick Lamar",
                duration: "6:26",
                favourite: false
            },
            {id: uuidv4(), title: "God's Plan", artist: "Drake", duration: "3:19", favourite: true},
            {
                id: uuidv4(),
                title: "SICKO MODE",
                artist: "Travis Scott",
                duration: "5:12",
                favourite: false
            },
            {
                id: uuidv4(),
                title: "Money Trees",
                artist: "Kendrick Lamar",
                duration: "6:26",
                favourite: false
            },
            {id: uuidv4(), title: "God's Plan", artist: "Drake", duration: "3:19", favourite: false}
        ]
    },
    {
        id: "4",
        title: "Conscious Rap",
        image: "/images/conscious.jpg",
        songs: [
            {
                id: uuidv4(),
                title: "The Message",
                artist: "Grandmaster Flash",
                duration: "3:10",
                favourite: false
            },
            {
                id: uuidv4(),
                title: "Alright",
                artist: "Kendrick Lamar",
                duration: "3:39",
                favourite: false
            },
            {
                id: uuidv4(),
                title: "Fight the Power",
                artist: "Public Enemy",
                duration: "4:42",
                favourite: true
            },
            {
                id: uuidv4(),
                title: "The Message",
                artist: "Grandmaster Flash",
                duration: "3:10",
                favourite: false
            },
            {
                id: uuidv4(),
                title: "Alright",
                artist: "Kendrick Lamar",
                duration: "3:39",
                favourite: false
            },
            {
                id: uuidv4(),
                title: "Fight the Power",
                artist: "Public Enemy",
                duration: "4:42",
                favourite: false
            }
        ]
    },
    {
        id: "5",
        title: "Southern Bangers",
        image: "/images/southern-bangers.png",
        songs: [
            {
                id: uuidv4(),
                title: "International Players Anthem",
                artist: "UGK",
                duration: "5:06",
                favourite: true
            },
            {
                id: uuidv4(),
                title: "Still Tippin'",
                artist: "Mike Jones",
                duration: "4:32",
                favourite: false
            },
            {
                id: uuidv4(),
                title: "Ms. Jackson",
                artist: "Outkast",
                duration: "4:30",
                favourite: false
            },
            {
                id: uuidv4(),
                title: "International Players Anthem",
                artist: "UGK",
                duration: "5:06",
                favourite: false
            },
            {
                id: uuidv4(),
                title: "Still Tippin'",
                artist: "Mike Jones",
                duration: "4:32",
                favourite: false
            },
            {id: "s30", title: "Ms. Jackson", artist: "Outkast", duration: "4:30", favourite: false}
        ]
    },
    {
        id: "6",
        title: "Golden Era",
        image: "/images/golden-era.jpg",
        songs: [
            {
                id: uuidv4(),
                title: "It Was a Good Day",
                artist: "Ice Cube",
                duration: "4:21",
                favourite: false
            },
            {
                id: uuidv4(),
                title: "C.R.E.A.M.",
                artist: "Wu-Tang Clan",
                duration: "4:12",
                favourite: true
            },
            {
                id: uuidv4(),
                title: "Scenario",
                artist: "A Tribe Called Quest",
                duration: "4:10",
                favourite: false
            },
            {
                id: uuidv4(),
                title: "It Was a Good Day",
                artist: "Ice Cube",
                duration: "4:21",
                favourite: false
            },
            {
                id: uuidv4(),
                title: "C.R.E.A.M.",
                artist: "Wu-Tang Clan",
                duration: "4:12",
                favourite: false
            },
            {
                id: uuidv4(),
                title: "Scenario",
                artist: "A Tribe Called Quest",
                duration: "4:10",
                favourite: false
            }
        ]
    }
];
