import React, { useReducer, useEffect, createContext } from "react";
import { Albums } from "./AlbumsObject";
const UserContext = createContext();
const initialState = {
  userName: "Murat",
  loggedIn: false,
  popUp: false,
  carouselAlbums: [
    { id: 1, title: "", content: "", price: 0 },
    { id: 1, title: "", content: "", price: 0 },
    { id: 1, title: "", content: "", price: 0 },
  ],
  albums: Albums,
  chart: [],
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
      return {
        ...state,
        chart: [...state.chart, state.albums[addIndex]],
      };
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
