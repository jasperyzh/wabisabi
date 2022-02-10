# The Pragmatic Programmer Tips

1. its your life - Care About Your Craft
2. Think! About Your Work - ongoing critical appraisal of every decision
3. You Have Agency
4. be responsible - Provide Options, Don't make Lame Excuses
5. avoid software rot/ technical debt - Don't live with broken windows, and avoid collateral damage
6. Be a catalyst for change - start-up fatigue
7. remember the Big Picture
8. Make Quality a Requirements Issue
9. Invest Regularly in your Knowledge Portfolio
   1.  Learn at least one new language every year
   2.  Read a technical book each month
   3.  Read non-technical books, too
   4.  Take classes
   5.  Participate in local user groups and meetups
   6.  Experiment with different environments
   7.  Stay current
10. Critically Analyze what you read and hear - Be like water
    1.  Ask the "Five Whys"
    2.  Who does this benefit?
    3.  What's the context?
    4.  When r Where would this work?
    5.  Why is this a problem?
11. English is just another Programming language
    1.  Know your audience
    2.  Know what you want to say
    3.  Choose your moment
    4.  Choose a style
    5.  Make it look good
    6.  Involve your audience
    7.  Be a listener
    8.  Get back to people
    9.  keep code and Documentation together.
12. It's both what you say and the way you say it
13. Build documentation in, don't bolt it on
14. Good design is easier to change than bad design
    1.  ETC principle (Easier to Change)
15. DRY - Don't repeat yourself
    1.  Duplication in Code
    2.  Duplication in Documentation
    3.  Representational Duplication (Internal/Exernal APIs)
    4.  Interdeveloper duplication
16. Make it easy to reuse
17. Orthogonality - Eliminate effects between unrelated things (Gain productivity & Reduce Risk)
    1.  Coding
        1.  Keep your code decoupled
        2.  Avoid global data
        3.  Avoid similar functions
    2.  Testing
    3.  Documentation
    4.  Living with Orthogonality
18. There are no final decisions
19. Forgo following Fads
20. Use tracer bullets to find the target (MVP-minimal viable product)
    1.  Users get to see something working early
    2.  Developers build a structure to work in
    3.  You have an integration platform
    4.  You have something to demonstrate
    5.  You have a better feel for progress
21. Prototype to learn; ignore correctness, completeness, robustness, style
22. Program close to the problem domain
23. Estimate to avoid surprises
    1.  Where dp estimates come from?
        1.  Understand what's being asked
        2.  Build a model of the system
        3.  break the model into components
        4.  give each parameter a value
        5.  calculate the answers
        6.  keep track of your estimating prowess
    2.  Estimating project schedules
        1.  PERT (Program Evaluation Review Technique) - optimistic/pessimistic scenario
        2.  Check requirements
        3.  Analyze risk (and prioritize riskiest items earlier)
        4.  Design, implement, integrate
        5.  Validate with the users
24. Iterate the schedule with the code
25. Keep knowledge in plain text
    1.  insurance against obsolescence
    2.  leverage existing tools
    3.  easier testing
26. Use the power of command shells
    1.  Set color themes
    2.  configuring a prompt - shortened current directory name, version control status, time
    3.  aliases and shell functions - shortcut repeating task, add prompt to rm
    4.  command completion - configure shell to recognize the tab shortcuts
27. Achieve editor fluency
    1.  When editing text, move and make selections by character, word, line, and paragraph
    2.  When editing code, move by various syntactic units (matching delimiters, functions, modules, …).
    3.  Reindent code following changes.
    4.  Comment and uncomment blocks of code with a single command.
    5.  Undo and redo changes.
    6.  Split the editor window into multiple panels, and navigate between them.
    7.  Navigate to a particular line number.
    8.  Sort selected lines.
    9.  Search for both strings and regular expressions, and repeat previous searches.
    10. Temporarily create multiple cursors based on a selection or on a pattern match, and edit the text at each in parallel.
    11. Display compilation errors in the current project.
    12. Run the current project’s tests.
