import { ArrowLeft } from 'lucide-react';

export default function SignIn({ onBack, onSignIn }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSignIn();
  }

  return (
    <main className="signin-shell">
      <section className="signin-brand" aria-label="Meri Pehchaan single sign-on service">
        <div className="emblem">♜</div>
        <div>
          <h1>
            <span>Meri</span>Pehchaan
          </h1>
          <p>SINGLE SIGN-ON SERVICE</p>
          <small>DigiLocker • e-Pramaan • JanParichay</small>
        </div>
      </section>

      <form className="signin-card" onSubmit={handleSubmit}>
        <button className="signin-back" onClick={onBack} type="button">
          <ArrowLeft size={17} />
          <span>Back</span>
        </button>

        <h2>
          Sign In to your account via <span>DigiLocker</span>
        </h2>

        <div className="signin-tabs" role="tablist" aria-label="Sign in method">
          <button className="active" type="button">
            Mobile
          </button>
          <button type="button">Username</button>
          <button type="button">Other ID</button>
        </div>

        <label className="signin-field">
          <span>Mobile</span>
          <input defaultValue="9876543210" inputMode="numeric" placeholder="Mobile*" />
        </label>

        <label className="signin-field">
          <span>PIN</span>
          <input defaultValue="123456" placeholder="PIN*" type="password" />
        </label>

        <button className="forgot-pin" type="button">
          Forgot security PIN?
        </button>

        <label className="signin-check muted">
          <input type="checkbox" />
          <span>PIN less authentication</span>
        </label>

        <label className="signin-check">
          <input defaultChecked type="checkbox" />
          <span>
            I consent to <a href="#terms">terms of use.</a>
          </span>
        </label>

        <button className="signin-submit" type="submit">
          Sign In
        </button>

        <p className="signup-line">
          New user? <a href="#signup">Sign up</a>
        </p>
      </form>
    </main>
  );
}
