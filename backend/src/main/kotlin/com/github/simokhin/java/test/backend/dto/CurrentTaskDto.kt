package com.github.simokhin.java.test.backend.dto

import com.fasterxml.jackson.annotation.JsonProperty

data class CurrentTaskDto(
    @param:JsonProperty
    val id: Int
)
