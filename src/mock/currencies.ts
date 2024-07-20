import type { ICurrenciesSuccessResponse, ICurrenciesSuffixes } from '@/types'

export const currenciesMock: ICurrenciesSuccessResponse = {
  success: true,
  data: {
    default_currency: 'RUB',
    currencies: {
      CRYPTO: [
        {
          title: 'Cryptomus',
          code: 'cryptomus',
          commission: '0.5%',
          min_amount: 100,
          description: 'Зачисление до 1 часа',
          sort_order: 1
        }
      ],
      RUB: [
        {
          title: 'Картой РФ',
          code: 'card',
          commission: '8%',
          min_amount: 100,
          description: 'Зачисление до 1 часа',
          sort_order: 2
        },
        {
          title: 'Картой Мир',
          code: 'mir',
          commission: '8%',
          min_amount: 1000,
          description: 'Рыбный текст',
          sort_order: 2
        },
        {
          title: 'СБП',
          code: 'sbp',
          commission: '3%',
          min_amount: 1000,
          description: 'Рыбный текст 2',
          sort_order: 2
        },
        {
          title: 'Payeer',
          code: 'payeer',
          commission: '5%',
          min_amount: 30,
          description:
            'Зачисление до 6 минут\u003Cbr\u003EЭта платежная система не принимает платежи из стран:\u003Cbr\u003EАрмения, Белоруссия, Казахстан, Киргизия',
          sort_order: 1
        },
        {
          title: 'SteamPay',
          code: 'steampay',
          commission: '3%',
          min_amount: 1000,
          description: 'Рыбный текст 2',
          sort_order: 2
        },
        {
          title: 'Мегафон',
          code: 'megafon',
          commission: '3%',
          min_amount: 1000,
          description: 'Рыбный текст 2',
          sort_order: 2
        },
        {
          title: 'Билайн',
          code: 'beeline',
          commission: '3%',
          min_amount: 1000,
          description: 'Рыбный текст 2',
          sort_order: 2
        },
        {
          title: 'Теле2',
          code: 'tele2',
          commission: '3%',
          min_amount: 1000,
          description: 'Рыбный текст 2',
          sort_order: 2
        },
        {
          title: 'PayPal',
          code: 'paypal',
          commission: '3%',
          min_amount: 1000,
          description: 'Рыбный текст 2',
          sort_order: 2
        },
        {
          title: 'Stripe',
          code: 'stripe',
          commission: '3%',
          min_amount: 1000,
          description: 'Рыбный текст 2',
          sort_order: 2
        },
        {
          title: 'FKWallet',
          code: 'credit_card',
          commission: '3%',
          min_amount: 1000,
          description: 'Рыбный текст 2',
          sort_order: 2
        },
        {
          title: 'Lava',
          code: 'credit_card',
          commission: '3%',
          min_amount: 1000,
          description: 'Рыбный текст 2',
          sort_order: 2
        },
        {
          title: 'Volet',
          code: 'credit_card',
          commission: '3%',
          min_amount: 1000,
          description: 'Рыбный текст 2',
          sort_order: 2
        },
        {
          title: 'PerfectMoney',
          code: 'credit_card',
          commission: '3%',
          min_amount: 1000,
          description: 'Рыбный текст 2',
          sort_order: 2
        },
        {
          title: 'Другой',
          code: 'credit_card',
          commission: '3%',
          min_amount: 1000,
          description: 'Рыбный текст 2',
          sort_order: 2
        }
      ],
      USD: [
        {
          title: 'Картой',
          code: 'card_usd',
          commission: '7%',
          min_amount: 100,
          description: '',
          sort_order: 1
        },
        {
          title: 'Payeer',
          code: 'payeer',
          commission: '1%',
          min_amount: 30,
          description:
            'Зачисление до 6 минут\u003Cbr\u003EЭта платежная система не принимает платежи из стран:\u003Cbr\u003EАрмения, Белоруссия, Казахстан, Киргизия',
          sort_order: 2
        },
        {
          title: 'PayPal',
          code: 'paypal',
          commission: '10% + $0.50 FEE',
          min_amount: 30,
          description:
            'If you create a chargeback or open a dispute, your account will be instantly \u003Cspan style="color: red;"\u003Eblocked!\u003C/span\u003E',
          sort_order: 2
        }
      ]
    }
  }
}

export const currenciesSuffixes: ICurrenciesSuffixes = {
  RUB: '₽',
  USD: '$',
  CRYPTO: ''
}

export const sumsPresets = ['5000', '10000', '15000', '20000']
