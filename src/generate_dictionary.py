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


if __name__ == "__main__":
    questions = questions.split('\n')
    for i, question in enumerate(questions):
        formated_question = question.split('.')[1].strip()
        formated_question = f'\"personalityTestQuestion{i + 1}\" : \"{formated_question}.\",'
        print(formated_question)