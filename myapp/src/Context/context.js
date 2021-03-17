import React, { useReducer, useEffect, createContext } from "react";
const UserContext = createContext();
const initialState = {
  userName: "Murat",
  loggedIn: false,
  popUp: false,
  albums: [
    {
      id: 1,
      artist: "Nirvana",
      title: "Never mind",
      releaseYear: "1991",
      genre: "Rock",
      price: 17.99,
    },
    {
      id: 2,
      artist: "The Beach Boys",
      title: "Pet Sounds",
      releaseYear: "1966",
      genre: "Rock",
      price: 37.12,
    },
    {
      id: 3,
      artist: "Marvin Gaye",
      title: "What's Going On",
      releaseYear: "1971",
      genre: "Rock",
      price: 24.95,
    },
    {
      id: 4,
      artist: "Jimi Hendrix Experience",
      title: "Are You Experienced?",
      releaseYear: "1967",
      genre: "Rock",
      price: "21.99",
    },
    {
      id: 5,
      artist: "U2",
      title: "The Joshua Tree",
      releaseYear: "1987",
      genre: "Rock",
      price: "38.94",
    },
    {
      id: 6,
      artist: "The Beatles",
      title: "Abbey Road",
      releaseYear: "1969",
      genre: "Rock",
      price: "21.85",
    },
    {
      id: 7,
      artist: "Fleetwood Mac",
      title: "Rumours",
      releaseYear: "1977",
      genre: "Rock",
      price: "21.85",
    },
    {
      id: 8,
      artist: "Elvis Presley",
      title: "Sun Sessions",
      releaseYear: "1976",
      genre: "Rock",
      price: "26.99",
    },
    {
      id: 9,
      artist: "Michael Jackson",
      title: "Thriller",
      releaseYear: "1982",
      genre: "Pop",
      price: "20.99",
    },
    {
      id: 10,
      artist: "The Rolling Stones",
      title: "Exile on Main Street",
      releaseYear: "1972",
      genre: "Rock",
      price: "29.99",
    },
    {
      id: 11,
      artist: "Bruce Springsteen",
      title: "Born to Run",
      releaseYear: "1975",
      genre: "Rock",
      price: "17.99",
    },
    {
      id: 12,
      artist: "The Clash",
      title: "London Calling",
      releaseYear: "1980",
      genre: "Rock",
      price: "21.99",
    },
    {
      id: 13,
      artist: "The Eagles",
      title: "Hotel California",
      releaseYear: "1976",
      genre: "Rock",
      price: "16.99",
    },
    {
      id: 14,
      artist: "Led Zeppelin",
      title: "Led Zeppelin",
      releaseYear: "1969",
      genre: "Rock",
      price: "23.99",
    },
    {
      id: 15,
      artist: "Led Zeppelin",
      title: "IV",
      releaseYear: "1971",
      genre: "Rock",
      price: "13.99",
    },
    {
      id: 16,
      artist: "Police",
      title: "Synchronicity",
      releaseYear: "1983",
      genre: "Rock",
      price: "18.99",
    },
    {
      id: 17,
      artist: "U2",
      title: "Achtung Baby",
      releaseYear: "1991",
      genre: "Rock",
      price: "14.99",
    },
    {
      id: 18,
      artist: "The Rolling Stones",
      title: "Let it Bleed",
      releaseYear: "1969",
      genre: "Rock",
      price: "21.97",
    },
    {
      id: 19,
      artist: "The Beatles",
      title: "Rubber Soul",
      releaseYear: "1965",
      genre: "Rock",
      price: "21.98",
    },
    {
      id: 20,
      artist: "The Ramones",
      title: "The Ramones",
      releaseYear: "1976",
      genre: "Rock",
      price: "17.99",
    },
  ],
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
