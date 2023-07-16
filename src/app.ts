

// Define an array of colors
const colors: string[] = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF"];

// Function to change the website color
function changeWebsiteColor(): void {
  // Generate a random index to select a color from the array
  const randomIndex: number = Math.floor(Math.random() * colors.length);

  // Get the <body> element or any other element you want to change the color of
  const bodyElement: HTMLElement | null = document.body;

  // Set the background color to the randomly selected color
  if (bodyElement) {
    bodyElement.style.backgroundColor = colors[randomIndex];
  }
}

// Call the changeWebsiteColor function every 1 second
setInterval(changeWebsiteColor, 1000);

interface GuestbookMessage {
    name?: string;
    content?: string;
    timestamp?: string;
  }
  
  function renderGuestbookMessages(messages: GuestbookMessage[]): void {
    const messageList = document.getElementById('message-list');
  
    // Clear existing messages
    if (messageList) {
      messageList.innerHTML = '';
  
      // Loop through the messages and generate HTML for each message
      messages.forEach((message: GuestbookMessage) => {
        const listItem = document.createElement('li');
        const nameElement = document.createElement('p');
        nameElement.innerHTML = `<strong>${message.name}</strong>`;
        const contentElement = document.createElement('p');
        contentElement.textContent = message.content;
        const timestampElement = document.createElement('p');
        timestampElement.textContent = message.timestamp;
  
        listItem.appendChild(nameElement);
        listItem.appendChild(contentElement);
        listItem.appendChild(timestampElement);
        if (messageList) {
          messageList.appendChild(listItem);
        }
      });
    }
  }
  
  // Example guestbook messages data
  const guestbookMessages: GuestbookMessage[] = [
    {
      name: 'Akash Singh',
      content: 'Happy Birthday SweetHeart',
      timestamp: '2023-07-08 10:00:00'
    },
    {
      name: 'Jane Smith',
      content: 'Nice website! Happy birthday to your girlfriend.',
      timestamp: '2023-07-01 19:30:00'
    },
    {
      name: 'Jane Smithaaaaaa',
      content: 'Nice websiteaaaaaaaaa! Happy birthday to your girlfriend.',
      timestamp: '2023-07-01 19:30:00'
    },
    // Add more messages as needed
  ];
  
  // Render the guestbook messages
  renderGuestbookMessages(guestbookMessages);



const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', submitForm);
function submitForm() {
    // Get the form data
    const name = document.getElementById('name');
    const content = document.getElementById('content-input');
    const timestamp = new Date().toISOString();

    // Create an object with the form data
    const formData = {
        name,
        content,
        timestamp
    };

    // Send a POST request to your backend API
    fetch('/api/guestbook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the backend
            console.log("data");
            // Display a success message or perform any other actions as needed
        })
        .catch(error => {
            // Handle any errors that occur during the API call
            console.error(error);
            // Display an error message or perform any other error handling
        });
}


//Append Photo and Quotes
// const { JSDOM } = require('jsdom');
// const dom = new JSDOM();
// const document = dom.window.document;
function addTemplate(photos: any[]){
  const photoGallery = document.getElementById('photoGallerys');
  if (photoGallery) {
    photoGallery.innerHTML = '';
    photos.forEach((photo: any) => {
      const photoElement = document.createElement('div');
      photoElement.className = 'photo';

      const imgElement = document.createElement('img');
      imgElement.src = photo.src;
      imgElement.alt = photo.alt;

      const quoteElement = document.createElement('p');
      quoteElement.textContent = photo.quote;

      photoElement.appendChild(imgElement);
      photoElement.appendChild(quoteElement);

  //    photoGallery.appendChild(photoElement);
    });
  }
};

const photos = [
  { src: './Images/4.jpg', alt: 'Photo 3', quote: 'Love quote 3' },
  { src: './Images/5.jpg', alt: 'Photo 4', quote: 'Love quote 4' },
  // Add more objects for additional photos and quotes
];

addTemplate(photos);