28. Always use version control
    1. all user preferences and dotfiles
    2. editor configuration
    3. list of software installed using homebrew
    4. the ansible script used to configure apps
    5. all current projects
29. Fix the problem, not the blame
30. Don't panic
31. Failing test before fixing code
32. Read the damn error message
33. "Select" isn't broken - if you see hoof prints, think horses—not zebras
34. Don't assume it - prove it
35. Learn a text manipulation language - awk; sek; python; ruby
36. You can't write perfect software
37. Design with Contracts (revise needed*)
    1.  Preconditions - what must be true in order for the routine to be called
    2.  Postconditions - what the routine is guaranteed to do
    3.  class invariants
    4.  DBC and Test-Driven Development - unit testing, test-driven development (TDD), property-based testing, or defensive programming
38. Crash early
39. Use assertion to prevent the impossible
40. Finish what you start
41. Act locally
42. Take small steps - always
43. Avoid fortune-telling
44. Decoupled code is easier to change
45. Tell, don't ask
46. Don't chain method calls
47. Avoid global data
48. If it's important enough to be global, wrap it in an API
49. Programming is about code, but programs are about data
50. Don't hoard state; pass it around
51. Don't pay inheritance tax
52. Prefer interfaces to express polymorphism
53. Delegate to services; has-A trumps is-A
54. Use mixins to share functionality
55. Parameterize your app using external configuration
56. Analyze workflow to improve concurrency
57. Shared state is incorrect state
58. Random failures are often concurrency issues
59. Use actors for concurrency without shared state
60. Use blackboards to coordinate workflow
61. Listen to your inner lizard
62. Don't program by coincidence
63. Estimate the order of your algorithms
64. Test your estimates
65. Refactor early, refactor often
66. Testing is not about finding bugs
67. A test is the first user of your code
68. Build end-to-end, not top-down or bottom-up
69. Design to test
70. Test your software, or your users will
71. Use property-based tests to validate your assumptions
72. Keep it simple and minimize attack surfaces
73. Apply security patches quickly
74. Name well; rename when needed
75. No one knows exactly what they want
76. Programmers help people understood what they want
77. Requirements are learned in a feedback loop
78. Work with a user to think like a user
79. Policy is metadata
80. Use a project glossary
81. Don't think outside the box - Find the box
82. Don't go into the code alone
83. Agile is not a noun; Agile is how you do things
84. Maintain small, stable teams
85. Schedule it to make it happen
86. Organize fully functional teams
87. Do what works, not what's fashionable
88. Deliver when users need it
89. Use version control to drive builds, tests, and releases
90. Test early, test often, test automatically
91. Coding ain't done 'til all the tests run
92. Use saboteurs to test your testing
93. Test state coverage, not code coverage
94. Find bugs once
95. Don't use manual procedures
96. Delight users, don't just deliver code
97. Sign your work
98. First, do no harm
99. Don't enable scumbags
100. It's your life. Share it. Celebrate it. Build it. AND HAVE FUN!

## Knowledge portfolios
1. Serious investors *invest regularly* - as a habit.
2. *Diversification* is the key to long-term success. - invest even in non-technical areas
3. Smart investors *balance their portfolios* between conservative and high-risk, high-reward investments.
4. Investors try to buy low and sell high for maximum return. - like undervalued stock, learning new tech may have it returns.
5. Portfolios should be reviewed and rebalanced periodically - check on the "to-do" list

## TPP: Recommendation
1. functional programming paradigm
2. object oriented
3. reactive
4. [The OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification)
5. look for API documentation tool
6. Read
   1.   The Mythical Man- Month: Essays on Software Engineering [Bro96]
   2.   Peopleware: Productive Projects and Teams [DL13].
   3.   (additional) Dinosaur Brains: Dealing with All Those Impossible People at Work [BR89]
7. Get
   1. Post-it notes
8. Learn
   1. Powershell? Bash?