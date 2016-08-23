function viewList() {
    return {
        type: 'VIEW_LIST',
        viewState: 1
    };
}

function viewDetail() {
    return {
        type: 'VIEW_DETAIL',
        viewState: 2
    };
}

function viewEdit() {
    return {
        type: 'VIEW_EDITG',
        viewState: 3
    };
}

export {
    viewList,
    viewDetail,
    viewEdit
}