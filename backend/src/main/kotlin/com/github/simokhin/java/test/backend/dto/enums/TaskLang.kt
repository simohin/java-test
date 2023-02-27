package com.github.simokhin.java.test.backend.dto.enums

enum class TaskLang {
    JAVA;

    companion object {
        fun of(value: String) = values().firstOrNull { value.uppercase() == it.name }
            ?: throw NoSuchElementException("No ${TaskLang::class.simpleName} of $value")
    }
}
