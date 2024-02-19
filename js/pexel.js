// import { createClient } from 'pexels';

// const client = createClient('EYZIp5xSIboCfcqIbpxY3spKTwRdNdm37OLI0I5fXZYuEXocqBYxh2Py');
// const query = 'Nature';

// client.photos.search({ query, per_page: 1 })
//     .then(photos => {
//         const photo = photos.photos[0];

//         // Fetch the photo's JPEG data directly
//         fetch(photo.src.original)
//             .then(response => response.blob())
//             .then(imageBlob => {
//                 // Create a link for download
//                 const link = document.createElement('a');
//                 link.href = URL.createObjectURL(imageBlob);
//                 link.download = 'photo.jpg'; // Set desired filename
//                 link.click();
//             })
//             .catch(error => console.error('Error fetching photo:', error));
//     })
//     .catch(error => console.error('Error searching photos:', error));

// import { createClient } from 'pexels';
// const Client = require('pexels')

// const client = Client('EYZIp5xSIboCfcqIbpxY3spKTwRdNdm37OLI0I5fXZYuEXocqBYxh2Py');
// const query = 'Motivated man';

// client.videoes.search({ query, per_page: 1 }).then(videos => {
//     console.log(videos.video_files[0].link)
// });
