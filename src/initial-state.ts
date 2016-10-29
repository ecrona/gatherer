const initialState = {
    list: {
        viewState: 2,
        showGatherModal: false,
        gatherModel: {
            homeTeam: '',
            awayTeam: '',
            primaryPlayer: '',
            secondaryPlayer: ''
        },
        fetching: false,
        all: [],
        matches: [],
        unsorted: []
    },
    gather: {
        time: '00:00',
        status: 0,
        half: 0,
        synchronizeModal: {
            active: false,
            half: 0,
            minutes: '00',
            seconds: '00'
        },
        popups: {
            primaryPlayerOverall: false,
            secondaryPlayerOverall: false,
            primaryPlayerAction: false,
            secondaryPlayerAction: false,
            loading: false
        },
        data: {
            fetching: true,
            id: '1',
            primaryPlayer: {},
            secondaryPlayer: {
                name: 'Andrea Barzagli',
                overall: 8,
                actions: [{
                    featured: true,
                    description: 'Tackles',
                    amount: 9
                }]
            }
        }
    },
    report: {
        viewState: 0,
        gather: {
            fetching: true,
            id: '1',
            primaryPlayer: {},
            secondaryPlayer: {
                name: 'Andrea Barzagli',
                overall: 8,
                actions: [{
                    featured: true,
                    description: 'Tackles',
                    amount: 9
                }]
            },        
            incremental: []
        }
    }
};

export default initialState;