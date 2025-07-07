---
title: Have a MacBook? Use Asahi!
date: 07-04-2025
description: A dissertation as to the superiority of Asahi Linux.
author: Evan Alvarez
topics: [linux, computers, privacy]
layout: "@/layouts/PostLayout.astro"
---

## Introduction
MacBooks prior to 2020 were some of the worst machines (performance wise) you could buy. However, after Apple's switch to ARM based chips,
MacBooks became some of the best performing computers on the market. There are, however, still a few problems with MacBooks. 

## The Problems
First, they are too expensive, I have a refurbished M1 Pro, and it cost me about $1200. For a casual computer user (i.e. someone who 
thinks a computers primary purpose is to consoom content and browse the bloated mess the modern web has become), this seems ridiculous. 
That being said, if you are a developer who needs fast CPU speeds, or a video editor, it makes much more sense to invest that amount of 
money on a laptop. The next problem I have with MacBooks is that they are not easy to repair. The Apple silicon models of MacBook are
hard to open. Even if you get it open, the memory, CPU, SSD, etc. are all soldered together. This is of course not ideal, and I would
much prefer a laptop I could repair by myself. The final problem I have with MacBooks is the operating system. I am a Linux user, and
for a very long time there was simply no good option for using MacBooks with Linux. I dislike MacOS because of it's proprietary nature.
I honestly can't fully trust any piece of proprietary software, especially not ones made by American companies (see the NSA).

## The Solution
[Asahi Linux!](https://asahilinux.org/) Thankfully, there is a solution to at least one of these problems, a distribution (or rather a project) of Linux
known as Asahi. Asahi Linux is a project that aims to bring Linux to Apple silicon. While it started off with far fewer features than
were available on MacOS, you can thank Apple for that, after a lot of reverse engineering and tons of open source contributions, I can 
proudly say Asahi is ready to be used by the majority of people. Most hardware features (at least on the M1) work the same as in MacOS,
see [this](https://asahilinux.org/docs/platform/feature-support/overview/) for more information on feature support for each model of MacBook. The default Asahi is a Fedora based "remix" known as Fedora 
Asahi Remix, but you can install several alternative operating systems, as long as they package the Asahi kernel and video drivers.

## What I Use
I do not use the default Fedora-based remix, mainly because I simply do not like Fedora and the only option available for installing
is with an unencrypted drive (at least as of July 4, 2025). Instead, I use NixOS with [this](https://github.com/nix-community/nixos-apple-silicon) module. I won't get into why I chose
NixOS in this article, but I will mention other available options if you don't want to use Asahi Fedora Remix. The biggest alternative distros
are NixOS, Debian (I don't remember where I read it had support, but I am sure I saw it somewhere), Ubuntu (please don't use Ubuntu), and
a personal favorite, Void Linux (yay no soystemd).

## Conclusion
The Asahi Linux project is a clear superior choice when it comes to using Apple silicon. Linux is better for your privacy, security (especially
from glowies), and it's a better platform for developers. Take the red pill and [download asahi linux](https://asahilinux.org/) today!
