---
title: "DECT NR+ at the RIOT Summit and Ariel OS Community Day in Grenoble"
description: "Grenoble, France. The place where the open-source IoT community meets. And DECT NR+ finds space on the programme twice. From 1 to 3 September, two events share the same rooms at Polytech Grenoble: the Ariel OS Community Day and the RIOT Summit. Christian Amsüss speaks on both. On Tuesday about the implementations, on Wednesday about the technology itself."
pubDate: 2026-08-31
---

**Grenoble, France.** The place where the open-source IoT community meets. And DECT NR+ finds space on the programme twice. From 1 to 3 September, two events share the same rooms at Polytech Grenoble: the Ariel OS Community Day and the RIOT Summit. Christian Amsüss speaks on both. On Tuesday about the implementations, on Wednesday about the technology itself.

What is happening there is worth a closer look. [Registration is free and still open.](https://tickets.riot-os.org/summit26/)

## Two projects, two directions, one stack

OPENER builds from the bottom up: drivers and MAC layer, written in C. Development happens on nRF91 and Zephyr, deliberately without locking into either too tightly. The goal is a complete implementation of the DECT NR+ protocol stack.

hophop builds from the top down: IPv6 connectivity for IoT devices and border routers, written in Rust, inside the Ariel OS community. It currently sits on Nordic's MAC layer and is prepared to switch to OPENER.

These are not two parallel efforts. hophop contributes to OPENER. Where the layers meet, the stack takes shape.

## Where OPENER sits in the ecosystem

Implementations of DECT NR+ already exist: commercial stacks addressing specific application domains such as smart metering, audio streaming, and deterministic industrial networking, plus Nordic's own MAC layer. The Franco–German joint research project MERCI produced demonstrators, but no comprehensive implementation, and development did not continue beyond the project's end.

OPENER is the one initiative with the stated goal of building the whole stack, in the open. Permissively licensed, usable for any application.
