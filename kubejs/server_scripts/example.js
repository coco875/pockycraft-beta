// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {
    // You can replace `event` with any name you like, as
    // long as you change it inside the callback too!
  
    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.
  
    console.log('Hello! The recipe event has fired!')

    event.remove({ output: 'immersiveengineering:cloche' })

    event.remove({ output: 'create:mechanical_drill' })
    event.shaped(
        Item.of('create:mechanical_drill'),
        [
            ' I ',
            'IDI',
            ' S '
        ],
        {
            I: 'create:andesite_alloy',
            S: 'create:andesite_casing',
            D: 'immersiveengineering:drillhead_steel'
        }
    )

    event.remove({ output: 'create:water_wheel' })
    event.shaped(
        Item.of('create:water_wheel'),
        [
            ' S ',
            'SIS',
            ' S '
        ],
        {
            I: 'immersiveengineering:watermill',
            S: '#minecraft:planks'
        }
    )

    event.remove({ output: 'immersiveengineering:component_iron' })
    event.shaped(
        Item.of('immersiveengineering:component_iron'),
        [
            ' I ',
            'I I',
            ' I '
        ],
        {
            I: 'createindustry:heavy_plate'
        }
    )

    event.remove({ output: 'create:mechanical_harvester' })
    event.shaped(
        Item.of('create:mechanical_harvester'),
        [
            ' I ',
            'ICI',
            ' S '
        ],
        {
            I: 'immersiveengineering:component_iron',
            S: 'create:andesite_casing',
            C: 'immersiveengineering:razor_wire'
        }
    )

    event.remove({ output: 'create:rope_pulley' })
    event.shaped(
        Item.of('create:rope_pulley'),
        [
            ' A ',
            ' R ',
            ' I '
        ],
        {
            A: 'create:andesite_casing',
            R: 'farmersdelight:rope',
            I: 'immersiveengineering:component_iron'
        }
    )

    event.remove({ output: 'create:mechanical_bearing' })
    event.shaped(
        Item.of('create:mechanical_bearing'),
        [
            ' G ',
            ' I ',
            ' A '
        ],
        {
            G: 'create:andesite_casing',
            I: 'immersiveengineering:component_iron',
            A: Item.of('immersiveengineering:grindingdisk', '{Damage:0}')
        }
    )

    event.remove({ output: 'create:windmill_bearing' })
    event.shaped(
        Item.of('create:windmill_bearing'),
        [
            ' G ',
            ' I ',
            ' A '
        ],
        {
            G: 'create:shaft',
            I: 'immersiveengineering:component_iron',
            A: 'create:mechanical_bearing'
        }
    )

    event.remove({ output: 'create:gantry_carriage' })
    event.shaped(
        Item.of('create:gantry_carriage'),
        [
            ' S ',
            ' P ',
            ' C '
        ],
        {
            S: '#minecraft:slabs',
            P: 'create:mechanical_piston',
            C: 'thermal:lumium_gear'
        }
    )

    event.remove({ output: 'create:piston_extension_pole' })
    event.shaped(
        Item.of('create:piston_extension_pole'),
        [
            ' S ',
            ' W ',
            ' S '
        ],
        {
            S: 'create:shaft',
            W: 'immersiveengineering:wire_copper'
        }
    )

    event.remove({ output: 'ad_astra:engine_frame' })
    event.shaped(
        Item.of('ad_astra:engine_frame'),
        [
            ' I ',
            'IRI',
            ' I '
        ],
        {
            I: 'createindustry:heavy_plate',
            R: 'ballistix:missilelongrange'
        }
    )

    event.remove({ output: 'ae2:sky_stone_block' })
    event.shapeless('ae2:sky_stone_block', ['ad_astra:moon_stone'])

    event.remove({ output: 'hostilenetworks:sim_chamber' })
    event.shaped(
        Item.of('hostilenetworks:sim_chamber'),
        [
            ' G ',
            'PEP',
            'LRL'
        ],
        {
            G: "#forge:glass_panes",
            P: 'minecraft:ender_pearl',
            E: "thermal:enderium_gear",
            L: "minecraft:lapis_block",
            R: "thermal:lumium_plate"
        }
    )

    event.remove({ output: 'automobility:auto_mechanic_table'})
    event.shaped(
        Item.of('automobility:auto_mechanic_table'),
        [
            'CCC',
            'EME',
            'SSS'
        ],
        {
            C: "minecraft:copper_block",
            E: 'immersiveengineering:component_electronic',
            M: 'createindustry:gasoline_engine',
            S: 'minecraft:stone'
        }
    )

    event.remove({ output: 'trajanscore:crafter_block'})
    event.shaped(
        Item.of('trajanscore:crafter_block'),
        [
            'CBC',
            'SAS',
            'EME'
        ],
        {
            C: "minecraft:copper_block",
            B: Item.of('immersiveengineering:blueprint', '{blueprint:"bullet"}'),
            S: 'minecraft:stone',
            A: 'automobility:auto_mechanic_table',
            E: 'immersiveengineering:component_electronic_adv',
            M: 'createindustry:lpg_engine'
        }
    )

    event.shapeless(
        Item.of('automobility:automobile_engine', '{engine:"automobility:creative"}'),
        ['createindustry:turbine_engine']
    )

    event.remove({ output: 'thermal:machine_frame'})
    event.shaped(
        Item.of('thermal:machine_frame'),
        [
            'PGP',
            'GTG',
            'PGP'
        ],
        {
            P: '#forge:plates/iron',
            G: '#forge:glass',
            T: 'thermal:tin_gear'
        }
    )

    event.shaped(
        Item.of('ae2:calculation_processor_press'),
        [
            'T T',
            ' B ',
            'T T'
        ],
        {
            B: 'minecraft:iron_block',
            T: 'thermal:tin_block'
        }
    )

    event.shaped(
        Item.of('ae2:engineering_processor_press'),
        [
            'T T',
            ' B ',
            'T T'
        ],
        {
            B: 'minecraft:iron_block',
            T: 'thermal:lead_block'
        }
    )

    event.shaped(
        Item.of('ae2:logic_processor_press'),
        [
            'T T',
            ' B ',
            'T T'
        ],
        {
            B: 'minecraft:iron_block',
            T: 'thermal:silver_block'
        }
    )

    event.shaped(
        Item.of('ae2:silicon_press'),
        [
            'T T',
            ' B ',
            'T T'
        ],
        {
            B: 'minecraft:iron_block',
            T: 'thermal:nickel_block'
        }
    )

    event.shaped(
        Item.of('geolosys:prospectors_pick')
        [
            'III',
            '  S',
            '  S'
        ],
        {
            I: '#forge:ingots',
            S: 'minecraft:stick'
        }
    )
})
  