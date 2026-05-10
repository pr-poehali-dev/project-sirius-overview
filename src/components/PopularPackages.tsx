import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Image, Star } from "lucide-react"

const packages = [
  {
    title: "Фото на документы",
    duration: "15 минут",
    prints: "4 снимка",
    rating: "5.0",
    reviews: "312",
    image: "https://cdn.poehali.dev/projects/76514b43-4581-49b0-a1fb-2a8ebbf06283/files/64e4b053-b892-4b51-b019-6f84a89bd6de.jpg",
    highlights: ["Паспорт РФ", "Загранпаспорт", "СНИЛС", "Водительское удостоверение"],
    price: "200 ₽",
  },
  {
    title: "Семейная фотосессия",
    duration: "1 час",
    prints: "20 фото в обработке",
    rating: "4.9",
    reviews: "187",
    image: "https://cdn.poehali.dev/projects/76514b43-4581-49b0-a1fb-2a8ebbf06283/files/59e2fcc9-dd0d-4c54-8ece-6ccb77d13f7e.jpg",
    highlights: ["Студийный свет", "2 смены образа", "Онлайн-галерея", "Печать 10 фото"],
    price: "3 500 ₽",
  },
  {
    title: "Свадебный пакет",
    duration: "3 часа",
    prints: "50 фото в обработке",
    rating: "5.0",
    reviews: "94",
    image: "https://cdn.poehali.dev/projects/76514b43-4581-49b0-a1fb-2a8ebbf06283/files/80a32774-71e6-4a5a-b1cc-8e23ede7ae98.jpg",
    highlights: ["Студия + выездная", "Фотокнига в подарок", "Онлайн-галерея", "Ретушь всех фото"],
    price: "9 000 ₽",
  },
]

export function PopularPackages() {
  return (
    <section id="packages" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Популярные <span className="font-semibold">пакеты</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Готовые решения для любого повода — выбирайте и записывайтесь прямо сейчас
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  <span className="text-xs font-semibold">{pkg.rating}</span>
                  <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{pkg.title}</h3>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Image className="h-4 w-4" />
                      <span>{pkg.prints}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-muted rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Цена от</div>
                    <div className="text-2xl font-semibold text-primary">{pkg.price}</div>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                    Записаться
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
