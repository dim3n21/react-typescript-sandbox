import React, { useReducer, createContext } from "react";
import {IState, IActions} from "./interfaces";


const initialState: IState = {
  episodes: [],
  favorites: [],
};

export const Store = createContext<IState | any>(initialState);

const reducer = (state:IState, action:IActions) => {
    switch (action.type) {
        case 'FETCH_DATA':
          return {...state, episodes: action.payload}
          break;
        case 'ADD_FAV':
          return {...state, favorites: [...state.favorites, action.payload]}
          break;
        case 'REMOVE_FAV':
          let newFavorite = [...state.favorites.filter(episode => episode.id !== action.payload.id)];
          return {...state, favorites: newFavorite}
          break;
        default:
          return state
          break;
    }
}

export const StoreProvider = (props: any): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('state', state);
  return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>;
};
