import ServicesGrid from '../components/ServicesGrid'
import { services } from '../data/services'

function HomePage() {
  return (
    <div className="space-y-16">
      <section className="overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-500 px-6 py-14 text-white shadow-xl sm:px-10 sm:py-16 lg:px-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">Фирмен уебсайт</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
          Развийте бизнеса си с модерни решения и стабилен партньор.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-cyan-50 sm:text-lg">
          Създаваме устойчиви стратегии, дигитални процеси и силно онлайн присъствие за компании от всякакъв мащаб.
        </p>
        <button className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-bold text-sky-700 shadow-sm transition hover:bg-sky-50">
          Заяви безплатна консултация
        </button>
      </section>

      <div id="mobile-app">
        <ServicesGrid
          title="Нашите услуги"
          subtitle="Четири фокусирани направления, с които превръщаме идеите в работещи дигитални продукти."
          items={services}
        />
      </div>
    </div>
  )
}

export default HomePage
