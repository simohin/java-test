package com.github.simokhin.java.test.backend.dto

import com.fasterxml.jackson.annotation.JsonProperty

data class CheckSolutionRequestDto(
    @param:JsonProperty
    val code: String,
)
