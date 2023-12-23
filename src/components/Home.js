// // // components/Home.js
// // import React, { useEffect } from 'react';
// // import AutoSlider from './AutoSlider';

// // const Home = () => (

// //   useEffect(() => {
// //     // Play the audio when the component mounts
// //     const audio = new Audio(`${process.env.PUBLIC_URL}/sounds/jai-shayama-mai.mp3`);
// //     audio.play();
  
// //     // Optionally, you can add a cleanup function to pause the audio when the component unmounts
// //     return () => {
// //       audio.pause();
// //     };
// //   }, []); /* Empty dependency array ensures the effect runs once when the component mounts */
  
  


  

// //   <div style={styles.container}>
// //     <div style={styles.header}>
// //       <h2 style={styles.title}>Welcome to Maa Kali Mandir</h2>
// //     </div>
// //     <div style={styles.content}>
// //       <p style={styles.description}>
// //         Explore the divine beauty of Maa Kali in our sacred temple. Witness the divine energy and immerse yourself in the spiritual ambiance.
// //       </p>


// //       <AutoSlider />


// //       <div style={styles.historySection}>
// //         <h3 style={styles.historyTitle}>Our History</h3>
// //         <p style={styles.historyDescription}>
// //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero nec tortor pellentesque euismod vel vel justo.
// //           Quisque nec tincidunt justo. Sed dignissim lectus vel gravida interdum. Nullam vel neque ut nunc ullamcorper convallis.
// //         </p>
// //         <p style={styles.historyDescription}>
// //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero nec tortor pellentesque euismod vel vel justo.
// //           Quisque nec tincidunt justo. Sed dignissim lectus vel gravida interdum. Nullam vel neque ut nunc ullamcorper convallis.
// //         </p>
// //         <p style={styles.historyDescription}>
// //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero nec tortor pellentesque euismod vel vel justo.
// //           Quisque nec tincidunt justo. Sed dignissim lectus vel gravida interdum. Nullam vel neque ut nunc ullamcorper convallis.
// //         </p>
// //         <p style={styles.historyDescription}>
// //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero nec tortor pellentesque euismod vel vel justo.
// //           Quisque nec tincidunt justo. Sed dignissim lectus vel gravida interdum. Nullam vel neque ut nunc ullamcorper convallis.
// //         </p>
// //       </div>
// //     </div>
// //   </div>
// // );

// // const styles = {
// //   container: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     padding: '20px',
// //     backgroundColor: '#f5f5f5', // Light background color
// //   },
// //   header: {
// //     textAlign: 'center',
// //     marginBottom: '20px',
// //   },
// //   title: {
// //     fontSize: '28px',
// //     color: '#333', // Dark color for title
// //     fontWeight: 'bold',
// //   },
// //   content: {
// //     maxWidth: '1300px',
// //     textAlign: 'center',
// //   },
// //   description: {
// //     fontSize: '18px',
// //     color: '#555', // Slightly darker color for description
// //     lineHeight: '1.5',
// //   },
// //   historySection: {
// //     marginTop: '40px',
// //     backgroundColor: '#fff', // White background for history section
// //     padding: '20px',
// //     borderRadius: '8px',
// //     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
// //     maxWidth: '1300px', // Set to 100% for equal width
// //   },
// //   historyTitle: {
// //     fontSize: '24px',
// //     color: '#333',
// //     fontWeight: 'bold',
// //     marginBottom: '10px',
// //   },
// //   historyDescription: {
// //     fontSize: '16px',
// //     color: '#555',
// //     lineHeight: '1.5',
// //   },
// // };

// // export default Home;





// // components/Home.js
// import React, { useEffect } from 'react';
// import AutoSlider from './AutoSlider';

// const Home = () => {
//   // useEffect(() => {
//   //   const audio = new Audio(`${process.env.PUBLIC_URL}/sounds/jai-shayama-mai.mp3`);

//   //   const playAudio = () => {
//   //     audio.play();
//   //     // Remove the event listener after the audio has been played
//   //     audio.removeEventListener('canplaythrough', playAudio);
//   //   };

//   //   // Add an event listener for the canplaythrough event
//   //   audio.addEventListener('canplaythrough', playAudio);

//   //   // Optionally, you can add a cleanup function to pause the audio when the component unmounts
//   //   return () => {
//   //     audio.pause();
//   //     // Remove the event listener to avoid potential memory leaks
//   //     audio.removeEventListener('canplaythrough', playAudio);
//   //   };
//   // }, []);


//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h2 style={styles.title}>Welcome to Maa Kali Mandir</h2>
//       </div>
//       <div style={styles.content}>
//         <p style={styles.description}>
//           Explore the divine beauty of Maa Kali in our sacred temple. Witness the divine energy and immerse yourself in the spiritual ambiance.
//         </p>

//         <AutoSlider />

//         <div style={styles.historySection}>
//           <h3 style={styles.historyTitle}>Our History</h3>
//           <p style={styles.historyDescription}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero nec tortor pellentesque euismod vel vel justo.
//             Quisque nec tincidunt justo. Sed dignissim lectus vel gravida interdum. Nullam vel neque ut nunc ullamcorper convallis.
//           </p>

