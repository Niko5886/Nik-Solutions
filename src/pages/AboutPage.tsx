import ServicesGrid from '../components/ServicesGrid'
import { services } from '../data/services'

const team = [
  {
    name: 'Мария Иванова',
    role: 'Изпълнителен директор',
    text: 'Фокусира се върху стратегическо развитие и дългосрочни партньорства.',
  },
  {
    name: 'Петър Георгиев',
    role: 'Технологичен директор',
    text: 'Ръководи внедряването на иновативни решения и автоматизация.',
  },
  {
    name: 'Елица Димитрова',
    role: 'Мениджър клиенти',
    text: 'Осигурява отлична комуникация и гладко изпълнение на проектите.',
  },
]

function AboutPage() {
  return (
    <div className="space-y-14">
      <section className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-500 p-7 text-white shadow-xl sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">За нашата компания</p>
        <h1 className="mt-3 text-3xl font-black sm:text-4xl">Изграждаме стойност чрез доверие, идеи и резултати</h1>
        <p className="mt-4 max-w-3xl text-cyan-50">
          Вече над 10 години помагаме на български и международни компании да повишават ефективността си и да растат устойчиво.
        </p>
      </section>

      <section className="grid gap-6 rounded-3xl border border-sky-100 bg-slate-50 p-7 shadow-sm sm:p-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="card-title text-slate-900">Нашата мисия</h2>
        </div>
        <div className="space-y-4 text-slate-700 lg:col-span-3">
          <p>
            Да предоставяме практични бизнес решения, които носят измерим ефект и дългосрочна конкурентоспособност.
          </p>
          <p>
            Работим с прозрачен процес, ясни цели и постоянна комуникация, за да гарантираме реална стойност за всеки клиент.
          </p>
        </div>
      </section>

      <div id="web-site">
        <ServicesGrid
          title="Услуги, с които работим всеки ден"
          subtitle="Структурираме решенията така, че да са ясни, скалируеми и лесни за надграждане."
          items={services}
        />
      </div>

      <section>
        <h2 className="card-title text-slate-900">Екип</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-sky-100 text-lg font-bold text-sky-700">
                {member.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </div>
              <h3 className="card-title text-slate-900">{member.name}</h3>
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">{member.role}</p>
              <p className="mt-3 text-slate-600">{member.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutPage
