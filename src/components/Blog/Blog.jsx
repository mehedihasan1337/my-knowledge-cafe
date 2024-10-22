import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog }) => {
    const { title, cover, author_img, author, post_date, reading_time, hashtags } = blog;

    return (
        <div className='mb-20'>
            <img className='mb-4' src={cover} alt={`cover picture ot the title ${title}`} />
            <div className='flex justify-between items-center'>

                <div className='flex gap-6 mb-4'  >
                    <img className='w-14' src={author_img} alt="" />
                    <div className='text-left'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button className='ml-2 text-red-600 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl text-left mb-4">{title}</h2>
            {/* <p className='text-left'>
               
                {
                    hashtags.map((hash, idx) => <span key={idx}>#{hash}</span>)
                }
            </p> */}

        </div>
    );
};
Blog.prototype = {
    blog: PropTypes.object.isRequired
}

export default Blog;