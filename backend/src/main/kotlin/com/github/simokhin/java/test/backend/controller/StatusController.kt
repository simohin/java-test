package com.github.simokhin.java.test.backend.controller

import com.github.simokhin.java.test.backend.dto.StatusDto
import com.github.simokhin.java.test.backend.dto.StatusName
import com.github.simokhin.java.test.backend.dto.enums.TaskLang
import com.github.simokhin.java.test.backend.service.SolutionService
import org.springframework.web.bind.annotation.CookieValue
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.UUID

@RestController
@RequestMapping("status")
@CrossOrigin(origins = ["http://localhost:3000"], allowCredentials = "true")
class StatusController(
    private val solutionService: SolutionService
) {

    var status = StatusDto(StatusName.NOT_STARTED, 0)

    @GetMapping("{lang}")
    fun status(
        @CookieValue("USER_ID") userId: UUID,
        @PathVariable("lang") lang: String,
    ) = solutionService.getStatus(TaskLang.of(lang), userId)
}
