import React from 'react'
import { useLocation ,useNavigate} from 'react-router-dom'

function Home() {

const location =useLocation()

  return (
    <div>
        <h1>hello  welcome to the home page</h1>
    </div>
  )
}

export default Home