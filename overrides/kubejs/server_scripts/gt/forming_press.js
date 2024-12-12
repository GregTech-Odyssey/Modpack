ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    gtr.forming_press("gtocore:carbon_rotor")
        .itemInputs("minecraft:chain", "2x gtceu:magnalium_rod", "8x gtceu:magnalium_bolt", "18x gtceu:carbon_fiber_plate")
        .itemOutputs("gtocore:carbon_rotor")
        .EUt(120)
        .duration(200)

    gtr.forming_press("gtocore:netherite_rod")
        .itemInputs("minecraft:netherite_upgrade_smithing_template", "2x gtceu:neodymium_rod", "minecraft:netherite_ingot")
        .itemOutputs("2x gtocore:netherite_rod")
        .EUt(480)
        .duration(400)

    gtr.forming_press("gtocore:scintillator_crystal")
        .itemInputs("gtceu:vibranium_plate", "gtceu:thallium_thulium_doped_caesium_iodide_dust", "gtceu:polycyclic_aromatic_mixture_dust", "gtceu:cadmium_tungstate_dust", "gtceu:bismuth_germanate_dust", "2x gtceu:mithril_plate")
        .itemOutputs("gtocore:scintillator_crystal")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(280)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.forming_press("gtocore:grindball_soapstone")
        .notConsumable("gtceu:ball_casting_mold")
        .itemInputs("16x gtceu:soapstone_dust", "2x gtceu:soldering_alloy_ingot")
        .itemOutputs("gtocore:grindball_soapstone")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(800)

    gtr.forming_press("gtocore:grindball_aluminium")
        .notConsumable("gtceu:ball_casting_mold")
        .itemInputs("16x gtceu:aluminium_dust", "2x gtceu:soldering_alloy_ingot")
        .itemOutputs("gtocore:grindball_aluminium")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(800)

    gtr.forming_press("gtocore:reactor_fuel_rod")
        .notConsumable("gtceu:cell_extruder_mold")
        .itemInputs("gtceu:magnetic_steel_ingot")
        .itemOutputs("gtocore:reactor_fuel_rod")
        .EUt(30)
        .duration(200)

    gtr.forming_press("gtocore:tungsten_carbide_reactor_fuel_rod")
        .notConsumable("gtceu:cell_extruder_mold")
        .itemInputs("gtceu:magnetic_neodymium_ingot", "gtceu:tungsten_carbide_ingot")
        .itemOutputs("gtocore:tungsten_carbide_reactor_fuel_rod")
        .EUt(120)
        .duration(200)

    gtr.forming_press("gtocore:raw_imprinted_resonatic_circuit_board")
        .itemInputs("4x gtceu:circuit_compound_dust", "gtceu:magneto_resonatic_dust")
        .itemOutputs("gtocore:raw_imprinted_resonatic_circuit_board")
        .EUt(480)
        .duration(300)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.forming_press("gtocore:optical_ram_wafer")
        .itemInputs("gtocore:rutherfordium_neutronium_wafer", "gtceu:ram_wafer", "gtocore:photon_carrying_wafer")
        .itemOutputs("gtocore:optical_ram_wafer")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(150)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.forming_press("gtocore:exotic_ram_wafer")
        .itemInputs("gtocore:optical_ram_wafer", "gtceu:nor_memory_wafer", "gtceu:nand_memory_wafer", "gtceu:amethyst_plate", "gtceu:technetium_plate")
        .itemOutputs("gtocore:exotic_ram_wafer")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(350)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.forming_press("gtocore:cosmic_ram_wafer")
        .itemInputs("gtocore:taranium_wafer", "gtceu:ram_wafer", "gtocore:prepared_cosmic_soc_wafer")
        .itemOutputs("gtocore:cosmic_ram_wafer")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(550)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.forming_press("gtocore:supracausal_ram_wafer")
        .itemInputs("gtocore:cosmic_ram_wafer", "gtocore:exotic_ram_wafer", "gtocore:pellet_antimatter", "gtceu:legendarium_foil", "gtceu:double_hikarium_plate")
        .itemOutputs("gtocore:supracausal_ram_wafer")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(750)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.forming_press("gtocore:optical_soc_containment_housing")
        .itemInputs("gtceu:multilayer_fiber_reinforced_printed_circuit_board", "gtceu:titanium_foil", "gtceu:yttrium_barium_cuprate_foil", "gtceu:nickel_zinc_ferrite_foil", "gtceu:uranium_rhodium_dinaquadide_foil", "4x gtceu:darmstadtium_bolt")
        .itemOutputs("gtocore:optical_soc_containment_housing")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(290)
        .cleanroom(CleanroomType.CLEANROOM)
})