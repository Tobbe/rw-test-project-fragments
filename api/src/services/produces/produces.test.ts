import type { Produce } from '@prisma/client'

import {
  produces,
  produce,
  createProduce,
  updateProduce,
  deleteProduce,
} from './produces'
import type { StandardScenario } from './produces.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('produces', () => {
  scenario('returns all produces', async (scenario: StandardScenario) => {
    const result = await produces()

    expect(result.length).toEqual(Object.keys(scenario.produce).length)
  })

  scenario('returns a single produce', async (scenario: StandardScenario) => {
    const result = await produce({ id: scenario.produce.one.id })

    expect(result).toEqual(scenario.produce.one)
  })

  scenario('creates a produce', async (scenario: StandardScenario) => {
    const result = await createProduce({
      input: {
        name: 'String544511',
        quantity: 2681340,
        price: 6056873,
        region: 'String',
        stallId: scenario.produce.two.stallId,
      },
    })

    expect(result.name).toEqual('String544511')
    expect(result.quantity).toEqual(2681340)
    expect(result.price).toEqual(6056873)
    expect(result.region).toEqual('String')
    expect(result.stallId).toEqual(scenario.produce.two.stallId)
  })

  scenario('updates a produce', async (scenario: StandardScenario) => {
    const original = (await produce({ id: scenario.produce.one.id })) as Produce
    const result = await updateProduce({
      id: original.id,
      input: { name: 'String76943782' },
    })

    expect(result.name).toEqual('String76943782')
  })

  scenario('deletes a produce', async (scenario: StandardScenario) => {
    const original = (await deleteProduce({
      id: scenario.produce.one.id,
    })) as Produce
    const result = await produce({ id: original.id })

    expect(result).toEqual(null)
  })
})
