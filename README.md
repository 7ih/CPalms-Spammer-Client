# CPalms-Spammer-Client
Spam like/dislike requests to a CPalms resource.

Demo: https://replit.com/@7ih/cpalms-spammer-client

There are 2 versions.

* Server: use server resources to send requests (much more efficient, easily spam multiple CPalms resources)
* [Client](https://github.com/7ih/CPalms-Spammer-Client/): use client device resources to send requests (easier to set up)

## How to set up

1. Download this repository's contents where you want to run it (like a hosting platform, or your device)
3. Open public/index.html in a browser

## How to use

### type

First, choose request type. 
* Like: increases like count
* Dislike: decreases like count

### interval

Then, choose spam interval. This is the time between requests in milliseconds. Minimum time is 200.

### resource id

Then, select a CPalms resource to spam.
* Example link: https://www.cpalms.org/PreviewResourceStudentTutorial/Preview/185847

The program then extracts the resource's ID (the numbers at the end of the link) and uses it to send a request to a URL that affects the like count.

### buttons

There are then two buttons:
* GO: starts spamming requests with the current resource ID
* STOP: stops spamming requests with the current resource ID

## Other

The code in this could theoretically be reused for other websites.
