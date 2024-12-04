export const createReducer = (initialData, handlers) => {
    return (state = initialData, action) => {
      const reducerFunction = handlers[action.type];
      return reducerFunction ? reducerFunction(state, action.payload) : state;
    };
  };
  