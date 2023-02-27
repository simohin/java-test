package com.github.simokhin.java.test.backend.controller

import com.github.simokhin.java.test.backend.dto.CheckSolutionRequestDto
import com.github.simokhin.java.test.backend.dto.CheckSolutionResponseDto
import com.github.simokhin.java.test.backend.dto.CurrentTaskDto
import com.github.simokhin.java.test.backend.dto.StatusDto
import com.github.simokhin.java.test.backend.dto.StatusName
import com.github.simokhin.java.test.backend.dto.enums.TaskLang
import com.github.simokhin.java.test.backend.service.SolutionService
import com.github.simokhin.java.test.backend.service.TaskService
import org.springframework.web.bind.annotation.CookieValue
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController
import java.util.UUID

@RestController
@RequestMapping("tasks")
@CrossOrigin(
    methods = [RequestMethod.GET, RequestMethod.POST],
    origins = ["http://localhost:3000"],
    allowCredentials = "true"
)
class TaskController(
    private val statusController: StatusController,
    private val taskService: TaskService,
    private val solutionService: SolutionService
) {

    @GetMapping
    fun current(@CookieValue("USER_ID") userId: String) = CurrentTaskDto(1)

    @GetMapping("{lang}/{id}")
    fun get(
        @CookieValue("USER_ID") userId: UUID,
        @PathVariable("id") id: Int,
        @PathVariable("lang") lang: String,
    ) = taskService.find(id, TaskLang.of(lang), userId)

    @PostMapping("{lang}/{id}")
    fun process(
        @CookieValue("USER_ID") userId: UUID,
        @PathVariable("id") id: Int,
        @PathVariable("lang") lang: String,
        @RequestBody dto: CheckSolutionRequestDto
    ): CheckSolutionResponseDto {
        val solved: Boolean = solutionService.check(id, TaskLang.of(lang), userId, dto.code)
        statusController.status = StatusDto(StatusName.IN_PROGRESS, statusController.status.progress?.plus(1) ?: 1)
        return CheckSolutionResponseDto(solved)
    }
}
