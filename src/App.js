import "./App.css";
import RootLayout from "./pages/RootLayout/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClubsPage from "./pages/ClubsPage/ClubsPage";
import ClientProfilePage from "./pages/ClientProfilePage/ClientProfilePage";
import EquipmentPage from "./pages/EquipmentPage/EquipmentPage";
import PricesPage from "./pages//PricesPage/PricesPage";
import TimetablesPage from "./pages/TimetablesPage/TimetablesPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { useSelector } from "react-redux";
// import SendOriginalDataClubsComponent from "./assets/originalData/ordiginalData";
const loggedUserRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <ClubsPage /> },
      { path: "/profile", element: <ClientProfilePage /> },
      { path: "/equipment", element: <EquipmentPage /> },
      { path: "/prices", element: <PricesPage /> },
      { path: "/timetables", element: <TimetablesPage /> },
    ],
  },
]);
const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <ClubsPage /> },
      { path: "/equipment", element: <EquipmentPage /> },
      { path: "/prices", element: <PricesPage /> },
      { path: "/timetables", element: <TimetablesPage /> },
    ],
  },
]);
function App() {
  const user = useSelector((state) => state.activeUser);
  return (
    <RouterProvider router={user.isLogged ? loggedUserRouter : guestRouter}>
      <div className="App">{/* <SendOriginalDataClubsComponent /> */}</div>
    </RouterProvider>
  );
}
export default App;
