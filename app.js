function generateNewExcuse() {

let who = ["The dog", "My grandma", "The mailman", "My bird"];
      let action = ["ate", "urinated on", "crushed", "broken"];
      let what = ["my homework", "my phone", "the car"];
      let when = [
        "before class",
        "while I was sleeping",
        "while I was exercising",
        "during my lunch",
        "while i was praying"
      ];

       
        let whoIndex = Math.floor(Math.random() * who.length);
        let actionIndex = Math.floor(Math.random() * action.length);
        let whatIndex = Math.floor(Math.random() * what.length);
        let whenIndex = Math.floor(Math.random() * when.length);

        let excuse =
          who[whoIndex] +
          " " +
          action[actionIndex] +
          " " +
          what[whatIndex] +
          " " +
          when[whenIndex] +
          ".";
      

      
        let excuseElemente = document.getElementById("excuse");
        excuseElemente.innerHTML = excuse;
      }

    //   window.onload = function() {
    //     generateNewExcuse();
    //   };