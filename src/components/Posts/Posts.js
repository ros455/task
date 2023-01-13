import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, getAllPosts, getUserId } from '../../store/posts';
import './posts.scss'
const Posts = () => {
    const dispatch = useDispatch();

    const allPosts = useSelector(getPosts)

    const currentUserId = useSelector(getUserId);

    React.useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    return (
        <div>
            {allPosts.map((el) => (
                <div key={el.id}>
                    {el.userId == currentUserId ?
                        <h3 className='post_block'>
                            {el.title}
                        </h3>
                        :
                        <>
                        </>}
                </div>
            ))}
        </div>
    );
};

export default Posts;