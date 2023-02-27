package com.github.simokhin.java.test.backend.dto

import com.fasterxml.jackson.annotation.JsonProperty

data class StatusDto(
    @param:JsonProperty
    val name: StatusName,
    @param:JsonProperty
    val progress: Int? = null
)

enum class StatusName {
    NOT_STARTED,
    IN_PROGRESS,
    DONE;

    companion object {
        fun ofProgress(progress: Int): StatusName = when (progress) {
            0 -> StatusName.NOT_STARTED

            100 -> StatusName.IN_PROGRESS

            else -> StatusName.DONE
        }
    }
}
