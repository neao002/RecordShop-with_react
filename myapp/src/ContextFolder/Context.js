import React, { useReducer, useEffect, createContext } from "react";
import { Albums } from "./AlbumsObject";
import { CarouselAlbums } from "./CarouselAlbums";
import { Chart } from "./Chart";
const UserContext = createContext();
const initialState = {
  userName: "Murat",
  loggedIn: false,
  popUp: false,
  //! imported arrays as external for cleaner outlook
  carouselAlbums: CarouselAlbums,
  albums: Albums,
  chart: Chart,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "BRING_POPUP":
      return {
        ...state,
        popUp: true,
      };
    case "USERNAME_ENTERED":
      return {
        ...state,
        userName: action.payload,
        popUp: false,
        loggedIn: true,
      };
    case "POPUP_CLOSED":
      return {
        ...state,
        popUp: false,
      };
    case "ADD_CHART":
      const addIndex = state.albums.findIndex((album) => {
        return album.id == action.payload;
      });
      if (state.loggedIn) {
        return {
          ...state,
          chart: [...state.chart, state.albums[addIndex]],
        };
      }

    case "LOGOUT":
      return {
        ...state,
        chart: [],
        loggedIn: false,
      };
    default:
      break;
  }
};
export function ContextProvider(props) {
  const [recordState, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: "BRING_POPUP",
      });
    }, 1000);
  }, []);

  return (
    <UserContext.Provider
      value={{ myStateData: recordState, myDispatch: dispatch }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
