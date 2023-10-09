import React from "react";
import Home from "./components/home/Home.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Container />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "artist",
//         element: <Artist />,
//       },

//       {
//         path: "gallery",
//         element: <Gallery />,
//       },
//       {
//         path: "testimonial",
//         element: <Testimonial />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "ticket",
//         element: <Ticket />,
//       },
//       {
//         path: "*",
//         element: <NotFound />,
//       },
//     ],
//   },
// ]);

class App extends React.Component {
  render() {
    return <Home />;
  }
}

export default App;
