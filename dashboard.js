const API_BASE = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

// DOM
const issueList = document.getElementById("issueList");
const issueCount = document.getElementById("issueCount");
const searchInput = document.getElementById("searchInput");
const newIssueBtn = document.getElementById("newissueBtn");
const tabs = document.querySelectorAll(".tab");

let allIssues = [];

// ============================
// Load All Issues
// ============================
async function loadIssues() {

  try {

    const res = await fetch(API_BASE);
    const data = await res.json();

    allIssues = data.data;

    displayIssues(allIssues);

  } catch (err) {

    console.error("Failed to load issues:", err);

  }

}

loadIssues();

// ============================
// Display Issues
// ============================
function displayIssues(issueArray) {

  issueList.innerHTML = "";
  issueCount.textContent = issueArray.length;

  issueArray.forEach(issue => {

    const card = createIssueCard(issue);
    issueList.appendChild(card);

  });

}

// ============================
// Create Card
// ============================
function createIssueCard(issue) {

  const priority = issue.priority;

  const statusIcon =
    issue.status === "open"
      ? "assets/Open-Status.png"
      : "assets/Closed-Status.png";

  const createdDate = new Date(issue.createdAt).toLocaleDateString();
  const updatedDate = new Date(issue.updatedAt).toLocaleDateString();

  const card = document.createElement("div");

  card.className = `issue-card ${issue.status}`;

  card.innerHTML = `

    <div class="issue-top">
      <div class="status-icon">
        <img src="${statusIcon}" />
      </div>

      <div class="priority ${priority.toLowerCase()}">
        ${priority}
      </div>
    </div>

    <div class="issue-title">${issue.title}</div>

    <div class="issue-desc">
      ${issue.description || "No description available"}
    </div>

    <div class="issue-footer">
      <span>#${issue.id} by ${issue.author}</span>
    </div>

    <div class="issue-footer">
      <span>Created: ${createdDate}</span>
      <span>Updated: ${updatedDate}</span>
    </div>

  `;

  // CLICK EVENT FOR MODAL
  card.addEventListener("click", () => {
    openSingleIssue(issue.id);
  });

  return card;
}

// ============================
// Tabs Filter
// ============================
tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    document.querySelector(".tab.active").classList.remove("active");
    tab.classList.add("active");

    const selectedTab = tab.dataset.tab;

    if (selectedTab === "all") {

      displayIssues(allIssues);

    } else {

      const filtered = allIssues.filter(
        issue => issue.status === selectedTab
      );

      displayIssues(filtered);

    }

  });

});

// ============================
// SEARCH FUNCTION
// ============================

searchInput.addEventListener("keyup", async () => {

  const text = searchInput.value;

  if (text === "") {

    displayIssues(allIssues);
    return;

  }

  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`
  );

  const data = await res.json();

  displayIssues(data.data);

});

// ============================
// Single Issue Modal
// ============================

async function openSingleIssue(id) {

  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
  );

  const data = await res.json();

  const issue = data.data;

  alert(
`Title: ${issue.title}

Description: ${issue.description}

Status: ${issue.status}

Author: ${issue.author}

Priority: ${issue.priority}`
  );

}

// ============================
// New Issue Button
// ============================

newIssueBtn.addEventListener("click", () => {

  alert("New Issue feature UI only (API does not support POST)");

});