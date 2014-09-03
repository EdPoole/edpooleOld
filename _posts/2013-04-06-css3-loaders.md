---
layout: post
title: CSS3 Loaders.
comments: true
date: 6th April 2013
cover: css-loaders.jpg
extract: Animated loaders have been used for years on the web. They're used as visual feedback to the user that something is "happening". 
published: false
---

*__NOTE:__ As CSS keyframes take up rather a large amount of space by themselves, the following snippets will be unprefixed.*

The core functionality behind our loaders is of course CSS Animations. Introduced into the level 3 spec, they allow you to smoothly transition one CSS value to another. There are several benefits to using CSS Animations over Javascript or images for animated loaders. Paul Irish has a great [demo](LINK) showing the effects of JavaScript animation rendering vs. CSS animation rendering. JavaScript animations change the `top` and `left` positions of an element, causing the DOM to repaint after every pixel moved. This is clearly undesirable, and often puts an unwanted weight on the CPU.

### CSS Animation Syntax Breakdown.

The CSS animation syntax is actually rather simple. The basic pattern is as follows:

`animation: [property/animation name][time][easing]`

Let's create a basic animation. When hovering on links, it's nice to have a slight fade effect between our hover/inactive state. 

	a {
		color: black;
		animation: color 0.3s ease-in;
	}

	a:hover {
		color: red;
	}

By adding the line `animation: color 0.3s ease-in;` we have instructed the browser that whenever the `color` property changes, we are to add an easing fade over the period of 0.3s from our starting colour to our ending colour.

This is CSS animation in it's simplest form.


##### Keyframes



### Constructing our loader.



















