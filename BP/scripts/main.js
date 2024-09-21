console.warn("Terrie Working!");

import { world, system } from "@minecraft/server";
import * as noise from "./noise.js";
import * as feature from "./features.js";

const pref = ".";
const cmdList = ["gen", "help", "seed"];

const terrainH = 73;

let gseed = world.scoreboard.getObjective("gen.seed");
let teim = world.scoreboard.getObjective("gen.time");
let sed = 0;

//Math
function randRange(min, max) {
    return Math.random() * (max - min) + min;
}

//Terrain generation helper
function tree(what, type, i, j, posx, posz) {
    var treeH = Math.floor(randRange(8, 9) + terrainH);
    what.runCommand("fill ~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + terrainH) + "~" + j + "~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 3 + terrainH) + "~" + j + " dirt [] replace grass []");
    what.runCommand("fill ~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 3 + terrainH) + "~" + j + "~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + treeH) + "~" + j + " " + type + "_log [] keep");
    what.runCommand("fill ~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 3 + terrainH) + "~" + j + "~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + treeH) + "~" + j + " " + type + "_log [] replace tallgrass []");
    what.runCommand("fill ~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 3 + terrainH) + "~" + j + "~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + treeH) + "~" + j + " " + type + "_log [] replace leaves []");
    what.runCommand("fill ~" + (i - 2) + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + (treeH - 2)) + "~" + (j - 2) + "~" + (i + 2) + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + (treeH - 1)) + "~" + (j + 2) + " " + type + "_leaves [] keep");
    what.runCommand("fill ~" + (i - 1) + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + treeH) + "~" + (j - 1) + "~" + (i + 1) + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + treeH) + "~" + (j + 1) + " " + type + "_leaves [] keep");
    what.runCommand("fill ~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + treeH + 1) + "~" + (j - 1) + "~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + treeH + 1) + "~" + (j + 1) + " " + type + "_leaves [] keep");
    what.runCommand("fill ~" + (i - 1) + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + treeH + 1) + "~" + j + "~" + (i + 1) + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + treeH + 1) + "~" + j + " " + type + "_leaves [] keep");
}

function nois(posx, posz, x, y, a) {
    return a * noise.noise(1 / a * (posx + x), 1 / a * (posz + y));
}

//commands
async function matchCmd(cmd, sender) {
    if (cmd[0] == "help" || cmd[0] == "h" || cmd[0] == "?") {
        system.run(() => {
            sender.runCommand("say e");
            sender.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§2-------Main Command list-------\"}]}");
            for (let i = 0; i < cmdList.length; i++) {
                var n;
                if (i < 9)
                    n = (i + 1) + "-";
                else n = i + 1;
                sender.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§7" + n + "> §r" + cmdList[i] + "\"}]}");
            }
        });
    }
    else if (cmd[0] == "gen") {
        system.run(() => {
            sender.runCommandAsync("setblock 0 -60 0 gold_block []");
            sender.runCommandAsync("summon armor_stand 0 -59 0 0 0 name \"gen.chunk\"");
            //Yes, I know you can teleport without commands.
            sender.runCommandAsync("tp 0 80 0");
        });
    }
    else if (cmd[0] == "seed") {
        system.run(() => {
            if (!isNaN(Number(cmd[1]))) {
                gseed.setScore("jeff", Number(cmd[1]));
                world.getDimension("overworld").runCommandAsync("tellraw " + sender.name + " {\"rawtext\":[{\"text\":\"Set generation seed to " + Number(cmd[1]) + "\"}]}");
            } else {
                world.getDimension("overworld").runCommandAsync("tellraw " + sender.name + " {\"rawtext\":[{\"text\":\"Seed has to be a number.\"}]}");
            }
        });
    }
}

world.beforeEvents.chatSend.subscribe((eventData) => {
    if (eventData.message.substr(0, 1) == pref) {
        eventData.cancel = true;
        matchCmd(eventData.message.substr(1, eventData.message.length).split(" "), eventData.sender);
    }
});

