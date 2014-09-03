---
layout: post
title: The Death of the Back-end.
comments: true
date: 20th December 2012
published: false
---

I was rather happy today to read the new updates to [CodeKit](http://incident57.com/codekit/kit.php). Finally they've added the ability to create HTML partials. Now this may seem like a relatively "minor" new addition, yet it is going to have a profound effect on the way I build websites. This feature will allow me (at least on my personal sites), to not have to touch any PHP or mess around with databases. I can keep everything "front-end", so to speak.

### Why's this so great?

Well, firstly, I've never enjoyed working with databases. It's one of the major reasons why I moved away from using WordPress in favour of the static site generator Jekyll. Especially for someone like myself, using a database to save my content always felt like more of a burden than a benefit. My site would often run slower than I'd like and easy content version control was damn near impossible without heavily disrupting my workflow. Add that to writing my database queries in PHP (I'm mostly refering to WordPress sites here, so don't suggest any other server-side languages), and I'm in a thoroughly unenjoyable development environment. 

The one benefit that I did get from writing PHP was the ability to split files up into "reusable" chunks, like `header.php` and `footer.php`. This would at least save me some development time, as I'd only have to edit these files once for the effect to cascade throughout my site. 

Having said that, development was still a pain. Rather than editing the files on my server, I would have a local copy of my WordPress theme that I would design with. Once I was happy with the way it was looking, I would upload it to my live site. This was fine, however due to the databases not being in sync, my local copy would always feel like an empty shell of it's live counterpart.

Secondly, CodeKit has already become a central part of my workflow. All my CSS I write is compiled from SASS using it, and it also minifys my javascript. Integrating these "partials" is going to be of no extra hardship, and it allows me to claim back the one feature of PHP that was trumping creating completely static sites.

On top of all that, testing and deployment have become easier too. I can now compile all my CSS/HTML/JS into a fully working static site which I can run on my local machine. Once I'm happy, all I do is commit everything to [Github](http://github.com/EdPoole), and through WebHooks, can send the code off to my server. All from my command line, all in 2 minutes.

I think I'm going to have some fun with this new feature...