execute as @e[name=gen.chunk] at @s run tp @s ~~~
execute as @e[name=gen.chunk] at @s run setblock ~~-1~ gold_block []
execute as @e[name=gen.chunk] at @s run setblock ~~2~ glass [] keep
execute as @e[name=gen.chunk] at @s unless block ~~~ air [] unless block ~~~ flowing_water [] unless block ~~~ water [] run kill @s
execute as @r at @s positioned ~ -59 ~ run scoreboard players add @e[type=armor_stand,name="gen.chunk",r=64,c=1] gen.time 1
execute as @r at @s run execute as @e[type=armor_stand,name="gen.chunk",scores={gen.time=2},c=1] at @s if block ~~~8 air [] unless block ~~-1~8 gold_block [] run summon armor_stand ~~~8 0 0 name "gen.chunk"
execute as @r at @s run execute as @e[type=armor_stand,name="gen.chunk",scores={gen.time=2},c=1] at @s if block ~~~-8 air [] unless block ~~-1~-8 gold_block [] run summon armor_stand ~~~-8 0 0 name "gen.chunk"
execute as @r at @s run execute as @e[type=armor_stand,name="gen.chunk",scores={gen.time=2},c=1] at @s if block ~8~~ air [] unless block ~8~-1~ gold_block [] run summon armor_stand ~8~~ 0 0 name "gen.chunk"
execute as @r at @s run execute as @e[type=armor_stand,name="gen.chunk",scores={gen.time=2},c=1] at @s if block ~-8~~ air [] unless block ~-8~-1~ gold_block [] run summon armor_stand ~-8~~ 0 0 name "gen.chunk"
execute as @r at @s positioned ~ -59 ~ run tag @e[type=armor_stand,name="gen.chunk",scores={gen.time=2..},r=64,c=1] add "gen.chunky"
execute as @a at @s run kill @e[type=item,name="Cactus",r=48,rm=16]
execute as @a at @s run kill @e[type=item,name="Sea Pickle",r=48,rm=16]
execute as @e[name=gen.chunk] at @s run fill ~7~100~7~~128~ barrier [] replace flowing_water
execute as @e[name=gen.chunk] at @s run fill ~7~100~7~~128~ barrier [] replace water