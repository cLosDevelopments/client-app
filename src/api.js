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

export function postData() {
    const name = document.querySelector('#Client-Input');
    const contact = document.querySelector('#Contact-Input');
    const service = document.querySelector('#Service-rendered-Input');
    const technician = document.querySelector('#Technician-Input');
    const comments = document.querySelector('#Comments-Input');
    const date = document.querySelector('#exampleDate');
    const time = document.querySelector('#exampleTime');
    return fetch('https://client-scheduler.azurewebsites.net/api/schedules/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.value, contact: contact.value, service: service.value, technician: technician.value,
        comments: comments.value, date: date.value, time: time.value})
    })
    .then(res => res.json())
    .then(console.log);
}
