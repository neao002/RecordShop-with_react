import React, { useReducer, useEffect, createContext } from "react";
import { Albums } from "./AlbumsObject";
import { CarouselAlbums } from "./CarouselAlbums";
import { Chart } from "./ChartData";
const UserContext = createContext();
const initialState = {
  userName: "Murat",
  loggedIn: false,
  popUp: false,
  carouselAlbums: CarouselAlbums,
  albums: Albums,
  chart: Chart,
  searchResult: [],
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
  const [recordState, dispatch] = useReducer(reducer, initialState, () => {
    const localData = localStorage.getItem("updatedRecordState");
    return localData ? JSON.parse(localData) : initialState;
  });
  useEffect(() => {
    localStorage.setItem("updatedRecordState", JSON.stringify(recordState));
  }, [recordState]);

  useEffect(() => {
    if (!recordState.loggedIn) {
      setTimeout(() => {
        dispatch({
          type: "BRING_POPUP",
        });
      }, 500);
    }
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
