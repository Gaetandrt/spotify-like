export interface Playlist {
    id: number,
    name: string,
    description: string,
    private: boolean,
    collaborative: boolean,
    created_at: Date,
    type: 'playlist',
    nb_tracks: number
}

export interface CreatePlaylist {
    name: string,
    description: string,
    private: boolean,
    collaborative: boolean
}

