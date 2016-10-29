import { combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'

import { viewState } from 'components/list/reducers/view-state'
import { showGatherModal } from 'components/list/reducers/show-gather-modal'
import { all, matches, unsorted } from 'components/list/reducers/reports'
import { fetching } from 'components/list/reducers/fetching'
import { gatherModel } from 'components/list/reducers/gather-model'

import { popups } from 'components/gather/reducers/popups'
import { gather } from 'components/gather/reducers/gather'
import { time, status, half } from 'components/gather/reducers/status'
import { active, half as synchronizeModalHalf, minutes, seconds } from 'components/gather/reducers/synchronize-modal'

import { viewState as reportViewState } from 'components/report/reducers/view-state'
import { gather as reportGather } from 'components/report/reducers/gather'

const rootReducer = combineReducers({
    list: combineReducers({
        viewState,
        showGatherModal,
        gatherModel,
        fetching,
        all,
        matches,
        unsorted
    }),
    routing: routerReducer,
    gather: combineReducers({
        time,
        status,
        half,
        synchronizeModal: combineReducers({
            active,
            half: synchronizeModalHalf,
            minutes,
            seconds
        }),
        popups: popups,
        data: gather
    }),
    report: combineReducers({
        viewState: reportViewState,
        gather: reportGather
    })
});

export default rootReducer;