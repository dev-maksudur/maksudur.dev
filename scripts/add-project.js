const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const projectsFilePath = path.join(__dirname, '..', 'lib', 'data', 'projects.json');

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function getListInput(promptName) {
  console.log(`\nEnter ${promptName} (enter an empty line to finish):`);
  const items = [];
  let index = 1;
  while (true) {
    const item = await question(`${index}: `);
    if (!item.trim()) break;
    items.push(item.trim());
    index++;
  }
  return items;
}

async function main() {
  console.log('\n======================================');
  console.log('      Add New Project to Portfolio     ');
  console.log('======================================\n');

  try {
    // 1. Read existing projects
    let projects = [];
    if (fs.existsSync(projectsFilePath)) {
      const fileData = fs.readFileSync(projectsFilePath, 'utf8');
      projects = JSON.parse(fileData);
    }

    // 2. Ask questions
    const title = (await question('Project Title (e.g., Payment Gateway): ')).trim();
    if (!title) {
      console.error('Error: Project title is required!');
      rl.close();
      return;
    }

    // Generate ID from Title
    let defaultId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const idInput = (await question(`Project ID [default: ${defaultId}]: `)).trim();
    const id = idInput || defaultId;

    // Check duplicate ID
    if (projects.some(p => p.id === id)) {
      console.error(`Error: A project with ID "${id}" already exists!`);
      rl.close();
      return;
    }

    const desc = (await question('Short Description (one sentence card summary): ')).trim();
    const overview = (await question('Detailed Overview (long description of project goal): ')).trim();
    const category = (await question('Category (e.g., Fintech, Education, Web App): ')).trim();
    const role = (await question('Role (e.g., Lead Developer, Full Stack Engineer): ')).trim();
    const duration = (await question('Duration (e.g., 2024 - Present): ')).trim();
    
    const techInput = (await question('Tech Stack (comma-separated, e.g. Next.js, Redis, Docker): ')).trim();
    const tech = techInput ? techInput.split(',').map(t => t.trim()).filter(t => t.length > 0) : [];

    const challenges = await getListInput('Challenges');
    const solutions = await getListInput('Solutions');
    const impact = (await question('\nMeasured Impact (e.g., Improved speed by 40%): ')).trim();

    // 3. Construct new project object
    const newProject = {
      id,
      title,
      desc,
      overview,
      tech,
      image: '', // default empty, triggers ProjectVisual mockup component
      category,
      role,
      duration,
      challenges,
      solutions,
      impact
    };

    // 4. Save
    projects.push(newProject);
    fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2), 'utf8');

    console.log('\n======================================');
    console.log(`Successfully added "${title}"!`);
    console.log(`Saved to: ${projectsFilePath}`);
    console.log('======================================\n');

  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    rl.close();
  }
}

main();
