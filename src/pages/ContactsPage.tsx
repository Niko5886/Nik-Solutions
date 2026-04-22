import ServicesGrid from '../components/ServicesGrid'
import { services } from '../data/services'

function ContactsPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
        <h1 className="text-3xl font-black text-slate-900 sm:text-4xl">Свържете се с нас</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Ще се радваме да обсъдим вашите цели и да предложим най-подходящото решение за вашия бизнес.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div>
            <h2 className="text-xl font-black text-slate-900">Контактна информация</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>
                <span className="font-semibold text-slate-900">Адрес:</span> бул. Витоша 100, София 1463
              </li>
              <li>
                <span className="font-semibold text-slate-900">Имейл:</span>{' '}
                <a href="mailto:office@firmaplus.bg" className="text-sky-700 hover:underline">office@firmaplus.bg</a>
              </li>
              <li>
                <span className="font-semibold text-slate-900">Телефон:</span> +359 2 123 4567
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900">Карта</h3>
            <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Карта на офиса"
                src="https://www.google.com/maps?q=42.6906,23.3199&z=15&output=embed"
                className="h-64 w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <form id="contact-form" className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 scroll-mt-28">
          <h2 className="text-xl font-black text-slate-900">Изпратете запитване</h2>
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">Име</label>
            <input
              id="name"
              type="text"
              placeholder="Вашето име"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">Имейл</label>
            <input
              id="email"
              type="email"
              placeholder="example@company.com"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">Съобщение</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Опишете накратко вашето запитване"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
            />
          </div>
          <button type="submit" className="inline-flex rounded-xl bg-sky-600 px-6 py-3 font-bold text-white transition hover:bg-sky-700">
            Изпрати
          </button>
        </form>
      </section>

      <div id="online-shop">
        <ServicesGrid
          title="Други направления, които можем да поемем"
          subtitle="От мобилни приложения до поддръжка - екипът ни обхваща целия дигитален цикъл."
          items={services}
        />
      </div>
    </div>
  )
}

export default ContactsPage
