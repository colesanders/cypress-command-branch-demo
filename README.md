# Cypress Command Branch Demo
Small Demo for branching cypress commands in a way that doesn't clutter the workspace.

## Getting Started - The Usual
Clone down the repo <br>
Run <code>npm i</code> <br>
Then <code>npm start</code> <br>
And Finally<code>npm run cypress</code><br>

## Using the branch commands
Navigate to the cypress folder and into the test spec files.<br>
Inside there is a few examples showing how to use the command.<br>
<br>
<code>cy.nav()</code> should reveal a more limited selection of intellisence.<br>
<code>cy.nav().home()</code> takes you to the home page.<br>
<code>cy.nav().home().menu(button)</code> takes you to the menu.<br>
<br>
The Commands can be chained like any other cypress command.<br>
The <code>cy.nav())</code> branch yields the previous elements so:
<code>cy.get('[data-cy=your-element]').nav().home().menu(button).back()</code><br>
Would still have <code>your-element</code> at the end of the chain.<br>
 
## Why?
The problem here is that in larger projects, the amount of custom commands start to grow.<br>
As you add more and more, the intellisence gets cluttered, the command names become more lengthy<br>
and arbitrary, and things get messy. So in keeping with the common architecture <br>
standards of breaking up lengthy and messy things into smaller neater components,<br>
The <code>nav()</code> command is seperated out into it's own <em>branch</em>. <br>
This means any commands that have to do with and only with navigating can be extended onto<br>
The nav command, without clutter and while being able to maintain more logical naming conventions.<br>
The point of such design is to improve code readability and reusability, two of the more important aspects<br>
To good code practices. Code that is readable and reusable is typically more reliable and maintainable.<br>
