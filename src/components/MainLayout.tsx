import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Начало' },
  { to: '/mobile-app', label: 'Мобилно приложение' },
  { to: '/web-site', label: 'Уеб сайт' },
  { to: '/online-shop', label: 'Онлайн магазин' },
  { to: '/support', label: 'Поддръжка' },
  { to: '/about', label: 'За нас' },
  { to: '/contacts', label: 'Контакти' },
]

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex items-center gap-3" aria-label="Към началната страница">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-600 text-lg font-black text-white">
              Ф
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-sky-600">Бизнес решения</p>
              <p className="text-lg font-bold leading-none">Фирма Плюс</p>
            </div>
          </NavLink>

          <nav className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1 text-sm font-semibold sm:text-base">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 transition ${
                    isActive ? 'bg-sky-600 text-white' : 'text-slate-700 hover:bg-white hover:text-sky-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <p className="text-lg font-bold text-slate-900">Фирма Плюс</p>
            <p className="mt-2 text-sm text-slate-600">Надежден партньор за растеж и дигитална трансформация.</p>
            <p className="mt-3 text-sm text-slate-500">© {new Date().getFullYear()} Фирма Плюс. Всички права запазени.</p>
          </div>

          <div className="md:text-right">
            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold md:justify-end">
              <NavLink to="/" className="text-slate-600 transition hover:text-sky-700">Начало</NavLink>
              <NavLink to="/mobile-app" className="text-slate-600 transition hover:text-sky-700">Мобилно приложение</NavLink>
              <NavLink to="/web-site" className="text-slate-600 transition hover:text-sky-700">Уеб сайт</NavLink>
              <NavLink to="/online-shop" className="text-slate-600 transition hover:text-sky-700">Онлайн магазин</NavLink>
              <NavLink to="/support" className="text-slate-600 transition hover:text-sky-700">Поддръжка</NavLink>
              <NavLink to="/about" className="text-slate-600 transition hover:text-sky-700">За нас</NavLink>
              <NavLink to="/contacts" className="text-slate-600 transition hover:text-sky-700">Контакти</NavLink>
            </div>
            <div className="mt-4 flex items-center gap-3 md:justify-end">
              <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-slate-300 text-slate-600 transition hover:border-sky-600 hover:text-sky-700">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.53-1 1.83-2.07 3.77-2.07C20 8.63 21 10.53 21 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.61-2.38 3.27V21H9z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-slate-300 text-slate-600 transition hover:border-sky-600 hover:text-sky-700">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M13 22v-8h3l.5-4H13V7.8c0-1.15.3-1.93 1.95-1.93H17V2.3C16.62 2.25 15.32 2 13.8 2 10.62 2 8.5 3.94 8.5 7.5V10H6v4h2.5v8z" />
                </svg>
              </a>
              <a href="#" aria-label="X" className="grid h-9 w-9 place-items-center rounded-full border border-slate-300 text-slate-600 transition hover:border-sky-600 hover:text-sky-700">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M18.25 2H21l-6.56 7.5L22 22h-6.64l-5.2-6.8L4.2 22H1.44l7.02-8.02L2 2h6.8l4.7 6.2zM16.95 20h1.5L7.98 3.9H6.36z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
