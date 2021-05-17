# CPalms-Spammer-Client
Spam like/dislike requests to a CPalms resource.

There are 2 versions.

* [Server](https://github.com/7ih/CPalms-Spammer-Server): use server resources to send requests (much more efficient)
* Client: use client device resources to send requests (slightly more convenient)

## How to set up

1. Download this folder's contents where you want to run it (like a hosting platform, or your device)
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
