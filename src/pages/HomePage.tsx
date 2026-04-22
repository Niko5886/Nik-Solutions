import ServicesGrid from '../components/ServicesGrid'
import { services } from '../data/services'

const processSteps = [
  { id: 1, label: 'Идея' },
  { id: 2, label: 'Запитване' },
  { id: 3, label: 'Договор' },
  { id: 4, label: 'Комуникация' },
  { id: 5, label: 'Дизайн' },
  { id: 6, label: 'Изработка' },
  { id: 7, label: 'Тест' },
  { id: 8, label: 'Поддръжка' },
  { id: 9, label: 'Надграждане' },
]

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

      <section className="space-y-10 px-0 py-4 sm:py-6">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Как работим?</p>
          <h2 className="card-title mt-3 text-slate-900">
            Ясен процес, подредени стъпки и постоянна комуникация
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Ще потърсим най-доброто решение за Вашия проект, за да отговорим на нуждите, желанията и възможностите Ви.
            Комуникацията е неизменна част от работния процес, затова сте включени във всеки етап на разработката.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step) => (
            <article
              key={step.id}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-sky-600 text-2xl font-black leading-none text-white shadow-sm">
                {step.id}
              </div>
              <div>
                <p className="text-base font-semibold uppercase tracking-[0.16em] text-sky-600">Стъпка</p>
                <h3 className="card-title mt-1 text-slate-900">{step.label}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
