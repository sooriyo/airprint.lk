package com.jetbrains.kmpapp.theme

import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp

object KmpAppTypography {
    val HeaderStyle = TextStyle(
        fontSize = 12.sp,
        fontWeight = FontWeight.Bold,
        color = androidx.compose.ui.graphics.Color.White
    )

    val MetricLabelStyle = TextStyle(
        fontSize = 9.sp,
        fontWeight = FontWeight.Bold,
        color = KmpAppColors.TextSecondary,
        letterSpacing = 0.5.sp
    )

    val MetricValueLargeStyle = TextStyle(
        fontSize = 36.sp,
        fontWeight = FontWeight.Bold,
        color = KmpAppColors.TextPrimary
    )

    val MetricValueSmallStyle = TextStyle(
        fontSize = 24.sp,
        fontWeight = FontWeight.Bold,
        color = KmpAppColors.TextPrimary
    )

    val PercentageStyle = TextStyle(
        fontSize = 18.sp,
        fontWeight = FontWeight.Bold,
        color = KmpAppColors.TextPrimary
    )

    val ButtonText = TextStyle(
        fontSize = 14.sp,
        fontWeight = FontWeight.Bold
    )

    val BodySmall = TextStyle(
        fontSize = 10.sp,
        color = KmpAppColors.TextPrimary
    )

    val CardTitle = TextStyle(
        fontSize = 18.sp,
        fontWeight = FontWeight.Bold,
        color = KmpAppColors.TextPrimary
    )

    val CardSubtitle = TextStyle(
        fontSize = 11.sp,
        color = KmpAppColors.TextPrimary
    )
}
