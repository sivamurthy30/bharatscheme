import { ArrowLeft, Smartphone } from 'lucide-react';
import { useMemo, useState } from 'react';
import Brand from '../Brand/Brand.jsx';

export default function PhoneLoginPage({ onBack, onSendOtp }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const digitsOnly = useMemo(() => phoneNumber.replace(/\D/g, '').slice(0, 10), [phoneNumber]);
  const isValidPhone = digitsOnly.length === 10;

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value.replace(/\D/g, '').slice(0, 10));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValidPhone) {
      onSendOtp(digitsOnly);
    }
  };

  return (
    <main className="otp-shell">
      <section className="otp-panel">
        <header className="otp-header">
          <Brand />
          <button className="otp-back" onClick={onBack} aria-label="Back to home">
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
        </header>

        <section className="otp-content phone-login-content" aria-labelledby="phone-title">
          <div className="otp-copy">
            <div className="otp-icon">
              <Smartphone size={38} />
            </div>
            <p className="hero-kicker">Secure sign in</p>
            <h1 id="phone-title">Enter your phone number</h1>
            <p>We will send a 6-digit OTP to verify your mobile number before opening your dashboard.</p>
          </div>

          <form className="otp-card phone-card" onSubmit={handleSubmit}>
            <label htmlFor="phone-number">Mobile number</label>
            <div className="phone-field">
              <span>+91</span>
              <input
                autoComplete="tel-national"
                id="phone-number"
                inputMode="numeric"
                maxLength={10}
                onChange={handlePhoneChange}
                placeholder="9876543210"
                type="tel"
                value={phoneNumber}
              />
            </div>

            <button className="otp-submit" disabled={!isValidPhone} type="submit">
              Send OTP
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}
