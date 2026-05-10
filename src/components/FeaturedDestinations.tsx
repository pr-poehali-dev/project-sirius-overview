import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, ArrowRight } from "lucide-react"

const services = [
  {
    name: "Семейная съёмка",
    category: "Портреты",
    image: "https://cdn.poehali.dev/projects/76514b43-4581-49b0-a1fb-2a8ebbf06283/files/59e2fcc9-dd0d-4c54-8ece-6ccb77d13f7e.jpg",
    description: "Тёплые и живые семейные портреты, которые останутся на память на долгие годы",
    price: "от 1 500 ₽",
  },
  {
    name: "Свадебная фотосессия",
    category: "Торжества",
    image: "https://cdn.poehali.dev/projects/76514b43-4581-49b0-a1fb-2a8ebbf06283/files/80a32774-71e6-4a5a-b1cc-8e23ede7ae98.jpg",
    description: "Запечатлеем самый важный день вашей жизни в профессиональных снимках",
    price: "от 5 000 ₽",
  },
  {
    name: "Детская съёмка",
    category: "Дети",
    image: "https://cdn.poehali.dev/projects/76514b43-4581-49b0-a1fb-2a8ebbf06283/files/0276e284-e18e-406d-b46f-407bc44de9ac.jpg",
    description: "Игривые и трогательные портреты детей в уютной атмосфере студии",
    price: "от 1 200 ₽",
  },
  {
    name: "Фото на документы",
    category: "Документы",
    image: "https://cdn.poehali.dev/projects/76514b43-4581-49b0-a1fb-2a8ebbf06283/files/64e4b053-b892-4b51-b019-6f84a89bd6de.jpg",
    description: "Паспорт, загранпаспорт, СНИЛС, водительское удостоверение — быстро и по ГОСТу",
    price: "от 200 ₽",
  },
  {
    name: "Выпускная съёмка",
    category: "Торжества",
    image: "https://cdn.poehali.dev/projects/76514b43-4581-49b0-a1fb-2a8ebbf06283/files/4816d6c8-d744-4b47-8824-37d96838b156.jpg",
    description: "Студийные портреты выпускников с дипломом — сохраним этот важный момент",
    price: "от 1 800 ₽",
  },
  {
    name: "Печать фотографий",
    category: "Печать",
    image: "https://cdn.poehali.dev/projects/76514b43-4581-49b0-a1fb-2a8ebbf06283/files/b120ac56-9157-4d82-8392-77e9c04fdaec.jpg",
    description: "Качественная печать снимков любого формата: от 10×15 до больших постеров",
    price: "от 15 ₽",
  },
]

export function FeaturedDestinations() {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Наши <span className="font-semibold">услуги</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Всё для ваших фотографий: съёмка, печать и оформление документов в одном месте
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Camera className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-medium">{service.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary">{service.price}</span>
                  <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary">
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-2 bg-transparent">
            Все услуги
          </Button>
        </div>
      </div>
    </section>
  )
}
