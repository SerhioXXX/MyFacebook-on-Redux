//Types
import { FILL_POSTS, FETCH_POSTS_ASYNC, CREATE_POSTS, CREATE_POST_ASYNC } from './types';

//Instruments
import { api } from '../../REST';

export const fillPosts = (posts) => {
    return {
        type:    FILL_POSTS,
        payload: posts,
    };
};

export const createPost = (post) => {
    return {
        type:    CREATE_POSTS,
        payload: post,
    };
};

export const fetchPostsAsync = () => async (dispatch) => {
    dispatch({
        type: FETCH_POSTS_ASYNC,
    });

    const response = await api.posts.fetch();
    const result = await response.json();

    dispatch(fillPosts(result.data));
};

export const createPostAsync = (comment) => async (dispatch) => {
    dispatch({
        type: CREATE_POST_ASYNC,
    });

    const response = await api.posts.create(comment);
    const result = await response.json();

    dispatch(createPost(result.data));
};
