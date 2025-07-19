---
title: What Tech do I Use (2025)
date: 07-19-2025
description: What is my 'tech stack' as of July 2025.
author: Evan Alvarez
topics: [computers, nix, neovim]
layout: "@/layouts/PostLayout.astro"
---

## Introduction

I am what most people would call a digital minimalist, I try to have the smallest possible footprint possible when it comes
to what software I run on my computer, and if I can do it in the terminal, I will. Here is a list of the majority of the programs
and hardware I use, alongside my reasons for choosing them. You can find my dotfiles for all of these programs in [here](https://github.com/sheikhevan/nix).

## Computer

Alright so I know I just said that I consider myself to be a minimalist and all, so this first point might seem somewhat contradictory,
but I have my reasons. For my main development laptop, I have a MacBook M1 Pro. Don't get me wrong, before apple silicon I would have
_never_ chosen a Mac, but the allure of high CPU performance with a relatively low battery usage was simply too much for my consumerist
brain. I actually really like my Mac, and while it has its downsides (mainly the lack of right to repair standards), the power of the
M1 is worth it for me. That being said, if [Asahi Linux](https://evanalvarez.dev/writings/have-a-macbook-use-asahi) didn't exist, I would probably be using a modern thinkpad. Speaking of Asahi,
the next section is all about my choice of OS.

## Operating System

I have tried _many_ different distributions of Linux, but the one that I use today is NixOS. It's a somewhat unorthodox choice, I know, but
NixOS has a few key benefits that make it where I call home today. First of all, NixOS has great support for the Asahi kernel and arm64. There
aren't a lot of distributions out there that support Asahi or arm64, but thankfully NixOS is one of the ones that does. Second, it has a _very_
large number of packages, over 120,000, search through them [here](https://search.nixos.org/packages). And finally, I believe declarative _everything_ will be the future of computing.
It seems somewhat unlikely now, but once you get used to having everything declared in one central place, and the benefits of that, you really
can't go back.

## Window Manager

I use [dwl](https://codeberg.org/dwl/dwl) for wayland. Back when I, and everyone else, used Xorg, I was an avid user of dwm. Now that wayland has become the standard, dwl
seemed like the logical option. It's not perfect, but it's relatively minimal and is a decently accurate clone of dwm for wayland. My custom
build of dwl can be found in my nix configuration files in the 'overlays' directory. Might make a post later on about why wayland is the future.

## Terminal

I use the [foot](https://codeberg.org/dnkl/foot) terminal. I have found that it is the most minimal terminal I can use on wayland. If I was still on Xorg I would probably be using
a patched version of [st](https://st.suckless.org/).

## Shell

I use zsh with syntax highlighting and autocompletion. The plugins are managed through nix's home-manager.

## Text Editor / IDE

I use Neovim (because of course I do) loaded up with a bunch of plugins. I manage Neovim through [nvf](https://github.com/NotAShelf/nvf) which is a configuration framework
that bridges the gap between nix and Neovim. I generally try to keep my Neovim configuration minimal and only use plugins when they really
add necessary features. You can find my Neovim configuration along with the rest of my config files in 'modules/nixos/programs/nvf'.

## Web Browser

Unfortuntely, there are _no_ good options for web browsers in the modern day. Yes, all of them are bloated and full of trackers and 'analytics'.
The best option I have found is the [zen browser](https://zen-browser.app/), which is a firefox fork that neatly balances privacy and good user experience. I am eagerly
following the development of [ladybird](https://ladybird.org/) browser.

## Other

The only piece of proprietary software I use is [Obsidian](https://obsidian.md/) for taking notes. I am _desperately_ looking for an open source alternative to this, but
so far I haven't found any good ones. Please email me at [evanalvarez@tutamail.com](mailto:evanalvarez@tutamail.com) if you have a good alternative. I use newsraft for my rss feeds,
imv as an image viewer, and mpv as my video player.
