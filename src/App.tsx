// Import necessary dependencies
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'

// Import necessary dependencies
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'
import UserDetail from './components/UserDetail'

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className='App'>
      {/* Set up the router */}
      <Router>
        {/* Define the routes */}
        <Routes>
          <Route path='/' element={<PostList />} />
          <Route path='/posts/:postId' element={<PostDetail />} />
          <Route path='/users/:userId' element={<UserDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
