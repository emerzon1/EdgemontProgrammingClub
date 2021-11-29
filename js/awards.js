const grid = document.querySelector(".grid");
const awards = [
	{
		name: "PClassic",
		year: "2021",
		award: "Placed 8th out of over 100 teams",
	},
	{
		name: "Vancouver VHHacks",
		year: "2021",
		award: "Best Game Dev Hack",
	},
	{
		name: "MISTHacks",
		year: "2021",
		award: "Top 3",
	},
	{
		name: "NCHacks",
		year: "2021",
		award: "1st Place Overall - EchoAR and $50",
	},
	{
		name: "Tri-Valley Crypto Hacks",
		year: "2021",
		award: "2nd Place - $17",
	},
	{
		name: "Stuyhacks X",
		year: "2021",
		award: "3rd Place - $150",
	},
	{
		name: "WWPHacks",
		year: "2020",
		award: "2nd Place",
	},
	{
		name: "Edgemont In-Person Hackathon",
		year: "2020",
		award: "No Winners Declared",
	},
	{
		name: "SkyHacks",
		year: "2020",
		award: "2nd Place, Best Individual",
	},
	{
		name: "Edgemont Hackathon",
		year: "2020",
		award: "Won by Shaurya Grover",
	},
	{
		name: "Stuyhacks",
		year: "2020",
		award: "Most Innovative",
	},
	{
		name: "Dwight Hacks",
		year: "2019",
		award: "1st Place",
	},
	{
		name: "Ardsley Hacks",
		year: "2019",
		award: "Best Overall",
	},
	{
		name: "Stuyvesant Hackathon",
		year: "2019",
		award: "Best Beginner",
	},
	{
		name: "Ardsley Hacks",
		year: "2018",
		award: "Best Beginner",
	},
];
for (let i of awards) {
	grid.innerHTML += `
    <div class="column">

        <div class="ui card">
            <div class="content">
                <div class="header">
                    ${i.name}
                </div>
            </div>
            <div class="content">
                <div class="meta">
                    ${i.year}
                </div>
                <div class="description">
                    ${i.award}
                </div>
            </div>

        </div>
    </div>
    `;
}
