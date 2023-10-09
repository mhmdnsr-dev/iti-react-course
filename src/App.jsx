import React from "react";
import "./App.css";
// import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Container from "./components/container/Container.jsx";
import About from "./components/about/About.jsx";
import Artist from "./components/artist/Artist.jsx";
import NotFound from "./components/not-found/NotFound.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import Testimonial from "./components/testimonial/Testimonial.jsx";
import Contact from "./components/contact/contact.jsx";
import Ticket from "./components/ticket/Ticket.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "artist",
        element: <Artist />,
      },

      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "testimonial",
        element: <Testimonial />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "ticket",
        element: <Ticket />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

class App extends React.Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;
