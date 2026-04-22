import { Code2, Monitor, Palette, RefreshCcw, Search, ShieldCheck, Smartphone, ShoppingCart } from 'lucide-react'

const supportCards = [
  {
    title: 'Поддръжка на уеб сайт',
    description: 'За да работи Вашият сайт по най-добрия начин.',
    icon: Monitor,
  },
  {
    title: 'Поддръжка на мобилно приложение',
    description:
      'Мобилното Ви приложение ще отговаря на очакванията и желанията на Вашите потребители...',
    icon: Smartphone,
  },
  {
    title: 'Поддръжка на онлайн магазин',
    description:
      'Ще Ви помогнем да имате онлайн магазин, който е в крак с последните тенденции и носи желаните успехи за Вашия бизнес.',
    icon: ShoppingCart,
  },
  {
    title: 'Редизайн',
    description: 'Можем да обновим визията на Вашия сайт или приложение, за да бъде винаги актуален.',
    icon: Palette,
  },
  {
    title: 'Корекции в програмния код',
    description:
      'Ще направим така, че сайтът или приложението Ви да работи винаги по най-добрия възможен начин.',
    icon: Code2,
  },
  {
    title: 'SEO',
    description:
      'Ще Ви окажем пълно съдействие, за да бъде сайтът Ви видим, както за търсачките, така и за потребителите.',
    icon: Search,
  },
  {
    title: 'Актуализация',
    description:
      'Можем да обновим всеки един елемент от Вашия сайт или приложение, когато е необходимо.',
    icon: RefreshCcw,
  },
  {
    title: 'Сигурност и защита',
    description:
      'Създаваме сигурни и защитени сайтове и приложения, съобразени с всички изисквания и стандарти.',
    icon: ShieldCheck,
  },
]

function SupportPage() {
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50/40 to-cyan-50/60 px-6 py-12 shadow-sm sm:px-10 sm:py-14">
        <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-sky-100/80 blur-3xl" />
        <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-100/70 blur-2xl" />
        <div className="relative max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Поддръжка и развитие</p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Поддръжка, която пази сайта и приложенията Ви актуални, сигурни и бързи
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Избираме същата изчистена концепция и цветова линия, за да получите страница, която изглежда като
            естествена част от сайта и представя услугите Ви ясно и професионално.
          </p>
          <a
            href="/contacts#contact-form"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-sky-700 hover:shadow-md sm:text-base"
          >
            Изпрати запитване
          </a>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">Нашите услуги за поддръжка</h2>
            <p className="mt-2 max-w-3xl text-slate-600">
              Секцията следва визията от снимката: светъл фон, тънки акцентни линии, ясни карти и четим типографски ритъм.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {supportCards.map((card) => {
            const Icon = card.icon

            return (
              <article
                key={card.title}
                className="min-h-[16rem] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl border border-sky-200 bg-sky-50 p-3 text-sky-600">
                  <Icon className="h-8 w-8" aria-hidden="true" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-2xl font-black leading-tight text-slate-800">{card.title}</h3>
                <p className="mt-3 max-w-sm text-base leading-relaxed text-slate-600">{card.description}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Как работим</p>
          <h2 className="mt-2 text-2xl font-black text-slate-900">Започваме с преглед, продължаваме с оптимизация и завършваме с постоянен контрол</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Ако вече имате сайт или приложение, можем да поемем поддръжката му, да обновим визията или да подобрим
            техническата стабилност без да променяме основната идентичност на бранда.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Следваща стъпка</p>
          <p className="mt-3 text-lg font-bold text-slate-900">Свържете се с нас, за да определим най-подходящия пакет поддръжка.</p>
          <a
            href="/contacts"
            className="mt-5 inline-flex rounded-xl bg-sky-600 px-5 py-3 font-bold text-white transition hover:bg-sky-700"
          >
            Изпрати запитване
          </a>
        </div>
      </section>
    </div>
  )
}

export default SupportPage