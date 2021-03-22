import React, { useReducer, useEffect, createContext } from "react";
import { withRouter } from "react-router";
import { Albums } from "./AlbumsObject";
import { CarouselAlbums } from "./CarouselAlbums";
import { Chart } from "./ChartData";

const UserContext = createContext();

const initialState = {
  userName: "",
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
    //! remove handler has to be fixed
    case "REMOVE_FROM_CHART":
      let removeIndex = state.chart.findIndex((item) => {
        return item.id === action.payload;
      });
      let removedChart = [...state.chart];
      removedChart.splice(removeIndex, 1);
      return {
        ...state,
        chart: removedChart,
      };
    case "ADD_CHART_THUMB":
      const addAlbumIndex = state.albums.findIndex((album) => {
        return album.id == action.payload;
      });
      let addAlbumItem = state.albums[addAlbumIndex];

      if (state.loggedIn) {
        return {
          ...state,
          chart: [...state.chart, { ...addAlbumItem, id: state.chart.length }],
        };
      }
    case "ADD_CHART_CAROUSEL":
      let addCarouselIndex = state.carouselAlbums.findIndex((album) => {
        return album.id == action.payload;
      });

      let addAlbumItemCarousel = state.carouselAlbums[addCarouselIndex];
      if (state.loggedIn) {
        return {
          ...state,
          chart: [
            ...state.chart,
            { ...addAlbumItemCarousel, id: state.chart.length },
          ],
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
