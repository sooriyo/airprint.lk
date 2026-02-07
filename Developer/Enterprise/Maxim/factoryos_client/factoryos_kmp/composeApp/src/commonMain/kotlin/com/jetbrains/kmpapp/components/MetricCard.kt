package com.jetbrains.kmpapp.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.jetbrains.kmpapp.theme.KmpAppColors
import com.jetbrains.kmpapp.theme.KmpAppTypography

@Composable
fun MetricCard(
    label: String,
    value: String,
    subtext: String = "",
    isVariationPositive: Boolean = true,
    modifier: Modifier = Modifier
) {
    Box(
        modifier = modifier
            .shadow(
                elevation = 4.dp,
                shape = RoundedCornerShape(8.dp),
                spotColor = Color.Black.copy(alpha = 0.25f)
            )
            .background(
                color = KmpAppColors.CardBackground,
                shape = RoundedCornerShape(8.dp)
            )
            .padding(10.dp)
    ) {
        Column {
            Text(text = label, style = KmpAppTypography.MetricLabelStyle)
            Spacer(modifier = Modifier.height(3.dp))
            Text(text = value, style = KmpAppTypography.MetricValueSmallStyle)
            if (subtext.isNotEmpty()) {
                Text(
                    text = subtext,
                    style = KmpAppTypography.MetricLabelStyle.copy(
                        fontSize = 11.sp,
                        color = KmpAppColors.TextSecondary,
                        fontWeight = FontWeight.Normal
                    )
                )
            }
        }
    }
}
