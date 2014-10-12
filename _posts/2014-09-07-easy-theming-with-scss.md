---
layout: post
title: Easy Colour Switching with SCSS
comments: true
date: 7th September 2014
extract: Managing website themes can be tricky, especially when there are multiple themes to work with in parallel. By combining nested SCSS maps and mixins, it is easy to auto-generate each theme, without unessaray bloat in  SCSS files.
published: false
---

_Note: This article does go rather in depth into the how and why of theming this way. Skip to the [tldr]()._


### SCSS Maps

Maps are the closest thing SCSS has to arrays. Like arrays, maps can be nested within themselves, allowing complex data structures to be created. Shown below is the structure used in this article. 

```SCSS
$themes: (
    theme-one (
        primary #8A888A,
        secondary #831242,
        highlight #4072B4
    ),
    theme-two (
        primary #0179DA,
        secondary #CFCFFF,
        highlight #5C718F
    ),
    theme-three (
        primary #0179DA,
        secondary #CFCFFF,
        highlight #5C718F
    )
);
```

`$themes` is the global variable and all values are accessed through it. Inside of `$themes`, each individual theme is defined, seperated by a comma.

### Generating the themes

To 



### Advantages and Disadvantages

It is always worth considering the advantages and disadvantages of using a technique before applying it to a production site.

#### Advantages

#### Disadvantages

The largest disadvantage comes in the form of code bloat. Every time the `generate-theme` mixin is called, 







