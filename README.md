### Project Pet Shelter - Frontend

This repository contains the frontend code for the Pet Shelter project. If this is your first time working with the repo:

## Getting Started

Clone the repository:

git clone https://github.com/anastasiiya1/project-pet-shelter-new.git

# Install dependencies:

npm install

Configure ESLint for your IDE.

Set environment variables for the frontend in .env files (ask your colleagues for these).

## Running Locally

To start the project locally, use:

npm run dev

# Project Structure

The frontend is built using:

- React
- Material UI
- Styled-components
- React-query
- The repository is deployed to Netlify.
- Authorization and authentication are handled via Auth0.
- Cloudinary is used for file storage of profile and project images.

## Contribution Guidelines

Switch to the develop branch and pull the latest changes:

git checkout develop
git pull

Create a new branch from develop using the format feature/your-feature-name:

git checkout -b feature/your-feature-name

The first part should indicate the type, which can be feature or fix.
Code, lint, commit, and push your changes:

git push origin feature/your-feature-name

If your branch becomes outdated due to new commits in develop, rebase it instead of merging:

git fetch
git rebase develop

Create a Pull Request (PR) with a detailed description and include any photo or video examples, if applicable.

Get approval from a reviewer.

Once approved, close the PR using Squash and Merge.
Do not merge without approval.

The branch will be automatically deleted after merging.
