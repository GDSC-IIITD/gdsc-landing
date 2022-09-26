import React,{useState,useEffect} from 'react';
import client from "../client";

import BlogCard from "../components/BlogCard";

import shapeGreen from '../images/backgrounds/shapeGreen.svg';
import circleBlue from '../images/backgrounds/circleBlue.svg';
import randomShape1 from '../images/backgrounds/randomShape1.svg';
import randomShape2 from '../images/backgrounds/randomShape2.svg';

function Blogs() {
  const [posts, setPosts] = useState([])
  console.log(posts)
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] { title, slug, description, publishedAt }`
      )
      .then((data) => setPosts(data))
  }, [])


  return (
    <>
      {/* Background */}
      <div className="flex w-screen absolute top-10 justify-between z-0">
        <img src={shapeGreen}/>
        <img className='ml-[-50vw]' src={randomShape1}/>
        <img className='mr-[-40vw]' src={randomShape2}/>
        <img src={circleBlue}/>
      </div>


      {/* Heading */}
      <div className="flex flex-col w-screen items-center text-center font-google">
        <h2 className=' w-2/5 mt-20 text-googleGreen font-[700] text-[3rem] '>
          Exploring the realm of Coding and Technology</h2>
        <p className = ' w-2/5 mt-10 text-[1.5rem] text-googleBlue'>
          and some more random stuff...</p>
      </div>


      {/* Blogs Container */}
      <div className='flex flex-wrap w-screen mt-[10rem] relative z-5 p-10 justify-center'>
        {posts.map((post, i) =>(
          <>
          <BlogCard key={i} title={post.title} 
                    link={post.slug.current} 
                    description={post.description} 
                    date={post.publishedAt}/>
          </>
        ))}
      </div>

    </>
  )
}

export default Blogs