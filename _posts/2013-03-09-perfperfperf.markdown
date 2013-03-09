---
layout: post
title: Perf, Perf, Perf.
comments: true
date: 9th March 2013
cover: performance.jpg
extract: It turns out studying performance is actually fun. I've managed to cut a considerable amount of load time off this website by paying close attention to my waterfall graphs and seeing what is slowing me down.
---

Following through Harry Robert's ([csswizardry](http://csswizardry.com)) awesome article on [performance](http://csswizardry.com/2013/01/front-end-performance-for-web-designers-and-front-end-developers/#section:resource-prefetching), I've managed to make some considerable speed improvements to my site.

### CSS

As CSS sits on what's known as the "critical path", there isn't actually a huge amount of optimisation available to perform. Having said that, I still managed to cut around 20kb from my stylesheet.

The majority of my work actually took place in my `.SCSS` files. My website is based on the [inuit.css](http://inuitcss.com) framework, however the amount of styles I'm using from it is roughly less than half. Making sure I'm only pulling through the parts of the framework I'm actually using managed to cut my stylesheet by around 6.5kb.

The rest of the saving came from minification. I managed to squeeze my stylesheet down to 5.7kb, which is a saving of 14.5kb. The next step would be to add an .htaccess file and to activate gzipping, reducing the file size even more. 

### JavaScript

Unfortunately, I haven't managed to save too much by optimising my JavaScript. I've only been able to shave about 2kb off of my scripts file, and I'm still relying on jQuery. Even optimised,  jQuery annoyingly sits at around 30kb. I've only actually written two functions, and my scripts file is only 4kb in size. Having a 30kb dependency for my 4kb custom script is awful. The next stage is to recreate what I've written in jQuery in vanilla JS and try to get it under 34kb.

### Images

I've managed to save a huge amount of load time by paying close attention to all the images on my site. Each blog post only has 1 image, however the homepage used to have 5. This was a lot of unnecessary http requests and bandwidth, and I felt I could cut this down a lot. 

I started off by removing all the images, apart from the first post from the blog roll. This immediately reduced the number of http requests by 4, and also dropped off around 30kb of bandwidth.

The next step was actually focusing on image optimisation. I dived into Photoshop and recreated all my blog post images again, with the aim to create the smallest (yet highest quality) images possible. 

I wanted to ensure my images were retina, however as retina images are 4x the size of regular images, this normally adds a huge, unwanted overhead. Having said that, there's a technique to ensure you can keep your images retina, but your file sizes small. 

I created a Photoshop file 220% larger than the image I needed. When it came to saving these images, I selected progressively enchanted jpgs, and dropped the quality around 10. This drastically reduced the file size, however on retina screens it's hard to notice the imperfections. I managed to save an average of 3kb per image using this technique.

### Fonts

This was most definitely the biggest overhead I had on my site. When I originally decided to use Typekit, I definitely went a bit overboard with the amount of fonts and weight I used. 

Before I started checking my site's performance, I was calling 264kb worth of fonts from Typekit. I had two fonts (Proxima Nova and Adelle), with around 5 weights each. Although I complained about Georgia originally, I think it's well worth using in place of Adelle as I save a massive 161kb. On top of that, I managed to cut down the amount of weights I was calling for Proxima Nova (down to thin, light and regular). This managed to save me another 28kb. I've now cut my total Typekit resources down to 75kb.

### General Performance & things left to do.

I've placed a dns-prefetch for typekit in the head of my document, which means DNS lookup will have happened before the typekit request is processed at the bottom of my html document. I haven't noticed any particular speed increase because of this, however as there's no harm from including the prefetch, I'm going to leave it in.

I've currently got an A rating on YSlow for my site, however there are a few areas that I still need to improve. Firstly, I need to add expiry headers to my stylesheets and JS, and gzip them. This is something I will fix soon, however it's not a top priority. Unfortunately, I currently have a C rating for not using a CDN. This I feel however is irrelevant for me, given the small amount of assets I use. Having another DNS lookup would probably do more harm than good.

I've surprisingly enjoyed this attempt to increase my site's performance. What started as me simply observing my waterfall charts has turned into a full scale effort to increase speed and performance. I'm definitely going to focus more on this in the future and see if I can make my site faster.

