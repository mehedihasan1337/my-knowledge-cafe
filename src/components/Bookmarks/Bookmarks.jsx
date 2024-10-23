
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 text-center ml-5 rounded-xl mt-4 p-4 bg-gray-100">
            
            <div>
                <h3 className="text-4xl">Reading Time: {readingTime }</h3>
            </div>
            
            <h1 className="text-4xl ">Bookmarked Blogs :{bookmarks.length}</h1>
             {
                bookmarks.map((bookmark, idx) =><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
             }
         
        </div>
    );
};
Bookmarks.prototypes={ 
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks; 