export const ROUTES = {
    TOP: '/',
    SONGS: '/songs',
    SONGS_INS: '/songs-insert',
    SONGS_FIND_BY_ARTIST: '/songs-artist',
} as const satisfies Record<string, string>