//Actions
import { uiActions } from "../actions";

describe("ui actions:", () => {
    test("startFetching", () => {
        expect(uiActions.startFetching()).toMatchInlineSnapshot(`
Object {
  "type": "START_FETCHING",
}
`);
    });
    test("stopFetching", () => {
        expect(uiActions.stopFetching()).toMatchInlineSnapshot(`
Object {
  "type": "STOP_FETCHING",
}
`);
    });
    test("setOnlineState", () => {
        expect(uiActions.setOnlineState()).toMatchInlineSnapshot(`
Object {
  "type": "SET_ONLINE_STATE",
}
`);
    });
    test("setOfflineState", () => {
        expect(uiActions.setOfflineState()).toMatchInlineSnapshot(`
Object {
  "type": "SET_OFFLINE_STATE",
}
`);
    });
    test("emitError", () => {
        expect(uiActions.emitError(__.error, __.errorMessage))
            .toMatchInlineSnapshot(`
Object {
  "error": true,
  "meta": "TEST_ERROR_MESSAGE.",
  "payload": [Error: TEST_ERROR_MESSAGE.],
  "type": "EMIT_ERROR",
}
`);
    });
});

//npm test -- -u  [перезаписать снепшоты]
