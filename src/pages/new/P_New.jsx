import React from 'react'

import { U_useRequest } from '@utils'

const P_New = () => {
  const initialValue = {
    title: '',
    description: '',
    cover: '',
    trailer: '',
    year: 0,
    runtime: 0,
    genres: [],
    stars: [],
  }

  const [values, setValues] = React.useState(initialValue)
  const ADD_URL = '/movies'
  const message = {
    onDefault: 'Add movie',
    onRequest: 'Sending the movie data ...',
    onSuccess: 'The movie has been added.',
  }

  const { state, U_usePostAuthRequest } = U_useRequest(
    ADD_URL,
    message
  )

  const { status } = state

  const handleChange = (event) => {
    event.preventDefault()

    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    U_usePostAuthRequest(values)
  }

  return (
    <section>
      <h3>Add a new movie</h3>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>Title: </label>
        <input
          name="title"
          type="text"
          onChange={(event) => handleChange(event)}
        />
        <br />
        <br />
        <label>Description: </label>
        <input
          name="description"
          type="text"
          onChange={(event) => handleChange(event)}
        />
        <br />
        <br />
        <label>Cover: </label>
        <input
          name="cover"
          type="text"
          onChange={(event) => handleChange(event)}
        />
        <br />
        <br />
        <label>Trailer: </label>
        <input
          name="trailer"
          type="text"
          onChange={(event) => handleChange(event)}
        />
        <br />
        <br />
        <label>Year: </label>
        <input
          name="year"
          type="number"
          min="1888"
          max="2099"
          onChange={(event) => handleChange(event)}
        />
        <br />
        <br />
        <label>Runtime: </label>
        <input
          name="runtime"
          type="number"
          onChange={(event) => handleChange(event)}
        />
        <br />
        <br />
        <label>Genres: </label>
        <input
          name="genres"
          type="text"
          onChange={(event) => handleChange(event)}
        />
        <br />
        <br />
        <label>Stars: </label>
        <input
          name="stars"
          type="text"
          onChange={(event) => handleChange(event)}
        />
        <br />
        <br />
        <button type="submit">{status}</button>
      </form>
    </section>
  )
}

export default P_New
