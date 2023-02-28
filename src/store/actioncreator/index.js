export const update = (updateduser) => {
    return (dispatch) => {
        dispatch({
            type: 'UPDATE',
            payload: updateduser
        })
    }
}