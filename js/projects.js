const projects = [
    {
        name: "General Repository",
        description: "A repository full of many of our projects from lessons and day-to-day meetings",
        link: "https://github.com/kenneth-ge/Edgemont-Programming-Club-Projects"
    },
    {
        name: "Covistance",
        description: "Using just your webcam, you can see whether you and your friends. are socially distanced. ",
        link: "https://github.com/RJFALCON1/covistance"
    },
    {
        name: "Testlet",
        description: "Two sides not enough? Now, you can enjoy 3-sided flashcards and study offline. ",
        link: "https://github.com/kenneth-ge/Edgemont-Programming-Club-Projects/tree/master/Flashcard%20Project"
    },
    {
        name: "GPU Graphing",
        description: "We created our own graphing calculator using the GPU.",
        link: "https://github.com/kenneth-ge/Edgemont-Programming-Club-Projects/tree/master/GPU%20Graphing%20Calculator"
    },
    {
        name: "NFTTicketMaster",
        description: "Uses NFTs to recreate a decentralized version of Ticket Master. ",
        link: "https://github.com/0xMihir/NFTTicketMaster"
    }
]

const div = document.getElementById("projects")

console.log("hi")

for(project of projects){
    div.innerHTML += 
    `<div style="display:flex; margin-bottom:5%; margin-left: 5%; height:400px;"><a href="${project.link}" class="ui card">
        <div class="content">
            <div class="header">
                ${project.name}
            </div>
        </div>
        <div class="content">
            <div class="meta">
                ${project.description}
            </div>
        </div>
        <div class="content">
            <div style="word-wrap:break-word; line-height:120%" class="link">
                ${project.link}
            </div>
        </div>
    </a></div`
}