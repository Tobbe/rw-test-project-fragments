import type { Prisma, Produce } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProduceCreateArgs>({
  produce: {
    one: {
      data: {
        name: 'String8947624',
        quantity: 8389274,
        price: 179456,
        region: 'String',
        stall: { create: { name: 'String', stallNumber: 'String9650283' } },
      },
    },
    two: {
      data: {
        name: 'String8902658',
        quantity: 7238038,
        price: 9761253,
        region: 'String',
        stall: { create: { name: 'String', stallNumber: 'String5277805' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Produce, 'produce'>
