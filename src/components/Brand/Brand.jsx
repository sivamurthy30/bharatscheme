export default function Brand({ mobile = false }) {
  return (
    <div className={`brand ${mobile ? 'brand-mobile' : ''}`}>
      <div className="brand-mark">🇮🇳</div>
      <div className="brand-name">
        Bharat<span>Schemes</span>
      </div>
    </div>
  );
}
