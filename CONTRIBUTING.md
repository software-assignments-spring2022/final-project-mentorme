<!-- essentially a contract agreement among developers and contributors
includes the project's values and team norms, including the definition of done - final product
includes the Git workflow that the team follows
includes a detailed description of the rules of contributing and any considerations or how and what to contribute -->
## Table of Content:
1. [Team norms](#Team-Norms)
2. [Sprint Cadence](#sprint-cadence)
3. [Daily Standups](#daily-standups)
4. [Coding Standards](#coding-standards)
5. [Final Product](#Final-Product)
6. [Work Flow](#Work-Flow)
7. [Contributing Process](#Contributing-Process)
8. [Instructions for Building and Testing](#instructions-for-building-and-testing)
## Team Norms
- Every team member is expected to foster a welcoming, respectable and inclusive environment by:
    - Using respectable and inclusive language;
    - Being open to constructive criticism;
    - Providing respectable and constructive criticism;
    - Excepting what is best for the conclusion of the end product;
    - Openly expressing their feelings and opinions about how the project is progressing;
    - Allowing each member to speak uninterrupted during team meetings.

- Unexcpatable behaviors are:
    - Disrespectful language;
    - Exclude any member from project discussion by any means(interrupting during a meeting, segregation, derogatory comments about their code;
    - Publishing other's private information, such as a physical or electronic address, without explicit permission;
    - Any be behavior considered inappropriate in a professional setting.

- Team members are also expected to contribute equally and professionally:
    - When stuck in a task, please politely ask other team members for help or go to tutoring sessions;
    - Please respond to messages in discord channel within two days;
    - Members should make the other teammates aware of any externalities that might hinder their work;
    - When failing to deliver on obligations to the team, other members reserve the right to report to course instructors.

## Sprint Cadence
There will be in total 5 sprints, each for 2 weeks.

## Daily Standups
- Daily standups in each sprint will occur on every class day except for those stakeholder demos or plannings are scheduled;
- Members are expected to attend synchronously;
- Any member who makes no progress on a task for two standups or more in a row will be reported to management.

## Coding Standards
- Visual Studio Code is the designated code editor;
- Don't over-engineer. Write minimum code to get things working end to end, only then iterate to improve. Code for each task and spike must be peer-reviewed and pass tests before merging into the main branch of code;
- Always push working code, if you break the pipeline/build then fix it;
- Provide descriptive commit messages;
- Write self documenting code, use descriptive variable and function names. Avoid unnecessary name shortening;
- Don't leave dead/commented out code behind. If you see such code, delete it.


## Final Product
Once the team achieves the final product, MentorMe will be a platform on which students can give ratings and comments on their academic advisors and find other student mentors for career advisement. A student will be able to connect with another student, alumni, professor, or professional to get advice on courses, career opportunities, research opportunities, and other resources.
To help students reach their academic and career goals by providing them with the information to pick an advisor that suits their academic needs and with the opportunity to connect with mentors.
## Work Flow
- Team will conduct project planning and logistic discussion through a discord channel set up on the class server.
- Team members will discuss User Stories to be implemented on the following Sprint cycle.
- Any new User Story or the removal of features can be mentioned in the chat at any time, but will only be discussed during the Sprint planning meeting. 
- New features should be completed on a separate branch and please send a pull request for merge.
- To avoid merge hell, members should text the chat and notify the whole group that a new code was pushed to the main. 
- Pull requests without a corresponding issue are unaccepted.

## Contributing Process
- Development must be in MERN stack;
- Make sure dependencies are installed by running `npm install`.

## Instructions for Running and Testing
Make sure necessary dependencies are installed before running:
- In the front-end directory, run: `npm install`
- In the back-end directory, run: `npm install`
- In the socket directory, run: `npm install`

To run the project:
- In the front-end directory, run: 
    `npm start`
- In the back-end directory, run:    `npm start`
- In the socket directory, run: `npm start`


For testing:

Make sure to install the following modules globally:

 `mocha` - for running unit tests

Install the following modules locally in your project directory:

 `chai` - supplies assertions for unit tests

To test, from the back-end repository:

    npx mocha test/XXX.js


