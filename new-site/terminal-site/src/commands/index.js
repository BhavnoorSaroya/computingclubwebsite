export const commands = {
  help: () => `
<span id="terminal-title">available commands:</span>
  help        show this help menu
  about       about the club
  events      upcoming events
  news        recent announcements
  contact     how to reach us
  clear       clear the terminal
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
• orientation event
• the social hangout - ne01
• fall 2025 hackathon: <a href="https://httphacks.com">HTTP Hacks</a>
<span id="terminal-title">upcoming events</span>
---------------
• winter cst orientation
• spring 2025 Hackathon: <surprise>
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
official inquiries and sponsors: <a href="mailto:bcitcomputingclub@gmail.com">bcitcomputingclub@gmail.com</a>
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
};


