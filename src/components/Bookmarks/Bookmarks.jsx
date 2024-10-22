import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-100 ml-4 mt-2 pt-4 rounded-md text-center">
            <div className="p-4 border-2 rounded-md bg-purple-100 border-purple-600 ">
                <h3 className="text-2xl font-bold text-purple-800">Spent time on read : {readingTime} min</h3>
            </div>
            <h2 className="text-3xl text-center  text-blue-400">Bookmarked Blogs:    {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks