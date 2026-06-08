import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import Brand from '../Brand/Brand.jsx';

const OTP_LENGTH = 6;

export default function OtpPage({ phoneNumber, onBack, onVerify }) {
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
  const inputsRef = useRef([]);

  const enteredOtp = useMemo(() => otp.join(''), [otp]);
  const isComplete = enteredOtp.length === OTP_LENGTH;
  const displayPhone = phoneNumber ? `+91 ${phoneNumber}` : 'your registered mobile number';

  const updateDigit = (index, value) => {
    const digit = value.replace(/\D/g, '').slice(-1);

    setOtp((currentOtp) => {
      const nextOtp = [...currentOtp];
      nextOtp[index] = digit;
      return nextOtp;
    });

    if (digit && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedOtp = event.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, OTP_LENGTH)
      .split('');

    if (!pastedOtp.length) {
      return;
    }

    setOtp(Array.from({ length: OTP_LENGTH }, (_, index) => pastedOtp[index] || ''));
    inputsRef.current[Math.min(pastedOtp.length, OTP_LENGTH) - 1]?.focus();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isComplete) {
      onVerify();
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

        <section className="otp-content" aria-labelledby="otp-title">
          <div className="otp-copy">
            <div className="otp-icon">
              <ShieldCheck size={38} />
            </div>
            <p className="hero-kicker">Secure sign in</p>
            <h1 id="otp-title">Enter the verification code</h1>
            <p>
              We sent a 6-digit OTP to <strong>{displayPhone}</strong>. Enter it below to continue
              to your dashboard.
            </p>
          </div>

          <form className="otp-card" onSubmit={handleSubmit}>
            <label htmlFor="otp-0">Verification code</label>
            <div className="otp-inputs" onPaste={handlePaste}>
              {otp.map((digit, index) => (
                <input
                  aria-label={`OTP digit ${index + 1}`}
                  autoComplete={index === 0 ? 'one-time-code' : 'off'}
                  id={`otp-${index}`}
                  inputMode="numeric"
                  key={index}
                  maxLength={1}
                  onChange={(event) => updateDigit(index, event.target.value)}
                  onKeyDown={(event) => handleKeyDown(index, event)}
                  ref={(input) => {
                    inputsRef.current[index] = input;
                  }}
                  type="text"
                  value={digit}
                />
              ))}
            </div>

            <div className="otp-support">
              <span>Didn&apos;t receive it?</span>
              <button type="button">Resend OTP</button>
            </div>

            <button className="otp-submit" disabled={!isComplete} type="submit">
              Verify & Continue
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}
