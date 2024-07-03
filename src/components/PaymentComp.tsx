
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";

interface PaymentFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onClose, onSuccess }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);
    onSuccess();
  };

  return (
    <div className="payment-form-container ">
      <div className="payment-form mx-5 px-4 py-5" >
        <button className="btn btn-danger close-btn" onClick={onClose}>X</button> 
        {isSubmitted ? (
          <div className="payment-success">
            <h2>Thank you for your purchase!</h2>
            <p>Payment was successful.</p>
            <button className="pay-btn-styled" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <h2>Payment Information</h2>
            <FontAwesomeIcon icon={faCcVisa} size="3x"  className='m-1'/>
            <FontAwesomeIcon icon={faCcMastercard} size="3x" className='m-1' />
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" id="cardNumber" className="form-control" required placeholder='XXXXXXXXXXXX' />
              </div>
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input type="text" id="expiryDate" className="form-control" required placeholder='02/24'/>
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" className="form-control" required placeholder='888'/>
              </div>
              <div className="form-group">
                <label htmlFor="cardHolderName">Card Holder Name</label>
                <input type="text" id="cardHolderName" className="form-control" required placeholder='James Brown' />
              </div>
              <button type="submit" className="pay-btn-styled text-center col-6">Submit Payment</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
