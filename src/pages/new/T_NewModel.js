export const T_NewModel = {
  static: [
    { type: 'text', name: 'title', label: 'Title' },
    { type: 'text', name: 'description', label: 'Description' },
    { type: 'url', name: 'cover', label: 'Cover' },
    { type: 'url', name: 'trailer', label: 'Trailer' },
    { type: 'number', name: 'year', label: 'Year' },
    { type: 'number', name: 'runtime', label: 'Runtime' },
  ],
  dynamic: {
    genres: [{ type: 'text', name: 'genres', label: 'e.g Action' }],
    stars: [
      { type: 'text', name: 'stars', label: 'e.g Charlie Chaplin' },
    ],
  },
}
