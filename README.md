# Overview
This web application is designed to help users manage their health and wellness goals, integrating self-help therapy and blog content managed via Contentful CMS. This README details:

Dependencies and Installations: How to set up and run the application locally.
Contentful CMS Integration: The steps taken to integrate Contentful for managing blog content.

## *Dependencies & Local Setup*

### *Required Dependencies*
* **_Node.js_**
    * *Version v14.x or Later*
    * **_Installation:_** *Download [Node.js](https://nodejs.org/en) and install it on your machine.*
* **_React.js_**
    * *Dependencies*
        * *@contentful/rich-text-react-renderer: ^16.0.1*
        * *@emotion/react: ^11.14.0*
        * *@emotion/styled: ^11.14.0*
        * *@mui/icons-material: ^6.4.5*
        * *@mui/material: ^6.4.5*
        * *contentful: ^11.5.0*
        * *framer-motion: ^12.4.7*
        * *react: ^19.0.0*
        * *react-dom: ^19.0.0*
        * *react-markdown: ^10.0.0*
        * *react-router-dom: ^7.2.0*
    * *Dev Dependencies*
        * *@eslint/js: ^9.19.0*
        * *@types/react: ^19.0.8*
        * *@types/react-dom: ^19.0.3*
        * *@vitejs/plugin-react-swc: ^3.5.0*
        * *eslint: ^9.19.0*
        * *eslint-plugin-react: ^7.37.4*
        * *eslint-plugin-react-hooks: ^5.0.0*
        * *eslint-plugin-react-refresh: ^0.4.18*
        * *globals: ^15.14.0*
        * *vite: ^6.1.0*
* **_Contentful SDK_**
*Used as our headless CMS, delivering blog content when API keys are provided.*

## Installation Steps
1. Clone the Repository:
```
git clone https://github.com/alexlsmitty/unbound-web-app/
cd unbound-web-app
```

2. Install Dependencies:
Using **npm**:
```
npm install
```

3. Configure Environment Variables (Optional)
Create a .env file at the root of the project with necessary configurations, which includes the space ID and Contentful Access Token. **Only** do this if you wish to test different types of blog content, as it may not render correctly if the schema for Contentful does not match the original.
```
REACT_APP_CONTENTFUL_SPACE_ID=your_space_id
REACT_APP_CONTENTFUL_ACCESS_TOKEN=your_access_token
```

4. Run the Application:
```
npm run dev
```

Now you can access the website on a local dev server!

## Contentful CMS Integration for Blog Components
**Integration Overview**
_Contentful_ was chosen as the CMS integration primarily because I could use it for free and also because it had decent reviews online. I'm a simple man, and make simple choices sometimes. 'Nuff said.
Anyways, integration went relatively okay! This involved setting up the Contentful space, configuring my API keys, and then creating React components that fetch data and render them as individual blog posts (with routing!)

### Steps to Integration
1. Contentful Account Setup + Space
- **Created a [Contentful account](contentful.com)**
- **Created a new Space:** Created a space dedicated to my project. Noted the **Space ID** as this will be used later.
- **Defined Content Models:** The content model includes the various fields available for creating configurations (such as blog posts, in my example below.)
![Screenshot of a Contenful content model, displaying various data types.](/readmeimages/Screenshot-2025-02-28 202342.png)
2. Generate API Keys
- Within the settings tab, I went into the API Keys section to get the Content Delivery API - access token. This is what's used to actually grab content from the stream, so I can actually put blogposts on my website without nothing rendering.
- Once I got these, I created a .env file with the variables SPACE_ID and ACCESS_TOKEN which will then be used in the contentfulClient.js file later. 
3. Install & Configure the Contentful SDK
- After running this command to add the Contentful SDK to the project, I created a file named contentfulClient.js to initalize a client. 
```
#powershell
npm install contentful
```
```
// contentfulClient.js
import { createClient } from 'contentful';

console.log('Space ID:', import.meta.env.VITE_CONTENTFUL_SPACE_ID);
console.log('Access Token:', import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN);

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  
});
```
- The contentfulClient.js also exports two functions called **getBlogPosts** and **getBlogPostBySlug**, which allow the components blog-index.jsx and blog-post.jsx to fetch the content of the blogPosts made in our content model. These were then styled with Material UI as I did with the rest of the web-application. 

The full application isn't yet finished, but I hope you enjoy your visit and it runs well for you.
_**Alex**_


