import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeroHeader from "../../components/HeroHeader";
import Logo from "../../assets/images/Logo-dark.svg";

const BookingProcess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tripData, setTripData] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  useEffect(() => {
    if (location.state && location.state.tripData) {
      setTripData(location.state.tripData);
    } else {
      // Redirect to the book page if no trip data is available
      navigate("/book");
    }
  }, [location, navigate]);

  if (!tripData) {
    return <div>Loading...</div>;
  }

  const price = parseFloat(tripData.price);
  if (isNaN(price)) {
    console.error("Invalid price:", tripData.price);
    return <div>Error: Invalid price data</div>;
  }

  const taxRate = 0.08; // 8% tax rate
  const taxAmount = price * taxRate;
  const totalPrice = price + taxAmount;

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    console.log("Processing payment...");
    // After successful payment, you can navigate to a confirmation page
    // navigate("/booking-confirmation");
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <HeroHeader imgSrc={Logo} />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Booking Summary</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">{tripData.title}</h2>
          <div className="flex justify-between mb-2">
            <span>Base Price:</span>
            <span>${price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Taxes ({(taxRate * 100).toFixed(0)}%):</span>
            <span>${taxAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Select Payment Method:</label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className={`px-4 py-2 rounded-lg ${
                    paymentMethod === "credit-card"
                      ? "bg-primary text-primary-foreground"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handlePaymentMethodChange("credit-card")}
                >
                  Credit Card
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-lg ${
                    paymentMethod === "paypal"
                      ? "bg-primary text-primary-foreground"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handlePaymentMethodChange("paypal")}
                >
                  PayPal
                </button>
              </div>
            </div>

            {paymentMethod === "credit-card" && (
              <div className="space-y-4">
                <div>
                  <label className="block mb-1">Card Number</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block mb-1">Expiration Date</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-lg"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block mb-1">CVV</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-lg"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "paypal" && (
              <div className="text-center text-gray-600">
                You will be redirected to PayPal to complete your payment.
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg mt-6 font-semibold"
            >
              Pay ${totalPrice.toFixed(2)}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingProcess;
