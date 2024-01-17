import React, { useEffect, useState } from 'react'
import Comments from '../components/CommentList'
import { useParams } from 'react-router-dom'
import api from '../services/api'
import { PostType, UserType } from '../types'
import { Link } from 'react-router-dom'

const Post: React.FC = () => {
  // Initialize state variables for post and user
  const [post, setPost] = useState<PostType | null>(null)
  const [user, setUser] = useState<UserType | null>(null)

  // Get the postId from the URL parameters
  const { postId } = useParams<{ postId: string }>()

  // Fetch the post and user data when the component mounts or when the postId or userId changes
  useEffect(() => {
    // Function to fetch the post data
    const fetchPost = async () => {
      try {
        const response = await api.get<PostType>(`/posts/${postId}`) // Make a GET request to the API to fetch the post data based on the postId

        setPost(response.data) // Set the post state variable with the data from the response
      } catch (error) {
        console.error('Error fetching Post: ', error)
      }
    }

    // Function to fetch the user data
    const fetchUser = async () => {
      try {
        // Make a GET request to the API to fetch the user data based on the userId associated with the post
        const response = await api.get<UserType>(`/users/${post?.userId}`)
        setUser(response.data) // Set the user state variable with the data from the response
      } catch (error) {
        console.error('Error fetching User: ', error)
      }
    }

    // Check if the postId exists
    if (postId) {
      fetchPost()

      // Check if the userId associated with the post exists
      if (post?.userId) fetchUser()
    }
  }, [postId, post?.userId])

  return (
    <div className='post-wrapper'>
      <article className='post'>
        <h2 className='title'>{post?.title}</h2>
        <p className='body'>{post?.body}</p>
        {user && (
          <Link to={`/users/${post?.userId}`}>
            <div className='user'>
              <h3 className='username'>
                {user.name} @{user.username}
              </h3>
              <p className='email'>{user.email}</p>
            </div>
          </Link>
        )}
        <h3 className='comments-title'>Comments:</h3>
        <Comments />
      </article>
    </div>
  )
}

export default Post
