import type { LucideIcon } from 'lucide-react'

interface ServiceItem {
  title: string
  description: string
  icon: LucideIcon
}

interface ServicesGridProps {
  title?: string
  subtitle?: string
  items: ServiceItem[]
}

function ServicesGrid({ title, subtitle, items }: ServicesGridProps) {
  return (
    <section className="space-y-6">
      {title ? (
        <div>
          <h2 className="card-title text-slate-900">{title}</h2>
          {subtitle ? <p className="mt-2 max-w-3xl text-slate-600">{subtitle}</p> : null}
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex rounded-xl bg-sky-50 p-3 text-sky-700">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="card-title mt-4 text-slate-900">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ServicesGrid
