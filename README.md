# Eisenhower

> Links Detector makes printed links clickable _via your smartphone camera_. No need to type a link in, just scan and click on it.

🚀 [**Launch Eisenhower**](https://tam-ng0905.github.io/links-detector/#/) _(preferably from your smartphone)_


## 🤷🏻‍ The Problem

So you read a book or a magazine and see the link like `https://some-url.com/which/may/be/long?and_with_params=true`, but you can't click on it since it is printed. To visit this link you need to start typing it character by character in the browser's address bar, which may be pretty annoying and error-prone.

## 💡 The Solution

Similarly to QR-code detection, we may try to "teach" the smartphone to _detect_ and _recognize_ printed links for us and to make them _clickable_. This way you'll do just _one_ click instead of _multiple_ keystrokes. Your operational complexity goes from `O(N)` to `O(1)`. 

This is exactly what `Eisenhower` tries to achieve. It makes you do just one click on the link instead of typing the whole link manually character by character.
