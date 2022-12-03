export const T_NewModel = {
  static: [
    { type: 'text', name: 'title', label: 'Title' },
    { type: 'text', name: 'description', label: 'Description' },
    { type: 'url', name: 'cover', label: 'Cover' },
    { type: 'text', name: 'trailer', label: 'Trailer' },
    { type: 'number', name: 'year', label: 'Year' },
    { type: 'number', name: 'runtime', label: 'Runtime' },
  ],
  dynamic: {
    genres: [
      { type: 'text', name: 'genres', label: 'insert a genre' },
    ],
    stars: [
      { type: 'text', name: 'stars', label: 'insert a star name' },
    ],
  },
}
