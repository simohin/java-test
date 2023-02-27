package com.github.simokhin.java.test.backend.dto

import com.fasterxml.jackson.annotation.JsonProperty

data class CheckSolutionResponseDto(
    @param:JsonProperty
    val success: Boolean,
)
