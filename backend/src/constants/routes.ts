export const ROUTES = {
    TOP: '/',
    SONG: '/song',
    SONG_INS: '/song-insert',
    SONG_FIND_BY_ARTIST: '/song-artist',
} as const satisfies Record<string, string>