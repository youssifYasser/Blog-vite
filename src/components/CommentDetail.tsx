import React from 'react'
import { CommentType } from '../types'

/**
 * Renders a comment component.
 * @param props - The properties for the comment component.
 * @returns The rendered comment component.
 */

// Define a functional component called Comment that takes in the props name, email, and body
const Comment: React.FC<CommentType> = ({ name, email, body }): JSX.Element => {
  return (
    <div className='comment'>
      <h3 className='title'>{name}</h3>
      <h5 className='author'>Created By: {email}</h5>
      <p className='content'>{body}</p>
    </div>
  )
}

export default Comment
