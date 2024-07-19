import type { ICurrency } from '@/types'

export const paymentMockData: ICurrency[] = [
  {
    name: 'Russian Ruble',
    isCrypto: false,
    symbol: '₽',
    flagUrl: '/img/flags/russia.svg',
    abbreviation: 'RUB',
    paymentMethods: [
      {
        minAmount: 1000,
        iconUrl: '/img/payments/visa-mastercard.svg',
        name: 'Картой РФ',
        fee: 1.5,
        additionalInfo:
          'Зачисление до 6 минут\nЭта платежная система не принимает платежи из стран:\nАрмения, Австрия, Азербайджан, Бельгия, Болгария, Кипр, Чешская Республика, Дания, Эстония, Финляндия, Франция, Грузия, Германия, Греция, Венгрия, Исландия, Ирландия, Испания, Италия, Кыргызстан, Латвия, Литва, Люксембург, Мальта, Румыния, Сербия и Черногория, Словакия, Словения, Швеция, Швейцария, Таджикистан, Турция, Туркменистан, Соединенное Королевство, Узбекистан, Австралия, Норвегия, Израиль, Португалия, Нидерланды, Саудовская Аравия, Объединенные Арабские Эмираты, Сингапур, Новая Зеландия, Хорватия, Польша, Бруней-Даруссалам, Перу, Южная Корея, Катар, Египет.'
      },
      {
        minAmount: 1000,
        iconUrl: '/img/payments/mir.svg',
        name: 'Картой Мир',
        fee: 1.5,
        additionalInfo: 'Рыбный текст 1'
      },
      {
        minAmount: 1000,
        iconUrl: '/img/payments/sbp.svg',
        name: 'СБП',
        fee: 2,
        additionalInfo: 'Рыбный текст 2'
      },
      {
        minAmount: 2000,
        iconUrl: '/img/payments/payeer.svg',
        name: 'Payeer',
        fee: 3,
        additionalInfo: 'Рыбный текст 3'
      },
      {
        minAmount: 3000,
        iconUrl: '/img/payments/steampay.svg',
        name: 'SteamPay',
        fee: 4,
        additionalInfo: 'Рыбный текст 4'
      },
      {
        minAmount: 2500,
        iconUrl: '/img/payments/megafon.svg',
        name: 'Мегафон',
        fee: 5,
        additionalInfo: 'Рыбный текст 5'
      },
      {
        minAmount: 3000,
        iconUrl: '/img/payments/beeline.svg',
        name: 'Билайн',
        fee: 5,
        additionalInfo: 'Рыбный текст 6'
      },
      {
        minAmount: 3000,
        iconUrl: '/img/payments/tele2.svg',
        name: 'Теле2',
        fee: 5,
        additionalInfo: 'Рыбный текст 7'
      },
      {
        minAmount: 7000,
        iconUrl: '/img/payments/paypal2.svg',
        name: 'PayPal',
        fee: 6,
        additionalInfo: 'Рыбный текст 8'
      },
      {
        minAmount: 8000,
        iconUrl: '/img/payments/stripe2.svg',
        name: 'Stripe',
        fee: 8,
        additionalInfo: 'Рыбный текст 9'
      },
      {
        minAmount: 8000,
        iconUrl: 'https://place-hold.it/48x31',
        name: 'FKWallet',
        fee: 7,
        additionalInfo: 'Рыбный текст 10'
      },
      {
        minAmount: 8000,
        iconUrl: 'https://place-hold.it/48x31',
        name: 'Lava',
        fee: 9,
        additionalInfo: 'Рыбный текст 11'
      },
      {
        minAmount: 8000,
        iconUrl: 'https://place-hold.it/48x31',
        name: 'Volet',
        fee: 10,
        additionalInfo: 'Рыбный текст 12'
      },
      {
        minAmount: 8000,
        iconUrl: 'https://place-hold.it/48x31',
        name: 'PerfectMoney',
        fee: 12,
        additionalInfo: 'Рыбный текст 13'
      },
      {
        minAmount: 8000,
        iconUrl: 'https://place-hold.it/48x31',
        name: 'Другой',
        fee: 16,
        additionalInfo: 'Рыбный текст 14'
      }
    ]
  },
  {
    name: '',
    isCrypto: false,
    symbol: '$',
    flagUrl: 'https://place-hold.it/28x28',
    abbreviation: 'USD',
    paymentMethods: [
      {
        minAmount: 10,
        iconUrl: 'https://place-hold.it/48x31',
        name: 'Visa',
        fee: 1.5,
        additionalInfo: 'Accepted worldwide'
      },
      {
        minAmount: 10,
        iconUrl: 'https://place-hold.it/48x31',
        name: 'MasterCard',
        fee: 1.5,
        additionalInfo: 'Accepted worldwide'
      }
    ]
  },
  {
    name: 'Euro',
    isCrypto: false,
    symbol: '€',
    flagUrl: 'https://place-hold.it/28x28',
    abbreviation: 'EUR',
    paymentMethods: [
      {
        minAmount: 10,
        iconUrl: 'https://place-hold.it/48x31',
        name: 'PayPal',
        fee: 2.0,
        additionalInfo: 'Secure online payments'
      },
      {
        minAmount: 10,
        iconUrl: 'https://place-hold.it/48x31',
        name: 'Skrill',
        fee: 2.5,
        additionalInfo: 'Fast transactions'
      }
    ]
  },
  {
    name: 'British Pound',
    isCrypto: false,
    symbol: '£',
    flagUrl: 'https://place-hold.it/28x28',
    abbreviation: 'GBP',
    paymentMethods: [
      {
        minAmount: 10,
        iconUrl: 'https://place-hold.it/48x31',
        name: 'Neteller',
        fee: 1.75,
        additionalInfo: 'Instant deposits'
      },
      {
        minAmount: 10,
        iconUrl: 'https://place-hold.it/48x31',
        name: 'Bank Transfer',
        fee: 1.0,
        additionalInfo: 'Safe and secure'
      }
    ]
  },
  {
    name: 'Japanese Yen',
    isCrypto: false,
    symbol: '¥',
    flagUrl: 'https://place-hold.it/28x28',
    abbreviation: 'JPY',
    paymentMethods: [
      {
        minAmount: 1000,
        iconUrl: 'https://place-hold.it/48x31',
        name: 'JCB',
        fee: 2.0,
        additionalInfo: 'Popular in Japan'
      },
      {
        minAmount: 1000,
        iconUrl: 'https://place-hold.it/48x31',
        name: 'Line Pay',
        fee: 2.5,
        additionalInfo: 'Convenient mobile payments'
      }
    ]
  },
  {
    name: 'Bitcoin',
    isCrypto: true,
    symbol: 'BTC',
    flagUrl: '',
    abbreviation: '',
    paymentMethods: [
      {
        minAmount: 0.0001,
        iconUrl: 'https://place-hold.it/48x31',
        name: 'Bitcoin Wallet',
        fee: 0.0005,
        additionalInfo: 'Decentralized cryptocurrency'
      },
      {
        minAmount: 0.0001,
        iconUrl: 'https://place-hold.it/48x31',
        name: 'Coinbase',
        fee: 0.0003,
        additionalInfo: 'Popular crypto exchange'
      },
      {
        minAmount: 0.0001,
        iconUrl: 'https://place-hold.it/48x31',
        name: 'Binance',
        fee: 0.0002,
        additionalInfo: 'Leading crypto exchange'
      }
    ]
  }
]
