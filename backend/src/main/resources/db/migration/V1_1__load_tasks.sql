insert into task (id, lang, title, description, code)
values (1,
        'JAVA',
        'Первое задание',
        'Исправь ошибки в коде',
        'function String get(String val) {\n\treturn "sss"\n}')
on conflict(id) do update set lang        = excluded.lang,
                              title       = excluded.title,
                              description = excluded.description,
                              code        = excluded.code;
