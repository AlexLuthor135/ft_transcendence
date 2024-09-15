## ft_transcendence
## The final boss of 42

## ![tra](https://github.com/user-attachments/assets/9da955d6-4498-46b2-bcc9-62dcae5d83c5)

This project is about developing your own website.
Thanks to the website, users are able to play Pong with others.
You are able to test it with an actual browser.

The goal of this project was to complete a set of modules of our choice
to gather a necessary amount of points so that it will be considered completed
and passed. A major module grants one point, while a minor module grants 0.5 points.
It was necessary to gather 7 points to have the project completed.

## Implemented modules:

<details>
  <summary>1. Use a Framework as backend (major). </summary>
  In this major module, we were required to utilize a specific web framework for our
  backend development, and that framework is Django.
  </details>
 <details>
   <summary>2. Use a front-end framework or toolkit. (minor)</summary>
   Our frontend development utilized the Bootstrap toolkit .  
 </details>
<details>
  <summary>3. Use a database for the backend -and more. (minor)</summary>
  The designated database for all DB instances in our project is PostgreSQL .
  This choice guarantees data consistency and compatibility across all project components and may be a prerequisite for other modules, such as the backend Framework module.
</details>

<details>
  <summary>4.  Standard user management, authentication, users across tournaments. (major)</summary>
  ◦ Users can subscribe to the website in a secure way.<br >
  ◦ Registered users can log in in a secure way.<br >
  ◦ Users can select a unique display name to play the tournaments.<br >
  ◦ Users can update their information.<br >
  ◦ Users can upload an avatar, with a default option if none is provided.<br >
  ◦ Users can add others as friends and view their online status.<br >
  ◦ User profiles display stats, such as wins and losses.<br >
  ◦ Each user has a Match History including 1v1 games, dates, and relevant details, accessible to logged-in users.
</details>

<details>
  <summary>5. Implementing a remote authentication. (major)</summary>
  In this major module, the goal is to implement the following authentication system:
OAuth 2.0 authentication with 42 . Key features and objectives include:<br >
◦ Integrate the authentication system, allowing users to securely sign in.<br >
◦ Obtain the necessary credentials and permissions from the authority to enable a secure login.<br >
◦ Implement user-friendly login and authorization flows that adhere to best practices and security standards.<br >
◦ Ensure the secure exchange of authentication tokens and user information between the web application and the authentication provider.<br >
This major module aims to get a remote user authentication, providing users with
a secure and convenient way to access the web application.
</details>
<details>
  <summary>6. Add Another Game with User History and Matchmaking. (major)</summary>
  In this major module, the objective is to introduce a new game, distinct from Pong,
and incorporate features such as user history tracking and matchmaking. Key
features and goals include:<br >
◦ Develop a new, engaging game to diversify the platform’s offerings and entertain users.<br >
◦ Implement user history tracking to record and display individual user’s gameplay statistics.<br >
◦ Create a matchmaking system to allow users to find opponents and participate
in fair and balanced matches.<br >
◦ Ensure that user game history and matchmaking data are stored securely and
remain up-to-date.<br >
◦ Optimize the performance and responsiveness of the new game to provide an
enjoyable user experience. Regularly update and maintain the game to fix
bugs, add new features, and enhance gameplay.<br >
This major module aims to expand your platform by introducing a new game,
enhancing user engagement with gameplay history, and facilitating matchmaking
for an enjoyable gaming experience.
</details>
<details>
  <summary>7. Game Customization Options. (minor)</summary>
  In this minor module, the goal is to provide customization options for all available
games on the platform. Key features and objectives include:<br >
  ◦ Offer customization features, such as power-ups, attacks, or different maps,
that enhance the gameplay experience.<br >
◦ Allow users to choose a default version of the game with basic features if they
prefer a simpler experience.<br >
◦ Ensure that customization options are available and applicable to all games
offered on the platform.<br >
◦ Implement user-friendly settings menus or interfaces for adjusting game parameters.<br >
◦ Maintain consistency in customization features across all games to provide a
unified user experience.<br >
This module aims to give users the flexibility to tailor their gaming experience
across all available games by providing a variety of customization options while
also offering a default version for those who prefer a straightforward gameplay
experience.
</details>
<details>
<summary>7. Introduce an AI Opponent. (major)</summary>
  In this major module, the objective is to incorporate an AI player into the game.
Notably, the use of the A* algorithm is not permitted for this task. Key features
and goals include:<br >
◦ Develop an AI opponent that provides a challenging and engaging gameplay
experience for users.<br >
◦ The AI must replicate human behavior, meaning that in your AI implementation, you must simulate keyboard input. The constraint here is that the AI
can only refresh its view of the game once per second, requiring it to anticipate
bounces and other actions.<br >
◦ Implement AI logic and decision-making processes that enable the AI player
to make intelligent and strategic moves.<br >
◦ Explore alternative algorithms and techniques to create an effective AI player
without relying on A*.<br >
◦ Ensure that the AI adapts to different gameplay scenarios and user interactions.<br >
This major module aims to enhance the game by introducing an AI opponent that
adds excitement and competitiveness without relying on the A* algorithm.
</details>
<details>
<summary>8. Implement Two-Factor Authentication (2FA) and JWT. (major)</summary>
  In this major module, the goal is to enhance security and user authentication
