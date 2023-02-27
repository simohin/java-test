package com.github.simokhin.java.test.backend.dto

import com.fasterxml.jackson.annotation.JsonProperty

data class RegisterRequestDto(
    @param:JsonProperty
    val name: String
)
