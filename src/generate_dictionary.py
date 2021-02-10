questions = """1. Planeo las tareas cuidadosamente.  4 3  2 1
2. Hago las cosas sin pensar.  1 2  3 4 
3. Tomo mis decisiones rápidamente.  1 2  3 4 
4. Soy despreocupado.  1 2  3 4 
5. No presto atención.  1 2  3 4 
6. Me bullen las ideas en la cabeza.  1 2  3 4 
7. Planeo los viajes con mucha antelación.  4 3  2 1
8. Tengo auto-control.  4 3  2 1 
9. Me concentro fácilmente  4 3  2 1 
10. Ahorro sistemáticamente.  4 3  2 1
11. Me pongo inquieto cuando tengo que permanecer mucho tiempo sentado.   1   2   3   4
12. Pienso las cosas con cuidado.  4 3  2 1
13. Busco tener un trabajo fijo.  4 3  2 1
14. Digo las cosas sin pensarlas.  1 2  3 4
15. Me gusta resolver asuntos complicados.  4 3  2 1
16. Suelo cambiar de trabajo.  1 2  3 4 
17. Actúo por impulsos.  1 2  3 4 
18. Me aburro fácilmente cuando tengo que pensar mucho en una cosa.   1   2   3   4
19. Actúo de improviso.  1 2  3 4 
20. Soy una persona de ideas firmes.  4 3  2 1 
21. Me mudo de vivienda con facilidad.  1 2  3 4 
22. Compro impulsivamente.  1 2  3 4 
23. No puedo pensar en dos cosas a la vez.  1 2  3 4 
24. Cambio de aficiones.  1 2  3 4 
25. Me gasto más de lo que gano.  1 2  3 4 
26. Cuando estoy pensando en una cosa me distraigo con otros pensamientos.   1   2   3   4 
27. Estoy más interesado en el presente que en el futuro.  1 2  3 4
28. Me impaciento en las clases y conferencias.
29. Me gustan los puzzles.
30. Hago planes para el futuro."""

questions2="""1 I plan tasks carefully. 
2 I do things without thinking. 
3 I make-up my mind quickly. 
4 I am happy-go-lucky. 
5 I don’t “pay attention.” 
6 I have “racing” thoughts. 
7 I plan trips well ahead of time. 
8 I am self controlled. 
9 I concentrate easily. 
10 I save regularly. 
11 I “squirm” at plays or lectures. 
12 I am a careful thinker. 
13 I plan for job security. 
14 I say things without thinking. 
15 I like to think about complex problems. 
16 I change jobs. 
17 I act “on impulse.” 
18 I get easily bored when solving thought problems. 
19 I act on the spur of the moment. 
20 I am a steady thinker. 
21 I change residences. 
22 I buy things on impulse. 
23 I can only think about one thing at a time. 
24 I change hobbies. 
25 I spend or charge more than I earn. 
26 I often have extraneous thoughts when thinking. 
27 I am more interested in the present than the future.
28 I am restless at the theater or lectures. 
29 I like puzzles. 
30 I am future oriented."""


if __name__ == "__main__":
    questions = questions2.split('\n')
    for i, question in enumerate(questions):
        formated_question = question[question.find('I'):].strip()
        formated_question = f'\"personalityTestQuestion{i + 1}\" : \"{formated_question}\",'
        print(formated_question)