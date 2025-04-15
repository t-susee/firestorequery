// let rm = {
//   name: "Real Madrid",
//   city: "Madrid",
//   country: "Spain",
//   top_scorers: ["Ronaldo", "Benzema", "Hazard"],
//   fans: 798,
// };

// let b = {
//   name: "Barcelona",
//   city: "Barcelona",
//   country: "Spain",
//   top_scorers: ["Messi", "Suarez", "Puyol"],
//   fans: 738,
// };

// let mu = {
//   name: "Manchester United",
//   city: "Manchester",
//   country: "England",
//   top_scorers: ["Cantona", "Rooney", "Ronaldo"],
//   fans: 755,
// };

// let mc = {
//   name: "Manchester City",
//   city: "Manchester",
//   country: "England",
//   top_scorers: ["Sterling", "Aguero", "Haaland"],
//   fans: 537,
// };

// let bnt = {
//   name: "Brazil National team",
//   city: "Not Applicable",
//   country: "Brazil",
//   top_scorers: ["Ronaldinho", "Cafu", "Bebeto"],
//   fans: 950,
// };

// let ant = {
//   name: "Argentina National Team",
//   city: "Not Applicable",
//   country: "Argentina",
//   top_scorers: ["Messi", "Batistuta", "Maradona"],
//   fans: 888,
// };

// let am = {
//   name: "Atletico Madrid",
//   city: "Madrid",
//   country: "Spain",
//   top_scorers: ["Aragonés", "Griezmann", "Torez"],
//   fans: 400,
// };

// db.collection("teams").add(rm);
// db.collection("teams").add(b);
// db.collection("teams").add(mu);
// db.collection("teams").add(mc);
// db.collection("teams").add(bnt);
// db.collection("teams").add(ant);
// db.collection("teams").add(am);

//1.	Show all teams in Spain.

// db.collection("teams")
//   .where("country", "==", "Spain")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no results
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// 2.	Show all teams in Madrid, Spain

// db.collection("teams")
//   .where("country", "==", "Spain")
//   .where("city", "==", "Madrid")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no results
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// 3.	Show all national teams (Remember there might be new national teams added later)

// db.collection("teams")
//   .where("country", "==", "Not Applicable")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no results
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// 4.	Show all teams that are not in Spain

// db.collection("teams")
//   .where("country", "!=", "Spain")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no results
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// 5.	Show all teams that are not in Spain or England

// db.collection("teams")
//   .where("country", "not-in", ["Spain", "England"])
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no results
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// 6.	Show all teams in Spain with more than 700M fans

// db.collection("teams")
//   .where("country", "=", "Spain")
//   .where("fans", ">", 700)
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no results
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// 7.	Show all teams with a number of fans in the range of 500M and 600M

// db.collection("teams")
//   .where("fans", ">=", 500)
//   .where("fans", "<=", 600)
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no results
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// 8.	Show all teams where Ronaldo is a top scorer

// db.collection("teams")
//   .where("top_scorers", "array-contains", "Ronaldo")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no results
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// 9.	Show all teams where Ronaldo,  Maradona, or Messi is a top scorer

// db.collection("teams")
//   .where("top_scorers", "array-contains-any", ["Ronaldo", "Maradona", "Messi"])
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no results
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// Update Existing Data

// Real Madrid FC Fans

// db.collection("teams").doc("w9ArpDUYX0l0tJofduX1").update({
//   fans: 811,
//   name: "Real Madrid FC",
// });

// FC Barcelona Fans

// db.collection("teams").doc("gpwq9ngwMPk81thN1oZN").update({
//   fans: 747,
//   name: "FC Barcelona",
// });

// Real Madrid: remove Hazard, add Crispo

// db.collection("teams")
//   .doc("w9ArpDUYX0l0tJofduX1")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayRemove("Hazard"),
//   })
//   .then(() => {
//     db.collection("teams")
//       .doc("w9ArpDUYX0l0tJofduX1")
//       .update({
//         top_scorers: firebase.firestore.FieldValue.arrayUnion("Crispo"),
//       });
//   });

// Barcelona: remove Puyol, add Deco

// db.collection("teams")
//   .doc("gpwq9ngwMPk81thN1oZN")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayRemove("Puyol"),
//   })
//   .then(() => {
//     db.collection("teams")
//       .doc("gpwq9ngwMPk81thN1oZN")
//       .update({
//         top_scorers: firebase.firestore.FieldValue.arrayUnion("Deco"),
//       });
//   });

// Add jersey colors to Real Madrid

// db.collection("teams")
//   .doc("w9ArpDUYX0l0tJofduX1")
//   .update({
//     color: {
//       home: "White",
//       away: "Black",
//     },
//   });

// Add jersey colors to Barcelona

// db.collection("teams")
//   .doc("gpwq9ngwMPk81thN1oZN")
//   .update({
//     color: {
//       home: "Red",
//       away: "Gold",
//     },
//   });

//  Real Madrid update away color to Purple

// db.collection("teams").doc("w9ArpDUYX0l0tJofduX1").update({
//   "color.away": "Purple",
// });

// Barcelona update away color to Pink

// db.collection("teams").doc("gpwq9ngwMPk81thN1oZN").update({
//   "color.away": "Pink",
// });

// function to show teams

function show_teams() {
  db.collection("teams")
    .get()
    .then((mydata) => {
      let docs = mydata.docs;

      let html = ``;

      docs.forEach((d) => {
        let data = d.data();

        html += `
          <div class="box">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>City:</strong> ${data.city}</p>
            <p><strong>Country:</strong> ${data.country}</p>
            <p><strong>Fans:</strong> ${data.fans} million</p>
            <p><strong>Top Scorers:</strong> ${data.top_scorers?.join(", ")}</p>
            <p><strong>Jersey Colors:</strong> Home - ${
              data.color?.home || "N/A"
            }, Away - ${data.color?.away || "N/A"}</p>
          </div>
        `;
      });

      document.querySelector("#all_teams").innerHTML = html;
    });
}

// call show teams

show_teams();
