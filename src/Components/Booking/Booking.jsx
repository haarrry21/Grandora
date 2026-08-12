import bookingCss from './Booking.module.css';

function Booking({ onBackHome }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className={bookingCss.bookingPage}>
      <div className={bookingCss.overlay} />

      <div className={bookingCss.bookingCard}>
        <div className={bookingCss.headerBlock}>
          <p className={bookingCss.eyebrow}>Reservation</p>
          <h1>Book Your Stay</h1>
          <p className={bookingCss.subtitle}>
            Reserve a luxurious room and dining experience tailored to your perfect getaway.
          </p>
        </div>

        <form className={bookingCss.form} onSubmit={handleSubmit}>
          <div className={bookingCss.fieldRow}>
            <div className={bookingCss.field}>
              <label htmlFor="booking-name">Full Name</label>
              <input id="booking-name" type="text" placeholder="John Smith" />
            </div>

            <div className={bookingCss.field}>
              <label htmlFor="booking-email">Email Address</label>
              <input id="booking-email" type="email" placeholder="you@example.com" />
            </div>
          </div>

          <div className={bookingCss.fieldRow}>
            <div className={bookingCss.field}>
              <label htmlFor="booking-checkin">Check In</label>
              <input id="booking-checkin" type="date" defaultValue="2026-08-15" />
            </div>

            <div className={bookingCss.field}>
              <label htmlFor="booking-checkout">Check Out</label>
              <input id="booking-checkout" type="date" defaultValue="2026-08-18" />
            </div>
          </div>

          <div className={bookingCss.fieldRow}>
            <div className={bookingCss.field}>
              <label htmlFor="booking-guests">Guests</label>
              <select id="booking-guests" defaultValue="2">
                <option value="2">2 Guests</option>
                <option value="4">4 Guests</option>
                <option value="6">6 Guests</option>
                <option value="8">8 Guests</option>
              </select>
            </div>

            <div className={bookingCss.field}>
              <label htmlFor="booking-room">Room Type</label>
              <select id="booking-room" defaultValue="deluxe">
                <option value="Junior">Junior Suite</option>
                <option value="Deluxe">Deluxe Room</option>
                <option value="Executive">Executive Suite</option>
                <option value="Presidential">Presidential Suite</option>
                <option value="Royal">Royal Suite</option>
                <option value="Imperial">Imperial Suite</option>
              </select>
            </div>
          </div>

          <div className={bookingCss.fieldFull}>
            <label htmlFor="booking-request">Special Requests</label>
            <textarea id="booking-request" rows="4" placeholder="Tell us about your preferences..." />
          </div>

          <div className={bookingCss.actionRow}>
            <button type="button" className={bookingCss.secondaryButton} onClick={onBackHome}>Back Home</button>
            <button type="submit" className={bookingCss.primaryButton}>Confirm Booking</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Booking;
