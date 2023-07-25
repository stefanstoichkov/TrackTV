package com.sorsix.backend.domain.friendship

import com.sorsix.backend.domain.User
import jakarta.persistence.*

@Entity
@Table(name = "friend_request")
data class FriendRequest(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @ManyToOne
    @JoinColumn(name = "sender_id")
    val sender_id: User = User(),

    @ManyToOne
    @JoinColumn(name = "reciever_id")
    val reciever_id: User = User()
)