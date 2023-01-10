// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n
  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation

  ${data.installation}
`;
}

module.exports = generateMarkdown;
