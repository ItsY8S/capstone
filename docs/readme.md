# Project Spec

### Outline

- [Brief](#brief)
  - [Audience](#audience)
  - [Problem](#problem)
  - [Solution](#solution)
  - [Unique Value Proposition](#unique-value-proposition)
  - [Pitch](#pitch)
- [Spec](#spec)

  - [Feature Definitions](#feature-definitions)
  - [Sitemap](#sitemap)
  - [Interface](#interface)
    - [Information Architecture](#information-architecture)
    - [Browser Support](#browser-support)
  - [Infrastructure](#infrastructure)
    - [Technical Requirements](#technical-requirements)
    - [Programming Languages](#programming-languages)
    - [Integrations](#integrations)
    - [Deployment Workflow](#deployment-workflow)
    - [Web Host](#web-host)

- [Project Milestones](#project-milestones)
  - [Initial Pitch](#initial-pitch)
  - [Initial Project Spec](#initial-project-spec)
  - [MVP](#mvp)
  - [Pivot](#pivot)
  - [Alpha Release](#alpha-release)
  - [Beta Release](#beta-release)
  - [Public Release](#public-release)

## Brief

---

Artist Store targets young artists that want to quickly get a store up and running without much technical knowledge. It makes it easy to add your products, and set tour exclusive merchandise. To be continued...

The Brief is an executive summary of all elements listed within. This should boil down to one long paragraph, devoting one to two sentences to each of the sub-sections defined.

### Audience

- 16-30 year old male artists
- Some college experience, possibly dropped to pursue music
- Solo or small team
- 10,000+ fans & social media following
- Low technical experience / patience / time
- Looking for new source of income
- No website or possibly too complex

This is influenced by watching this type of market on Instagram. I also have experience talking to artists in this range and a lot of them just don't know where to start, but are interested in selling clothes and other merchandise.

### Problem

Music artists just want make music. They quickly find out there's more to it than making music. From photography, designs, a website, music videos, mixing, mastering, & more, it's a lot to juggle. Websites like Shopify can be intimidating, especially for somebody without technical experience.

### Solution

Shopify provides good documentation and help all over. Big Cartel is good at getting straight to the point and getting set up. I want to find a good balance and add some of my own features. My number one goal is to make it easy to use. One of my selling points will be tour exclusive items.

### Unique Value Proposition

Connecting with artists on Instagram will hit a specific market that those websites aren't hitting. I have experience and knowledge among this market as I've helped a friend in the music industry. Selling exclusive items on tour is also something I haven't seen done on a website. By keeping a consistent theme, I will build my brand as a trustworthly application.

### Pitch

[Pitch](https://youtu.be/Na9JcUb7zbY)

### Spec

---

No additional information is needed, this is simply a containing section to separate the spec from the Brief's content.

### Feature Definitions

[Features](https://github.com/ItsY8S/wai/issues?q=is%3Aopen+is%3Aissue+label%3Afeature)

### Sitemap

Create and label a hierarchical diagram that identifies all user facing screens. This will be the road map your instructors and you will use to converse about various screens and to examine user flows between screens.

### Interface

Similar to the Spec section, this is a container section that separates section contents from other sections.

### Information Architecture

Using your sitemap as a base structure, use this section to house ALL of your text content. This is a great place to develop all of the content that will appear on your pages, components, and sub sections outside of the constraints of code. In MVC we separate views from controllers and models, while in the Information Architecture section of your project spec you will separate your content from your code.

### Browser Support

I would like to support all current browsers and IE11+. Older versions have a less than 1% usage rate. I will use something such as [autoprefixer](https://github.com/postcss/autoprefixer). Portrait mode will be supported on smaller devices such as phones, with landscape potentially coming later. There is a minimum requirement of 320px width.

### Infrastructure

Similar to the Spec section, this is a container section that separates section contents from other sections.

### Technical Requirements

Define the server software and hardware, virtualized or not, that your application requires to run. These should be in a format of Title: Brief description of my usage. If a feature as defined in the issues requires a specific technology, that issue should cite this as well.

> Example: Technical Requirement - FFMPEG
> Server side service to handle video. Needed to extract single frames to turn into thumbnails.

> Example: Issue - Thumbnail Generate:
> Detailed description of the usage I intend to do... how exactly that will work for the user.
> Technical Requirement: FFMPEG

### Programming Languages

- [Node.js](https://nodejs.org/)
- [React.js](https://reactjs.org/)

### Integrations

- [Skeleton](https://getskeleton.com/) as CSS library
- [Multer](https://github.com/expressjs/multer), [UUID](https://github.com/kelektiv/node-uuid), & [Jimp](https://github.com/oliver-moran/jimp) for image uploading & resizing
- [MongoDB](https://github.com/mongodb/mongo) with [Mongoose](https://github.com/Automattic/mongoose)
- [Express Generator](https://expressjs.com/en/starter/generator.html)

### Deployment Workflow

I will be creating new issues for features labeled as 'features'. As I complete the features, I will mark them as completed. At the end of the week, I create a pull request. I'll be using [GitHub Pages](https://pages.github.com/) to host my application. I will use the command `npm run deploy`.

### Web Host

[GitHub Pages](https://pages.github.com/)

### Project Milestones

---

Similar to the Spec section, this is a container section that separates section contents from other sections. This is a living document, and content here may be filled in as your time in Capstone progresses.

### Initial Pitch

[Initial Pitch](https://youtu.be/FSYz_EMQmvU)

I found some things about my application that I wasn't even thinking about. Some things such as adding a tour date completely went over my head as a designer / developer. It was good getting feedback and talking through the vision of my project.

### Initial Project Spec

Link to your initial Project Spec.

### MVP

Direct Link to the tagged release of your MVP on your repo.

> This should be a link to a specific commit.

### Pivot

Direct Link to the tagged release of your Pivot on your repo.

> This should be a link to a specific commit.

### Alpha Release

Date of the Alpha Release Milestone. Once completed this should be updated with the proper link.

### Beta Release

Date of the Beta Release Milestone. Once completed this should be updated with the proper link.

### Public Release

Date of the Public Release Milestone. Once completed this should be updated with the proper link.

---

## Best Practices

- Logical and concise code comments
  - Comment only sections of code or particularly complex items. Do not comment every single line of code.
- [Semantic naming](https://24ways.org/2014/naming-things/) (files, functions, variables, id's, classes, etc...)
- Codebase is free from:
  - False Positives
  - Race / Async Conditions
  - Logical Errors
- Common Mistakes
  - [Multiple Projects In One Repo](https://youtu.be/H27HucyujUg)
  - [Folder Structure](https://youtu.be/CmTOW-29hpQ)
  - [Overly Complex Code](https://youtu.be/YlVhgyVfMUE)
  - [Bad .gitignore](https://youtu.be/iF9W8CeCfNM)
  - [Too Many Console Logs](https://youtu.be/TJO_NK4F1Ko)
  - [Attention to Detail](https://youtu.be/V_rHityy378)

## Documentation Standards

- Coherent and well structured `README.md` ([Example](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2))
  - Project Spec Docs should link off of the `README.md`.
- [Correct Instructions](https://youtu.be/G8pQR1ABGe8)
- [Well formatted / good informational hierarchy / skimmable content](https://youtu.be/cVwlMncCpFM)
- Should provide a clear and repeatable path for other developers to follow.
- All links / Images should not be broken.
  - Links to files within the repo should be relative so that the correct current branch is used when clicking a link in the documentation.
- Documentation should be in valid github-flavored Markdown.
- Should be well organized.
  - The main readme should contain quick access to all documentation. If a section of documentation requires significant explanation / takes up a lot of space, break it out into a separate .md file that the readme properly links to within a table of contents.

## Deployment Standards

Deployment of this milestone should be handled with the following criteria.

Prior to submission, ideally on the first day of the milestone's development preform the following procedures:

- Determine the release version number using semantic versioning. If this is your first release to the Capstone Team you should start with v1.0.0 and increment it according to [semver](https://semver.org/) from there.
- Create a Branch called `[VersionNumber]` + `Release-Pivot` from your `Dev` Branch on github.
- This should contain all merged and completed feature branches since your last release.
- Create a pull request for this `Release-Pivot` branch to merge with the base of `master`.
- On the Pull Request select to request approval from your primary Course Director
  - Optional: Request approvals from any additional preferred members of your Capstone Project Team. Enter a new comment and tag those members requesting they review specific areas of your project.

On final Milestone Submission:

- Add a link directly to the `docs` folder containing your project spec so that Team members don't need to dig through the various commits to find the correct copy of your docs.
- Add a comment to the `Release-Pivot` Pull request, requesting final approval.

Additional clarification may be needed by the Capstone team, please monitor this pull request until approval to merge is given.

**Continue working on your project in the `Dev` branch using _feature branch development_.** Approval from your Capstone Team will take time to evaluate the submission in its entirety. This approval should not hold up development, however, and you should proceed with development.

### APPROVAL

You have been approved to proceed forward! There may be additional considerations outline that should be addressed but you're doing well!

Follow-Up Actions:

- Merge the Pull Request
- **Tag** the corresponding commit with the proper Semantic Version Number.
- Deploy the tagged commit to your 'live' server.
- Merge the `Release-Pivot` branch back into `Dev`, ensuring everything is up to date.
- Capture any additional feedback as new issues or add to any existing issues. These should be properly labeled, and assigned to an upcoming Milestone.

### REJECTION

You should suspend your current workflow and address the items outlined in the rejection notice that would be posted to the pull request and notify the Capstone Team once you have remedied the outlined items. Common reasons for rejection would be not following your project spec (once defined), not completing the pre-requisite elements of the milestone, or deviating significantly from the outlined requirements or requests made by the Capstone Team.

Follow-Up Actions:

- Notify Capstone Team once the pull request is addressing the issues outline and re-request review / approval.

# Velocity Check

At the end of the week your progress will be evaluated to see how many points you have earned based upon closed issues point value. Successfully completed issues will be tallied and a velocity will be established to help provide a baseline for the following week's work. You are able to use this velocity check to estimate if you are on track for completion of your issues from early milestones or if you are off track. This relies on accurate and honest usage of the issue system.

The Velocity Check will calculated by Zenhub and you can view it at any point. Your role in this requirement is to maintain your progress within the issue system of github and accurately estimate time per issue and as you close issues adjust that estimate to how much time was invested in each issue.

This is a pass/fail assignment where failing represents a significant drop in velocity, attributed to not using the issue system to correctly communicate, with the Capstone Team, your current and accurate progress or neglecting to make progress toward your set goals.

## Requirements

A specific velocity is not required, just the ability to calculate the project's velocity. The following requirements have been developed to ensure the velocity can be accurately checked.

- All milestones defined in your project spec have been created within Github.
- All issues are assigned to their specific milestone in Github.
- All issues have estimates.
- Issues are properly labeled.
- Milestone related issues are closed as they become complete.
  - Upon completion of an issue it is customary to update the estimate to reflect the actual time utilized. This should only be modified at the time of completion of the specific issue.
  - Re-assigning time estimates to multiple closed issues at once is generally not accepted.
  - The Capstone Project Team may re-open issues that have erroneously closed or need further work. These re-opened issues will count against your velocity.
- Review your Velocity Report
  - With the Zenhub extension installed view https://github.com/USERNAME/REPO_NAME/milestones#reports?report=velocity
