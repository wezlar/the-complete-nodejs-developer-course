const socket = io();

// Elements
const $messageForm = document.querySelector('#message-form');
const $messageFormInput = $messageForm.querySelector('input');
const $messageFormButton = $messageForm.querySelector('button');
const $sendLocationButton = document.querySelector('#send-location');
const $messages = document.querySelector('#messages');

// Templates
const messageTemplate = document.querySelector('#message-template').innerHTML;
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML;

// handle the messages
socket.on('message', (message) => {
  console.log(message);
  const html = Mustache.render(messageTemplate, {
    message: message.text,
    createdAt: moment(message.createdAt).format('H:mm'),
  });
  $messages.insertAdjacentHTML('beforeend', html)
});

socket.on('locationMessage', (url) => {
  console.log(url)
  const html = Mustache.render(locationMessageTemplate, {
    url,
  });
  $messages.insertAdjacentHTML('beforeend', html)
})

// handle form logic
$messageForm.addEventListener('submit', (e) => {
  e.preventDefault();

  $messageFormButton.setAttribute('disabled', 'disabled');

  // const message = e.target.elements.message.value
  const message = $messageFormInput.value;
  
  socket.emit('sendMessage', message, (error) => {
    $messageFormButton.removeAttribute('disabled');
    $messageFormInput.value = '';
    $messageFormInput.focus();

    if (error) {
      return console.log(error);
    }
    console.log('The message was delivered!');
  });
});

$sendLocationButton.addEventListener('click', () => {
  if (!navigator.geolocation) {
    return alert('Geoloaction is not supported by your browser.');
  }

  $sendLocationButton.setAttribute('disabled', 'disabled');

  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit('sendLocation', { 
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }, () => {
      console.log('Location shared');
      $sendLocationButton.removeAttribute('disabled');
    });
  });
});
