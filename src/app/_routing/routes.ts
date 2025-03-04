import {IRoute} from "@/app/_routing/types";

const routes: IRoute[] = [
    {
        path: '/',
        component: 'app/_component/HomePage'
    },
    {
        path: '/about',
        component: 'app/_component/AboutLayout',
        routes: [
            {
                path: '/',
                component: 'app/_component/AboutPage',
            }
        ]
    }
]

export default routes