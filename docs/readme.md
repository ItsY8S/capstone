# Project Spec

### Outline

- [1. Application Definition Statement](#1-application-definition-statement)
  - [1.1. Audience](#11-audience)
    - [1.1.1. Demographics](#111-demographics)
  - [1.2. Problem](#12-problem)
  - [1.3. Solution](#13-solution)
  - [1.4. Unique Value Proposition](#14-unique-value-proposition)
  - [1.5. User Stories](#15-user-stories)
    - [1.5.1. Functional Requirements (Features)](#151-functional-requirements-features)
- [2. Spec](#2-spec)
  - [2.1. Sitemap](#21-sitemap)
  - [2.2. Programming Languages](#22-programming-languages)
  - [2.3. Technical Requirements](#23-technical-requirements)
  - [2.4. Integrations](#24-integrations)

# 1. Application Definition Statement

Artist Store is for artists who want to sell merchandise, but don't want to go through the difficult process of setting up & managing a store. Artists can easily manage their store including products & concerts in a straight-forward, intuitive format.

## 1.1. Audience

The primary audience of Artist Store consists of both artists and fans. Artists generally don't have an easy way to get their merchandise online, and feel as if it's too complicated. They may also looking to add another form of income aside from music sales or concerts. Fans of the artist are generally the sole customers of the store. They are typically young and most likely follow the artist on soical media, where they are influenced to make a purchase.

### 1.1.1. Demographics

**Store Owner (artist)**

- 16-25 year old male artists
- Typically selling clothing
- Some college experience, possibly dropped to pursue music
- Solo artist
- 10,000+ fans + social media following
- Low technical experience / patience / time
- Looking for new source of income
- Currently no website (too complex to set up)

**Store Customer (fans)**

- 14-25 year old customers
- Male & Female
- Listens to artist's music
- Attends or willing to attend concerts
- Follows the artist on social media

## 1.2. Problem

Music artists just want make music. They quickly find out there's more to a career than making music. From photography, designs, a website, music videos, mixing, mastering, & more, it's a lot to juggle. Websites like Shopify can be intimidating, especially for somebody without technical experience.

## 1.3. Solution

Shopify provides good documentation and help all over. Big Cartel is good at getting straight to the point and getting set up. I want to find a good balance and add some of my own features. My number one goal is to make it easy to use by creating a simple user experience. I'm doing this by setting a default theme for all artists that is modern & intuitive.

## 1.4. Unique Value Proposition

Connecting with artists on Instagram will hit a specific market that those websites aren't targeting. I have experience and knowledge among this market as I've helped a friend in the music industry. I also want to target local artists in the music degree, as this tool can be very useful. Selling exclusive items on tour is something I haven't seen done on a website. By keeping a consistent theme, I will build my brand as a trustworthly application.

## 1.5. User Stories & Functional Requirements (Features)

> - As a `Persona`, I want to `need`, so that `purpose`.

> - As an `artist`, I want to `sign up with my email`, so that `I don't have to remember more login credentials`.
>   - The system will `allow user to create an account & authenticate with Google OAuth`.

> - As an `artist`, I want to `display my concerts`, so that `fans know when I'm performing`.
>   - The system will `allow user to perform CRUD based operations on concerts`.

> - As an `artist`, I want to `add, edit, and remove products`, so that `I can manage the store on my own`.
>   - The system will `allow user to perform CRUD based operations on products`.

> - As an `artist`, I want to `manage my orders`, so that `I can fulfill orders on my own`.
>   - The system will `create orders when a user checks out`.
>   - The system will `allow the user to change the status of orders`.

> - As a `fan`, I want to `know when my favorite artist is performing`, so that `I can go to their concert`.
>   - The system will `display concerts sorted by the nearest date`.

> - As a `fan`, I want to `browse the store`, so that `I can find specific products`.
>   - The system will `allow customers to search products`.

> - As a `fan`, I want to `contact the store owner`, so that `I can inquire about my order`.
>   - The system will `display a contact form on the contact page`.
>   - The system will `allow the user to send the store owner emails`.

# 2. Spec

## 2.1. Sitemap

**Store Owner Flow**
Not Pictured - Login / Signup Flow

`Landing Page -> Login -> Input Username & Password -> Redirect to Dashboard (Success) -> Redirect to Login (Fail)`
or
`Landing Page -> Sign Up -> Input Username & Password & Artist Name -> Redirect to Dashboard (Success) -> Redirect to Sign Up (Fail)`

![Store Owner Flow](https://image.ibb.co/dm4rTe/Screen_Shot_2018_10_04_at_5_55_34_PM.png)

**Customer Shop Flow**
![Customer Shop Flow](https://image.ibb.co/kWGMTe/Screen_Shot_2018_10_04_at_7_05_00_PM.png)

## 2.2. Programming Languages

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS - Sass](https://sass-lang.com/guide)

## 2.3. Technical Requirements

MERN stack

- [MongoDB](https://www.mongodb.com/) with [Mongoose](https://www.npmjs.com/package/mongoose) (for database)
- [Express](http://expressjs.com/) (Node.js framework / also using [Express Generator](https://expressjs.com/en/starter/generator.html))
- [React.js](https://reactjs.org/docs/getting-started.html)
- [Node.js](https://nodejs.org/)

## 2.4. Integrations

- [Skeleton](https://getskeleton.com/) as CSS library
- [Multer](https://github.com/expressjs/multer), [UUID](https://github.com/kelektiv/node-uuid), & [Jimp](https://github.com/oliver-moran/jimp) for image uploading & resizing
- [MongoDB](https://github.com/mongodb/mongo) with [Mongoose](https://github.com/Automattic/mongoose)
- [Express Generator](https://expressjs.com/en/starter/generator.html)
