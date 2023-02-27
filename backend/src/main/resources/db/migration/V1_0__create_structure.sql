create table if not exists participant
(
    id   uuid primary key,
    name text
);

create table if not exists task
(
    id          int primary key,
    lang        text,
    title       text,
    description text,
    code        text
);

create table if not exists solution
(
    participant_id  uuid references participant (id),
    task_id  int references task (id),
    solution text,
    solved   boolean default false,
    primary key (participant_id, task_id)
)
