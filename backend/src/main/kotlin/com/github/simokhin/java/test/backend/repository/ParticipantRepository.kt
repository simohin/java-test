package com.github.simokhin.java.test.backend.repository

import com.github.simokhin.java.test.backend.entity.Participant
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface ParticipantRepository : JpaRepository<Participant, UUID>
