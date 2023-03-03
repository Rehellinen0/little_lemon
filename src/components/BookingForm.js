const BookingForm = ({ availableTimes, initializeTimes, updateTimes, bookingData, setBookingData, submitForm }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(e.target)
        initializeTimes();
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="res_date" className="lead-text">Choose date</label>
                <input type="date" id="res_date" value={bookingData.date} onChange={e => {
                    setBookingData({ ...bookingData, date: e.target.value });
                    updateTimes(new Date(e.target.value));
                }} />
                <label htmlFor="res_time" className="lead-text">Choose time</label>
                <select id="res_time" className="p-text" value={bookingData.time} onChange={e => { setBookingData({ ...bookingData, time: e.target.value }) }}>
                    <option value="">-- Select Time --</option>
                    {availableTimes.map((time, index) => (
                        <option key={index} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
                <label htmlFor="guests" className="lead-text">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" className="p-text" value={bookingData.guests} onChange={e => { setBookingData({ ...bookingData, guests: e.target.value }) }} />
                <label htmlFor="occasion" className="lead-text">Occasion</label>
                <select id="occasion" name="occasion" className="p-text" value={bookingData.occasion} onChange={e => { setBookingData({ ...bookingData, occasion: e.target.value }) }}>
                    <option>Default</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" className="pillBtn" id="submitBtn" data-testid="submitBtn" />

                <div>
                    <p className="lead-text">Your reservation information: </p>
                    <p>Date: {bookingData.date}</p>
                    <p>Time: {bookingData.time}</p>
                    <p>Guests: {bookingData.guests}</p>
                    <p>Occasion: {bookingData.occasion}</p>
                </div>
            </form>
        </>
    )
}

export default BookingForm;

