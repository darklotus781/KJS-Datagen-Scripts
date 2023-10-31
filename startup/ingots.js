//Makes Ingots for Immersive Engineering, Mekanism, Create, and Thermal.
const ingot_properties = {
  tin: { color: tin },
  silver: { color: silver },
  lead: { color: lead },
  nickel: { color: nickel },
  steel: { color: steel },
  aluminum: { color: aluminum },
  electrum: { color: electrum },
  constantan: { color: constantan },
  osmium: { color: osmium },
  bronze: { color: bronze },
  uranium: {color: uranium },
  zinc: { color: zinc },
  brass: { color: brass },
  enderium: { color: enderium },
  lumium: { color: lumium },
  invar: { color: invar },
  signalum: { color: signalum },
  uranium: { color: tungsten }
}

global.ingots = [
  'tin',
  'silver',
  'lead',
  'nickel',
  'steel',
  'aluminum',
  'electrum',
  'constantan',
  'osmium',
  'bronze',
  'zinc',
  'brass',
  'enderium',
  'lumium',
  'invar',
  'signalum',
  'uranium'
]

StartupEvents.registry('item', event => {
  for (const mat of global.ingots) {
    event
      .create(`${mat}_ingot`)
      .texture('layer0', 'kubejs:item/ingot')
      .color(0, ingot_properties[mat].color)
      .tag('forge:ingots')
      .tag(`forge:ingots/${mat}`)
      .tag('minecraft:breacon_payment_items')
  }
})