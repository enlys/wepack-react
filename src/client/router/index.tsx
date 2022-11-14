import { Navigate, useRoutes } from 'react-router-dom';
import { RouteObject } from './interface';
import React from 'react';
import Login from '../views/login';
import NotFound from '../views/error/404';

// * 导入所有router
// const metaRouters = import.meta.globEager('./modules/*.tsx');

// * 处理路由
export const routerArray: RouteObject[] = [];
// Object.keys(metaRouters).forEach(item => {
// 	Object.keys(metaRouters[item]).forEach((key: any) => {
// 		routerArray.push(...metaRouters[item][key]);
// 	});
// });

export const rootRouter: RouteObject[] = [
	{
		path: '/demo',
		children: [
			{
				path: '',
				element: <Login />,
			},
			{
				path: 'login',
				element: <Login />,
				meta: {
					requiresAuth: false,
					title: '登录页',
					key: 'login'
				}
			},
			{
				path: '404',
				element: <NotFound />,
				meta: {
					requiresAuth: false,
					title: '404',
					key: 'login'
				}
			},
			// ...routerArray,
			{
				path: '*',
				element: <Navigate to="/demo/404" />
			}
		]
	},
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;