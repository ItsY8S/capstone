# Project Spec

The project spec should be a series of three markdown files contained within your repo in a folder on the root level labeled docs with a table of contents `./docs/readme.md` linking each major article (Brief, Spec, Project Milestones) to its proper section within each corresponding file. Each document should employ markdown formatting and good informational hierarchy techniques to convey their contents effectively.

## Requirements

The listed pre-requisites for this milestone are required for evaluation. Failure to have completed the pre-requisites will result in a zero for this milestone. Please refer to the class's late policy regarding exceptions and late work.

Below is the Project Spec Outline and definitions of each component that is required.

### Project Spec Outline

- [Brief](#Brief)
  - [Audience](#Audience)
  - [Problem](#Problem)
  - [Solution](#Solution)
  - [Unique Value Proposition](#Unique-Value-Proposition)
  - [Pitch](#Pitch)
- [Spec](#Spec)

  - [Feature Definitions](#Feature-Definitions)
  - [Sitemap](#Sitemap)
  - [Interface](#Interface)
    - [Information Architecture](#Information-Architecture)
    - [Browser Support](#Browser-Support)
  - [Infrastructure](#Infrastructure)
    - [Technical Requirements](#Technical-Requirements)
    - [Programming Languages](#Programming-Languages)
    - [Integrations](#Integrations)
    - [Deployment Workflow](#Deployment-Workflow)
    - [Web Host](#Web-Host)

- [Project Milestones](#Project-Milestones)
  - [Initial Pitch](#Initial-Pitch)
  - [Initial Project Spec](#Initial-Project-Spec)
  - [MVP](#MVP)
  - [Pivot](#Pivot)
  - [Alpha Release](#Alpha-Release)
  - [Beta Release](#Beta-Release)
  - [Public Release](#Public-Release)

### Brief

---

The Brief is an executive summary of all elements listed within. This should boil down to one long paragraph, devoting one to two sentences to each of the sub-sections defined.

### Audience

Define the primary audience and any secondary markets. The more specific the better. You should be defining the age, gender, education level, social background, level of familiarity with technology, and any other relevant and defining characteristics of the audiences for which you are intending to building your application.

Identify any members of these audiences you have had contact with, any interview notes or feedback summaries and a breakdown of considerations they have influenced.

### Problem

Clearly define the problem your audience is having. Cite any feedback from interviews with your audience.

### Solution

Identify any competition operating in this market space and summarize how they are addressing the problem, as defined.

Define your solution and how it will directly address the problem your audience is having.

### Unique Value Proposition

What separates you from the competition? How are you able to better solve this defined problem for your audience than your competition? Why is your idea smarter, more efficient, or better?

### Pitch

Rehash your initial pitch content but incorporate all of your research and lessons learned with the MVP. This should be a short 1 - 3 min video (post it to Youtube, set as unlisted and link it in your docs). The audience for this should be expected to have no context of your previous pitch (like a potential employer), so make certain to include all the basic information:

- Identify Who You Are
- Identify Your **Primary Audience**
- Discuss **The Defined Problem** They Are Having
- **Propose A Solution** To This Problem
- Identify Your **Unique Value Proposition**

Don't speak down to your pitch's audience, but assume limited technical knowledge when explaining your concepts.

### Spec

---

No additional information is needed, this is simply a containing section to separate the spec from the Brief's content.

### Feature Definitions

The Agile approach in the context of this course and how our workflow will work would be to create an issue for each feature on your Github repo. Each issue should be titled and defined in detail as well as labeled as a 'Feature'. In this section of the documentation you should link to the issues with a filter applied to only show issues labeled as feature rather than duplicate your efforts by copy/pasting that content into a second place.

> Note: you may need to [create a label](https://help.github.com/articles/creating-a-label/) called 'feature'.

### Sitemap

Create and label a hierarchical diagram that identifies all user facing screens. This will be the road map your instructors and you will use to converse about various screens and to examine user flows between screens.

### Interface

Similar to the Spec section, this is a container section that separates section contents from other sections.

### Information Architecture

Using your sitemap as a base structure, use this section to house ALL of your text content. This is a great place to develop all of the content that will appear on your pages, components, and sub sections outside of the constraints of code. In MVC we separate views from controllers and models, while in the Information Architecture section of your project spec you will separate your content from your code.

### Browser Support

Which browsers, operating systems, devices, portrait and landscape modes do you plan to support? How did you come to this decision and what are the technical specification resolutions of these devices?

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

Identify what programming languages you are using. Provide links to their respective documentation sites.

### Integrations

Identify what 3rd party packages, libraries, or external integrations you are using. Provide links to their respective documentation sites.

### Deployment Workflow

Document the release process for your application from new feature creation through live deployment. This will be heavily focused on this week's research.

### Web Host

Define what hosting service provider you will be utilizing and identify the accessible urls of any live or staging servers for review.

### Project Milestones

---

Similar to the Spec section, this is a container section that separates section contents from other sections. This is a living document, and content here may be filled in as your time in Capstone progresses.

### Initial Pitch

Link to your initial Pitch Video or presentation(with notes).

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
