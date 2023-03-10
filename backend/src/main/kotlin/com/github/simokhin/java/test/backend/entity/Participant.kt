package com.github.simokhin.java.test.backend.entity

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.util.UUID

@Entity
@Table(name = "participant")
data class Participant(
    @Id
    var id: UUID,
    var name: String
)
