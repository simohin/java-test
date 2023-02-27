package com.github.simokhin.java.test.backend.dto

import com.fasterxml.jackson.annotation.JsonProperty
import com.github.simokhin.java.test.backend.dto.enums.TaskLang

data class TaskDto(
    @param:JsonProperty
    val id: Int,
    @param:JsonProperty
    val lang: TaskLang,
    @param:JsonProperty
    val title: String,
    @param:JsonProperty
    val description: String,
    @param:JsonProperty
    val code: String,
    @param:JsonProperty
    val total: Int,
    @param:JsonProperty
    val solved: Boolean,
)
