import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Фото у дома</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Профессиональная фотосъёмка и печать в вашем городе с 2015 года
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Send" size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Фото на документы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Семейная съёмка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Свадебная фотосессия
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Детская съёмка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Печать фотографий
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Цены
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Акции
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={14} />
                <a href="tel:+7" className="hover:text-foreground transition-colors">
                  +7 (000) 000-00-00
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={14} />
                <span>ул. Центральная, д. 1</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={14} />
                <span>Пн–Сб: 9:00–19:00</span>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Фото у дома. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
