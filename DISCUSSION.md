# If only we had world enough and time...

- I definitely would have spent more time on styling, but I probably could have kept workshopping that for hours, so ¯\_(ツ)_/¯
- Next I might have worked on some kind of live API fetch, only getting db results that matched the user's input instead of getting all the results up front. It doesn't matter with just a handful of test records like this, but at the scale I imagine this having in production, it would propably be pretty problematic
- I probably would have split up the `page.tsx` file into more components, including a data fetching hook, to keep everything nice and readable
- I don't love that the postgres credentials are A) default, totally guessable, and B) checked into source control. This is all sort of pretend because we're just trying to get a test db up and going, but it should be done with ENV variables
- Later, tests? I would definitely like an integration test of the search field and whether it returns the expected results
- I always want some kind of type-checking, linting, and formatting in a pre-commit hook, and, ideally, as a gate to merge in a GitHub Action, so we can enforce some minimum coding standards
