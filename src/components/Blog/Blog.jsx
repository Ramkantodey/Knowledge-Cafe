import PropTypes from 'prop-types';
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id, title, cover, reading_time, author, author_img, posted_date, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='rounded-md w-full mb-4' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 items-center'>
                <div className='flex gap-6'>
                    <img className='w-12 h-12 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)}><img className='w-[24px] ' src="https://i.imgur.com/ZCd26N8.png" alt="" /></button>
                </div>
            </div>
            <h2 className='text-4xl font-semibold text-[#111111] my-4'>{title}</h2>
            <p className='text-yellow-800'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=""> {hash} </a></span>)
                }
            </p>
            <button className='mt-4 text-purple-600 font-bold underline' onClick={() => handleMarkAsRead(id, reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;