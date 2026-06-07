import logo from '../../assets/Screenshot 2026-06-07 at 4.01.10 PM.jpg';

export default function Brand({ mobile = false }) {
  return (
    <div className={`brand ${mobile ? 'brand-mobile' : ''}`}>
      <img src={logo} alt="BharatSchemes - Find. Understand. Apply. Benefit." />
    </div>
  );
}
