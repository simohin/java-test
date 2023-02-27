package com.github.simokhin.java.test.backend.service

import com.github.simokhin.java.test.backend.entity.Participant
import com.github.simokhin.java.test.backend.repository.ParticipantRepository
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class ParticipantService(
    private val participantRepository: ParticipantRepository
) {

    fun register(name: String): UUID {
        val participant = Participant(UUID.randomUUID(), name)
        val saved = participantRepository.save(participant)
        return saved.id
    }
}
