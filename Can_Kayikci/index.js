$(function(){
    //alert("Hello world");
    
    // ANIMATION
    // The error animation that above the circular
    function errorDiv(){
        $("#theword").animate({"left" : "10px"},50)
        .animate({"left" : "-10px"}, 50)
        .animate({"left" : "0px"},50)
        .animate({"left" : "10px"},50)
        .animate({"left" : "0px"},50,function(){
            $(".letter").animate({"background-color" : "white"},500).css("color", "black");
            $("#theword").text("").css("display", "none");
        })
        guess = "";
    }
    //Whether #help is clicked or not
    var clickedHelp = 1;
    //Prevent user to click twice to words
    var clicked = 0;
    //The puzzle words
    var words = ["SOME", "SUM", "MOUSE", "SUE", "USE", "MUSE"];
    //Found words in the game
    var foundWords = [];
    //Warn user for the second word
    var clickedLetter = [];
    var guess = "";
    //Increasing width of the div above the circular area 
    var widthofdiv = $("#theword").width();
    $(".letter").on("click", function(e){
        var theword = $(this).text();
        if(clickedLetter.includes(theword))
        {
            $(this).animate({"top" : "-=10px"},10)
                   .animate({"top" : "+=20px"}, 20)
                   .animate({"top" : "-=20px"}, 20)
                   .animate({"top" : "+=10px"},10);
        }
        else{
            guess += $(this).text();
            $(this).animate({"background-color" : "#00A3FF"}, 100).animate({"color" : "white"}, 100);
            $("#theword").css("display", "inline");
            $("#theword").append(theword);
            widthofdiv += 50;
            clicked = 1;
            clickedLetter.push(theword);
        }
    });
    $("#circle").on("contextmenu", function(e){
        //Checking the word whether it is in the words array
       var position = $.inArray(guess, words);
       if(position != -1){
        if(!foundWords.includes(guess))
        {
            $(`.word${position+1}`).animate({"background-color" : "#0700C4"},1000);
            $(`.word${position + 1} span`).css("display", "inline-block");
            //When the help button is pressed only words with the class "hint" will be shown
            $(`.word${position+1} span`).removeClass("hint");
            $(".letter").animate({"background-color" : "white"},250).css("color", "black");
            $("#theword").text("").css("display", "none");
            foundWords.push(words[position]);
            guess = "";
        }
        else{
            $(`.word${position + 1} span`).animate({"opacity" : "0"}, 200)
                                          .animate({"opacity" : "1"}, 200)
                                          .animate({"opacity" : "0"}, 200)
                                          .animate({"opacity" : "1"}, 200)
           errorDiv();
        }
       }
       else{
            errorDiv(); 
       }
       clickedLetter = [];
       clicked = 0;
       e.preventDefault();
    });
    $("#help").click(function(){
        // alert("works");
        if(clickedHelp){
            $(".hint").fadeIn(1000);
            clickedHelp = 0;
        }
        else{
            $(".hint").fadeOut(1000);
            clickedHelp = 1;
        }
    })
    //Keeping the locations of the words
    var posObj = [{"left" : "110px", "top" : "0px"},
                  {"left" : "175px", "top" : "190px"},
                  {"left" : "215px", "top" : "90px"},
                  {"left" : "5px", "top" : "90px"},
                  {"left" : "43px", "top" : "190px"}];
    $("#refresh").click(function(){
        if(clicked == 0){
        //alert("Works");
        var number = [0,1,2,3,4];
        var i = 5;
        //Assigning them to different locations
        //Created an array 0 to 4, this array contains indexes of the posObj
        //
        $(".letter").each(function(){
        var random = Math.floor(Math.random() * i);
        if($.inArray())
        $(this).css(posObj[number[random]]);
        number.splice(random,1);
        i--;
        })
    }
    else{
        $("#refresh").animate({"left" : "-=10px"}, 50)
                     .animate({"left": "+=20px"}, 100)
                     .animate({"left" : "-=10px"},50)
                     .animate({"left" : "+=10px"},50)
                     .animate({"left" : "-=10px"},50);
    }
    })
    //Initial positions
    $("#S").css({"left" : "110px", "top" : "0px"});
    $("#U").css({"left" : "175px", "top" : "190px"});
    $("#M").css({"left" : "215px", "top" : "90px"});
    $("#E").css({"left" : "5px", "top" : "90px"});
    $("#O").css({"left" : "43px", "top" : "190px"});
})