by introducing Two-Factor Authentication (2FA) and utilizing JSON Web Tokens
(JWT). Key features and objectives include:<br >
◦ Implement Two-Factor Authentication (2FA) as an additional layer of security
for user accounts, requiring users to provide a secondary verification method,
such as a one-time code, in addition to their password.<br >
◦ Utilize JSON Web Tokens (JWT) as a secure method for authentication and
authorization, ensuring that user sessions and access to resources are managed
securely.<br >
◦ Provide a user-friendly setup process for enabling 2FA, with options for SMS
codes, authenticator apps, or email-based verification.<br >
◦ Ensure that JWT tokens are issued and validated securely to prevent unauthorized access to user accounts and sensitive data.<br >
This major module aims to strengthen user account security by offering Two-Factor
Authentication (2FA) and enhancing authentication and authorization through the
use of JSON Web Tokens (JWT).
</details>
<details>
<summary>9. Support on all devices. (minor)</summary>
  In this module, the main focus is to ensure that your website works seamlessly on
all types of devices. Key features and objectives include:<br >
◦ Make sure the website is responsive, adapting to different screen sizes and orientations, ensuring a consistent user experience on desktops, laptops, tablets,
and smartphones.<br >
◦ Ensure that users can easily navigate and interact with the website using
different input methods, such as touchscreens, keyboards, and mice, depending
on the device they are using.<br >
This module aims to provide a consistent and user-friendly experience on all devices,
maximizing accessibility and user satisfaction.
</details>
<details>
<summary>10. Expanding Browser Compatibility. (minor)</summary>
  In this minor module, the objective is to enhance the compatibility of the web
application by adding support for an additional web browser. Key features and
objectives include:<br >
◦ Extend browser support to include an additional web browser, ensuring that
users can access and use the application seamlessly.<br >
◦ Conduct thorough testing and optimization to ensure that the web application
functions correctly and displays correctly in the newly supported browser.<br >
◦ Address any compatibility issues or rendering discrepancies that may arise in
the added web browser.<br >
◦ Ensure a consistent user experience across all supported browsers, maintaining
usability and functionality.<br >
This minor module aims to broaden the accessibility of the web application by
supporting an additional web browser, providing users with more choices for their
browsing experience.
</details>
<details>
<summary>11. Multiple language supports. (minor)</summary>
  In this minor module, the objective is to ensure that your website supports multiple
languages to cater to a diverse user base. Key features and goals include:<br >
◦ Implement support for a minimum of three languages on the website to accommodate a broad audience.<br >
◦ Provide a language switcher or selector that allows users to easily change the
website’s language based on their preferences.<br >
◦ Translate essential website content, such as navigation menus, headings, and
key information, into the supported languages.<br >
◦ Ensure that users can navigate and interact with the website seamlessly, regardless of the selected language.<br >
◦ Consider using language packs or localization libraries to simplify the translation process and maintain consistency across different languages.<br >
◦ Allow users to set their preferred language as a default choice for subsequent
visits to the website.<br >
This minor module aims to enhance the accessibility and inclusivity of your website
by offering content in multiple languages, making it more user-friendly for a diverse
international audience.
</details>
<details>
<summary>12. Add accessibility for Visually Impaired Users. (minor)</summary>
  In this minor module, the goal is to make your website more accessible for visually
impaired users. Key features include:<br >
◦ Support for screen readers and assistive technologies.<br >
◦ Clear and descriptive alt text for images.<br >
◦ High-contrast color scheme for readability.<br >
◦ Keyboard navigation and focus management.<br >
◦ Options for adjusting text size.<br >
◦ Regular updates to meet accessibility standards.<br >
This module aims to improve the website’s usability for individuals with visual
impairments and ensure compliance with accessibility standards.
</details>
<details>
<summary>13. Replacing Basic Pong with Server-Side Pong and Implementing
an API. (major)</summary>
  In this major module, the goal is to replace the basic Pong game with a serverside Pong game, accompanied by the implementation of an API. Key features and
objectives include:<br >
◦ Develop server-side logic for the Pong game to handle gameplay, ball movement, scoring, and player interactions.<br >
◦ Create an API that exposes the necessary resources and endpoints to interact
with the Pong game, allowing partial usage of the game via the Command-Line
Interface (CLI) and web interface.<br >
◦ Design and implement the API endpoints to support game initialization, player
controls, and game state updates.<br >
◦ Ensure that the server-side Pong game is responsive, providing an engaging
and enjoyable gaming experience.<br >
◦ Integrate the server-side Pong game with the web application, allowing users
to play the game directly on the website.<br >
This major module aims to elevate the Pong game by migrating it to the server
side, enabling interaction through both a web interface and CLI while offering an
API for easy access to game resources and features.
</details>

## COLLABORATORS 

Big shoutout to my collaborators [Tomislav Bolkovac](https://github.com/Valsimot42) and [Tatiana Sofia Gomes Lima](https://github.com/gltats) for a tremendous job they did on this project.
