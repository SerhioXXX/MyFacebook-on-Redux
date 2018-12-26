//Actions
import { usersActions } from '../actions';

//Types
import { types } from '../types';

describe('users actions', () => {
    test('clearUsers', () => {
        expect(usersActions.clearUsers()).toEqual({
            type: types.CLEAR_USERS,
        });
    });
    test('fillUsers', () => {
        expect(usersActions.fillUsers(__.usersList)).toEqual({
            type:    types.FILL_USERS,
            payload: __.usersList,
        });
    });

    test('fetchUsersAsync', () => {
        expect(usersActions.fetchUsersAsync()).toEqual({
            type: types.FETCH_USERS_ASYNC,
        });
    });
});
