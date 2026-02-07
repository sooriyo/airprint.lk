package com.jetbrains.kmpapp

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import com.jetbrains.kmpapp.screens.DashboardScreen
import com.jetbrains.kmpapp.theme.KmpAppColors
import com.jetbrains.kmpapp.theme.KmpAppTypography

@Composable
fun App() {
    MaterialTheme {
        Surface(color = KmpAppColors.LightCardBackground) {
            DashboardScreen()
        }
    }
}
