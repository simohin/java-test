package com.github.simokhin.java.test.backend.repository

import com.github.simokhin.java.test.backend.dto.enums.TaskLang
import com.github.simokhin.java.test.backend.entity.Task
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface TaskRepository : JpaRepository<Task, Int> {
    fun countByLang(lang: TaskLang): Int
}
