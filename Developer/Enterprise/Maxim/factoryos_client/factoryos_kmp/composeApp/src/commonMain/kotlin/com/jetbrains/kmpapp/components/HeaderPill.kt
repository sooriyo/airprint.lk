package com.jetbrains.kmpapp.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.jetbrains.kmpapp.theme.KmpAppTypography

@Composable
fun HeaderPill(text: String) {
    Box(
        modifier = Modifier
            .background(
                color = Color(0xFF2D2D2D),
                shape = RoundedCornerShape(20.dp)
            )
            .padding(horizontal = 16.dp, vertical = 8.dp)
    ) {
        Text(
            text = text,
            style = KmpAppTypography.HeaderStyle
        )
    }
}
