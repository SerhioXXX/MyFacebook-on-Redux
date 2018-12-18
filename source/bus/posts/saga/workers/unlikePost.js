//Core
import { put, apply, select } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* unlikePost ({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.posts.like, [postId]);

        if (response.status !== 204) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }

        const unliker = yield select((state) => {
            //return state.profile.remove('avatar').remove('token');
            return state.profile.removeAll(['avatar', 'token']);
        });

        console.log('--->unliker', unliker);

        yield put(postsActions.unlikePost({ unliker, postId }));

    } catch (error) {
        yield put(uiActions.emitError(error, '-> unlikePost worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