//           <p style={styles.historyDescription}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero nec tortor pellentesque euismod vel vel justo.
//             Quisque nec tincidunt justo. Sed dignissim lectus vel gravida interdum. Nullam vel neque ut nunc ullamcorper convallis.
//           </p>

//           <p style={styles.historyDescription}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero nec tortor pellentesque euismod vel vel justo.
//             Quisque nec tincidunt justo. Sed dignissim lectus vel gravida interdum. Nullam vel neque ut nunc ullamcorper convallis.
//           </p>

//           <p style={styles.historyDescription}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero nec tortor pellentesque euismod vel vel justo.
//             Quisque nec tincidunt justo. Sed dignissim lectus vel gravida interdum. Nullam vel neque ut nunc ullamcorper convallis.
//           </p>
//           {/* Add more paragraphs for history content */}
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '20px',
//     backgroundColor: '#f5f5f5', // Light background color
//   },
//   header: {
//     textAlign: 'center',
//     marginBottom: '20px',
//   },
//   title: {
//     fontSize: '28px',
//     color: '#333', // Dark color for title
//     fontWeight: 'bold',
//   },
//   content: {
//     maxWidth: '1300px',
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: '18px',
//     color: '#555', // Slightly darker color for description
//     lineHeight: '1.5',
//   },
//   historySection: {
//     marginTop: '40px',
//     backgroundColor: '#fff', // White background for history section
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
//     maxWidth: '1300px', // Set to 100% for equal width
//   },
//   historyTitle: {
//     fontSize: '24px',
//     color: '#333',
//     fontWeight: 'bold',
//     marginBottom: '10px',
//   },
//   historyDescription: {
//     fontSize: '16px',
//     color: '#555',
//     lineHeight: '1.5',
//   },
// };

// export default Home;


// components/Home.js
import React, { useState } from 'react';
import AutoSlider from './AutoSlider';

const Home = () => {
  const marqueeText = "जय श्यामा माई || ".repeat(40);

  const [isHovered, setIsHovered] = useState(false);

  // Texts to be displayed
  const defaultText = `काली महाकाली कालिके परमेश्वरी। \nसर्वानन्दकरी देवी नारायणि नमोऽस्तुते।।`;
  const hoverText = `ॐ जयन्ती, मङ्गला, काली, भद्रकाली, कपालिनी। \nदुर्गा, क्षमा, शिवा, धात्री, स्वाहा, स्वधा नमोऽस्तुते॥`;


  return (
    <div style={styles.container}>
      <marquee style={styles.marquee}>
        {marqueeText}
      </marquee>



      <div 
        style={styles.header}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2 style={styles.title}>
          {isHovered ? hoverText : defaultText}
        </h2>
      </div>

      <div style={styles.mainContent}>
        <div style={styles.textSection}>
          <h3 style={styles.overviewTitle}>Overview of Kali Maa Temple</h3>
          <p style={styles.description}>
          Social Backdrop of Bengal
When India was still groping under the British rule trying hard to come to terms laid down by the English, the first wave of patriotism gripped the brave soldiers of Barrackpur, that shared the same river line where the Dakshineswar Temple would be built, led to the Sepoy Mutiny Revolt in 1857. Kolkata was the capital of the country and was then the second largest city of the British Empire only next to London. This new ardour of patriotic fervor soon spread amidst the important people of the city. Among them was the brave and deeply religious Rani Rashmoni who is one of the pioneers to silently revolt against the foreign rule.
Rani Rasmoni
Dakshineswar in the Early 1800s and Before
In the early 1800s, Dakshineswar was a small village along the eastern banks of the River Ganga. The picturesque details by J С Marshman in the January 1845 issue of Calcutta Review mentions “A little higher up we have the village of Dukhinsore, remarkable chiefly for the country seat, mapped down in the map of Hastie's Garden, but which has repeatedly changed hands during the last thirty years. To the north of it
Dakshineswar Kali Temple 	
lies the Powder Magazine. During the last four years which have elapsed since Joseph’s map was published, four elegant houses have sprung up to the south of the garden.”
          </p>
        </div>

        <div style={styles.sliderSection}>
          <AutoSlider />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    fontFamily: '"Arial", sans-serif', // Use a standard, readable font
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    backgroundColor: '#eaeaea', // Slightly different background for the header
    padding: '10px',
    borderRadius: '10px',
  },
  title: {
    fontSize: '28px',
    color: 'red',
    fontWeight: 'bold',
    textShadow: '1px 1px 2px black', // Add a subtle shadow for depth
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '1300px',
    width: '100%',
    alignItems: 'start',
    gap: '20px', // Add space between text and slider
  },
  textSection: {
    flex: 1,
    padding: '15px',
    backgroundColor: '#fff', // White background for readability
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
  },
  sliderSection: {
    flex: 1,
    maxWidth: '700px',
  },
  marquee: {
    color: 'red',
    fontWeight: 'bold',
    padding: '10px',
    backgroundColor: '#f5f5f5',
  },
  overviewTitle: {
    fontSize: '22px',
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center',
  },
  description: {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6',
    textAlign: 'justify', // Justify for better readability
  },
  // ... other styles ...
};

export default Home;


