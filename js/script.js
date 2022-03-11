//Count-Down Timer
const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let LaunchDate = "3/7/2022";

const countDown = new Date(LaunchDate).getTime(),
  x = setInterval(function () {
    const now = new Date().getTime(),
      distance = countDown - now;

    (document.getElementById("days").innerText = Math.floor(distance / day)),
      (document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      )),
      (document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      )),
      (document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      ));

    //do something later when date is reached
    // if (distance < 0) {
    //   document.getElementById('countdown-headline').innerText =
    //     'Mint a Corporat!';
    //   document.getElementById('countdown').style.display = 'none';
    //   document.getElementById('content').style.display = 'block';
    //   clearInterval(x);
    // }
    //seconds
  }, 0);

// Hamburger
let menu = document.querySelector("#mobile-menu");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

//Roadmap Description

tippy("#myButton", {
  content:
    "The CorpoRat community is growing! \n  We are routinely whitelisting wallet addresses as community building airdrop campaigns. Join us on Discord, Twitter and Instagram to participate!",
});

tippy("#phasePublic", {
  content:
    "We will soon be dropping our entire collection of 10,000 unique CorpoRat’s on OpenSea. Percentage of funds to be put towards Ukrainian aid charity. \n \n Join our community so that you will have a head start at knowing exactly when this will be!",
});

tippy("#ratsToken", {
  content:
    "A deflationary ERC20 token designed to withstand the increasing global inflationary pressures you are facing. \n \n Early participants in the NFT private and/or public sale will have the ability to whitelist for an early airdrop. This token will also give you voting rights in our upcoming Decentralised Autonomous Social Organisation (dates TBC.)",
});

tippy("#ratRace", {
  content:
    "With backgrounds in both blockchain AND gaming, the CorpoRAT’s founders are currently developing a hyper-casual p2e game that will soon integrate its back-end onto the Polygon mainnet. \n \n The in-game currency for this game will be $RATS tokens and you will be able to use your unique NFT as an avatar to interact with other players. The game will have its own set of economic rules and you can expect to be able to earn passive income simply by playing. More details on this soon.",
});

tippy("#ratWheel", {
  content:
    "We will soon be deploying an embedded web3.js dApp to the corporats.co website that will allow you to connect your wallet via Metamask and spin the wheel. \n \n With each spin your wallet will interact with a smart contract that will determine if a token transfer can be initiated. Transfer amounts (winnings) will vary and each wallet address will be able to spin the Hamster-Wheel once per 24-hour period. \n \n Transfers will be instant and paid out in $RATS, our soon-to-launch erc20 governance token.",
});

tippy("#ratScape", {
  content:
    "Our exclusive, member only annual board meeting. \n No, we do not sit around tables discussing financial things. Rather, we lounge around pool side sofas in countries with warm climates, indulging in free-flow (and cheese) whilst conducting our very important community driven discussions. \n These are the moments that will shape our organisation, give you a voice, the time to relax, and more importantly, a chance at the life you deserve.",
});

tippy("#ratTank", {
  content:
    "Much like the entrepreneurial blockbuster series Shark Tank, Rat-Tank will allow projects with outstanding potential access to funding that could bring the project to life. \n Further, you will also have access to our interweb of industry contracts, advisors and fellow CorpoRat’’s who all have the same objective in mind. To help you succeed.",
});
