type PostType = {
  id: number
  title: string
  body: string
  userId: number
}

type UserType = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

type CommentType = {
  id: number
  name: string
  email: string
  body: string
  postId: number
}

export { PostType, UserType, CommentType }
