import { Shell } from 'components/shell'
import List from 'components/list/list'
import Gather from 'components/gather/gather'
import Report from 'components/report/report'

const routes = {
    path: '/',
    component: Shell,
    childRoutes: [{
        path: '/list',
        component: List,
    }, {
        path: '/gather/:id',
        component: Gather,
    }, {
        path: '/report/:id',
        component: Report,
    }]
};

export default routes;