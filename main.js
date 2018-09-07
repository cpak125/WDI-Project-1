$(() => {

    let playerScore = 0

    // declare winning score
    const winningScore = 2500

    // Display the current and updated score to the scoreboard
    const updateScore = () => {
        $('#playerScore').html('Points:' + " " + playerScore)
    }
    // set winning conditions
    const winner = () => {
        if (playerScore >= winningScore) {
            alert("You WIN!")
        } else if (playerScore < winningScore) {
            alert("You LOSE! Try again.")
        }
    }

    $('#oneOne').click(function () {
        // prompt pops up when user clicks on button
        let selection = prompt("On a speedometer, MPH stands for... \n\n A. What is miles per horsepower? \n B. What is miles per handling? \n C. What is miles per hour? \n D. What is miles per half-second?")
        // make selection to uppercase
        let finalAnswer = selection.toUpperCase()

        // Check if finalAnswer equals answer
        // If correct alert "That's CORRECT"
        // if incorrect alert "Sorry, that's incorrect"
        let answer = 'C'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            //add point amount
            playerScore += 100
        } else {
            alert("Sorry, that's INCORRECT")
            // subtract point amount
            playerScore -= 100
        }
        // Hide and disable button
        $('#oneOne').prop('disabled', true)
        $('#oneOne').css("color", "transparent")

        // update score
        updateScore()
    })

    // row one questions
    $('#oneTwo').click(function () {
        let selection = prompt("The stadium currently home to the Atlanta Falcons \n\n A. What is Turner Field? \n B. What is the Georgia Dome ? \n C. What is the Merecedes Benz Stadium? \n D. What is The Bird's Nest?")
        let finalAnswer = selection.toUpperCase()
        let answer = 'C'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 100
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 100
        }

        $('#oneTwo').prop('disabled', true)
        $('#oneTwo').css("color", "transparent")

        updateScore()
    })

    $('#oneThree').click(function () {
        let selection = prompt("The capital of Colorado \n\n A. What is Colorado Springs? \n B. What is Denver? \n C. What is Topeka? \n D. What is Springfield?")
        let finalAnswer = selection.toUpperCase()
        let answer = 'B'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 100
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 100
        }

        $('#oneThree').prop('disabled', true)
        $('#oneThree').css("color", "transparent")

        updateScore()
    })

    $('#oneFour').click(function () {
        let selection = prompt("Darth Vader is the main villian in this movie\n\n A. What is Star Trek?\n B. What is Star Wars?\n C. What is Indiana Jones?\n D. What is Iron Man?")
        let finalAnswer = selection.toUpperCase()
        let answer = 'B'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 100
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 100
        }

        $('#oneFour').prop('disabled', true)
        $('#oneFour').css("color", "transparent")

        updateScore()
    })

    $('#oneFive').click(function () {
        let selection = prompt("This restaurant franchise advises you to 'Eat Fresh' \n\n A. What is Subway? \n B. What is McDonald's? \n C. What is Taco Bell?\n D. What is KFC?")
        let finalAnswer = selection.toUpperCase()
        let answer = 'A'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 100
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 100
        }

        $('#oneFive').prop('disabled', true)
        $('#oneFive').css("color", "transparent")

        updateScore()
    })
    // row two questions
    $('#twoOne').click(function () {
        let selection = prompt("The mascot on Geico commercials \n\n A. What is a rabiit\n B. What is a bear?\n C. What is a gecko?\n D. What is a fish?")
        let finalAnswer = selection.toUpperCase()
        let answer = 'C'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 200
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 200
        }

        $('#twoOne').prop('disabled', true)
        $('#twoOne').css("color", "transparent")

        updateScore()
    })

    $('#twoTwo').click(function () {
        let selection = prompt("The sport where the Heisman Trophy is presented \n\n A. What is soccer?  \n B. What is football? \n C. What is basketball? \n D. What is baseball?")
        let finalAnswer = selection.toUpperCase()
        let answer = 'B'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 200
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 200
        }

        $('#twoTwo').prop('disabled', true)
        $('#twoTwo').css("color", "transparent")

        updateScore()
    })

    $('#twoThree').click(function () {
        let selection = prompt("The state where you would find Mount Rushmore \n\n A. What is Florida? \n B. What is South Dakota? \n C. What is New York? \n D. What is Texas?")
        let finalAnswer = selection.toUpperCase()
        let answer = 'B'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 200
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 200
        }

        $('#twoThree').prop('disabled', true)
        $('#twoThree').css("color", "transparent")

        updateScore()
    })

    $('#twoFour').click(function () {
        let selection = prompt("The fictional city home to Batman \n\n A. What is Bat City? \n B. What is Batman City? \n C. What is Gotham City? \n D. What is Rancho Cucamonga?")
        let finalAnswer = selection.toUpperCase()
        let answer = 'C'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 200
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 200
        }

        $('#twoFour').prop('disabled', true)
        $('#twoFour').css("color", "transparent")

        updateScore()
    })

    $('#twoFive').click(function () {
        let selection = prompt("This food is the leading source of salmonella poisoning \n\n A. What is beef? \n B. What is pumpkin? \n C. What is lamb? \n D. What is chicken?")
        let finalAnswer = selection.toUpperCase()
        let answer = 'D'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 200
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 200
        }

        $('#twoFive').prop('disabled', true)
        $('#twoFive').css("color", "transparent")

        updateScore()
    })

    // row three questions
    $('#threeOne').click(function () {
        let selection = prompt("The first automobile manufacturer to implement the assembly line for the mass production of an entire automobile \n\n A. Who is Chrysler \n B. Who is Ford \n C. Who is Volkswagen \n D. Who is Honda")
        let finalAnswer = selection.toUpperCase()
        let answer = 'B'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 300
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 300
        }

        $('#threeOne').prop('disabled', true)
        $('#threeOne').css("color", "transparent")

        updateScore()

    })

    $('#threeTwo').click(function () {
        let selection = prompt("The highest score possible in 10 pin bowling \n\n A. What is 200? \n B. What is 299? \n C. What is 300? \n D. What is 501?")
        let finalAnswer = selection.toUpperCase()
        let answer = 'C'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 300
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 300
        }

        $('#threeTwo').prop('disabled', true)
        $('#threeTwo').css("color", "transparent")

        updateScore()
    })

    $('#threeThree').click(function () {
        let selection = prompt("The mountain chain in which Mount Everest is located in \n\n A. What is the Applachian? \n B. What is the Himalayas? \n C. What is the Rocky?\n D. What is the Siberian?")
        let finalAnswer = selection.toUpperCase()
        let answer = 'B'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 300
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 300
        }

        $('#threeThree').prop('disabled', true)
        $('#threeThree').css("color", "transparent")

        updateScore()
    })

    $('#threeFour').click(function () {
        let selection = prompt("This movie feautres Bruce Willis as John McClane \n\n A. What is the Fifth Element? \n B. What is Armagedon? \n C. What is Die Hard? \n D. What is Death Wish? ")
        let finalAnswer = selection.toUpperCase()
        let answer = 'C'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 300
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 300
        }

        $('#threeFour').prop('disabled', true)
        $('#threeFour').css("color", "transparent")

        updateScore()
    })

    $('#threeFive').click(function () {
        let selection = prompt("The Teenage Mutant Ninja Turtles' favorite food \n\n A. What are hamburgers? \n B. What is spaghetti? \n C. What is pizza? \n D. What are hotdogs?")
        let finalAnswer = selection.toUpperCase()
        let answer = 'C'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 300
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 300
        }

        $('#threeFive').prop('disabled', true)
        $('#threeFive').css("color", "transparent")

        updateScore()
    })

    // row four questions
    $('#fourOne').click(function () {
        let selection = prompt("The country where Porshe originated from  \n\n A. What is England? \n B. What is Sweden? \n C. What is Italy \n D. What is Germany")
        let finalAnswer = selection.toUpperCase()
        let answer = 'D'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 400
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 400
        }

        $('#fourOne').prop('disabled', true)
        $('#fourOne').css("color", "transparent")

        updateScore()
    })

    $('#fourTwo').click(function () {
        let selection = prompt("The sports conference that the Georgia Bulldogs compete in \n\n A. What is the ACC? \n B. What is the BIG 10? \n C. What is the SEC?\n D. What is the Big East?")
        let finalAnswer = selection.toUpperCase()
        let answer = 'C'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 400
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 400
        }

        $('#fourTwo').prop('disabled', true)
        $('#fourTwo').css("color", "transparent")

        updateScore()
    })

    $('#fourThree').click(function () {
        let selection = prompt("The U.S. state where Death Valley is located \n\n A. What is Nevada? \n B. What is Utah? \n C. What is Texas? \n D. What is California?")
        let finalAnswer = selection.toUpperCase()
        let answer = 'D'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 400
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 400
        }

        $('#fourThree').prop('disabled', true)
        $('#fourThree').css("color", "transparent")

        updateScore()
    })

    $('#fourFour').click(function () {
        let selection = prompt("The name of the actor that plays the hobbit,Frodo Baggins, in Lord of the Rings  \n\n A. Who is Leonardo Dicaprio? \n B. Who is Elijah Wood? \n C. What is Tom Hanks?\n D. Who is Bruce Willis?")
        let finalAnswer = selection.toUpperCase()
        let answer = 'B'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 400
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 400
        }

        $('#fourFour').prop('disabled', true)
        $('#fourFour').css("color", "transparent")

        updateScore()
    })

    $('#fourFive').click(function () {
        let selection = prompt("This award winning chef's trademark catchphrase is 'BAM!' \n\n A. Who is Bobby Flay? \n B. Who is Emeril Lagasse? \n C. Who is Paula Dean? \n D. Who is Gordon Ramsay? ")
        let finalAnswer = selection.toUpperCase()
        let answer = 'B'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 500
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 500
        }

        $('#fourFive').prop('disabled', true)
        $('#fourFive').css("color", "transparent")

        updateScore()
    })

    // row five questions
    $('#fiveOne').click(function () {
        let selection = prompt("Established in the 1920's, this historic double-digit highway connected Chicago and Los Angeles  \n\n A. What is Route 20\n B. What is Route 88 \n C. What is Route 66\n D. What is Route 99")
        let finalAnswer = selection.toUpperCase()
        let answer = 'C'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 500
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 500
        }

        $('#fiveOne').prop('disabled', true)
        $('#fiveOne').css("color", "transparent")

        updateScore()
    })

    $('#fiveTwo').click(function () {
        let selection = prompt("The regulation height for a basketball hoop \n\n A. What is 9 feet  \n B. What is 10 feet? \n C. What is 12 feet? \n D. What is 11 feet")
        let finalAnswer = selection.toUpperCase()
        let answer = 'B'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 500
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 500
        }

        $('#fiveTwo').prop('disabled', true)
        $('#fiveTwo').css("color", "transparent")

        updateScore()
    })

    $('#fiveThree').click(function () {
        let selection = prompt("Where Fort Knox is located \n\n A. What is Kentucky? \n B. What is California? \n C. What is South Carolina? \n D. What is Florida? ")
        let finalAnswer = selection.toUpperCase()
        let answer = 'A'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 500
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 500
        }

        $('#fiveThree').prop('disabled', true)
        $('#fiveThree').css("color", "transparent")

        updateScore()
    })

    $('#fiveFour').click(function () {
        let selection = prompt("Agent Smith is a villain in this movie series \n\n A. What is The Matrix?\n B. What is Lethal Weapon? \n C. What is Men In Black? \n D. What is Batman?")
        let finalAnswer = selection.toUpperCase()
        let answer = 'A'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 500
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 500
        }

        $('#fiveFour').prop('disabled', true)
        $('#fiveFour').css("color", "transparent")

        updateScore()
    })

    $('#fiveFive').click(function () {
        let selection = prompt("This is where the pineapple plant originated \n\nA. Where is Hawaii? \n B. Where is South America? \n C. Where is Europe? \n D. Where is Australia?")
        let finalAnswer = selection.toUpperCase()
        let answer = 'B'

        if (answer === finalAnswer) {
            alert("That's CORRECT!")
            playerScore += 500
        } else {
            alert("Sorry, that's INCORRECT")
            playerScore -= 500
        }

        $('#fiveFive').prop("disabled", true)
        $('#fiveFive').css("color", "transparent")

        updateScore()
    })

    // Call winner() after 'Finish' button is clicked
    $('#finishButton').click(function () {
        winner()
    })

    // Game restart
    const restartGame = () => {

        // Reset scoreboard
        $('#restartButton').click(function () {
            playerScore = 0

            // Enable all question buttons
            $('.questions').prop("disabled", false)
            $('.questions').css("color", "yellow")
            updateScore()

        })

    }

    restartGame()



})