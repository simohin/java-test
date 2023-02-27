package com.github.simokhin.java.test.backend.entity

import jakarta.persistence.Column
import jakarta.persistence.Embeddable
import jakarta.persistence.EmbeddedId
import jakarta.persistence.Entity
import jakarta.persistence.Table
import java.io.Serializable
import java.util.UUID

@Entity
@Table(name = "solution")
data class Solution(
    @EmbeddedId
    var id: SolutionId,
    var solution: String,
    var solved: Boolean
)

@Embeddable
data class SolutionId(
    @Column(name = "participant_id")
    var participantId: UUID,
    @Column(name = "task_id")
    var taskId: Int
) : Serializable
