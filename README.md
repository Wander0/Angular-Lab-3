# Angular-Lab-3
В данной лабораторной работе я создал модель биологической иерархии. 
То есть, есть 4 домена (самый верхний уровень группировки): Бактерии, Археи, Эукариоты и Вирусы. 
Эукариоты я пометил как абстрактный класс, так как туда входят организмы, которые очень сильно отличаются друг от друга. 
В домен Эукариотов входят царства Животных, Растений, Грибов, Хромистов и Протистов. 
Тут я только использовал царство Животных как наследника для абстрактного класса Эукариотов. 
Создал интерфейс IRaphinae. Дронтовые (Raphinae) - вымершее подсемейство птиц, про которого известно не так много. 
Большинство свойств у всех классов, абстрактного класса и интерфейса общие.
У Вирусов есть свое protected свойство host, так как в отличие от других доменов, они обитают в телах других живых организмов. 
Также создал для всех классов конструкторы и методы.
