document.addEventListener('DOMContentLoaded', () => {

    let game_iframe = [{
        name: 'Buffalo Kings',
        src: 'https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs4096bufking&lang=es&cur=EUR&lobbyUrl=https%3A%2F%2Fwww.somoscasino.com%2Fcasino'
      },
      {
        name: '',
        img: 'https://gamelaunch.wazdan.com/g1jsssrj/gamelauncher?operator=igp&game=65888&mode=demo&lang=es&platform=desktop&lobbyUrl=https://www.somoscasino.com/casino'
      },
      {
        name: 'page3',
        img: 'https://lorempixel.com/output/animals-q-c-200-200-4.jpg'
      }
    ]
  
  
    const main_page = document.querySelector('.main_page'); // with this variable I have conttrol of
    // div with class .main_page
  
    let mainImg = document.createElement('img') // similar to HTML tag <img>. this var-ble creates <img> tag in HTML Document
    mainImg.setAttribute('src', book[0].img) // making attribute to <img> tag through JavaScript    
    main_page.appendChild(mainImg); // appending <img> tag to the div with class main_page
    let next = document.getElementById('next');
  
  
  
    // set up your listener to turn the page on each click
    next.addEventListener('click', () => {
    let count = 0;    // declare your variable for page count
      // check  if the next page is greater than the total number of pages
      if ((count+1) < book.length)
          turnPage(count);
      count++;  
    })
  
    // your turnPage function
    const turnPage = (count) => {
      if (mainImg.getAttribute("src") == book[count].img) {
          mainImg.src = book[count + 1].img
      }
    }
  
  
  })

document.getElementsByClassName('game-iiframe-button').onclick =function(){

}