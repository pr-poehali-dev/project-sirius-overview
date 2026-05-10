import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "MapPin",
    title: "Рядом с домом",
    description: "Удобное расположение в центре города — не нужно ехать в другой конец, всё в шаговой доступности",
  },
  {
    icon: "Clock",
    title: "Быстрое исполнение",
    description: "Фото на документы — за 15 минут, печать снимков — в день обращения",
  },
  {
    icon: "Star",
    title: "Профессиональное качество",
    description: "Современное оборудование и опытный фотограф с 10-летним стажем работы",
  },
  {
    icon: "Heart",
    title: "Индивидуальный подход",
    description: "Каждый клиент особенный — найдём лучший ракурс и создадим комфортную атмосферу",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Почему выбирают <span className="font-semibold">Фото у дома</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Мы знаем каждого клиента в лицо — в маленьком городе это главное преимущество
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                <Icon name={feature.icon} size={32} />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
