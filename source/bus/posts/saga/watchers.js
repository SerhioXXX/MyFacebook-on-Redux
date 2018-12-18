//Core
import { takeEvery, all, call } from 'redux-saga/effects';

//Types
import { types } from '../types';

//Workers
import { createPost, fillPosts, removePost, likePost, unlikePost } from './workers';

export function* watchCreatePost () {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

export function* watchFillPosts () {
    yield takeEvery(types.FETCH_POSTS_ASYNC, fillPosts);
}
export function* watchRemovePost () {
    yield takeEvery(types.REMOVE_POST_ASYNC, removePost);
}

export function* watchLikePost () {
    yield takeEvery(types.LIKE_POST_ASYNC, likePost);
}

export function* watchUnlikePost () {
    yield takeEvery(types.UNLIKE_POST_ASYNC, unlikePost);
}

export function* watchPosts () {
    yield all([call(watchCreatePost), call(watchFillPosts), call(watchRemovePost), call(watchLikePost),
        call(watchUnlikePost)]);
}
