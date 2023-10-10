import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import StatisticsPage from "../pages/StatisticsPage";
import UserPage from "../pages/UserPage";
import HistoryPage from "../pages/HistoryPage";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../modules/Layout";

function AppRouter() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/statistics" element={<StatisticsPage />} />
					<Route exact path="/user" element={<UserPage />} />
					<Route exact path="/financialHistory" element={<HistoryPage />} />
					{/* <Route exact path='/logOut' element = {<LogoutPage/>} /> */}

					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default AppRouter;
