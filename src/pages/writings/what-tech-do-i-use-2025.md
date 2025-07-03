---
title: What tech do I use? (2025)
date: 07-02-2025
description: An explanation of my technological choices.
author: Evan Alvarez
tags: ["software", "linux", "open-source"]
layout: "@/layouts/PostLayout.astro"
---

## Introduction

This is a short article on the technology I choose to use in my daily life.

## Hardware

I have what is becoming a small collection of different laptops. I have three thinkpads (a t440p, an x1 carbon, and an e15), and an M1 Macbook Pro.
The one that I use on a day-to-day basis is the Macbook. I know what you're thinking, "a Macbook?!? But that traps you in the Apple walled garden AND
is worse for your privacy than a Linux system." I completely agree, that is why I don't use MacOS. Instead, I use NixOS with the Asahi Linux kernel.
This gives me the control and privacy of a Linux system with the speed and battery efficiency of Apple silicon. You can find my NixOS configuration
[here](https://github.com/sheikhevan/nix). If extreme privacy is needed, I resort to my librebooted T440p, but I don't aticipate that level of privacy ever being necessary.

## Operating System

As already mentioned I am a NixOS user. My Linux journey has been quite conventional, I started when I was 13 using Kali Linux because I wanted to be a cool
hackerman. Then that became Arch Linux, then I used Gentoo for a little while, and I even dabbled in Void Linux for a few months. I eventually landed on NixOS
because I believe reproducability and declarative configurations are the future. It was also one of the first Linux distributions that supported Asahi Linux.
There are still things that I do not fully love about NixOS, mainly the fact that you have to use SystemD and there are no alternatives, this is not ideal.

## Desktop Environment

I actually don't use a traditional desktop environment like KDE or Gnome, instead, I use my own modified version of [dwl](https://codeberg.org/dwl/dwl). Back when X11 was the norm for Linux,
I took the [suckless](https://suckless.org/) pill. Now that wayland is the _clear_ superior choice, I use dwl, the wayland version of dwm. You can find my patched and modified version
of dwl along with my NixOS configuration in the 'overlays' directory.

## Browser

I have used many, **many** browsers in my life. Of course, I started using Chrome, because thats what everyone else around me used. After I was 'redpilled'
and awoken to the privacy implications of using Chrome, I switched to Firefox. Firefox was nice, and I still think that using Gecko based browsers (or at least
non-Chromium based browsers) is a necessary act of protest against the monopolization of browsers at the hands of Google. I have also used Librewolf, Brave,
and even Qutebrowser. Nowadays, I use the Zen browser. It's Firefox based, but it doesn't send telemetry to anyone, and, most importantly, because it's Firefox
based I can use Ublock Origin on it (Something that you cannot do anymore on Chromium based browsers).

## IDE/Text Editor

I know, I know, you probably already know what I am going to say for this one. Yes, I am a Neovim user. I have a Neovim config made with the [nvf](https://github.com/NotAShelf/nvf) utiltiy for NixOS.
I use Neovim because it is what I have been using pretty much since I started Linux. I still remember being taught by my dad how to use 'vi' back when I was installing
Arch Linux for the first time. You can find my configuration along with the rest of my NixOS config.

## Miscellaneous

I have a Trezor Safe 3 for my cryptocurrency (mainly BTC and XMR). I also have several cheap desktop computers that I use as servers for my homelab, as well as just storage
because I am kind of a data hoarder. For listening to things, I use Bose QC45 headphones.
