package com.github.simokhin.java.test.backend.controller

import com.github.simokhin.java.test.backend.dto.RegisterRequestDto
import com.github.simokhin.java.test.backend.service.ParticipantService
import jakarta.servlet.http.HttpServletResponse
import org.springframework.http.HttpHeaders
import org.springframework.http.MediaType
import org.springframework.http.ResponseCookie
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.time.Duration
import java.util.UUID

@RestController
@RequestMapping("registration")
@CrossOrigin(origins = ["http://localhost:3000"], exposedHeaders = [HttpHeaders.SET_COOKIE], allowCredentials = "true")
class RegistrationController(
    private val participantService: ParticipantService
) {

    @PostMapping(
        produces = [MediaType.APPLICATION_JSON_VALUE],
        consumes = [MediaType.APPLICATION_JSON_VALUE],
    )
    fun register(response: HttpServletResponse, @RequestBody requestDto: RegisterRequestDto): ResponseEntity<Any> =
        ResponseEntity
            .status(200)
            .header(
                HttpHeaders.SET_COOKIE,
                buildCookie(
                    participantService.register(requestDto.name)
                )
            )
            .build()

    private fun buildCookie(userId: UUID) = ResponseCookie.from(
        "USER_ID",
        userId.toString()
    )
        .secure(true)
        .httpOnly(false)
        .sameSite("none")
        .maxAge(Duration.ofDays(1))
        .build()
        .toString()
}
