package com.github.simokhin.java.test.backend.entity

import com.github.simokhin.java.test.backend.dto.enums.TaskLang
import jakarta.persistence.Entity
import jakarta.persistence.EnumType
import jakarta.persistence.Enumerated
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "task")
data class Task(
    @Id
    var id: Int,
    @Enumerated(EnumType.STRING)
    var lang: TaskLang,
    var title: String,
    var description: String,
    var code: String
)
