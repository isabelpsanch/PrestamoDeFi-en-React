export default function Header() {
    return (
      <header className="py-2 px-3 sm:py-4 sm:px-8 flex justify-between items-center bg-white border-b shadow-xs">
        {/* Logo para version mobile */}
        <img src="Logo-DelFi-CotractInteligente.png" alt="PrestamoDeFi-Logo" width={47} className="sm:hidden" />
        {/* Logo para version desktop */}
        <img src="/Logo-DeFi-Contract-Inteligent-Big.png" alt="PrestamoDeFi-Logo" width={300} className="hidden sm:flex" />
      </header>
    )
  }