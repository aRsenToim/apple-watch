import { Routes, Route } from 'react-router-dom'
import { IRoute, routes } from '.'
import Layout from '../components/layout/layout'

const RoutesApp = () => {
 return <Routes>
  <Route path='/' element={<Layout />}>
   {routes.map((route: IRoute) => <Route key={route.path} path={route.path} element={<route.element />} />)}
  </Route>
 </Routes>
}

export default RoutesApp