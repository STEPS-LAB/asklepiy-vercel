# Asklepiy Clinic - Medical Architecture 2026

Виробнича, ультра-преміум, mobile-first веб-екосистема для провідної української медичної клініки "Асклепій".

![Next.js](https://img.shields.io/badge/Next.js-15+-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-pink)

## 🏥 Можливості

### Основні функції
- **Багатомовність** - Миттєве перемикання українська/англійська без перезавантаження
- **Розумне бронювання** - Багатоетапний анімований запис на прийом
- **AI Асистент** - Контекстно-залежний чат-бот з медичними рекомендаціями
- **Особистий кабінет** - Сімейні профілі, історія здоров'я, AI-інтерпретації
- **Аутентифікація** - Email, телефон, Google OAuth з SMS-верифікацією

### Сторінки
- Головна
- Напрямки медицини
- Лікарі з детальними сторінками
- Ціни
- Новини та Акції
- Аналізи
- Заключити декларацію
- Про нас
- Контакти з інтерактивною картою

### Технічні особливості
- **Оптимізація продуктивності** - Часткова гідратація, lazy loading, оптимізація зображень
- **SEO готовність** - JSON-LD схеми, OpenGraph, динамічні метадані
- **Адаптивний дизайн** - Mobile-first підхід, робота на всіх пристроях
- **Система анімацій** - Мікровзаємодії на Framer Motion
- **Glassmorphism UI** - Преміум медична естетика

## 🛠 Технологічний стек

| Категорія | Технологія |
|-----------|------------|
| Фреймворк | Next.js 15+ (App Router) |
| Мова | TypeScript (Strict Mode) |
| Стилізація | Tailwind CSS v4 |
| Анімації | Framer Motion |
| Локалізація | next-intl |
| Стан | React Context + TanStack Query |
| Тестування | Vitest + Playwright |
| Деплой | Vercel |

## 📁 Структура проекту

```
asklepiy-clinic/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/          # Локалізовані маршрути
│   │   │   ├── page.tsx       # Головна сторінка
│   │   │   ├── doctors/       # Каталог лікарів
│   │   │   ├── dashboard/     # Особистий кабінет
│   │   │   └── ...            # Інші сторінки
│   │   └── layout.tsx         # Кореневий layout
│   ├── components/
│   │   ├── ui/                # UI компоненти
│   │   └── layout/            # Layout компоненти
│   ├── features/
│   │   ├── ai-assistant/      # AI чат-бот
│   │   ├── booking/           # Система бронювання
│   │   ├── auth/              # Аутентифікація
│   │   └── dashboard/         # Компоненти кабінету
│   ├── contexts/              # React contexts
│   ├── i18n/
│   │   └── locales/           # Файли перекладу
│   ├── lib/
│   │   └── utils/             # Утиліти та хелпери
│   ├── styles/                # Глобальні стилі
│   └── types/                 # TypeScript типи
├── tests/
│   ├── unit/                  # Vitest тести
│   └── e2e/                   # Playwright тести
└── public/                    # Статичні файли
```

## 🚀 Початок роботи

### Вимоги
- Node.js 20+
- npm або yarn

### Встановлення

```bash
# Клонувати репозиторій
git clone https://github.com/your-org/asklepiy-clinic.git
cd asklepiy-clinic

# Встановити залежності
npm install

# Запустити dev-сервер
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000) щоб побачити додаток.

### Збірка для продакшену

```bash
# Зібрати додаток
npm run build

# Запустити продакшен сервер
npm start
```

## 🧪 Тестування

```bash
# Запустити unit-тести
npm test

# Запустити unit-тести з UI
npm run test:ui

# Запустити E2E тести
npm run test:e2e

# Запустити E2E тести з UI
npm run test:e2e:ui
```

## 🌐 Деплой

### Vercel (Рекомендовано)

1. Встановіть Vercel CLI: `npm i -g vercel`
2. Виконайте `vercel` у директорії проекту
3. Дотримуйтесь інструкцій

Проект попередньо налаштований для деплою на Vercel.

### Змінні оточення

Створіть файл `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://asklepiy.com
NEXT_PUBLIC_API_URL=https://api.asklepiy.com
```

## 🎨 Дизайн-система

### Кольори
- **Основний**: Глибокий медичний синій (`#0A3D62`)
- **Акцент**: Медичний ціан (`#00A8B5`)
- **Поверхня**: Чистий білий з glassmorphism шарами

### Типографія
- **Основний шрифт**: Inter
- **Додатковий шрифт**: Montserrat
- **Ваги**: 300 (light), 400 (regular), 500 (medium)

### Відступи
"Luxury Whitespace" - подвоєні стандартні відступи для преміум відчуття

## 📱 Mobile-First UX

Додаток розроблений з підходом mobile-first:
- Адаптивні breakpoints (sm: 640px, md: 768px, lg: 1024px)
- Зручні для дотику інтерактивні елементи
- Мобільна навігація з glassmorphism overlay
- Оптимізовані зображення для різних розмірів екрану

## 🔒 Безпека

- HTTPS через security headers
- XSS protection headers
- Content-Type-Options: nosniff
- Strict-Transport-Security увімкнено

## 📊 Цільові показники продуктивності

- Lighthouse Performance: 100
- Accessibility: 100
- SEO: 100
- Best Practices: 100

## 📄 Ліцензія

© 2026 Асклепій Клінік. Всі права захищено.

## 👥 Команда

Зроблено з ❤️ командою Asklepiy Digital
