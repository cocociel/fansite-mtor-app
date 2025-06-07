export const ROUTES = {
    SONGS: '/api/songs',
    SONGS_INS: '/api/songs-insert'
} as const satisfies Record<string, string>