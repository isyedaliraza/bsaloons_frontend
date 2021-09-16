import { Switch, Route } from 'react-router-dom'

import * as routes from '../constants/routes'
import CalendarPage from '../pages/calendar/CalendarPage'
import DashboardPage from '../pages/dashboard/DashboardPage'
import OrdersPage from '../pages/orders/OrdersPage'

const HomeRoutes = () => {
	return (
		<>
			<Switch>
				<Route exact path={routes.DASHBOARD}>
					<DashboardPage />
				</Route>
				<Route path={routes.CALENDAR}>
					<CalendarPage />
				</Route>
				<Route path={routes.ORDERS}>
					<OrdersPage />
				</Route>
			</Switch>
		</>
	)
}

export default HomeRoutes
