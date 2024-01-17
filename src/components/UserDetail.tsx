import React, { useEffect, useState } from 'react'
import { UserType } from '../types'
import { useParams } from 'react-router-dom'
import api from '../services/api'

/**
 * Renders user data.
 *
 * @param userId - The ID of the user to fetch.
 * @returns JSX.Element - The rendered user data component.
 */

const User: React.FC = (): JSX.Element => {
  // Initialize user state as null since we don't have data yet
  const [user, setUser] = useState<UserType | null>(null)

  // Get the userId from the URL params
  const { userId } = useParams<{ userId: string }>()

  // Fetch the User data from the API when the component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Make an API request to get the user data based on the userId
        const response = await api.get<UserType>(`/users/${userId}`)
        setUser(response.data) // Update the state with the fetched user data
      } catch (error) {
        console.error('Error fetching User: ', error) // Log any errors that occurred during the fetch
      }
    }

    // Only fetch the user if the userId is available
    if (userId) fetchUser()
  }, [userId])
  return (
    <div className='user-data'>
      <div className='user-data__card'>
        <div className='user-data__info'>
          <h2 className='user-data__name'>Name: {user?.name}</h2>
          <p className='user-data__username'>username: @{user?.username}</p>
          <a href={`mailto:${user?.email}`} className='user-data__email'>
            Email: {user?.email}
          </a>
          <p className='user-data__phone'>Phone Number: {user?.phone}</p>
          <p className='user-data__city'>city: {user?.address.city}</p>
          <p className='user-data__company'>
            Company Name: {user?.company.name}
          </p>
        </div>
      </div>
    </div>
  )
}

export default User
