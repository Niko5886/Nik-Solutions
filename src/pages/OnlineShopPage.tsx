import {
  ChartNoAxesColumnIncreasing,
  FileCheck2,
  Import,
  MessagesSquare,
  Palette,
  ShieldCheck,
  Store,
  WalletCards,
} from 'lucide-react'

const onlineShopCards = [
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
    title: 'Дизайн',
    description:
      'Ще създадем модерен дизайн за мобилното Ви приложение, съобразен с всички UI и UX тенденции.',
    icon: Palette,
  },
  {
    title: 'Поддръжка',
    description: 'Предлагаме пълна поддръжка и надграждане на мобилното Ви приложение.',
    icon: ShieldCheck,
  },
  {
    title: 'Разплащателни системи',
    description: 'Ще интегрираме желаните от Вас системи и методи за онлайн плащане.',
    icon: WalletCards,
  },
  {
    title: 'Импорт на продукти',
    description: 'Ще качим Вашите продукти от жив feed, XML и JSON файлове.',
    icon: Import,
  },
  {
    title: 'Складов софтуер',
    description: 'Предлагаме възможност за лесно сигурно управление на Вашия онлайн магазин.',
    icon: Store,
  },
  {
    title: 'Надграждане',
    description: 'Нашите продукти нямат лимити, можем да надграждаме, колкото желаете.',
    icon: ChartNoAxesColumnIncreasing,
  },
]

function OnlineShopPage() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50/40 to-cyan-50/60 px-6 py-12 shadow-sm sm:px-10 sm:py-14">
        <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-sky-100/80 blur-3xl" />
        <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-100/70 blur-2xl" />
        <div className="relative max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Онлайн магазин</p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Стъпки за изграждане и развитие на Вашия онлайн магазин
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Визуализацията следва референцията от снимката, а цветовата гама е съобразена с цялостната концепция на проекта.
          </p>
        </div>
      </section>

      <section>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {onlineShopCards.map((card) => {
            const Icon = card.icon

            return (
              <article
                key={card.title}
                className="min-h-[18rem] rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl border border-sky-200 bg-sky-50 p-3 text-sky-600">
                  <Icon className="h-8 w-8" aria-hidden="true" strokeWidth={1.8} />
                </div>
                <h2 className="card-title mt-5 text-slate-800">{card.title}</h2>
                <p className="mt-3 max-w-sm text-base leading-relaxed text-slate-600">{card.description}</p>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default OnlineShopPage