import {
  ChartNoAxesColumnIncreasing,
  FileCheck2,
  Import,
  MessagesSquare,
  Monitor,
  Scaling,
  Settings,
  TerminalSquare,
} from 'lucide-react'

const webSiteCards = [
  {
    title: 'Подробна консултация',
    description:
      'За нас е важно да разберем Вашите идеи, желания и цели, за да предложим най-доброто решение.',
    icon: MessagesSquare,
  },
  {
    title: 'Персонализирана оферта',
    description: 'Ще изготвим индивидуална оферта, спрямо Вашите нужди, желания и бюджет.',
    icon: FileCheck2,
  },
  {
    title: 'Качествена изработка',
    description: 'Държим на качеството и се стараем да предлагаме иновативни и ефективни решения.',
    icon: TerminalSquare,
  },
  {
    title: 'Надграждане',
    description: 'Нашите продукти нямат лимити, можем да надграждаме, колкото желаете.',
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    title: 'Поддръжка',
    description: 'Можеме да разчитате на нас, дори и след като уеб сайтът Ви е готов.',
    icon: Settings,
  },
  {
    title: 'Responsive дизайн',
    description:
      'Съобразявайки се с целите на Вашия бизнес, ще създадем модерна и интуитивна Визия за Вашия уеб сайт.',
    icon: Monitor,
  },
  {
    title: 'Import/Export',
    description:
      'Предлагаме import / export на всякакви данни. Най-често използваните формати, които срещаме в практиката си са JSON/XML/EXCEL',
    icon: Import,
  },
  {
    title: 'API',
    description: 'Имаме нужда от интеграция на Вашата система, с друга? Ние можем да помогнем, имаме богат опит!',
    icon: Scaling,
  },
]

function WebSitePage() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50/40 to-cyan-50/60 px-6 py-12 shadow-sm sm:px-10 sm:py-14">
        <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-sky-100/80 blur-3xl" />
        <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-100/70 blur-2xl" />
        <div className="relative max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Уеб сайт</p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Изработка на уеб сайт
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Изработваме иновативни уеб решения, изцяло съобразени с вашите нужди и желания!
          </p>
          <a
            href="/contacts#contact-form"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-sky-700 hover:shadow-md sm:text-base"
          >
            Изпрати запитване
          </a>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50/35 to-cyan-50/55 p-4 sm:p-6">
        <div className="absolute -left-12 top-6 h-44 w-44 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-100/70 blur-2xl" />

        <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {webSiteCards.map((card) => {
            const Icon = card.icon

            return (
              <article
                key={card.title}
                className="min-h-[19rem] rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl border border-sky-200 bg-sky-50 p-3 text-sky-600">
                  <Icon className="h-8 w-8" aria-hidden="true" strokeWidth={1.8} />
                </div>

                <h2 className="card-title mt-5 break-words text-slate-800">
                  {card.title}
                </h2>

                <p className="mt-3 max-w-sm text-base leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default WebSitePage