const API_BASE = "https://phi-lab-server.vercel.app/api/v1/lab/issues"

//DOM references
const issueList   = document.getElementById("issueList")
const issueCount  = document.getElementById("issueCount")
const searchInput = document.getElementById("searchInput")
const searchBtn   = document.getElementById("searchBtn")
const tabs        = document.querySelectorAll(".tab")

//All issues stored here after first load
let allIssues = []

//Load all the issues on the page load
async function loadIssues() {
  try {
    const response = await fetch(API_BASE)
    const data     = await response.json()

    allIssues = data.data
    displayIssues(allIssues)

  } catch (err) {
    console.error("Failed to load issues:", err)
  }
}

loadIssues()

//Display issues in the grid
function displayIssues(issueArray) {

//Clear the grid and update the count
  issueList.innerHTML  = ""
  issueCount.textContent = issueArray.length

  issueArray.forEach(issue => {
    const card = createIssueCard(issue)
    issueList.appendChild(card)
  })
}

//Build a singlar issue card element
function createIssueCard(issue) {

//Pick a random priority label
  const priority = issue.priority

//Choose status icon based on open / closed
  const statusIcon = issue.status === "open"
    ? "assets/Open-Status.png"
    : "assets/Closed- Status .png"

//Format the dates into a readable string
  const createdDate = new Date(issue.createdAt).toLocaleDateString()
  const updatedDate = new Date(issue.updatedAt).toLocaleDateString()

//Create the card element
  const card = document.createElement("div")
  card.className = `issue-card ${issue.status}`

  card.innerHTML = `
    <div class="issue-top">
      <div class="status-icon">
        <img src="${statusIcon}" alt="${issue.status} status" />
      </div>
      <div class="priority ${priority.toLowerCase()}">${priority}</div>
    </div>

    <div class="issue-title">${issue.title}</div>

    <div class="issue-desc">
      ${issue.description || "The navigation menu doesn't collapse properly on mobile devices..."}
    </div>

    <div class="tags">
      <span class="tag bug">🐞BUG</span>
      <span class="tag help">HELP WANTED</span>
    </div>

    <div class="issue-footer">
      <span>#${issue.id} by ${issue.author || "john_doe"}</span>
    </div>

    <div class="issue-footer">
      <span>Created: ${createdDate}</span>
      <span>Updated: ${updatedDate}</span>
    </div>
  `

  return card
}
