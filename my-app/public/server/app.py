"""
Authors: Madelyn Leon Carangui and Daniel Baldeo-Thorne

Date: April, 30, 2022

Description: Basic Backend for Language Translation Website
"""

import json
import random
import googletrans
from googletrans import Translator
from flask import Flask,request

app = Flask(__name__)



#opening file of most common nouns in the enlgish language and adding them to wordbase list
noun_file = open("nouns.txt", "r")#open the file in read mode
content = noun_file.read()
wordbase = content.split()
noun_file.close()


translator = Translator()

#TASK ROUTES
@app.route("/language/")
def main():
    """Home route"""
    return json.dumps({"Helloo":"Worlddd!!"})

@app.route("/language/convert/" , methods = ["POST"])
def get_languages():
    """Gets the language from user"""
    body = json.loads(request.data) #returns a dictionary {k:v}
    lang1 = body.get("lang1")
    lang2 = body.get("lang2")
    num= body.get("word_num")

    result = generate_words(lang1,lang2,num)

    return json.dumps(result),200



#pick a random from wordbase - import rand
#and put these random words into an array

def generate_words(lang1,lang2,num):
    """Picks a random NUM words from the wordbase
        and places them into an array"""

    #generate a sample of size NUM from wordbase
    word_sample = random.sample(wordbase, num, counts=None)
    
    #convert word_sample to user language 1 and store in list French
    #convert word_sample to user language 2 and store in list Dutch
    #Language one will be the flashcard and Language two is your answer

    words = convert(word_sample, lang2)
    answers = convert(word_sample, lang1)

    #"Answers" are the words the user knows in their native language (lang2)
    #"Words" are the words in the language the user is trying to learn (lang1)

    return {"Word": words,"Answers": answers}

    
def convert(word_sample,language):
    """Converts each word in word_sample to respective langauge
        and returns the list of new words"""
        
    converted_words_obj = translator.translate(word_sample, dest=language)#list of objects
    
    converted_words = []

    for object in converted_words_obj:
        converted_words.append(object.text)

    return converted_words



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)