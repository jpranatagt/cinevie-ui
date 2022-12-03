import {
  U_IsLengthLess,
  U_IsURLValid,
  U_IsLessThan,
  U_IsMoreThan,
} from '@utils'

export const T_NewValidation = {
  title: {
    isError: (title) => U_IsLengthLess(title, 2),
    message: 'Title must more than 2 characters',
  },
  description: {
    isError: (description) => U_IsLengthLess(description, 80),
    message: 'Description must be longer',
  },
  cover: {
    isError: (url) => U_IsURLValid(url),
    message: 'Cover url is not accepted',
  },
  trailer: {
    isError: (videoId) => U_IsLengthLess(videoId, 6),
    message: 'Trailer must be Video ID from youtube',
  },
  year: {
    isError: (year) => U_IsMoreThan(year),
    message: 'Release year must be greater than 1888',
  },
  runtime: {
    isError: (runtime) => U_IsLessThan(runtime, 3),
    message: 'Movie duration must be at least 3 minutes',
  },
  genres: {
    isError: (genres) => U_IsLengthLess(genres, 4),
    message: 'Please provide a correct genre',
  },
  stars: {
    isError: (stars) => U_IsLengthLess(stars, 4),
    message: 'The name of stars should longer',
  },
}
