let idSeq = 1

export function create(data) {
  return {
    ...data,
    id: ++idSeq
  }
}

export function submit(data) {
  return dispatch => {
    const notifications = data.notifications.filter(n => !n.id).map(create)

    return Promise.resolve(
      dispatch({
        type: 'CONCAT',
        notifications
      })
    )
  }
}