//actual generation
system.runInterval(() => {
    if (!gseed) {
        try {
            world.scoreboard.addObjective("gen.seed");
        } catch (err) { }
    }
    if (!teim) {
        world.scoreboard.addObjective("gen.time");
    }
    if (gseed == NaN) {
        sed = 0;
    }
    try {
        sed = gseed.getScore("jeff");
    } catch (err) { }
    //main
    let overworld = world.getDimension("overworld");
    let entities = overworld.getEntities();
    for (let entity of entities) {
        let posx = Math.floor(entity.location.x), posz = Math.floor(entity.location.z);
        if (entity.hasTag("gen.chunky") && entity.nameTag == "gen.chunk" && entity.typeId != "minecraft:player") {
            noise.noiseSeed(sed);
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    entity.runCommand("fill ~" + i + "~~" + j + "~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) - 3 + terrainH) + "~" + j + " stone []");
                    //entity.runCommand("setblock ~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 2 + terrainH) + "~" + j + " grass []");
                    if (nois(posx + 2893, posz + 932, i, j, 200) / 200 >= 1 / 3) {
                        entity.runCommand("fill ~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) - 2 + terrainH) + "~" + j + "~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 1 + terrainH) + "~" + j + " dirt []");
                        entity.runCommand("setblock ~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 2 + terrainH) + "~" + j + " grass []");
                    } else if (nois(posx + 2893, posz + 932, i, j, 200) / 200 < 1 / 3) {
                        entity.runCommand("fill ~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) - 2 + terrainH) + "~" + j + "~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 1 + terrainH) + "~" + j + " sandstone []");
                        entity.runCommand("setblock ~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 2 + terrainH) + "~" + j + " sand []");
                    }
                    /*entity.runCommand("fill ~" + i + "~~" + j + "~" + i + "~" + 14 * noise.noise(1 / 16 * (posx + i), 1 / 16 * (posz + j)) + "~" + j + " stone []");
                    entity.runCommand("setblock ~" + i + "~" + ((14 * noise.noise(1 / 16 * (posx + i), 1 / 16 * (posz + j))) + 1) + "~" + j + " dirt []");
                    entity.runCommand("setblock ~" + i + "~" + ((14 * noise.noise(1 / 16 * (posx + i), 1 / 16 * (posz + j))) + 2) + "~" + j + " grass []");*/

                    //tallgras

                    if (Math.random() < 0.33 && (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 3 + terrainH) > 53 + terrainH && nois(posx + 2893, posz + 932, i, j, 200) / 200 >= 1 / 3) {
                        entity.runCommand("setblock ~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 3 + terrainH) + "~" + j + " tallgrass [] keep");
                    }
                    if (Math.random() < 1 / 64 && (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 3 + terrainH) > 53 + terrainH && nois(posx + 2893, posz + 932, i, j, 200) / 200 < 1 / 3) {
                        if (Math.random() < 1 / 2) {
                            entity.runCommand("setblock ~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 3 + terrainH) + "~" + j + " deadbush [] keep");
                        } else if (Math.random() >= 1 / 2) {
                            entity.runCommand("execute positioned ~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 3 + terrainH) + "~" + j + " if block ~~~-1 air [] if block ~~~1 air [] if block ~-1~~ air [] if block ~1~~ air [] run setblock ~~~ sand [] keep");
                            entity.runCommand("execute positioned ~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 3 + terrainH) + "~" + j + " if block ~~~-1 air [] if block ~~~1 air [] if block ~-1~~ air [] if block ~1~~ air [] run fill ~~~ ~~" + Math.floor(randRange(2, 4)) + "~ cactus [] keep");
                        }
                    }

                    if (Math.random() < 0.25 && (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 3 + terrainH) < 50 + terrainH) {
                        //entity.runCommand("fill ~" + i + "~" + Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2) + 4.5) / 3) + "~" + j + "~" + i + "~" + Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2) + 4.5) / 3) + "~" + j + " seagrass [] replace water []");
                        //entity.runCommand("execute if block ~" + i + "~" + Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2) + 4.5) / 3) + "~" + j + " water [] run setblock ~" + i + "~" + Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2) + 4.5) / 3) + "~" + j + " seagrass []");
                        entity.runCommand("setblock ~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2) + 2) / 3) + 3 + terrainH) + "~" + j + " seagrass []");
                    }
                    if (Math.random() < 1 / 128 && (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 3 + terrainH) < 44 + terrainH) {
                        entity.runCommand("setblock ~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2) + 2) / 3) + 3 + terrainH) + "~" + j + " sea_pickle [\"cluster_count\"=" + Math.floor(randRange(0, 3)) + "]");
                    }
                    //fra
                    if (Math.random() < 0.012 && 10 * nois(posx + 2893, posz + 932, i, j, 400) / 200 >= 1 / 3 && (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 3 + terrainH) > 53 + terrainH) {
                        if (noise.noise(1 / 200 * (posx + i + 321), 1 / 200 * (posz + j + 92)) > 0.5) {
                            tree(entity, "oak", i, j, posx, posz);
                        }
                    }
                    if (Math.random() < 0.008 && 10 * nois(posx + 2893, posz + 932, i, j, 400) / 200 >= 1 / 3 && (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 3 + terrainH) > 53 + terrainH) {
                        if (noise.noise(1 / 200 * (posx + i + 321), 1 / 200 * (posz + j + 92)) > 0.5) {
                            tree(entity, "birch", i, j, posx, posz);
                        }
                    }
                    if (Math.random() < 0.0625 && nois(posx + 2893, posz + 932, i, j, 200) / 200 >= 1 / 3 && (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 3 + terrainH) > 53 + terrainH) {
                        if (noise.noise(1 / 200 * (posx + i + 321), 1 / 200 * (posz + j + 92)) >= 1 / 2) {
                            entity.runCommand("setblock ~" + i + "~" + (Math.floor((nois(posx, posz, i, j, 200) + nois(posx, posz, i, j, 100) + nois(posx, posz, i, j, 50) + nois(posx, posz, i, j, 25) + nois(posx, posz, i, j, 25 / 2)) / 3) + 3 + terrainH) + "~" + j + " " + feature.flower[Math.floor(randRange(0, feature.flower.length))] + " [] keep");
                        }
                    }
                }
            }
            entity.runCommand("fill ~~" + (42 + terrainH) + "~ ~7~" + (52 + terrainH) + "~7 sand [] replace grass");
            entity.runCommand("fill ~~~ ~7~" + (41 + terrainH) + "~7 gravel [] replace grass");
            entity.runCommand("fill ~~~ ~7~" + (50 + terrainH) + "~7 water [] keep");
            entity.runCommand("fill ~~~ ~7~" + (50 + terrainH) + "~7 water [] replace flowing_water []");
            entity.runCommand("fill ~~~ ~7~" + (50 + terrainH) + "~7 water [] replace barrier []");
            entity.remove();
        }
    }
});