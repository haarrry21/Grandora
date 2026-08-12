import { useState } from 'react';
import roomsCSS from './Rooms.module.css';
import room1Img from '../../assets/1.jpg';
import room2Img from '../../assets/2.jpg';
import room3Img from '../../assets/3.jpg';
import room4Img from '../../assets/4.jpg';
import room5Img from '../../assets/5.jpg';
import room6Img from '../../assets/6.jpg';

const Rooms = () => {
  const rooms = [
    {
      title: 'Junior Suite',
      price: '120',
      image: room1Img,
      features: ['Daily Cleaning', 'Home Service', 'Housekeeping', 'Wifi & Parking'],
    },
    {
      title: 'Deluxe Room',
      price: '160',
      image: room2Img,
      features: ['King Bed', 'Room Service', 'Mini Bar', 'Sea View'],
    },
    {
      title: 'Executive Suite',
      price: '220',
      image: room3Img,
      features: ['Living Area', 'Free Breakfast', 'Butler Service', 'Gym Access'],
    },
    {
      title: 'Presidential',
      price: '480',
      image: room4Img,
      features: ['Private Pool', 'Private Chef', 'Airport Pickup', 'Concierge'],
    },
    {
      title: 'Royal Suite',
      price: '520',
      image: room5Img,
      features: ['Panoramic View', 'Butler', 'Champagne', 'Private Lounge'],
    },
    {
      title: 'Imperial',
      price: '680',
      image: room6Img,
      features: ['Full Floor', 'Private Elevator', 'Chef', 'Spa Access'],
    },
  ];

  const [flipped, setFlipped] = useState(Array(rooms.length).fill(false));

  function toggleFlip(i) {
    setFlipped((prev) => {
      const copy = [...prev];
      copy[i] = !copy[i];
      return copy;
    });
  }

  return (
    <section id="rooms" className={`${roomsCSS.Rooms_container} section`}>
      <div className={roomsCSS.header}>
        <small className="section_Heading">Luxury Suites</small>
        <h2 className="section_Title">
          Our Best <span>Rooms</span>
        </h2>
      </div>

      <div className={roomsCSS.cards}>
        {rooms.map((room, i) => (
          <article
            key={room.title}
            className={roomsCSS.cardContainer}
            onClick={() => toggleFlip(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleFlip(i)}
          >
            <div className={`${roomsCSS.cardInner} ${flipped[i] ? roomsCSS.isFlipped : ''}`}>
              <div
                className={`${roomsCSS.cardFace} ${roomsCSS.cardFront} ${
                  i % 2 === 0 ? roomsCSS.cardFaceFront1 : roomsCSS.cardFaceFront
                }`}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(17, 24, 39, 0.25), rgba(17, 24, 39, 0.65)), url(${room.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <button type="button" className={roomsCSS.cardButton} onClick={(e) => e.stopPropagation()}>
                  {room.title}
                </button>
              </div>

              <div className={`${roomsCSS.cardFace} ${roomsCSS.cardBack}`}>
                <div className={roomsCSS.price}>
                  <p>${room.price}/N</p>
                </div>
                <div className={roomsCSS.cardContent}>
                  <h3>{room.title}</h3>
                  {room.features.map((f, idx) => (
                    <p key={idx}>{f}</p>
                  ))}
                </div>
                <div className={roomsCSS.bookNow}>
                  <button type="button" className={roomsCSS.bookButton} onClick={(e) => e.stopPropagation()}>
                    Book Now
                  </button>
                  <i className="ri-arrow-right-line" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Rooms;