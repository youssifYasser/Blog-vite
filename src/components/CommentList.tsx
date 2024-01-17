import React, { useEffect, useState } from 'react'
import CommentDetail from './CommentDetail'
import api from '../services/api'
import { CommentType } from '../types'
import { useParams } from 'react-router-dom'

const Comments: React.FC = () => {
  const [comments, setComments] = useState<CommentType[]>([])

  const { postId } = useParams()

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await api.get('/comments')
        const postComments = response.data.filter(
          (comment: CommentType) => comment.postId === Number(postId)
        )
        setComments(postComments)
      } catch (error) {
        console.error(error)
      }
    }

    if (postId) fetchComments()
  }, [postId])

  return (
    <div className='comments'>
      {comments.map((comment) => (
        <CommentDetail key={comment.id} {...comment} />
      ))}
    </div>
  )
}

export default Comments
