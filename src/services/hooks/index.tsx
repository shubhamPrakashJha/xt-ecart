import { useState, useEffect, useReducer } from 'react';

enum FetchActionKind {
  FETCH_INIT = 'FETCH_INIT',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_FAILURE = 'FETCH_FAILURE',
}

// An interface for our actions
interface FetchAction {
  type: FetchActionKind;
  payload?: any;
}

type FetchState = {
  isLoading: boolean;
  isError: boolean;
  data: any;
};

const dataFetchReducer = (state: FetchState, action: FetchAction) => {
  switch (action.type) {
    case FetchActionKind.FETCH_INIT:
      return { ...state, isLoading: true, isError: false };
    case FetchActionKind.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case FetchActionKind.FETCH_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      throw new Error();
  }
};

export const useDataApi = (initialUrl: string, initialData: any) => {
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: FetchActionKind.FETCH_INIT });

      try {
        const response = await fetch(url);
        const result = await response.json();

        if (!didCancel) {
          dispatch({ type: FetchActionKind.FETCH_SUCCESS, payload: result });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: FetchActionKind.FETCH_FAILURE });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl] as const;
};
