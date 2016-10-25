import { Incrementer } from 'utilities/incrementer'
import { Http } from 'utilities/http'
import { Resolver } from 'utilities/resolver'
import { push } from 'react-router-redux'

import { GatherForm } from 'models/gather-form'

export function submitGather(gather: GatherForm, resolver: Resolver) {
    return (dispatch) => {
        //dispatch(requestReports());
        return Http.get('/slow.php', resolver)
            .then(() => {
                dispatch(push('/gather/3'));
            });
    };
}