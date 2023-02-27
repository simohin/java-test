package com.github.simokhin.java.test.backend.service

import com.github.simokhin.java.test.backend.dto.TaskDto
import com.github.simokhin.java.test.backend.dto.enums.TaskLang
import com.github.simokhin.java.test.backend.entity.Task
import com.github.simokhin.java.test.backend.repository.TaskRepository
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class TaskService(
    private val taskRepository: TaskRepository,
    private val solutionService: SolutionService
) {
    fun find(id: Int, lang: TaskLang, userId: UUID): TaskDto = with(
        taskRepository.findById(id)
            .orElseThrow()
    ) {
        toDto(
            taskRepository.countByLang(lang),
            solutionService.checkSolved(id, userId)
        )
    }

    private fun Task.toDto(total: Int, solved: Boolean) = TaskDto(
        id,
        lang,
        title,
        description,
        code,
        total,
        solved
    )
}
