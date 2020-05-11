window.addEventListener("load", () =>{

    // Object waar de positie van de fish in word opgeslagen
    let fishPosition = {
        x: 100,
        y: 100,
        hue: 310
    }

    // Object waar de positie van de bubbles in worden opgeslagen
    let bubblePosition = {
        x: 100,
        y: 100
    }

    // Loop die willekeurig de  positie aanpast van de vissen en bubbles en daarna de functie start om 1 vis en 1 bubble te spawnen
    for (i = 0; i < 100; i++) 
    {
       fishPosition.x = Math.random() * 92;
       fishPosition.y = Math.random() * 92;
       fishPosition.hue = Math.random() * 361;
       bubblePosition.x = Math.random() * 92;
       bubblePosition.y = Math.random() * 92;

        spawnFishes();
    }
    
    function spawnFishes(){
        //
        // vis element
        //
        let fish = document.createElement("fish")
        document.body.appendChild(fish)
        fish.classList.add("fishClick");
        fish.style.transform = `translate(${fishPosition.x}vw, ${fishPosition.y}vh)`
        fish.style.filter = `hue-rotate(${fishPosition.hue}deg)`

        //
        // bubble element
        //
        let bubble = document.createElement("bubble")
        document.body.appendChild(bubble)
        bubble.classList.add("bubbleClick");
        bubble.style.transform = `translate(${bubblePosition.x}vw, ${bubblePosition.y}vh)`
    }

    //Op het moment dat de loop dus voorbij is en er 100 vissen op het scherm zitten...
    if(i == 100)
    {
        let elementFish = document.getElementsByClassName("fishClick");
        let elementBubble = document.getElementsByClassName("bubbleClick");
        
        //Ik ga door alle vissen heen en voeg een eventlistener toe aan het element
        for (let i = 0; i < elementFish.length; i++) {
            elementFish[i].addEventListener('click', fishClick);
        }
        
        //Ik ga door alle bubbles heen en voeg een eventlistener toe aan het element
        for (let i = 0; i < elementBubble.length; i++) {
            elementBubble[i].addEventListener('click', bubbleClick);
        }

        function fishClick(e)
        {
            //Voeg de class deadfish toe zodat de png veranderd naar een dead fish
            e.target.classList.add("deadfish")
        }

        function bubbleClick(e)
        {
            //Verwijder het element waarop is geklikt, dus de bubble
            e.target.remove()
        }
    }
})