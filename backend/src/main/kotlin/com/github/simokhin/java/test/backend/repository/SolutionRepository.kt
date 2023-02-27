package com.github.simokhin.java.test.backend.repository

import com.github.simokhin.java.test.backend.dto.enums.TaskLang
import com.github.simokhin.java.test.backend.entity.Solution
import com.github.simokhin.java.test.backend.entity.SolutionId
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface SolutionRepository : JpaRepository<Solution, SolutionId> {
    @Query(
        "select count(*) from Solution s join Task t where s.id.participantId = :participantId and t.lang = :lang",
    )
    fun countByUserIdAndLang(participantId: UUID, lang: TaskLang): Int
}
