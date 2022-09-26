import React from 'react'
import {Link} from 'react-router-dom';

function BlogCard({title,date,description,link}) {
  return (
    <Link to={`/blogs/${link}`} className='p-10 bg-[white] shadow-md rounded-lg font-google font-[600] w-[20rem] mx-10 my-5'>
        <h1 className='text-googleBlue text-[1.5rem] mt-5'>{title}</h1>
        <p className='text-textMain text-[.75rem] mt-2'>{date.split('T')[0].replaceAll('-',' ')}</p>
        <p className='text-textSecondary font-[500] mt-5'>{description}</p>
    </Link>
  )
}

export default BlogCard