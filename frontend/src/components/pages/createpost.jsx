import React from 'react'



const CreatePost = () => {

  return (

    <section className="create-post">

      <h1>Share something with the world</h1>

      <p>Write your thoughts, stories, or anything you want to share.</p>

      <form className="post-form">

        <input

          type="text"

          className="post-title"

          placeholder="Post title"

        />

        <textarea

          className="post-body"

          placeholder="What's on your mind?"

          rows="6"

        />

        <button type="submit">Publish</button>

      </form>

    </section>

  )

}



export default CreatePost

