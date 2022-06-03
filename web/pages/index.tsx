import { Input } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Graph from '../components/index/Graph'
import Header from '../components/index/Header'
import Post from '../components/index/Post'
import SideBar from '../components/index/SideBar'

const Home: NextPage = () => {
  return (
      <div>
        <Header />

        <div className='flex justify-around'>
          <Post />
          <Graph />
        </div>

        <div>
          <SideBar />
        </div>
      </div>

  )
}

export default Home
