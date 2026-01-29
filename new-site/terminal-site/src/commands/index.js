export const commands = {
  help: () => `
<span id="terminal-title">available commands:</span>
  help        show this help menu
  about       about the club
  events      upcoming events
  news        recent announcements
  contact     how to reach us
  clear       clear the terminal
  expenses    <b>NEW - expense report for http hacks 2025</b>
  clubs       useful links for new students
`,
// We run events, workshops, hackathons like HTTP Hacks, and help students level up through real projects. 
// liked how that sounded too
  about: () => `
<span id="terminal-title">who are we?</span>
A computing community running events, workshops, and hackathons, guiding students to build real projects in a vibe coded world.
`,

  events: () => `
<span id="terminal-title">past events</span>
---------------
• the social hangout - ne01
• fall 2025 hackathon: <a href="https://httphacks.com">HTTP Hacks</a>
• winter cst orientation
• leetcode night
<span id="terminal-title">upcoming events</span>
---------------
• hackathon workshops (coming soon)
• spring 2025 hackathon: <a href="https://hackthebreak.com">Hack the Break</a>
• social Events (LAN night, pizza night)
`,

  news: () => `
<span id="terminal-title">news</span>
02/09/25 — Welcoming new students at orientation  
Photos will be posted on Instagram and Discord.

08/03/25 — New Executive Committee  
Meet the new faces leading the club this year!

22/11/25 — Hackathon photos  
See how HTTP Hacks went on the instagram!
`,

contact: () => `
<span id="terminal-title">get in touch</span>
discord: <a href="https://discord.gg/vvf3s2zZYK" target="_blank">join the server</a>
instagram: <a href="https://www.instagram.com/bcitcomputingclub/" target="_blank">where we post photos</a>
official enquiries and sponsors: <a href="mailto:info@ccbcit.ca">info@ccbcit.ca</a>
`,


  matrix: () => "TOGGLE_MATRIX",

  reload: () => "RELOAD",

  clear: () => "CLEAR",

  logo: () => `<span id="terminal-title">
░█▀▄░█▀▀░▀█▀░▀█▀
░█▀▄░█░░░░█░░░█
░▀▀░░▀▀▀░▀▀▀░░▀
░█▀▀░█▀█░█▄█░█▀█░█░█░▀█▀░▀█▀░█▀█░█▀▀
░█░░░█░█░█░█░█▀▀░█░█░░█░░░█░░█░█░█░█
░▀▀▀░▀▀▀░▀░▀░▀░░░▀▀▀░░▀░░▀▀▀░▀░▀░▀▀▀
░█▀▀░█░░░█░█░█▀▄
░█░░░█░░░█░█░█▀▄
░▀▀▀░▀▀▀░▀▀▀░▀▀
</span>                                                                                      
`
,


expenses: () => `
<span id="terminal-title">http hacks 2025 expenses</span>
<pre>
+------------+-----------------+-----------+------------------------ +------------------------------------------+------------------------------+
| Date       | Vendor          | Amount    | Category                | Notes                                    | Receipt                      |
+------------+-----------------+-----------+------------------------ +------------------------------------------+------------------------------+
| 11-07-2025 | Agra Sweets     | $171.00   | Snacks                  | samosas for Friday evening snacks        | <a href="https://drive.google.com/file/d/1WNM293a0Q2fSRJ0hWUeCxBNA6SfhdVfl/view?usp=sharing" target="_blank">samosas</a>                      |
| 11-08-2025 | Domino's        | $382.92   | Lunch                   | pizza for Saturday lunch                 | <a href="https://drive.google.com/file/d/1o91TP3skK27QiW-cCrhu2wekEBRaJI4L/view?usp=sharing" target="_blank">domino's</a>                     |
| 11-08-2025 | Tera V Burger   | $25.20    | Lunch                   | burgers for vegan participants           | <a href="https://drive.google.com/file/d/1zPLMpshbpRCzaciuVgPEBihNT-ZZLQT3/view?usp=sharing" target="_blank">vegan</a>                        |
| 11-08-2025 | Agra Sweets     | $735.00   | Dinner                  | butter chicken & chickpea curry          | <a href="https://drive.google.com/file/d/1Old6NX8ZJzM_wjb0zCkpJI_VadBYoPoj/view?usp=sharing" target="_blank">curry</a>                        |
| 11-06-2025 | Costco          | $753.14   | Snacks/Breakfast/Drinks | muffins, bagels & snacks                 | <a href="https://drive.google.com/file/d/1WXmJ6VPIb5w4A2X2myM9cdIurNYbXA4L/view?usp=sharing" target="_blank">costco 1</a>                     |
| 11-06-2025 | Costco          | $594.21   | Snacks/Breakfast/Drinks | <span style="cursor:pointer; text-decoration: underline dotted;" title="Total from Costco: $1,347.35. Split into two receipts because only Bhavnoor and Polina went and could only carry so much in one go">second load of costco items</span>              | <a href="https://drive.google.com/file/d/1zVydg3XxeAGupR7k-tOwufemjN-LVR7o/view?usp=sharing" target="_blank">Costco 2</a>                     |
| -          | 1st place prize | $1000.00  | Prizes                  | team of 3 - cheque                       | cheque to be made to winners |
| -          | 2nd place prize | $700.00   | Prizes                  | team of 4 - cheque                       | cheque to be made to winners |
| -          | 3rd place prize | $300.00   | Prizes                  | team of 5 - cheque                       | cheque to be made to winners |
| 11-04-2025 | Amazon          | $327.93   | Prizes                  | mini-challenge prizes & blank hoodies    | <a href="https://drive.google.com/file/d/1VnTQgd6_ce-v-p-gZZcK9xh4_vd15Zgv/view?usp=sharing" target="_blank">prizes 1</a>                     |
| 11-12-2025 | Amazon          | $87.00    | Prizes                  | <span style="cursor:pointer; text-decoration: underline dotted;" title="3 additional blank hoodies, category winner teams (4, 1, 5, and 4 people) had more people than anticipated">additional hoodies for category winners</span>  | <a href="https://drive.google.com/file/d/1WdnGEerZo1g668aKTAGRqNPItdSigqMj/view?usp=sharing" target="_blank">Prizes 2</a>                     |
| 10-30-2025 | Ninja Transfers | $113.99   | Prizes/Gratitude        | DTF transfers for hoodies                | <a href="https://drive.google.com/file/d/1bHh2OyDQS8X_p9yUK55bVHmOm5AO9kvC/view?usp=sharing" target="_blank">transfers</a>                    |
| 11-13-2025 | Geared Up       | $650.06   | Gratitude               | <span style="cursor:pointer; text-decoration: underline dotted;" title="10 'BCIT COMPUTING' hoodies for event volunteers that helped with setup, teardown, serving catering, lugging supplies up to SE2, cleanup etc. It should be noted that event 'volunteers' does not include organizers.">volunteer hoodies</span>                        | <a href="https://drive.google.com/file/d/1_NXAB3jInLmAmb38TSMxbvQ_ZcxxAi1D/view?usp=sharing" target="_blank">volunteer hoodies</a>            |
| 10-11-2025 | Cloudflare      | $15.80    | Operational             | httphacks.com domain purchase            | <a href="https://drive.google.com/file/d/1IMZLO8NlEMYeFVMP1vLBfsLZzE3GWiLY/view?usp=sharing" target="_blank">httphacks.com domain</a>         |
+------------+-----------------+-----------+------------------------ +------------------------------------------+------------------------------+
| TOTAL      |                 | $5856.25  |                         |                                          |                              |
+------------+-----------------+-----------+------------------------ +------------------------------------------+------------------------------+
</pre>
`,

clubs: () => `
<span id="terminal-title">Useful links for new students</span>
<div class="clubs-desktop">
<pre>
+------------------+----------------------------------------+
| CLUB             | LINKS                                  |
+------------------+----------------------------------------+
| 2026 Winter      | Discord     : <a href="https://discord.gg/BzKHyaReyr" target="_blank">Join Discord</a>             |
| Intake           |                                        |
+------------------+----------------------------------------+ 
| Computing Club   | Website     : <a href="https://ccbcit.ca">this website</a>             |
|                  | Instagram   : <a href="https://instagram.com/bcitcomputingclub" target="_blank">@bcitcomputingclub</a>       |
|                  | Discord     : <a href="https://discord.gg/vvf3s2zZYK" target="_blank">Join Discord</a>             |
|                  | LinkedIn    : <a href="https://www.linkedin.com/company/bcit-computing-club/" target="_blank">BCIT Computing Club</a>      |
+------------------+----------------------------------------+ 
| Coding4All       | Instagram   : <a href="https://instagram.com/bcitcodingforall" target="_blank">@bcitcodingforall</a>        |
|                  | Discord     : <a href="https://discord.gg/zQ2aJUF7rf" target="_blank">Join Discord</a>             |
|                  | LinkedIn    : <a href="https://www.linkedin.com/in/codingforall123/" target="_blank">CodingForAll123</a>          |
+------------------+----------------------------------------+
| Women in         | Instagram   : <a href="https://instagram.com/wic.bcit" target="_blank">@wic.bcit</a>                |
| Computing        | Registration: coming soon              |
|                  | LinkedIn    : <a href="https://www.linkedin.com/company/bcit-women-in-computing/" target="_blank">BCIT Women In Computing</a>  |
+------------------+----------------------------------------+
<pre>
</div>


<div class="clubs-mobile">
  <div class="club-card">
    <b>2026 Winter Intake</b>
    Discord: <a href="https://discord.gg/BzKHyaReyr" target="_blank">Join Discord</a> 
  
    <b>Computing Club:</b>
    Instagram: <a href="https://instagram.com/bcitcomputingclub" target="_blank">@bcitcomputingclub</a>
    Discord: <a href="https://discord.gg/vvf3s2zZYK" target="_blank">Join Discord</a>
    LinkedIn: <a href="https://www.linkedin.com/company/bcit-computing-club/" target="_blank">BCIT Computing Club</a>
  
    <b>Coding4All:</b>
    Instagram: <a href="https://instagram.com/bcitcodingforall" target="_blank">@bcitcodingforall</a>
    Discord: <a href="https://discord.gg/zQ2aJUF7rf" target="_blank">Join Discord</a>
  
    <b>Women in Computing:</b>
    Instagram: <a href="https://instagram.com/wic.bcit" target="_blank">@wic.bcit</a>
    Registration: coming soon
  </div>
</div>

`,

};


