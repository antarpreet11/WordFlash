# [WordFlash](https://devpost.com/software/wordflash)
**WordFlash provides language enthusiasts the practice they need to improve their language abilities by generating flashcards with words in their language of choice.**

### Inspiration
We thought of this project when one of our members told us that they are trying to learn French. Another team member suggested that they try to learn new words. We found that an obtainable way to build one's vocabulary is through testing your knowledge with the use of flashcards.

### What it does
Our website generates flashcards with random words in the language the user is learning; the user can choose how many words they want to generate. On the back of the flashcard, there is a translation of the word in the user's native language.

### How we built it
We used a Flask backend and a React frontend. On the backend, we found an open-source list of words that we could use. We created methods that would convert the words (originally in English) to the languages the user choose using google-translate. To generate the number of words that the user chooses, we used the random module to generate a sample from the list of words. In the front-end, the user has the ability to enter two languages. Then a POST request to generated to fetch data from the backend. This fetched data is then displayed as flashcards on the frontend.

### Challenges we ran into
The hardest part of this was connecting the back and front end. The members that worked on the backend were not familiar enough with JavaScript. So the backend was built using flask instead which was difficult to connect to the React front-end. We ended up succeeding in it eventually.

### Accomplishments that we're proud of
We are proud of being able to make a functional backend and frontend since two of us are first-time hackers. We are also proud of being able to make use of our resources; when we had problems to debug, it got easier and easier to find the solution cause we knew where and how to look.

### What we learned
We learned how to create a Flask backend. We also learned to make lots of use of API which we had not had experience with. We got more experience using VScode and Github which is not something we were comfortable doing before. We also learned how to connect any backend API to a React or JS frontend. Overall, this hackathon was a great learning experience.

### What's next for WordFlash
We plan to finish connecting the backend and frontend. Additionally, we thought it would be useful to add more words to the list. Currently, our backend is not using a database; it's using a file. We plan to store the list of words in a database to add more everyday words for language learners to study.
