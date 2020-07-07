// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## License
  ${data.license}

  ## Questions
  ${data.userQuestions}
`;
}

module.exports = generateMarkdown;
