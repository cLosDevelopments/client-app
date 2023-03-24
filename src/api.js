export function getData() {
    return fetch('https://client-scheduler.azurewebsites.net/api/schedules', {
        method: 'GET',
    })
        .then(res => res.json())
        .then(console.log);
}

export function getDataid() {
    const id = document.querySelector('#Search-Input');
    return fetch('https://client-scheduler.azurewebsites.net/api/schedules/' + id.value, {
        method: 'GET',
    })
        .then(res => res.json())
        .then(console.log);
}
