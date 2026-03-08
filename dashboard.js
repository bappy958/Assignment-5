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
