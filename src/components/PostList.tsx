/* eslint-disable react-hooks/exhaustive-deps */
// Import the necessary dependencies
import React, { useEffect, useState } from 'react'
import api from '../services/api'
import { Link } from 'react-router-dom'
import { PostType } from '../types'

const Posts: React.FC = (): JSX.Element => {
  const [posts, setPosts] = useState<PostType[]>([]) // Declare the state variable for storing the posts

  // Fetch the posts data from the API when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get<PostType[]>('/posts')
        setPosts(response.data) // Update the state with the fetched posts data
      } catch (error) {
        console.error('Error fetching Posts: ', error) // Log any errors that occurred during the fetch
      }
    }

    fetchPosts() // Invoke the fetchPosts function
  }, []) // The empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <article className='posts'>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li className='post' key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h2 className='title'>{post.title}</h2>
            </Link>
            <p className='body'>{post.body}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Posts
