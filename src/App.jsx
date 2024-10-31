import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "@/routes/RootLayout";
import TodayForecast from "@/pages/Forecast/TodayForecast";
import TomorrowForecast from "@/pages/Forecast/TomorrowForecast";
import SevenDaysForecast from "@/pages/Forecast/SevenDaysForecast";
import ThirtyDaysForecast from "@/pages/Forecast/ThirtyDaysForecast";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<TodayForecast />} />
        <Route path="/today" element={<TodayForecast />} />
        <Route path="/tomorrow" element={<TomorrowForecast />} />
        <Route path="/next-7-days" element={<SevenDaysForecast />} />
        <Route path="/next-30-days" element={<ThirtyDaysForecast />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
