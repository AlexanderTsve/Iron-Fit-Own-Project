import "./App.css";
import RootLayout from "./pages/RootLayout/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClubsPage from "./pages/ClubsPage/ClubsPage";
import ProfilePage from "./pages/ClientProfilePage/ProfilePage";
import EquipmentPage from "./pages/EquipmentPage/EquipmentPage";
import PricesPage from "./pages//PricesPage/PricesPage";
import TimetablesPage from "./pages/TimetablesPage/TimetablesPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ClubDetailsPage from "./pages/ClubDetailsPage/ClubDetailsPage";
import ClubTimetablePage from "./pages/ClubTimetablePage/ClubTimetablePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actions } from "./store/active-user-slice";
// import SendOriginalDataClubsComponent from "./util/ordiginalData";
function App() {
  const user = useSelector((state) => state.activeUser);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("rememberedIronFitUser")) {
      dispatch(
        actions.activateRememberedUser(
          JSON.parse(localStorage.getItem("rememberedIronFitUser"))
        )
      );
    }
  }, [dispatch]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: user.isLogged
        ? [
            { index: true, element: <ClubsPage /> },
            { path: "/profile", element: <ProfilePage /> },
            { path: "/equipment", element: <EquipmentPage /> },
            { path: "/prices", element: <PricesPage /> },
            { path: "/timetables", element: <TimetablesPage /> },
            { path: "/clubs/:nameId", element: <ClubDetailsPage /> },
            { path: "/timetables/:nameId", element: <ClubTimetablePage /> },
          ]
        : [
            { index: true, element: <ClubsPage /> },
            { path: "/equipment", element: <EquipmentPage /> },
            { path: "/prices", element: <PricesPage /> },
            { path: "/timetables", element: <TimetablesPage /> },
            { path: "/clubs/:nameId", element: <ClubDetailsPage /> },
            { path: "/timetables/:nameId", element: <ClubTimetablePage /> },
          ],
    },
  ]);
  return (
    <RouterProvider router={router}>
      <div className="App">
        {
          // <SendOriginalDataClubsComponent />
        }
      </div>
    </RouterProvider>
  );
}
export default App;
