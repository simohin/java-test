package com.github.simokhin.java.test.backend.service

import com.github.simokhin.java.test.backend.dto.StatusDto
import com.github.simokhin.java.test.backend.dto.StatusName
import com.github.simokhin.java.test.backend.dto.enums.TaskLang
import com.github.simokhin.java.test.backend.entity.Solution
import com.github.simokhin.java.test.backend.entity.SolutionId
import com.github.simokhin.java.test.backend.repository.SolutionRepository
import com.github.simokhin.java.test.backend.repository.TaskRepository
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class SolutionService(
    private val solutionRepository: SolutionRepository,
    private val taskRepository: TaskRepository,
) {
    fun getStatus(lang: TaskLang, userId: UUID): StatusDto {
        val total = taskRepository.countByLang(lang)
        val solved = solutionRepository.countByUserIdAndLang(userId, lang)
        val progress = solved.div(total).times(100)
        return StatusDto(StatusName.ofProgress(progress), progress)
    }

    fun check(taskId: Int, lang: TaskLang, userId: UUID, code: String): Boolean {
        val id = SolutionId(userId, taskId)
        val solution = solutionRepository.findById(id)
            .orElse(
                solutionRepository.save(
                    Solution(
                        id,
                        code,
                        false
                    )
                )
            )
        solution.solved = checkSolution(code, lang)
        return solutionRepository.save(solution).solved
    }

    fun checkSolved(taskId: Int, userId: UUID): Boolean =
        solutionRepository.findById(SolutionId(userId, taskId))
            .map { it.solved }
            .orElse(false)

    private fun checkSolution(code: String, lang: TaskLang): Boolean = true
}
