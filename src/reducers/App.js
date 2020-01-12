import { REHYDRATE } from "redux-persist/constants";

const INITIAL_STATE = {
  isRehydrated: false
};

const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REHYDRATE:
      return { isRehydrated: true };

    default:
      return state;
  }
};

export default app;
